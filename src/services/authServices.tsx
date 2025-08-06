import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/auth`;

interface SignupPayload {
  fullName: string;
  email: string;
}

interface VerifyOtpPayload {
  email: string;
  otp: string;
}

interface SigninPayload {
  email: string;
}

// Signup with OTP initiation
export const signupWithOtp = async (data: SignupPayload) => {
  const response = await axios.post(`${BASE_URL}/email-signup`, data);
  return response.data;
};

// Verify signup OTP
export const verifySignupOtp = async (data: { email: string; name: string; otp: string }) => {
  const response = await axios.post(`${BASE_URL}/verify-email-signup-otp`, data);
  return response.data;
};

// Signin with OTP initiation
export const signinWithOtp = async (data: SigninPayload) => {
  const response = await axios.post(`${BASE_URL}/email-login`, data);
  return response.data;
};

// Verify signin OTP
export const verifySigninOtp = async (data: VerifyOtpPayload) => {
  const response = await axios.post(`${BASE_URL}/verify-email-login`, data);
  return response.data;
};

// Logout (requires token)
export const logout = async (token: string) => {
  const response = await axios.post(`${BASE_URL}/logout`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};


