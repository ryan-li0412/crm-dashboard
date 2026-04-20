"use client";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

export function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white text-sm font-medium px-4 py-3 rounded-2xl shadow-xl animate-slide-up">
      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
      {message}
    </div>
  );
}
