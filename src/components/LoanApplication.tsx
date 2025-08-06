import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, User, Home, Briefcase, CreditCard, Users, CheckCircle } from 'lucide-react';
import { submitLead } from '../services/leadServices'; // adjust path accordingly

interface LoanApplicationProps {
  user: any;
}

interface FormData {
  // Personal Information
  fullName: string;
  email: string;
  dateOfBirth: string;
  mobileNumber: string;
  alternateMobile: string;
  motherName: string;
  maritalStatus: string;
  spouseName: string;
  dependents: string;
  religion: string;
  
  // Address Information
  houseType: string;
  rentAmount: string;
  residenceAddress: string;
  residencePincode: string;
  residenceLandmark: string;
  stayingSince: string;
  permanentAddress: string;
  permanentPincode: string;
  permanentLandmark: string;
  
  // Employment Information
  totalExperience: string;
  currentCompanyExperience: string;
  designation: string;
  joiningDate: string;
  officeAddress: string;
  officePincode: string;
  officeMobile: string;
  officialEmail: string;
  workingSince: string;
  
  // Loan Information
  loanAmount: string;
  tenure: string;
  loanPurpose: string;
  
  // References
  reference1Name: string;
  reference1Mobile: string;
  reference1Address: string;
  reference1Pincode: string;
  reference2Name: string;
  reference2Mobile: string;
  reference2Address: string;
  reference2Pincode: string;
  
  // Existing Loans
  existingLoans: Array<{
    bankName: string;
    outstandingAmount: string;
    monthlyEMI: string;
  }>;
}

