"use client";

import { TrendingUp, TrendingDown, DollarSign, Users, Handshake, Target, Phone, Mail, Calendar, FileText } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { kpis, revenueData, dealStageData, contacts, activities } from "@/lib/data";

const kpiIcons = [DollarSign, Handshake, Users, Target];
const kpiGradients = [
  { card: "from-blue-500 to-indigo-600", bg: "bg-gradient-to-br from-blue-500 to-indigo-600" },
  { card: "from-violet-500 to-purple-600", bg: "bg-gradient-to-br from-violet-500 to-purple-600" },
  { card: "from-cyan-400 to-blue-500", bg: "bg-gradient-to-br from-cyan-400 to-blue-500" },
  { card: "from-rose-500 to-pink-600", bg: "bg-gradient-to-br from-rose-500 to-pink-600" },
];

const activityIcons: Record<string, React.ReactNode> = {
  call: <Phone className="w-3.5 h-3.5" />,
  email: <Mail className="w-3.5 h-3.5" />,
  meeting: <Calendar className="w-3.5 h-3.5" />,
  note: <FileText className="w-3.5 h-3.5" />,
};
const activityColors: Record<string, string> = {
  call: "bg-emerald-100 text-emerald-700",
  email: "bg-blue-100 text-blue-700",
  meeting: "bg-violet-100 text-violet-700",
  note: "bg-amber-100 text-amber-700",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-4 gap-4">
        {kpis.map((k, i) => {
          const Icon = kpiIcons[i];
          const g = kpiGradients[i];
          return (
            <div key={k.label} className={`bg-gradient-to-br ${g.card} rounded-2xl p-5 shadow-md text-white`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-white/80">{k.label}</span>
                <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="text-2xl font-extrabold text-white mb-1">{k.value}</div>
              <div className={`flex items-center gap-1 text-xs font-semibold ${k.up ? "text-white/90" : "text-white/70"}`}>
                {k.up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                {k.change} vs last month
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-0.5">Revenue</p>
              <h3 className="font-bold text-slate-800">Monthly Overview</h3>
            </div>
            <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full">+12.5% YoY</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
              <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, "Revenue"]} contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
              <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#6366f1", stroke: "#fff", strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-0.5">Pipeline</p>
          <h3 className="font-bold text-slate-800 mb-4">Deal Stages</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={dealStageData} cx="50%" cy="45%" innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value">
                {dealStageData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={(v, name) => [`${v}%`, name]} contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "11px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-800">Recent Contacts</h3>
            <a href="/contacts" className="text-xs text-indigo-600 font-semibold hover:underline">View all</a>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-xs text-slate-500 font-semibold uppercase tracking-wider bg-slate-50">
                <th className="text-left px-5 py-3">Name</th>
                <th className="text-left px-5 py-3">Company</th>
                <th className="text-left px-5 py-3">Status</th>
                <th className="text-left px-5 py-3">Last Contact</th>
              </tr>
            </thead>
            <tbody>
              {contacts.slice(0, 5).map((c) => (
                <tr key={c.id} className="border-t border-slate-100 hover:bg-indigo-50/40 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0 ring-2 ring-slate-100" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{c.name}</p>
                        <p className="text-xs text-slate-400">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-slate-600">{c.company}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.status === "Active" ? "bg-emerald-100 text-emerald-700" : c.status === "Lead" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"}`}>{c.status}</span>
                  </td>
                  <td className="px-5 py-3 text-xs text-slate-400">{c.lastContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-800">Recent Activity</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {activities.slice(0, 5).map((a) => (
              <div key={a.id} className="flex items-start gap-3 px-5 py-3.5 hover:bg-slate-50 transition-colors">
                <img src={a.avatar} alt={a.contact} className="w-7 h-7 rounded-full object-cover flex-shrink-0 mt-0.5 ring-2 ring-slate-100" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${activityColors[a.type]}`}>{activityIcons[a.type]}</span>
                    <p className="text-sm font-semibold text-slate-800 truncate">{a.contact}</p>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{a.note}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
