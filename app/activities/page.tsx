"use client";
import { Phone, Mail, Calendar, FileText } from "lucide-react";
import { activities } from "@/lib/data";

const typeConfig: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  call: { icon: <Phone className="w-4 h-4" />, color: "bg-emerald-100 text-emerald-700", label: "Calls" },
  email: { icon: <Mail className="w-4 h-4" />, color: "bg-blue-100 text-blue-700", label: "Emails" },
  meeting: { icon: <Calendar className="w-4 h-4" />, color: "bg-violet-100 text-violet-700", label: "Meetings" },
  note: { icon: <FileText className="w-4 h-4" />, color: "bg-amber-100 text-amber-700", label: "Notes" },
};

const types = ["call", "email", "meeting", "note"] as const;

export default function ActivitiesPage() {
  const counts = types.reduce((acc, t) => {
    acc[t] = activities.filter((a) => a.type === t).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-4 gap-4">
        {types.map((t) => {
          const cfg = typeConfig[t];
          return (
            <div key={t} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center gap-3 hover:border-indigo-200 transition-colors">
              <span className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${cfg.color}`}>{cfg.icon}</span>
              <div>
                <p className="text-xl font-extrabold text-slate-800">{counts[t]}</p>
                <p className="text-xs text-slate-400 font-medium">{cfg.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        {activities.map((a) => {
          const cfg = typeConfig[a.type];
          return (
            <div key={a.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-start gap-4 hover:border-indigo-200 hover:shadow-md transition-all">
              <img src={a.avatar} alt={a.contact} className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-slate-100" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-slate-800">{a.contact}</p>
                    <span className="text-xs text-slate-300">·</span>
                    <p className="text-xs text-slate-500">{a.company}</p>
                  </div>
                  <span className="text-xs text-slate-400">{a.time}</span>
                </div>
                <p className="text-sm text-slate-600">{a.note}</p>
              </div>
              <span className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${cfg.color}`}>{cfg.icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
