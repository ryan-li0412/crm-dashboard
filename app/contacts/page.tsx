"use client";
import { useState, useCallback } from "react";
import { Search, Plus, Mail, Phone } from "lucide-react";
import { contacts } from "@/lib/data";
import { Toast } from "@/components/Toast";

export default function ContactsPage() {
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const closeToast = useCallback(() => setToast(""), []);

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      {toast && <Toast message={toast} onClose={closeToast} />}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-3 py-2 w-72 shadow-sm">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            className="bg-transparent text-sm text-slate-600 placeholder:text-slate-400 outline-none w-full"
            placeholder="Search contacts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === "Enter" && setToast(filtered.length > 0 ? `${filtered.length} contact(s) found` : "No contacts found")}
          />
        </div>
        <button
          onClick={() => setToast("Add Contact form coming soon")}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-indigo-200"
        >
          <Plus className="w-4 h-4" /> Add Contact
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-slate-500 font-semibold uppercase tracking-wider bg-slate-50 border-b border-slate-100">
              <th className="text-left px-6 py-4">Contact</th>
              <th className="text-left px-6 py-4">Company</th>
              <th className="text-left px-6 py-4">Plan</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Last Contact</th>
              <th className="text-left px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-16 text-center text-sm text-slate-400">
                  No contacts found for &ldquo;{search}&rdquo;
                </td>
              </tr>
            )}
            {filtered.map((c) => (
              <tr key={c.id} className="border-t border-slate-100 hover:bg-indigo-50/40 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={c.avatar} alt={c.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0 ring-2 ring-slate-100" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{c.name}</p>
                      <p className="text-xs text-slate-400">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 font-medium">{c.company}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.tag === "Enterprise" ? "bg-violet-100 text-violet-700" : c.tag === "Pro" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"}`}>{c.tag}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.status === "Active" ? "bg-emerald-100 text-emerald-700" : c.status === "Lead" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-400"}`}>{c.status}</span>
                </td>
                <td className="px-6 py-4 text-xs text-slate-400 font-medium">{c.lastContact}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setToast(`Email sent to ${c.name}`)} className="w-7 h-7 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors"><Mail className="w-3.5 h-3.5" /></button>
                    <button onClick={() => setToast(`Calling ${c.name}...`)} className="w-7 h-7 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors"><Phone className="w-3.5 h-3.5" /></button>
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
