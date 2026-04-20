"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Users, Kanban, Activity,
  Settings, ChevronLeft, ChevronRight, Zap,
} from "lucide-react";

const nav = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/contacts", icon: Users, label: "Contacts" },
  { href: "/pipeline", icon: Kanban, label: "Pipeline" },
  { href: "/activities", icon: Activity, label: "Activities" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className="relative flex flex-col border-r border-slate-200 bg-white transition-all duration-300 flex-shrink-0"
      style={{ width: collapsed ? "64px" : "220px" }}
    >
      <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-100">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
          <Zap className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <span className="font-extrabold text-slate-800 text-sm tracking-tight">NexaCRM</span>
        )}
      </div>

      <nav className="flex-1 px-2 py-4 flex flex-col gap-0.5">
        {nav.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                active
                  ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-200"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {!collapsed && <span>{label}</span>}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors z-10"
      >
        {collapsed
          ? <ChevronRight className="w-3 h-3 text-slate-500" />
          : <ChevronLeft className="w-3 h-3 text-slate-500" />}
      </button>
    </aside>
  );
}
