"use client";
import { useState, useCallback } from "react";
import { Toast } from "@/components/Toast";

const notifItems = [
  { id: "new_deal", label: "New deal assigned", desc: "When a deal is assigned to you" },
  { id: "contact_update", label: "Contact updates", desc: "When a contact's status changes" },
  { id: "deal_closed", label: "Deal closed", desc: "When any deal is marked as Closed Won" },
  { id: "weekly_report", label: "Weekly summary", desc: "Weekly performance digest every Monday" },
];

export default function SettingsPage() {
  const [notifs, setNotifs] = useState<Record<string, boolean>>({
    new_deal: true,
    contact_update: true,
    deal_closed: true,
    weekly_report: false,
  });
  const [toast, setToast] = useState("");
  const closeToast = useCallback(() => setToast(""), []);

  return (
    <div className="max-w-xl flex flex-col gap-6">
      {toast && <Toast message={toast} onClose={closeToast} />}

      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4">Profile</h3>
        <div className="flex items-center gap-4 mb-6">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" className="w-16 h-16 rounded-2xl object-cover" alt="Profile" />
          <div>
            <p className="font-semibold text-slate-800">Alex Johnson</p>
            <p className="text-sm text-slate-400">alex@nexacrm.io</p>
            <button onClick={() => setToast("Photo updated successfully")} className="text-xs text-blue-600 font-semibold mt-1 hover:underline">Change photo</button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {[["Full Name", "Alex Johnson"], ["Email", "alex@nexacrm.io"], ["Company", "NexaCRM Inc."]].map(([label, val]) => (
            <div key={label}>
              <label className="text-xs font-semibold text-slate-500 mb-1 block">{label}</label>
              <input defaultValue={val} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all" />
            </div>
          ))}
          <button onClick={() => setToast("Profile saved successfully")} className="w-fit mt-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">Save Changes</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-1">Notifications</h3>
        <p className="text-xs text-slate-400 mb-5">Choose what updates you want to receive.</p>
        <div className="flex flex-col gap-4">
          {notifItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-700">{item.label}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
              <button
                onClick={() => {
                  const next = !notifs[item.id];
                  setNotifs((prev) => ({ ...prev, [item.id]: next }));
                  setToast(next ? `${item.label} enabled` : `${item.label} disabled`);
                }}
                style={{ width: 44, height: 24, minWidth: 44 }}
                className={`relative rounded-full transition-colors flex-shrink-0 ${notifs[item.id] ? "bg-blue-600" : "bg-slate-200"}`}
              >
                <span
                  style={{ width: 18, height: 18, top: 3, left: notifs[item.id] ? 23 : 3 }}
                  className="absolute bg-white rounded-full shadow-sm transition-all duration-200"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-1">Security</h3>
        <p className="text-xs text-slate-400 mb-5">Manage your password and session.</p>
        <div className="flex flex-col gap-3">
          {[["Current Password", "password"], ["New Password", "password"], ["Confirm Password", "password"]].map(([label, type]) => (
            <div key={label}>
              <label className="text-xs font-semibold text-slate-500 mb-1 block">{label}</label>
              <input type={type} placeholder="••••••••" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all" />
            </div>
          ))}
          <button onClick={() => setToast("Password updated successfully")} className="w-fit mt-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">Update Password</button>
        </div>
      </div>
    </div>
  );
}
