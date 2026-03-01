import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { useAppNavigation } from "../hooks/useAppNavigation";
import { showError, showSuccess } from "../utils/toastService";
import { loginSchema, registerSchema } from "../utils/validation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { goHome, goLogin, goAdminDashboard } = useAppNavigation();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // isAdmin check
  const isAdmin = user && user.role === "admin";

  // persist user across refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("userInfo");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Register
  const register = async ({ username, email, password, confirmPassword }) => {
    const validation = registerSchema.safeParse({
      username,
      email,
      password,
      confirmPassword,
    });

    if (!validation.success) {
      const errorMessage = validation.error.issues[0].message;
      showError(errorMessage);
      return;
    }

    try {
      const res = await api.post("/users/register", {
        username,
        email,
        password,
      });

      return res.data.email;
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      showError(errorMessage || "Server is unreachable. Try again later");
      console.error("Registration failed:", error);
      throw error;
    }
  };

  // Verify email with otp
  const verifyOtp = async (email, otp) => {
    try {
      const res = await api.post("/users/verify-otp", { email, otp });
      const userData = res.data.user;

      setUser(userData);
      localStorage.setItem("userInfo", JSON.stringify(userData));

      showSuccess("Email verified successfully! Welcome to DECIBEL.");
      goHome();
      return userData;
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message || "Verification failed. Try again.";
      showError(errorMsg);
      console.error("Verification failed:", error);
      throw error;
    }
  };

  // Resend OTP
  const resendOtpRequest = async (email) => {
    try {
      await api.post("/users/resend-otp", { email });
      showSuccess("A new OTP has been sent to your email.");
    } catch (error) {
      const errorMesage = error?.response?.data?.message;
      showError(errorMesage || "Failed to resend OTP");
    }
  };

  // Login
  const login = async ({ email, password }) => {
    const validation = loginSchema.safeParse({ email, password });

    if (!validation.success) {
      const errorMessage = validation.error.issues[0].message;
      showError(errorMessage);
      return;
    }

    try {
      const res = await api.post(`/users/login`, { email, password });
      const userData = res.data.user;

      setUser(userData);
      localStorage.setItem("userInfo", JSON.stringify(userData));

      // if admin navigate to admin dashboard
      if (userData.role === "admin") goAdminDashboard();
      else goHome();

      return userData;
    } catch (error) {
      console.error(error);
      showError(
        error?.response?.data?.message ||
          "Server is unreachable. Try again later",
      );
    }
  };

  // logout
  const logOut = async () => {
    try {
      await api.post("/users/logout");

      setUser(null);
      localStorage.removeItem("userInfo");

      goLogin();
    } catch (err) {
      showError("Failed to logout. try again later");
      console.error("Logout failed:", err);
    }
  };

  // update user
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("userInfo", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        verifyOtp,
        resendOtpRequest,
        login,
        logOut,
        loading,
        updateUser,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
