"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Toast from "./Toast";

interface ToastContextType {
  showToast: (
    message: string,
    type?: "info" | "success" | "warning" | "error"
  ) => void;
  showComingSoon: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

interface ToastState {
  message: string;
  type: "info" | "success" | "warning" | "error";
  isVisible: boolean;
  id: number;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = (
    message: string,
    type: "info" | "success" | "warning" | "error" = "info"
  ) => {
    setToast({
      message,
      type,
      isVisible: true,
      id: Date.now(),
    });
  };

  const showComingSoon = () => {
    showToast(
      "Fitur ini segera hadir — stay tuned untuk update terbaru.",
      "info"
    );
  };

  const hideToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast, showComingSoon }}>
      {children}
      {toast && (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={hideToast}
          duration={4000}
        />
      )}
    </ToastContext.Provider>
  );
}
