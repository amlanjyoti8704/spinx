import { api } from "@/services/api";
import type {
  AuthResponse,
  LoginPayload,
  SignupPayload,
} from "@/types/auth";

export const authService = {
  signup(payload: SignupPayload) {
    return api.post<AuthResponse>("/auth/signup", payload);
  },

  login(payload: LoginPayload) {
    return api.post<AuthResponse>("/auth/login", payload);
  },

  logout() {
    return api.post("/auth/logout");
  },

  me() {
    return api.get<AuthResponse>("/auth/me");
  },
};
