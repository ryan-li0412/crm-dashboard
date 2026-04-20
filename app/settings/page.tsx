"use client";
export default function SettingsPage() {
  return (
    <div className="max-w-xl flex flex-col gap-6">
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4">Profile</h3>
        <div className="flex items-center gap-4 mb-6">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" className="w-16 h-16 rounded-2xl object-cover" alt="Profile" />
          <div>
            <p className="font-semibold text-slate-800">Alex Johnson</p>
            <p className="text-sm text-slate-400">alex@nexacrm.io</p>
            <button className="text-xs text-blue-600 font-semibold mt-1 hover:underline">Change photo</button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {[["Full Name", "Alex Johnson"], ["Email", "alex@nexacrm.io"], ["Company", "NexaCRM Inc."]].map(([label, val]) => (
            <div key={label}>
              <label className="text-xs font-semibold text-slate-500 mb-1 block">{label}</label>
              <input defaultValue={val} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all" />
            </div>
          ))}
          <button className="w-fit mt-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
