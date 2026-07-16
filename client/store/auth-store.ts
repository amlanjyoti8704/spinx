"use client";

import { create } from "zustand";

import { authService } from "@/services/auth-service";
import { getApiErrorMessage } from "@/services/api";
import type { AuthUser, LoginPayload, SignupPayload } from "@/types/auth";

type AuthStatus = "idle" | "loading" | "authenticated" | "guest";

type AuthState = {
  user: AuthUser | null;
  status: AuthStatus;
  initialized: boolean;
  error: string | null;
  hydrate: () => Promise<void>;
  signup: (payload: SignupPayload) => Promise<AuthUser>;
  login: (payload: LoginPayload) => Promise<AuthUser>;
  logout: () => Promise<void>;
  clearError: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: "idle",
  initialized: false,
  error: null,

  async hydrate() {
    set({ status: "loading", error: null });

    try {
      const response = await authService.me();

      set({
        user: response.data.data.user,
        status: "authenticated",
        initialized: true,
        error: null,
      });
    } catch {
      set({
        user: null,
        status: "guest",
        initialized: true,
        error: null,
      });
    }
  },

  async signup(payload) {
    set({ status: "loading", error: null });

    try {
      const response = await authService.signup(payload);
      const user = response.data.data.user;

      set({
        user,
        status: "authenticated",
        initialized: true,
        error: null,
      });

      return user;
    } catch (error) {
      const message = getApiErrorMessage(error);

      set({
        user: null,
        status: "guest",
        initialized: true,
        error: message,
      });

      throw new Error(message);
    }
  },

  async login(payload) {
    set({ status: "loading", error: null });

    try {
      const response = await authService.login(payload);
      const user = response.data.data.user;

      set({
        user,
        status: "authenticated",
        initialized: true,
        error: null,
      });

      return user;
    } catch (error) {
      const message = getApiErrorMessage(error);

      set({
        user: null,
        status: "guest",
        initialized: true,
        error: message,
      });

      throw new Error(message);
    }
  },

  async logout() {
    await authService.logout();

    set({
      user: null,
      status: "guest",
      initialized: true,
      error: null,
    });
  },

  clearError() {
    set({ error: null });
  },
}));