const LoanApplication: React.FC<LoanApplicationProps> = ({ user }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const [formData, setFormData] = useState<FormData>({
    fullName: user?.fullName || '',
    email: user?.email || '',
    dateOfBirth: '',
    mobileNumber: user?.mobile || '',
    alternateMobile: '',
    motherName: '',
    maritalStatus: '',
    spouseName: '',
    dependents: '',
    religion: '',
    houseType: '',
    rentAmount: '',
    residenceAddress: '',
    residencePincode: '',
    residenceLandmark: '',
    stayingSince: '',
    permanentAddress: '',
    permanentPincode: '',
    permanentLandmark: '',
    totalExperience: '',
    currentCompanyExperience: '',
    designation: '',
    joiningDate: '',
    officeAddress: '',
    officePincode: '',
    officeMobile: '',
    officialEmail: '',
    workingSince: '',
    loanAmount: '',
    tenure: '',
    loanPurpose: '',
    reference1Name: '',
    reference1Mobile: '',
    reference1Address: '',
    reference1Pincode: '',
    reference2Name: '',
    reference2Mobile: '',
    reference2Address: '',
    reference2Pincode: '',
    existingLoans: []
  });

  const validateStep = (step: number): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    switch (step) {
      case 1:
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
        else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) newErrors.mobileNumber = 'Invalid mobile number';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.motherName.trim()) newErrors.motherName = 'Mother\'s name is required';
        if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital status is required';
        if (formData.maritalStatus === 'married' && !formData.spouseName.trim()) {
          newErrors.spouseName = 'Spouse name is required for married applicants';
        }
        if (formData.alternateMobile && !/^[6-9]\d{9}$/.test(formData.alternateMobile)) {
          newErrors.alternateMobile = 'Invalid alternate mobile number';
        }
        break;
      case 2:
        if (!formData.houseType) newErrors.houseType = 'House type is required';
        if (formData.houseType === 'rented' && !formData.rentAmount.trim()) {
          newErrors.rentAmount = 'Rent amount is required for rented house';
        }
        if (!formData.residenceAddress.trim()) newErrors.residenceAddress = 'Residence address is required';
        if (!formData.residencePincode.trim()) newErrors.residencePincode = 'Pincode is required';
        else if (!/^\d{6}$/.test(formData.residencePincode)) newErrors.residencePincode = 'Invalid pincode (6 digits required)';
        if (!formData.stayingSince) newErrors.stayingSince = 'Staying since date is required';
        if (!formData.permanentAddress.trim()) newErrors.permanentAddress = 'Permanent address is required';
        if (!formData.permanentPincode.trim()) newErrors.permanentPincode = 'Permanent pincode is required';
        else if (!/^\d{6}$/.test(formData.permanentPincode)) newErrors.permanentPincode = 'Invalid permanent pincode (6 digits required)';
        break;
      case 3:
        if (!formData.totalExperience.trim()) newErrors.totalExperience = 'Total experience is required';
        else if (isNaN(Number(formData.totalExperience)) || Number(formData.totalExperience) < 0) {
          newErrors.totalExperience = 'Please enter valid experience in years';
        }
        if (!formData.currentCompanyExperience.trim()) newErrors.currentCompanyExperience = 'Current company experience is required';
        else if (isNaN(Number(formData.currentCompanyExperience)) || Number(formData.currentCompanyExperience) < 0) {
          newErrors.currentCompanyExperience = 'Please enter valid experience in years';
        }
        if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
        if (!formData.joiningDate) newErrors.joiningDate = 'Joining date is required';
        if (!formData.officeAddress.trim()) newErrors.officeAddress = 'Office address is required';
        if (!formData.officePincode.trim()) newErrors.officePincode = 'Office pincode is required';
        else if (!/^\d{6}$/.test(formData.officePincode)) newErrors.officePincode = 'Invalid office pincode (6 digits required)';
        if (!formData.officeMobile.trim()) newErrors.officeMobile = 'Office mobile is required';
        else if (!/^[6-9]\d{9}$/.test(formData.officeMobile)) newErrors.officeMobile = 'Invalid office mobile number';
        if (!formData.officialEmail.trim()) newErrors.officialEmail = 'Official email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.officialEmail)) newErrors.officialEmail = 'Invalid official email format';
        break;
      case 4:
        if (!formData.loanAmount.trim()) newErrors.loanAmount = 'Loan amount is required';
        else if (isNaN(Number(formData.loanAmount)) || Number(formData.loanAmount) < 100000) {
          newErrors.loanAmount = 'Minimum loan amount is ₹1,00,000';
        }
        if (!formData.tenure) newErrors.tenure = 'Tenure is required';
        if (!formData.loanPurpose.trim()) newErrors.loanPurpose = 'Loan purpose is required';
        break;
      case 5:
        if (!formData.reference1Name.trim()) newErrors.reference1Name = 'Reference 1 name is required';
        if (!formData.reference1Mobile.trim()) newErrors.reference1Mobile = 'Reference 1 mobile is required';
        else if (!/^[6-9]\d{9}$/.test(formData.reference1Mobile)) newErrors.reference1Mobile = 'Invalid reference 1 mobile number';
        if (!formData.reference1Address.trim()) newErrors.reference1Address = 'Reference 1 address is required';
        if (!formData.reference1Pincode.trim()) newErrors.reference1Pincode = 'Reference 1 pincode is required';
        else if (!/^\d{6}$/.test(formData.reference1Pincode)) newErrors.reference1Pincode = 'Invalid reference 1 pincode';
        if (!formData.reference2Name.trim()) newErrors.reference2Name = 'Reference 2 name is required';
        if (!formData.reference2Mobile.trim()) newErrors.reference2Mobile = 'Reference 2 mobile is required';
        else if (!/^[6-9]\d{9}$/.test(formData.reference2Mobile)) newErrors.reference2Mobile = 'Invalid reference 2 mobile number';
        if (!formData.reference2Address.trim()) newErrors.reference2Address = 'Reference 2 address is required';
        if (!formData.reference2Pincode.trim()) newErrors.reference2Pincode = 'Reference 2 pincode is required';
        else if (!/^\d{6}$/.test(formData.reference2Pincode)) newErrors.reference2Pincode = 'Invalid reference 2 pincode';
        // Validate that references are not the same
        if (formData.reference1Mobile === formData.reference2Mobile) {
          newErrors.reference2Mobile = 'Reference 2 mobile cannot be same as Reference 1';
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const steps = [
    { id: 1, title: 'Personal Info', icon: User },
    { id: 2, title: 'Address Details', icon: Home },
    { id: 3, title: 'Employment', icon: Briefcase },
    { id: 4, title: 'Loan Details', icon: CreditCard },
    { id: 5, title: 'References', icon: Users },
    { id: 6, title: 'Review', icon: CheckCircle }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addExistingLoan = () => {
    setFormData(prev => ({
      ...prev,
      existingLoans: [...prev.existingLoans, { bankName: '', outstandingAmount: '', monthlyEMI: '' }]
    }));
  };

  const updateExistingLoan = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      existingLoans: prev.existingLoans.map((loan, i) => 
        i === index ? { ...loan, [field]: value } : loan
      )
    }));
  };

  const removeExistingLoan = (index: number) => {
    setFormData(prev => ({
      ...prev,
      existingLoans: prev.existingLoans.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 6) {
      setCurrentStep(currentStep + 1);
      // Clear errors when moving to next step
      setErrors({});
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

const handleSubmit = async () => {
  // if (!validateStep(6)) return;

  setLoading(true);
  setApiError('');

  try {
    // Get token from localStorage
    const token = localStorage.getItem('token') || '';

    // Prepare payload as you already do
    const payload = {
      ...formData,
      mobileNumber: Number(formData.mobileNumber),
      alternateMobile: Number(formData.alternateMobile),
      residencePincode: formData.residencePincode,
      permanentPincode: formData.permanentPincode,
      totalExperience: Number(formData.totalExperience),
      currentCompanyExperience: Number(formData.currentCompanyExperience),
      officePincode: Number(formData.officePincode),
      officeMobile: Number(formData.officeMobile),
      loanAmount: Number(formData.loanAmount),
      tenure: Number(formData.tenure),
      loanStatus: 'PENDING',
      // Remove creditScoreShapShot since it's not defined in FormData interface
      reference1Mobile: Number(formData.reference1Mobile),
      reference1Pincode: formData.reference1Pincode,
      reference2Mobile: Number(formData.reference2Mobile),
      reference2Pincode: formData.reference2Pincode,
      existingLoans: formData.existingLoans.map((loan) => ({
        bankName: loan.bankName,
        outstandingAmount: Number(loan.outstandingAmount),
        monthlyEMI: Number(loan.monthlyEMI),
      })),
    };

    await submitLead(payload, token);

    alert('Loan application submitted successfully! We will review your application and get back to you soon.');
  } catch (error: any) {
    setApiError(error.response?.data?.message || 'Failed to submit loan application.');
  } finally {
    setLoading(false);
  }
};



  const renderError = (field: string) => {
    if (errors[field]) {
      return <p className="text-red-400 text-sm mt-1 font-medium">{errors[field]}</p>;
    }
    return null;
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Full Name (as per PAN)</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter your full name"
                  required
                />
                {renderError('fullName')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Personal Email ID</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter your email"
                  required
                />
                {renderError('email')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.dateOfBirth ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  required
                />
                {renderError('dateOfBirth')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.mobileNumber ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter mobile number"
                  maxLength={10}
                  required
                />
                {renderError('mobileNumber')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Alternate Mobile Number</label>
                <input
                  type="tel"
                  value={formData.alternateMobile}
                  onChange={(e) => handleInputChange('alternateMobile', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.alternateMobile ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter alternate mobile"
                />
                {renderError('alternateMobile')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Mother's Name</label>
                <input
                  type="text"
                  value={formData.motherName}
                  onChange={(e) => handleInputChange('motherName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.motherName ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter mother's name"
                />
                {renderError('motherName')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Marital Status</label>
                <select
                  value={formData.maritalStatus}
                  onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.maritalStatus ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="" className="text-gray-800">Select status</option>
                  <option value="single" className="text-gray-800">Single</option>
                  <option value="married" className="text-gray-800">Married</option>
                </select>
                {renderError('maritalStatus')}
              </div>
              {formData.maritalStatus === 'married' && (
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Spouse Name</label>
                  <input
                    type="text"
                    value={formData.spouseName}
                    onChange={(e) => handleInputChange('spouseName', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.spouseName ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Enter spouse name"
                  />
                  {renderError('spouseName')}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Number of Dependents</label>
                <input
                  type="number"
                  value={formData.dependents}
                  onChange={(e) => handleInputChange('dependents', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  placeholder="Enter number of dependents"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Address Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">House Type</label>
                <select
                  value={formData.houseType}
                  onChange={(e) => handleInputChange('houseType', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.houseType ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="" className="text-gray-800">Select type</option>
                  <option value="own" className="text-gray-800">Own</option>
                  <option value="rented" className="text-gray-800">Rented</option>
                </select>
                {renderError('houseType')}
              </div>
              {formData.houseType === 'rented' && (
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Monthly Rent Amount</label>
                  <input
                    type="number"
                    value={formData.rentAmount}
                    onChange={(e) => handleInputChange('rentAmount', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.rentAmount ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Enter rent amount"
                  />
                  {renderError('rentAmount')}
                </div>
              )}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-200 mb-2">Current Residence Address</label>
                <textarea
                  value={formData.residenceAddress}
                  onChange={(e) => handleInputChange('residenceAddress', e.target.value)}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.residenceAddress ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter complete address"
                />
                {renderError('residenceAddress')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Pincode</label>
                <input
                  type="text"
                  value={formData.residencePincode}
                  onChange={(e) => handleInputChange('residencePincode', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.residencePincode ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter pincode"
                  maxLength={6}
                />
                {renderError('residencePincode')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Nearest Landmark</label>
                <input
                  type="text"
                  value={formData.residenceLandmark}
                  onChange={(e) => handleInputChange('residenceLandmark', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  placeholder="Enter landmark"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Staying Since</label>
                <input
                  type="date"
                  value={formData.stayingSince}
                  onChange={(e) => handleInputChange('stayingSince', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.stayingSince ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
                {renderError('stayingSince')}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-200 mb-2">Permanent Address</label>
                <textarea
                  value={formData.permanentAddress}
                  onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.permanentAddress ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter permanent address"
                />
                {renderError('permanentAddress')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Permanent Address Pincode</label>
                <input
                  type="text"
                  value={formData.permanentPincode}
                  onChange={(e) => handleInputChange('permanentPincode', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.permanentPincode ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter pincode"
                />
                {renderError('permanentPincode')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Nearest Landmark</label>
                <input
                  type="text"
                  value={formData.permanentLandmark}
                  onChange={(e) => handleInputChange('permanentLandmark', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  placeholder="Enter landmark"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Employment Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Total Work Experience</label>
                <input
                  type="text"
                  value={formData.totalExperience}
                  onChange={(e) => handleInputChange('totalExperience', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.totalExperience ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="e.g., 5 years"
                />
                {renderError('totalExperience')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Current Company Experience</label>
                <input
                  type="text"
                  value={formData.currentCompanyExperience}
                  onChange={(e) => handleInputChange('currentCompanyExperience', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.currentCompanyExperience ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="e.g., 2 years"
                />
                {renderError('currentCompanyExperience')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Designation</label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => handleInputChange('designation', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.designation ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter designation"
                />
                {renderError('designation')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Date of Joining</label>
                <input
                  type="date"
                  value={formData.joiningDate}
                  onChange={(e) => handleInputChange('joiningDate', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.joiningDate ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
                {renderError('joiningDate')}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-200 mb-2">Office Address</label>
                <textarea
                  value={formData.officeAddress}
                  onChange={(e) => handleInputChange('officeAddress', e.target.value)}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.officeAddress ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter office address"
                />
                {renderError('officeAddress')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Office Pincode</label>
                <input
                  type="text"
                  value={formData.officePincode}
                  onChange={(e) => handleInputChange('officePincode', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.officePincode ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter pincode"
                />
                {renderError('officePincode')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Office Mobile Number</label>
                <input
                  type="tel"
                  value={formData.officeMobile}
                  onChange={(e) => handleInputChange('officeMobile', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.officeMobile ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter office mobile"
                />
                {renderError('officeMobile')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Official Email ID</label>
                <input
                  type="email"
                  value={formData.officialEmail}
                  onChange={(e) => handleInputChange('officialEmail', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.officialEmail ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter official email"
                />
                {renderError('officialEmail')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Working Since</label>
                <input
                  type="date"
                  value={formData.workingSince}
                  onChange={(e) => handleInputChange('workingSince', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Existing Loans (if any)</h4>
              {formData.existingLoans.map((loan, index) => (
                <div key={index} className="bg-gray-800/30 p-4 rounded-lg mb-4 border border-gray-700/50">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Bank Name</label>
                      <input
                        type="text"
                        value={loan.bankName}
                        onChange={(e) => updateExistingLoan(index, 'bankName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                        placeholder="Enter bank name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Outstanding Amount</label>
                      <input
                        type="number"
                        value={loan.outstandingAmount}
                        onChange={(e) => updateExistingLoan(index, 'outstandingAmount', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Monthly EMI</label>
                      <input
                        type="number"
                        value={loan.monthlyEMI}
                        onChange={(e) => updateExistingLoan(index, 'monthlyEMI', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                        placeholder="Enter EMI"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeExistingLoan(index)}
                    className="mt-2 text-red-400 hover:text-red-300 text-sm"
                  >
                    Remove Loan
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addExistingLoan}
                className="px-4 py-2 bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition-colors"
              >
                Add Existing Loan
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Loan Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Loan Amount</label>
                <input
                  type="number"
                  value={formData.loanAmount}
                  onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.loanAmount ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Enter loan amount"
                />
                {renderError('loanAmount')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Tenure (in months)</label>
                <select
                  value={formData.tenure}
                  onChange={(e) => handleInputChange('tenure', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.tenure ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="" className="text-gray-800">Select tenure</option>
                  <option value="12" className="text-gray-800">12 months</option>
                  <option value="24" className="text-gray-800">24 months</option>
                  <option value="36" className="text-gray-800">36 months</option>
                  <option value="48" className="text-gray-800">48 months</option>
                  <option value="60" className="text-gray-800">60 months</option>
                </select>
                {renderError('tenure')}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-200 mb-2">Purpose of Loan</label>
                <textarea
                  value={formData.loanPurpose}
                  onChange={(e) => handleInputChange('loanPurpose', e.target.value)}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.loanPurpose ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                  placeholder="Describe the purpose of loan"
                />
                {renderError('loanPurpose')}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">References</h3>
            
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Reference 1</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.reference1Name}
                    onChange={(e) => handleInputChange('reference1Name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.reference1Name ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Enter reference name"
                  />
                  {renderError('reference1Name')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    value={formData.reference1Mobile}
                    onChange={(e) => handleInputChange('reference1Mobile', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.reference1Mobile ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Enter mobile number"
                  />
                  {renderError('reference1Mobile')}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-200 mb-2">Full Address</label>
                  <textarea
                    value={formData.reference1Address}
                    onChange={(e) => handleInputChange('reference1Address', e.target.value)}
                    rows={3}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.reference1Address ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Enter complete address"
                  />
                  {renderError('reference1Address')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Pincode</label>
                  <input
                    type="text"
                    value={formData.reference1Pincode}
                    onChange={(e) => handleInputChange('reference1Pincode', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.reference1Pincode ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Enter pincode"
                  />
                  {renderError('reference1Pincode')}
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Reference 2</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.reference2Name}
                    onChange={(e) => handleInputChange('reference2Name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.reference2Name ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Enter reference name"
                  />
                  {renderError('reference2Name')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    value={formData.reference2Mobile}
                    onChange={(e) => handleInputChange('reference2Mobile', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.reference2Mobile ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Enter mobile number"
                  />
                  {renderError('reference2Mobile')}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-200 mb-2">Full Address</label>
                  <textarea
                    value={formData.reference2Address}
                    onChange={(e) => handleInputChange('reference2Address', e.target.value)}
                    rows={3}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.reference2Address ? 'border-red-400 bg-red-900/30' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Enter complete address"
                  />
                  {renderError('reference2Address')}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Pincode</label>
                  <input
                    type="text"
                    value={formData.reference2Pincode}
                    onChange={(e) => handleInputChange('reference2Pincode', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.reference2Pincode ? 'border-red-400 bg-red-50' : 'border-gray-600 bg-gray-800/50'} text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Enter pincode"
                  />
                  {renderError('reference2Pincode')}
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Review Your Application</h3>
            <div className="bg-gray-800/30 p-6 rounded-lg space-y-4 border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-gray-200">Full Name:</span>
                  <span className="ml-2 text-white">{formData.fullName}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-200">Email:</span>
                  <span className="ml-2 text-white">{formData.email}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-200">Mobile:</span>
                  <span className="ml-2 text-white">{formData.mobileNumber}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-200">Loan Amount:</span>
                  <span className="ml-2 text-white">₹{formData.loanAmount}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-200">Tenure:</span>
                  <span className="ml-2 text-white">{formData.tenure} months</span>
                </div>
                <div>
                  <span className="font-medium text-gray-200">Purpose:</span>
                  <span className="ml-2 text-white">{formData.loanPurpose}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600/20 p-4 rounded-lg border border-blue-500/30">
              <p className="text-sm text-blue-200">
                By submitting this application, you agree to our terms and conditions and authorize us to verify the information provided.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-12">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-600/5 to-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden relative z-10">
            {/* Progress Steps */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep >= step.id 
                        ? 'bg-white text-blue-600 border-2 border-white' 
                        : 'bg-blue-500/50 text-white border-2 border-blue-400'
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="ml-3 hidden md:block">
                      <div className={`text-sm font-medium ${
                        currentStep >= step.id ? 'text-white' : 'text-blue-300'
                      }`}>
                        {step.title}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-0.5 mx-4 ${
                        currentStep > step.id ? 'bg-white' : 'bg-blue-400'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8 bg-gray-900/20">
              {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            <div className="bg-gray-800/30 px-8 py-6 flex justify-between border-t border-gray-700/50">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${
                  currentStep === 1
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed border border-gray-600'
                    : 'bg-gray-800 text-gray-200 border border-gray-600 hover:bg-gray-700'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentStep < 6 ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center space-x-2 border border-blue-500/30"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  disabled={loading}
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all flex items-center space-x-2 border border-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{loading ? 'Submitting...' : 'Submit Application'}</span>
                </button>

              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;