import React from "react";

export const VisualTrigTriangle = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 text-cyan-400">
    <path
      d="M 40 100 L 160 100 L 160 20 L 40 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M 140 100 L 140 85 L 160 85"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
    />
    <text x="100" y="115" fontSize="10" fill="currentColor" textAnchor="middle">
      Adjacent
    </text>
    <text x="170" y="60" fontSize="10" fill="currentColor" textAnchor="start">
      Opposite
    </text>
    <text x="90" y="55" fontSize="10" fill="currentColor" textAnchor="end">
      Hypotenuse
    </text>
    <text x="60" y="95" fontSize="10" fill="currentColor">
      θ
    </text>
  </svg>
);

export const VisualReynolds = () => (
  <div className="space-y-2 mt-2">
    <div className="flex items-center gap-2">
      <span className="text-[10px] w-16 text-emerald-400">Laminar</span>
      <div className="flex-1 h-6 bg-slate-900 rounded relative overflow-hidden border border-slate-700">
        <div className="absolute top-1 left-0 right-0 h-0.5 bg-emerald-500/50"></div>
        <div className="absolute top-3 left-0 right-0 h-0.5 bg-emerald-500/50"></div>
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-emerald-500/50"></div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[10px] w-16 text-red-400">Turbulent</span>
      <div className="flex-1 h-6 bg-slate-900 rounded relative overflow-hidden border border-slate-700">
        <svg
          viewBox="0 0 100 20"
          className="w-full h-full opacity-50"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10"
            fill="none"
            stroke="#f87171"
            strokeWidth="2"
          />
          <path
            d="M0,5 Q15,15 30,5 T60,5 T90,5"
            fill="none"
            stroke="#f87171"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  </div>
);

export const VisualOhmsTriangle = () => (
  <div className="relative w-32 h-32 mx-auto my-2">
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]"
    >
      <path
        d="M 50 5 L 95 95 L 5 95 Z"
        fill="none"
        stroke="#facc15"
        strokeWidth="2"
      />
      <line x1="5" y1="55" x2="95" y2="55" stroke="#facc15" strokeWidth="2" />
      <line x1="50" y1="55" x2="50" y2="95" stroke="#facc15" strokeWidth="2" />
      <text
        x="50"
        y="40"
        textAnchor="middle"
        fill="#facc15"
        fontSize="20"
        fontWeight="bold"
      >
        V
      </text>
      <text
        x="30"
        y="85"
        textAnchor="middle"
        fill="#facc15"
        fontSize="20"
        fontWeight="bold"
      >
        I
      </text>
      <text
        x="70"
        y="85"
        textAnchor="middle"
        fill="#facc15"
        fontSize="20"
        fontWeight="bold"
      >
        R
      </text>
    </svg>
  </div>
);

export const VisualShielding = () => (
  <div className="space-y-3 mt-4 bg-slate-900 p-3 rounded-lg border border-slate-700">
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-slate-400 w-8">α</span>
      <div className="flex-1 flex items-center">
        <div className="h-0.5 bg-red-500 w-1/4"></div>
        <div className="h-4 w-1 bg-slate-200 shadow-[0_0_5px_white]"></div>
        <span className="text-[10px] ml-2 text-slate-500">Paper</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-slate-400 w-8">β</span>
      <div className="flex-1 flex items-center">
        <div className="h-0.5 bg-yellow-500 w-2/4"></div>
        <div className="h-4 w-2 bg-slate-400 border border-slate-500"></div>
        <span className="text-[10px] ml-2 text-slate-500">Plastic/Alum</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-slate-400 w-8">γ</span>
      <div className="flex-1 flex items-center">
        <div className="h-0.5 bg-purple-500 w-3/4"></div>
        <div className="h-4 w-4 bg-slate-600 border border-slate-500"></div>
        <span className="text-[10px] ml-2 text-slate-500">Lead</span>
      </div>
    </div>
  </div>
);

export const VisualFanLaws = () => (
  <div className="mt-4 space-y-2">
    <div className="text-[10px] text-center text-slate-400 mb-1">
      Impact of Doubling RPM (2x Speed)
    </div>
    <div className="flex items-center gap-2">
      <div className="w-12 text-[10px] text-cyan-300">CFM (1x)</div>
      <div className="flex-1 bg-slate-800 rounded h-2 overflow-hidden">
        <div className="h-full bg-cyan-500 w-1/4"></div>
      </div>
      <span className="text-[10px] w-6 text-right">2x</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-12 text-[10px] text-cyan-300">SP (2x)</div>
      <div className="flex-1 bg-slate-800 rounded h-2 overflow-hidden">
        <div className="h-full bg-cyan-500 w-2/4"></div>
      </div>
      <span className="text-[10px] w-6 text-right">4x</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-12 text-[10px] text-cyan-300">HP (3x)</div>
      <div className="flex-1 bg-slate-800 rounded h-2 overflow-hidden">
        <div className="h-full bg-red-500 w-full animate-pulse"></div>
      </div>
      <span className="text-[10px] w-6 text-right text-red-400 font-bold">
        8x!
      </span>
    </div>
  </div>
);

export const VisualBellCurve = () => (
  <div className="relative h-32 w-full mt-2">
    <svg viewBox="0 0 200 100" className="w-full h-full">
      <path
        d="M 10 90 Q 50 90 70 70 Q 100 10 130 70 Q 150 90 190 90"
        fill="none"
        stroke="#818cf8"
        strokeWidth="2"
      />
      <line
        x1="100"
        y1="90"
        x2="100"
        y2="20"
        stroke="#818cf8"
        strokeWidth="1"
        strokeDasharray="4"
      />
      <text x="100" y="98" textAnchor="middle" fontSize="8" fill="#94a3b8">
        μ (Mean)
      </text>
      <rect x="70" y="70" width="60" height="20" fill="#818cf8" opacity="0.2" />
      <text x="130" y="65" fontSize="8" fill="#818cf8">
        +1σ
      </text>
      <text x="70" y="65" fontSize="8" fill="#818cf8" textAnchor="end">
        -1σ
      </text>
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-300 font-bold text-xs">
      68%
    </div>
  </div>
);
