"use client";
import { Phone, Mail, Calendar, FileText } from "lucide-react";
import { activities } from "@/lib/data";

const typeConfig: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  call: { icon: <Phone className="w-4 h-4" />, color: "bg-green-100 text-green-600", label: "Call" },
  email: { icon: <Mail className="w-4 h-4" />, color: "bg-blue-100 text-blue-600", label: "Email" },
  meeting: { icon: <Calendar className="w-4 h-4" />, color: "bg-indigo-100 text-indigo-600", label: "Meeting" },
  note: { icon: <FileText className="w-4 h-4" />, color: "bg-amber-100 text-amber-600", label: "Note" },
};

export default function ActivitiesPage() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      {activities.map((a) => {
        const cfg = typeConfig[a.type];
        return (
          <div key={a.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <img src={a.avatar} alt={a.contact} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-slate-800">{a.contact}</p>
                  <span className="text-xs text-slate-400">·</span>
                  <p className="text-xs text-slate-500">{a.company}</p>
                </div>
                <span className="text-xs text-slate-400">{a.time}</span>
              </div>
              <p className="text-sm text-slate-600">{a.note}</p>
            </div>
            <span className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${cfg.color}`}>{cfg.icon}</span>
          </div>
        );
      })}
    </div>
  );
}
