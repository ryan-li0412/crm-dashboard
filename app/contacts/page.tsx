"use client";
import { useState } from "react";
import { Search, Plus, Mail, Phone } from "lucide-react";
import { contacts } from "@/lib/data";

export default function ContactsPage() {
  const [search, setSearch] = useState("");
  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-3 py-2 w-72 shadow-sm">
          <Search className="w-4 h-4 text-slate-400" />
          <input className="bg-transparent text-sm text-slate-600 placeholder:text-slate-400 outline-none w-full" placeholder="Search contacts..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm">
          <Plus className="w-4 h-4" /> Add Contact
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-slate-400 font-semibold uppercase tracking-wider bg-slate-50">
              <th className="text-left px-6 py-4">Contact</th>
              <th className="text-left px-6 py-4">Company</th>
              <th className="text-left px-6 py-4">Plan</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Last Contact</th>
              <th className="text-left px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={c.avatar} alt={c.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{c.name}</p>
                      <p className="text-xs text-slate-400">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{c.company}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.tag === "Enterprise" ? "bg-violet-50 text-violet-600" : c.tag === "Pro" ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-500"}`}>{c.tag}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.status === "Active" ? "bg-emerald-50 text-emerald-600" : c.status === "Lead" ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-400"}`}>{c.status}</span>
                </td>
                <td className="px-6 py-4 text-xs text-slate-400">{c.lastContact}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-slate-500 transition-colors"><Mail className="w-3.5 h-3.5" /></button>
                    <button className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-green-50 hover:text-green-600 flex items-center justify-center text-slate-500 transition-colors"><Phone className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
