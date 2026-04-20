"use client";
import { DollarSign, Clock } from "lucide-react";
import { pipeline } from "@/lib/data";

export default function PipelinePage() {
  const total = pipeline.reduce((sum, s) => sum + s.deals.reduce((a, d) => a + parseInt(d.value.replace(/[$,]/g, "")), 0), 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-2xl px-5 py-4 border border-slate-100 shadow-sm flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Total Pipeline</p>
            <p className="text-lg font-extrabold text-slate-800">${total.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl px-5 py-4 border border-slate-100 shadow-sm">
          <p className="text-xs text-slate-400 font-medium">Active Deals</p>
          <p className="text-lg font-extrabold text-slate-800">{pipeline.reduce((s, st) => s + st.deals.length, 0)}</p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {pipeline.map((stage) => (
          <div key={stage.stage} className="flex-shrink-0 w-64">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${stage.color}`}>{stage.stage}</span>
              <span className="text-xs text-slate-400 font-medium">{stage.deals.length} deals</span>
            </div>
            <div className="flex flex-col gap-3">
              {stage.deals.map((deal) => (
                <div key={deal.id} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <p className="text-sm font-semibold text-slate-800 mb-1">{deal.title}</p>
                  <p className="text-xs text-slate-500 mb-3">{deal.company}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-600">{deal.value}</span>
                    <img src={deal.owner} alt="" className="w-6 h-6 rounded-full object-cover" />
                  </div>
                  {deal.daysLeft > 0 && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {deal.daysLeft} days left
                    </div>
                  )}
                  {deal.daysLeft === 0 && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600 font-semibold">
                      ✓ Closed won
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
