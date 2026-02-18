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
            key={row[0] + i}
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
        if (item.title && item.title.toLowerCase().includes(searchLower))
          return true;
        if (item.formula && item.formula.toLowerCase().includes(searchLower))
          return true;
        if (
          item.description &&
          item.description.toLowerCase().includes(searchLower)
        )
          return true;
        if (item.data && Array.isArray(item.data)) {
          return item.data.some((sub: any) =>
            String(sub).toLowerCase().includes(searchLower),
          );
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
      case "info-grid":
        return (
          <div key={idx} className="grid grid-cols-2 gap-2 mt-4">
            {item.data.map((tag: any, i: number) => (
              <InfoTag key={i} {...tag} />
            ))}
          </div>
        );
      case "visual":
        const VisualComp = (Visuals as any)[`Visual${item.data}`];
        return VisualComp ? <VisualComp key={idx} /> : null;
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
      case "table":
        return <DataTable key={idx} {...item} />;
      case "text":
        return (
          <div
            key={idx}
            className="bg-slate-900/50 p-2 rounded border-l-2 border-emerald-500"
          >
            <div className="font-bold text-slate-200 text-sm">{item.title}</div>
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
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
            {filteredData.map((section, sIdx) => (
              <SectionCard
                key={sIdx}
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
