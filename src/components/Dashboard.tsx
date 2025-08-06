import React, { useState, useEffect } from 'react';
import { CreditCard, Clock, CheckCircle, XCircle, Eye, Download, Filter, Calendar, TrendingUp, DollarSign, FileText, User } from 'lucide-react';
import { getLoanData } from '../services/leadServices';

interface LoanApplication {
  id: number; // Serial number
  leadId: string;
  loanAmount: number;
  loanPurpose: string;
  loanStatus: string;
  createdAt: string;
  tenure: number;
  interestRate?: number;
  emi?: number;
  approvedDate?: string;
}

interface DashboardProps {
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [userData, setUserData] = useState<any>(null);
  const [loanApplications, setLoanApplications] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get user data from localStorage
    const token = localStorage.getItem('token');
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else if (token) {
      // If only token exists, try to get user info from token or use fallback
      setUserData({ name: 'User' });
    }

    // Fetch loan data
    const fetchLoanData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (token) {
          const response = await getLoanData(token);
          
          // Transform API response to match our interface
          const transformedData: LoanApplication[] = response.data.loanData.map((loan: any, index: number) => ({
            id: index + 1, // Serial number starting from 1
            leadId: loan.leadId,
            loanAmount: loan.loanAmount,
            loanPurpose: loan.loanPurpose,
            loanStatus: loan.loanStatus,
            createdAt: loan.createdAt,
            tenure: loan.tenure,
            interestRate: loan.interestRate || 'Yet to approved',
            emi: loan.emi || 'Yet to approved',
            approvedDate: loan.approvedDate || 'Yet to approved'
          }));
          
          setLoanApplications(transformedData);
        }
      } catch (err) {
        setError('Failed to fetch loan data');
        console.error('Error fetching loan data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, []);


  const getStatusColor = (status: string) => {
    switch (status.toUpperCase()) {
      case 'APPROVED':
        return 'bg-green-900/30 text-green-400 border-green-500/30';
      case 'DISBURSED':
        return 'bg-blue-900/30 text-blue-400 border-blue-500/30';
      case 'REJECTED':
        return 'bg-red-900/30 text-red-400 border-red-500/30';
      case 'PENDING':
      default:
        return 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toUpperCase()) {
      case 'APPROVED':
        return <CheckCircle className="w-4 h-4" />;
      case 'DISBURSED':
        return <DollarSign className="w-4 h-4" />;
      case 'REJECTED':
        return <XCircle className="w-4 h-4" />;
      case 'PENDING':
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const filteredApplications = selectedFilter === 'all' 
    ? loanApplications 
    : loanApplications.filter(app => app.loanStatus.toLowerCase() === selectedFilter.toLowerCase());

  const stats = {
    total: loanApplications.length,
    approved: loanApplications.filter(app => app.loanStatus.toUpperCase() === 'APPROVED' || app.loanStatus.toUpperCase() === 'DISBURSED').length,
    pending: loanApplications.filter(app => app.loanStatus.toUpperCase() === 'PENDING').length,
    totalAmount: loanApplications
      .filter(app => app.loanStatus.toUpperCase() === 'APPROVED' || app.loanStatus.toUpperCase() === 'DISBURSED')
      .reduce((sum, app) => sum + app.loanAmount, 0)
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading loan data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-400 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-600/5 to-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {userData?.name || user?.fullName || 'User'}!</h1>
              <p className="text-gray-400">Here's your loan portfolio overview</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm"
              >
                <option value="all">All Applications</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="disbursed">Disbursed</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-900/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Applications</p>
                <p className="text-2xl font-bold text-white">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-900/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Approved Loans</p>
                <p className="text-2xl font-bold text-green-400">{stats.approved}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-lg flex items-center justify-center border border-green-500/30">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-900/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending Review</p>
                <p className="text-2xl font-bold text-yellow-400">{stats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-lg flex items-center justify-center border border-yellow-500/30">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-900/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Sanctioned</p>
                <p className="text-2xl font-bold text-purple-400">₹{(stats.totalAmount / 100000).toFixed(1)}L</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-gray-700/50">
            <h2 className="text-xl font-semibold text-white">Loan Application History</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Application ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Amount & Purpose
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    EMI Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                {filteredApplications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{application.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">₹{application.loanAmount.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">{application.loanPurpose}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(application.loanStatus)}`}>
                        {getStatusIcon(application.loanStatus)}
                        <span className="capitalize">{application.loanStatus.toLowerCase()}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(application.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {application.emi && typeof application.emi === 'number' ? (
                        <div>
                          <div className="text-sm text-white">₹{typeof application.emi === 'number' ? application.emi.toLocaleString() : application.emi}/month</div>
                          <div className="text-sm text-gray-400">{application.tenure} months @ {typeof application.interestRate === 'number' ? application.interestRate + '%' : application.interestRate}</div>
                        </div>
                      ) : (
                        <span className="text-gray-500">Yet to approved</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-400 hover:text-blue-300 p-1 rounded transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-400 hover:text-green-300 p-1 rounded transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:from-blue-900/40 hover:to-purple-900/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Apply for New Loan</h3>
                <p className="text-gray-400 text-sm">Get instant approval in 5 minutes</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:from-green-900/40 hover:to-emerald-900/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">EMI Calendar</h3>
                <p className="text-gray-400 text-sm">View upcoming payments</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:from-purple-900/40 hover:to-pink-900/40 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Profile Settings</h3>
                <p className="text-gray-400 text-sm">Update your information</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;