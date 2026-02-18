import React, { useState, useMemo } from "react";
import {
  Calculator,
  Atom,
  BookOpen,
  Zap,
  Volume2,
  Wind,
  Radio,
  Thermometer,
  DollarSign,
  BarChart2,
  Search,
  Menu,
  X,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Info,
  FileText,
  Activity,
  Layers,
  Shield,
  Gauge,
  TrendingUp,
} from "lucide-react";
import { KNOWLEDGE_BASE_DATA, MENU_ITEMS } from "../data/knowledge-base";
import * as Visuals from "./Visuals";

// --- Types & Interfaces ---
interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ElementType;
}

interface FormulaProps {
  title: string;
  formula: string;
  description?: string;
  note?: string;
}

interface TableProps {
  headers: string[];
  data: (string | number)[][];
  highlightFirst?: boolean;
}

// --- Reusable Layout Components ---

const SectionCard: React.FC<SectionProps> = ({
  title,
  children,
  className = "",
  icon: Icon,
}) => (
  <div
    className={`bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden backdrop-blur-sm transition-all hover:border-slate-600 shadow-sm hover:shadow-md ${className}`}
  >
    <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex items-center gap-2">
      {Icon ? (
        <Icon size={16} className="text-cyan-400" />
      ) : (
        <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
      )}
      <h3 className="font-bold text-slate-100">{title}</h3>
    </div>
    <div className="p-4 space-y-4">{children}</div>
  </div>
);

const FormulaBox: React.FC<FormulaProps> = ({
  title,
  formula,
  description,
  note,
}) => (
  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-700/50 group hover:border-cyan-500/30 transition-colors">
    <div className="text-xs text-cyan-400 font-medium tracking-wider uppercase mb-1 flex items-center gap-1">
      <Activity size={10} />
      {title}
    </div>
    <code className="block bg-black/20 rounded px-2 py-1.5 font-mono text-lg text-emerald-300 overflow-x-auto shadow-inner">
      {formula}
    </code>
    {description && (
      <div className="text-sm text-slate-400 mt-2 flex items-start gap-1">
        <Info size={12} className="mt-0.5 shrink-0" />
        {description}
      </div>
    )}
    {note && (
      <div className="flex items-start gap-1.5 mt-2 text-xs text-amber-400/80 bg-amber-900/10 p-1.5 rounded border border-amber-900/30">
        <AlertTriangle size={12} className="mt-0.5 shrink-0" />
        <span>{note}</span>
      </div>
    )}
  </div>
);

