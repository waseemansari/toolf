
const BASE_URL = "http://localhost:8080/api/v1/"; 

export const API_END_POINTS = {
  login: BASE_URL + "auth/login",
  register: BASE_URL + "auth/register",
  sendForgetEmail: BASE_URL + "auth/forgot-password",
  verifyEmail: BASE_URL + "auth/reset-password",
  logout: BASE_URL + "auth/logout",
  
  chart: BASE_URL + "chart",
  notifications: BASE_URL + "notifications",

  
 
}; 