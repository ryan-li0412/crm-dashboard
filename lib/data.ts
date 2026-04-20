export const kpis = [
  { label: "Total Revenue", value: "$248,500", change: "+12.5%", up: true },
  { label: "Active Deals", value: "84", change: "+7.2%", up: true },
  { label: "Contacts", value: "1,340", change: "+3.1%", up: true },
  { label: "Conversion Rate", value: "24.8%", change: "-1.4%", up: false },
];

export const revenueData = [
  { month: "Jan", revenue: 32000 },
  { month: "Feb", revenue: 28500 },
  { month: "Mar", revenue: 41000 },
  { month: "Apr", revenue: 38000 },
  { month: "May", revenue: 45500 },
  { month: "Jun", revenue: 52000 },
  { month: "Jul", revenue: 49000 },
  { month: "Aug", revenue: 58000 },
  { month: "Sep", revenue: 54500 },
  { month: "Oct", revenue: 63000 },
  { month: "Nov", revenue: 71000 },
  { month: "Dec", revenue: 68500 },
];

export const dealStageData = [
  { name: "Lead", value: 35, color: "#94a3b8" },
  { name: "Qualified", value: 25, color: "#60a5fa" },
  { name: "Proposal", value: 20, color: "#818cf8" },
  { name: "Negotiation", value: 12, color: "#a78bfa" },
  { name: "Closed", value: 8, color: "#34d399" },
];

export const contacts = [
  { id: 1, name: "Sarah Mitchell", company: "TechFlow Inc.", email: "sarah@techflow.com", status: "Active", tag: "Enterprise", lastContact: "2 hours ago", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" },
  { id: 2, name: "James Rodriguez", company: "Nexus Corp", email: "james@nexus.com", status: "Active", tag: "Pro", lastContact: "5 hours ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" },
  { id: 3, name: "Emily Chen", company: "Bright Solutions", email: "emily@bright.io", status: "Lead", tag: "Starter", lastContact: "1 day ago", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" },
  { id: 4, name: "Michael Torres", company: "Apex Digital", email: "m.torres@apex.com", status: "Active", tag: "Enterprise", lastContact: "1 day ago", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" },
  { id: 5, name: "Laura Kim", company: "PixelWave", email: "laura@pixelwave.co", status: "Inactive", tag: "Pro", lastContact: "3 days ago", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face" },
  { id: 6, name: "David Park", company: "CloudBase", email: "d.park@cloudbase.io", status: "Lead", tag: "Starter", lastContact: "3 days ago", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face" },
  { id: 7, name: "Olivia Brown", company: "Stride Analytics", email: "olivia@stride.com", status: "Active", tag: "Pro", lastContact: "5 days ago", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" },
  { id: 8, name: "Carlos Mendez", company: "Vortex Media", email: "carlos@vortex.mx", status: "Active", tag: "Enterprise", lastContact: "1 week ago", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face" },
];

export const pipeline = [
  {
    stage: "Lead", color: "bg-slate-100 text-slate-600", deals: [
      { id: 1, title: "TechFlow CRM Setup", company: "TechFlow Inc.", value: "$12,000", owner: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face", daysLeft: 14 },
      { id: 2, title: "CloudBase Integration", company: "CloudBase", value: "$8,500", owner: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face", daysLeft: 21 },
    ]
  },
  {
    stage: "Qualified", color: "bg-blue-50 text-blue-600", deals: [
      { id: 3, title: "Nexus ERP Migration", company: "Nexus Corp", value: "$45,000", owner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face", daysLeft: 10 },
      { id: 4, title: "Bright AI Platform", company: "Bright Solutions", value: "$22,000", owner: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face", daysLeft: 7 },
    ]
  },
  {
    stage: "Proposal", color: "bg-indigo-50 text-indigo-600", deals: [
      { id: 5, title: "Apex Dashboard", company: "Apex Digital", value: "$31,000", owner: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face", daysLeft: 5 },
    ]
  },
  {
    stage: "Negotiation", color: "bg-violet-50 text-violet-600", deals: [
      { id: 6, title: "PixelWave Redesign", company: "PixelWave", value: "$18,500", owner: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face", daysLeft: 3 },
    ]
  },
  {
    stage: "Closed", color: "bg-emerald-50 text-emerald-600", deals: [
      { id: 7, title: "Stride Analytics", company: "Stride Analytics", value: "$27,000", owner: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face", daysLeft: 0 },
      { id: 8, title: "Vortex Media Suite", company: "Vortex Media", value: "$52,000", owner: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face", daysLeft: 0 },
    ]
  },
];

export const activities = [
  { id: 1, type: "call", contact: "Sarah Mitchell", company: "TechFlow Inc.", note: "Discussed Q2 renewal terms", time: "2 hours ago", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face" },
  { id: 2, type: "email", contact: "James Rodriguez", company: "Nexus Corp", note: "Sent proposal document", time: "4 hours ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
  { id: 3, type: "meeting", contact: "Emily Chen", company: "Bright Solutions", note: "Product demo — 45 min", time: "Yesterday", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" },
  { id: 4, type: "note", contact: "Michael Torres", company: "Apex Digital", note: "Budget approved for Phase 2", time: "Yesterday", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" },
  { id: 5, type: "call", contact: "David Park", company: "CloudBase", note: "Initial discovery call", time: "2 days ago", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face" },
  { id: 6, type: "email", contact: "Olivia Brown", company: "Stride Analytics", note: "Follow-up on contract draft", time: "3 days ago", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" },
  { id: 7, type: "meeting", contact: "Carlos Mendez", company: "Vortex Media", note: "Closed deal — signed contract", time: "1 week ago", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face" },
];