const DataTable: React.FC<TableProps> = ({
  headers,
  data,
  highlightFirst = false,
}) => (
  <div className="overflow-x-auto rounded-lg border border-slate-700 shadow-sm">
    <table className="w-full text-sm text-left">
      <thead className="text-xs text-slate-400 uppercase bg-slate-800">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-2 border-b border-slate-700">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={`${row[0]}-${i}`}
            className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
          >
            {row.map((cell, j) => (
              <td
                key={j}
                className={`px-4 py-2 ${highlightFirst && j === 0 ? "font-medium text-cyan-300" : "text-slate-300"}`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const InfoTag: React.FC<{ label: string; value: string; color?: string }> = ({
  label,
  value,
  color = "blue",
}) => {
  const colorClasses = {
    blue: "bg-blue-900/30 text-blue-300 border-blue-800",
    green: "bg-emerald-900/30 text-emerald-300 border-emerald-800",
    orange: "bg-orange-900/30 text-orange-300 border-orange-800",
    red: "bg-red-900/30 text-red-300 border-red-800",
    purple: "bg-purple-900/30 text-purple-300 border-purple-800",
    cyan: "bg-cyan-900/30 text-cyan-300 border-cyan-800",
  };

  return (
    <div
      className={`flex flex-col p-2 rounded border ${colorClasses[color as keyof typeof colorClasses]} hover:scale-105 transition-transform cursor-default`}
    >
      <span className="text-[10px] uppercase tracking-wider opacity-70">
        {label}
      </span>
      <span className="font-mono font-medium text-sm">{value}</span>
    </div>
  );
};

// Map icon strings to Lucide components
const IconMap: Record<string, any> = {
  Calculator,
  Atom,
  BookOpen,
  Zap,
  Volume2,
  Wind,
  Radio,
  Thermometer,
  DollarSign,
  BarChart2,
  Layers,
  Activity,
  Shield,
  AlertTriangle,
  CheckCircle,
  Info,
  Gauge,
  TrendingUp,
};

const SafetyKnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState("math");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    const data = KNOWLEDGE_BASE_DATA[activeTab] || [];
    if (!search) return data;

    const searchLower = search.toLowerCase();
    return data.filter((section) => {
      const matchTitle = section.title.toLowerCase().includes(searchLower);
      const matchContent = section.content.some((item: any) => {
        if (
          item.title &&
          String(item.title).toLowerCase().includes(searchLower)
        )
          return true;
        if (
          item.formula &&
          String(item.formula).toLowerCase().includes(searchLower)
        )
          return true;
        if (
          item.description &&
          String(item.description).toLowerCase().includes(searchLower)
        )
          return true;
        if (item.data) {
          if (Array.isArray(item.data)) {
            return item.data.some((sub: any) =>
              JSON.stringify(sub).toLowerCase().includes(searchLower),
            );
          }
          if (typeof item.data === "string")
            return item.data.toLowerCase().includes(searchLower);
        }
        return false;
      });
      return matchTitle || matchContent;
    });
  }, [activeTab, search]);

  const renderContent = (item: any, idx: number) => {
    switch (item.type) {
      case "formula":
        return <FormulaBox key={idx} {...item} />;

      case "formula-grid":
        return (
          <div key={idx} className="grid grid-cols-2 gap-3 mt-4">
            {item.data.map((f: any, i: number) => (
              <FormulaBox key={i} title={f.title} formula={f.formula} />
            ))}
          </div>
        );

      case "info-grid":
        return (
          <div key={idx} className="grid grid-cols-2 gap-2 mt-4">
            {item.data.map((tag: any, i: number) => (
              <InfoTag key={i} {...tag} />
            ))}
          </div>
        );

      case "info-grid-mb":
        return (
          <div key={idx} className="grid grid-cols-2 gap-3 mb-4">
            {item.data.map((tag: any, i: number) => (
              <InfoTag key={i} {...tag} />
            ))}
          </div>
        );

      case "visual":
        const VisualComp = (Visuals as any)[`Visual${item.data}`];
        return (
          <div key={idx} className="mt-2">
            {item.title && (
              <h4 className="text-sm font-semibold text-orange-400 mb-2">
                {item.title}
              </h4>
            )}
            {VisualComp ? <VisualComp /> : null}
          </div>
        );

      case "list":
        return (
          <div key={idx} className="space-y-2">
            <h4 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
              <TrendingUp size={14} /> {item.title}
            </h4>
            <ul className="list-disc pl-4 text-sm text-slate-300 space-y-1">
              {item.data.map((li: string, i: number) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
        );

      case "list-mono":
        return (
          <div
            key={idx}
            className="p-3 bg-slate-900 rounded border border-slate-700 mt-3"
          >
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">
              {item.title}
            </h4>
            <ul className="text-xs font-mono text-slate-300 space-y-1">
              {item.data.map((li: string, i: number) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
        );

      case "list-emerald":
        return (
          <div key={idx} className="mt-4">
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">
              {item.title}
            </h4>
            <ul className="text-sm text-slate-300 space-y-1 list-disc pl-4">
              {item.data.map((li: string, i: number) => {
                const parts = li.split(":");
                return (
                  <li key={i}>
                    <span className="text-emerald-300 font-bold">
                      {parts[0]}:
                    </span>
                    {parts[1]}
                  </li>
                );
              })}
            </ul>
          </div>
        );

      case "text-grid":
        return (
          <div key={idx} className="mt-4 pt-4 border-t border-slate-700">
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">
              {item.title}
            </h4>
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-300">
              {item.data.map((t: string, i: number) => (
                <div
                  key={i}
                  className="bg-slate-900 p-2 rounded border border-slate-700"
                >
                  {t}
                </div>
              ))}
            </div>
            {item.footer && (
              <div className="mt-2 text-xs text-slate-400 text-center font-mono">
                {item.footer}
              </div>
            )}
          </div>
        );

      case "table":
        return (
          <div key={idx} className="space-y-4">
            {item.title && (
              <h4 className="text-sm font-semibold text-pink-400 mb-2">
                {item.title}
              </h4>
            )}
            <DataTable
              key={idx}
              headers={item.headers}
              data={item.data}
              highlightFirst={item.highlightFirst}
            />
          </div>
        );

      case "molarity":
        return (
          <div key={idx} className="mt-3">
            <h4 className="text-sm font-semibold text-cyan-400 mb-1">
              {item.title}
            </h4>
            <p className="text-sm text-slate-300">{item.data}</p>
            <div className="mt-2 p-2 bg-slate-900 rounded text-xs text-slate-400 flex items-center gap-2">
              <div className="h-6 w-0.5 bg-purple-500"></div>
              Steps: {item.steps.join(", ")}
            </div>
          </div>
        );

      case "bonding":
        return (
          <div key={idx} className="mt-4 space-y-2">
            <h4 className="text-sm font-semibold text-emerald-400">
              {item.title}
            </h4>
            {item.data.map((b: any, i: number) => (
              <div
                key={i}
                className={`bg-slate-900/50 p-2 rounded border-l-2 border-${b.color}-500 hover:bg-slate-800 transition-colors`}
              >
                <span className="font-bold text-slate-200 block">{b.type}</span>
                <span className="text-xs text-slate-400">{b.desc}</span>
              </div>
            ))}
            <div className="text-[10px] text-slate-400 mt-2 bg-slate-900 p-2 rounded">
              {item.footer}
            </div>
          </div>
        );

      case "dike-calc":
        return (
          <div key={idx} className="space-y-2 text-sm text-slate-300">
            <div className="font-semibold text-cyan-300 mb-1 flex items-center gap-2">
              <AlertTriangle size={14} /> {item.title}
            </div>
            <ol className="list-decimal pl-4 space-y-2 text-xs bg-slate-900 p-3 rounded border border-slate-700">
              {item.data.map((li: string, i: number) => (
                <li key={i}>{li}</li>
              ))}
            </ol>
            {item.note && (
              <div className="mt-2 text-xs text-amber-400 p-2 bg-amber-900/10 rounded flex items-center gap-2">
                <CheckCircle size={12} /> {item.note}
              </div>
            )}
          </div>
        );

      case "bsafe":
        return (
          <div key={idx} className="space-y-2">
            {item.data.map((h: any, i: number) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2 rounded hover:bg-slate-700/30 transition-colors border border-transparent hover:border-slate-700"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-orange-500/10 text-orange-400 font-bold rounded-full border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
                  {h.l}
                </div>
                <div>
                  <div className="font-bold text-slate-200 text-sm">{h.t}</div>
                  <div className="text-[10px] text-slate-400">{h.d}</div>
                </div>
              </div>
            ))}
          </div>
        );

      case "shock-thresholds":
        return (
          <div key={idx} className="mt-4 pt-3 border-t border-slate-700">
            <h4 className="text-xs font-bold text-red-400 mb-1 flex items-center gap-2">
              <Gauge size={12} /> {item.title}
            </h4>
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden flex mt-2 mb-1">
              <div className="w-[10%] bg-green-500"></div>
              <div className="w-[20%] bg-yellow-500"></div>
              <div className="w-[30%] bg-orange-500"></div>
              <div className="w-[40%] bg-red-600"></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              {item.data.map((v: string, i: number) => (
                <span key={i}>{v}</span>
              ))}
            </div>
          </div>
        );

      case "nrr-box":
        return (
          <div
            key={idx}
            className="mt-4 p-3 bg-pink-900/10 border border-pink-500/30 rounded"
          >
            <h4 className="text-sm font-semibold text-pink-300 mb-1">
              {item.title}
            </h4>
            <p className="text-xs text-slate-300 mb-2">{item.description}</p>
            <code className="block bg-black/30 p-2 rounded text-emerald-300 font-mono text-center mb-2">
              {item.formula}
            </code>
            <p className="text-xs text-slate-400">{item.note}</p>
          </div>
        );

      case "standards-grid":
        return (
          <div key={idx} className="grid grid-cols-2 gap-4">
            {item.data.map((s: any, i: number) => (
              <div key={i}>
                <h4 className={`text-sm font-bold text-${s.color}-400 mb-1`}>
                  {s.title}
                </h4>
                <ul className="text-xs text-slate-300 space-y-1">
                  {s.list.map((li: string, j: number) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case "fan-laws-list":
        return (
          <div key={idx} className="space-y-3 text-sm text-slate-300">
            {item.data.map((f: any, i: number) => (
              <div
                key={i}
                className={`flex items-center gap-2 ${i < item.data.length - 1 ? "border-b border-slate-700/50 pb-1" : ""}`}
              >
                <div className="text-cyan-300 font-bold w-12">{f.label}</div>
                <span className="text-xs">{f.desc}</span>
                <code className="ml-auto text-[10px] bg-slate-900 p-1 rounded text-emerald-300">
                  {f.formula}
                </code>
              </div>
            ))}
          </div>
        );

      case "capture-list":
        return (
          <div key={idx} className="mt-4">
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">
              {item.title}
            </h4>
            <ul className="text-xs text-slate-300 space-y-1">
              {item.data.map((c: any, i: number) => (
                <li
                  key={i}
                  className="flex justify-between border-b border-slate-700/50 pb-1"
                >
                  <span>{c.label}</span>{" "}
                  <span className="font-mono text-emerald-400">{c.value}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "alara-box":
        return (
          <div
            key={idx}
            className="mt-3 p-3 bg-red-900/10 border border-red-500/30 rounded"
          >
            <h4 className="text-sm font-semibold text-red-400 flex items-center gap-2">
              <Shield size={14} /> {item.title}
            </h4>
            <div className="flex justify-between mt-2 text-xs font-bold text-slate-300">
              {item.data.map((v: string, i: number) => (
                <span
                  key={i}
                  className="bg-slate-900 p-1.5 rounded text-emerald-300"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        );

      case "laser-grid":
        return (
          <div key={idx} className="space-y-2 mb-4">
            <h4 className="text-sm font-semibold text-cyan-400">
              {item.title}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {item.data.map((l: any, i: number) => (
                <div
                  key={i}
                  className={`bg-${l.color}-900/30 text-${l.color}-300 p-2 rounded text-center border border-${l.color}-800`}
                >
                  {l.label}
                </div>
              ))}
            </div>
          </div>
        );

      case "limits-list":
        return (
          <div key={idx} className="border-t border-slate-700 pt-3">
            <h4 className="text-sm font-semibold text-orange-400">
              {item.title}
            </h4>
            <ul className="text-xs text-slate-300 mt-1 space-y-1">
              {item.data.map((l: any, i: number) => (
                <li key={i}>
                  {l.label}:{" "}
                  <span className="text-emerald-400 font-mono">{l.value}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "wbgt-legend":
        return (
          <div key={idx}>
            <div className="mt-3 text-xs text-slate-300 space-y-1">
              {item.data.map((l: any, i: number) => (
                <p key={i}>
                  <span className="text-orange-400 font-bold">{l.label}:</span>{" "}
                  {l.desc}
                </p>
              ))}
            </div>
            <div className="mt-2 bg-slate-900 p-2 rounded text-xs text-amber-400 border border-amber-900/30">
              {item.note}
            </div>
          </div>
        );

      case "met-grid":
        return (
          <div key={idx} className="grid grid-cols-3 gap-2 text-center">
            {item.data.map((m: any, i: number) => (
              <div
                key={i}
                className={`bg-${m.color}-900/20 p-2 rounded border border-${m.color}-800/50`}
              >
                <div className={`text-${m.color}-400 text-sm font-bold`}>
                  {m.label}
                </div>
                <div className="text-slate-400 text-xs">{m.value}</div>
              </div>
            ))}
          </div>
        );

      case "cold-list":
        return (
          <div key={idx} className="mt-4 space-y-2">
            <h4 className="text-sm font-semibold text-cyan-300">
              {item.title}
            </h4>
            {item.data.map((c: any, i: number) => (
              <div
                key={i}
                className="bg-blue-900/20 p-2 rounded text-xs border border-blue-800/50 hover:bg-blue-900/30 transition-colors"
              >
                <span className="font-bold text-blue-300">{c.label}:</span>{" "}
                {c.desc}
              </div>
            ))}
          </div>
        );

      case "annuity-list":
        return (
          <div key={idx} className="space-y-3">
            {item.data.map((a: any, i: number) => (
              <div key={i}>
                <div className="text-xs text-green-400 font-bold mb-1">
                  {a.label}
                </div>
                <code className="block bg-black/20 text-xs text-slate-300 p-1.5 rounded font-mono">
                  {a.formula}
                </code>
              </div>
            ))}
          </div>
        );

      case "metric-box":
        return (
          <div
            key={idx}
            className="p-3 bg-slate-900 rounded border border-slate-700"
          >
            <h4 className="text-sm font-semibold text-emerald-400 mb-1">
              {item.title}
            </h4>
            <p className="text-xs text-slate-400">{item.data}</p>
          </div>
        );

      case "metric-list":
        return (
          <div
            key={idx}
            className="p-3 bg-slate-900 rounded border border-slate-700"
          >
            <h4 className="text-sm font-semibold text-emerald-400 mb-1">
              {item.title}
            </h4>
            <ul className="text-xs text-slate-400 list-disc pl-4">
              {item.data.map((li: string, i: number) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
        );

      case "stats-list":
        return (
          <div key={idx} className="space-y-1 text-xs text-slate-300 mt-2">
            {item.data.map((l: any, i: number) => (
              <div
                key={i}
                className={`flex justify-between ${i < item.data.length - 1 ? "border-b border-slate-700/50 pb-1" : ""}`}
              >
                <span>{l.label}</span>{" "}
                <span className="font-bold text-indigo-300">{l.value}</span>
              </div>
            ))}
          </div>
        );

      case "spearman":
        return (
          <div key={idx} className="mt-4">
            <h4 className="text-sm font-semibold text-indigo-400 mb-1">
              {item.title}
            </h4>
            <p className="text-xs text-slate-400">{item.desc}</p>
            <ul className="text-xs text-slate-400 mt-2 list-decimal pl-4">
              {item.data.map((li: string, i: number) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
        );

      case "note":
        return (
          <div
            key={idx}
            className="mt-2 text-xs text-amber-400 flex items-center gap-1.5 p-2 bg-amber-900/10 rounded"
          >
            <Info size={12} />
            <span>{item.data}</span>
          </div>
        );

      case "text":
        return (
          <div
            key={idx}
            className="bg-slate-900/50 p-2 rounded border-l-2 border-emerald-500"
          >
            {item.title && (
              <div className="font-bold text-slate-200 text-sm">
                {item.title}
              </div>
            )}
            <p className="text-xs text-slate-400">{item.data}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg shadow-lg shadow-cyan-500/20">
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                Ahmed Shady Knowledge Base
              </h1>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Shield size={10} className="text-emerald-500" /> HSE DOMAIN
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg border border-slate-700">
            <Search size={16} className="ml-2 text-slate-400" />
            <input
              type="text"
              placeholder="Search formulas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-sm text-slate-200 w-48 focus:outline-none"
            />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-400"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 p-4 lg:p-6">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:h-auto lg:bg-transparent lg:border-none lg:w-64 shrink-0 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-4 lg:p-0 space-y-1">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3 pt-2">
              Modules
            </div>
            {MENU_ITEMS.map((item) => {
              const Icon = IconMap[item.icon];
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-slate-800 to-slate-800/50 text-cyan-400 shadow-md border border-slate-700/50"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      activeTab === item.id ? item.color : "text-slate-500"
                    }
                  />
                  {item.label}
                  {activeTab === item.id && (
                    <ChevronRight size={14} className="ml-auto opacity-50" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-8 px-4 lg:px-0">
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-4 border border-indigo-500/20">
              <div className="flex items-center gap-2 mb-2 text-indigo-300 font-bold text-sm">
                <CheckCircle size={16} /> Exam Ready
              </div>
              <p className="text-xs text-indigo-200/70">
                Includes hand-written notes, specific multipliers, and safety
                acronyms (BSAFE).
              </p>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
              {IconMap[
                MENU_ITEMS.find((m) => m.id === activeTab)?.icon || "FileText"
              ] &&
                React.createElement(
                  IconMap[
                    MENU_ITEMS.find((m) => m.id === activeTab)?.icon ||
                      "FileText"
                  ],
                  { className: "text-cyan-400" },
                )}
              {MENU_ITEMS.find((m) => m.id === activeTab)?.label}
            </h2>
            <div className="text-xs text-slate-500 font-mono hidden sm:block">
              REF: DOMAIN-1-COMPRESSED
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
            {filteredData.map((section, sIdx) => (
              <SectionCard
                key={`${activeTab}-${sIdx}`}
                title={section.title}
                icon={IconMap[section.icon]}
              >
                {section.content.map((item: any, iIdx: number) =>
                  renderContent(item, iIdx),
                )}
              </SectionCard>
            ))}
          </div>

          <footer className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
            <div className="flex items-center justify-center gap-2 mb-2 text-cyan-500 font-semibold">
              <Activity size={14} />
              <span>
                Knowledge Base & HSE Domain were revamped by J. SERVO.
              </span>
            </div>
            <p className="text-xs text-slate-600 font-mono">
              2026 Powered By J. SERVO ENGINEERING • www.jservo.com
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default SafetyKnowledgeBase;
