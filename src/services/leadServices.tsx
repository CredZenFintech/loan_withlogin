import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/lead`;

interface ExistingLoan {
  bankName: string;
  outstandingAmount: number;
  monthlyEMI: number;
}

interface LeadPayload {
  fullName: string;
  email: string;
  dateOfBirth: string; // ISO date string
  mobileNumber: number;
  alternateMobile: number;
  motherName: string;
  maritalStatus: string;
  spouseName: string;
  dependents: string | number;
  religion: string;

  houseType: string;
  rentAmount: number;
  residenceAddress: string;
  residencePincode: string | number;
  residenceLandmark: string;
  stayingSince: string;

  permanentAddress: string;
  permanentPincode: string | number;
  permanentLandmark: string;

  totalExperience: number;
  currentCompanyExperience: number;
  designation: string;
  joiningDate: string; // ISO date string
  officeAddress: string;
  officePincode: number;
  officeMobile: number;
  officialEmail: string;
  workingSince: string;

  loanAmount: number;
  tenure: number;
  loanPurpose: string;
  loanStatus: string;
  creditScoreShapShot: number;

  reference1Name: string;
  reference1Mobile: number;
  reference1Address: string;
  reference1Pincode: number;

  reference2Name: string;
  reference2Mobile: number;
  reference2Address: string;
  reference2Pincode: number;

  existingLoans: ExistingLoan[];
}

// Submit lead info
export const submitLead = async (leadData: LeadPayload, token: string) => {
  const response = await axios.post(`${BASE_URL}/submit-lead`, leadData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Get loan data
export const getLoanData = async (token: string) => {
  const response = await axios.get(`${BASE_URL}/get-loan-data`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
