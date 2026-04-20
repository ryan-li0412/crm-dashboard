"use client";

import { useState, useCallback } from "react";
import { Search, Bell } from "lucide-react";
import { Toast } from "@/components/Toast";

const pages: Record<string, string> = {
  "/": "Dashboard",
  "/contacts": "Contacts",
  "/pipeline": "Pipeline",
  "/activities": "Activities",
  "/settings": "Settings",
};

export default function Header({ pathname }: { pathname: string }) {
  const title = pages[pathname] ?? "Dashboard";
  const [toast, setToast] = useState("");
  const closeToast = useCallback(() => setToast(""), []);

  return (
    <>
      {toast && <Toast message={toast} onClose={closeToast} />}
      <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 flex-shrink-0">
        <h1 className="text-lg font-bold text-slate-800">{title}</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 w-52">
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input
              className="bg-transparent text-sm text-slate-600 placeholder:text-slate-400 outline-none w-full"
              placeholder="Search..."
              onKeyDown={e => e.key === "Enter" && setToast("Search feature coming soon")}
            />
          </div>
          <button
            onClick={() => setToast("No new notifications")}
            className="relative w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
          >
            <Bell className="w-4 h-4 text-slate-500" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
          </button>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
            alt="User"
            className="w-9 h-9 rounded-xl object-cover ring-2 ring-slate-200 cursor-pointer"
            onClick={() => setToast("Profile settings")}
          />
        </div>
      </header>
    </>
  );
}
