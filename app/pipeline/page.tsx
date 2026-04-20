"use client";
import { useState, useCallback } from "react";
import { DollarSign, Clock, TrendingUp } from "lucide-react";
import { pipeline } from "@/lib/data";
import { Toast } from "@/components/Toast";

export default function PipelinePage() {
  const [toast, setToast] = useState("");
  const closeToast = useCallback(() => setToast(""), []);
  const total = pipeline.reduce((sum, s) => sum + s.deals.reduce((a, d) => a + parseInt(d.value.replace(/[$,]/g, "")), 0), 0);

  return (
    <div className="flex flex-col gap-6">
      {toast && <Toast message={toast} onClose={closeToast} />}

      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl px-5 py-4 shadow-md shadow-indigo-200 flex items-center gap-3 text-white">
          <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-xs font-medium text-white/80">Total Pipeline</p>
            <p className="text-lg font-extrabold">${total.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl px-5 py-4 border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Active Deals</p>
            <p className="text-lg font-extrabold text-slate-800">{pipeline.reduce((s, st) => s + st.deals.length, 0)}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {pipeline.map((stage) => {
          const stageTotal = stage.deals.reduce((s, d) => s + parseInt(d.value.replace(/[$,]/g, "")), 0);
          return (
            <div key={stage.stage} className="flex-shrink-0 w-64">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${stage.color}`}>{stage.stage}</span>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-700">${stageTotal.toLocaleString()}</p>
                  <p className="text-[10px] text-slate-400">{stage.deals.length} deals</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {stage.deals.map((deal) => (
                  <div
                    key={deal.id}
                    onClick={() => setToast(`Opening "${deal.title}" deal...`)}
                    className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer"
                  >
                    <p className="text-sm font-semibold text-slate-800 mb-1">{deal.title}</p>
                    <p className="text-xs text-slate-400 mb-3">{deal.company}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold text-indigo-600">{deal.value}</span>
                      <img src={deal.owner} alt="" className="w-6 h-6 rounded-full object-cover ring-2 ring-slate-100" />
                    </div>
                    {deal.daysLeft > 0 && (
                      <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${deal.daysLeft <= 5 ? "text-rose-500" : "text-slate-400"}`}>
                        <Clock className="w-3 h-3" />
                        {deal.daysLeft} days left
                      </div>
                    )}
                    {deal.daysLeft === 0 && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600 font-bold">
                        ✓ Closed won
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
