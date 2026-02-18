import React, { useState } from "react";
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
  FileImage,
} from "lucide-react";

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

// --- Visual Components (Custom Diagrams) ---

const VisualTrigTriangle = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 text-blue-600">
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

const VisualReynolds = () => (
  <div className="space-y-2 mt-2">
    <div className="flex items-center gap-2">
      <span className="text-[10px] w-16 text-emerald-600 font-medium">
        Laminar
      </span>
      <div className="flex-1 h-6 bg-gray-100 rounded relative overflow-hidden border border-gray-200">
        <div className="absolute top-1 left-0 right-0 h-0.5 bg-emerald-500/50"></div>
        <div className="absolute top-3 left-0 right-0 h-0.5 bg-emerald-500/50"></div>
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-emerald-500/50"></div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[10px] w-16 text-red-600 font-medium">
        Turbulent
      </span>
      <div className="flex-1 h-6 bg-gray-100 rounded relative overflow-hidden border border-gray-200">
        <svg
          viewBox="0 0 100 20"
          className="w-full h-full opacity-50"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10"
            fill="none"
            stroke="#dc2626"
            strokeWidth="2"
          />
          <path
            d="M0,5 Q15,15 30,5 T60,5 T90,5"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  </div>
);

const VisualOhmsTriangle = () => (
  <div className="relative w-32 h-32 mx-auto my-2">
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
    >
      <path
        d="M 50 5 L 95 95 L 5 95 Z"
        fill="none"
        stroke="#ca8a04"
        strokeWidth="2"
      />
      <line x1="5" y1="55" x2="95" y2="55" stroke="#ca8a04" strokeWidth="2" />
      <line x1="50" y1="55" x2="50" y2="95" stroke="#ca8a04" strokeWidth="2" />
      <text
        x="50"
        y="40"
        textAnchor="middle"
        fill="#ca8a04"
        fontSize="20"
        fontWeight="bold"
      >
        V
      </text>
      <text
        x="30"
        y="85"
        textAnchor="middle"
        fill="#ca8a04"
        fontSize="20"
        fontWeight="bold"
      >
        I
      </text>
      <text
        x="70"
        y="85"
        textAnchor="middle"
        fill="#ca8a04"
        fontSize="20"
        fontWeight="bold"
      >
        R
      </text>
    </svg>
  </div>
);

const VisualShielding = () => (
  <div className="space-y-3 mt-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-gray-500 w-8">α</span>
      <div className="flex-1 flex items-center">
        <div className="h-0.5 bg-red-500 w-1/4"></div>
        <div className="h-4 w-1 bg-white border border-gray-300 shadow-sm"></div>
        <span className="text-[10px] ml-2 text-gray-500">Paper</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-gray-500 w-8">β</span>
      <div className="flex-1 flex items-center">
        <div className="h-0.5 bg-yellow-500 w-2/4"></div>
        <div className="h-4 w-2 bg-gray-200 border border-gray-300"></div>
        <span className="text-[10px] ml-2 text-gray-500">Plastic/Alum</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-gray-500 w-8">γ</span>
      <div className="flex-1 flex items-center">
        <div className="h-0.5 bg-purple-500 w-3/4"></div>
        <div className="h-4 w-4 bg-gray-400 border border-gray-500"></div>
        <span className="text-[10px] ml-2 text-gray-500">Lead</span>
      </div>
    </div>
  </div>
);

const VisualFanLaws = () => (
  <div className="mt-4 space-y-2">
    <div className="text-[10px] text-center text-gray-500 mb-1">
      Impact of Doubling RPM (2x Speed)
    </div>
    <div className="flex items-center gap-2">
      <div className="w-12 text-[10px] text-blue-600 font-medium">CFM (1x)</div>
      <div className="flex-1 bg-gray-200 rounded h-2 overflow-hidden">
        <div className="h-full bg-blue-500 w-1/4"></div>
      </div>
      <span className="text-[10px] w-6 text-right">2x</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-12 text-[10px] text-blue-600 font-medium">SP (2x)</div>
      <div className="flex-1 bg-gray-200 rounded h-2 overflow-hidden">
        <div className="h-full bg-blue-500 w-2/4"></div>
      </div>
      <span className="text-[10px] w-6 text-right">4x</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-12 text-[10px] text-blue-600 font-medium">HP (3x)</div>
      <div className="flex-1 bg-gray-200 rounded h-2 overflow-hidden">
        <div className="h-full bg-red-500 w-full"></div>
      </div>
      <span className="text-[10px] w-6 text-right text-red-600 font-bold">
        8x!
      </span>
    </div>
  </div>
);

const VisualBellCurve = () => (
  <div className="relative h-32 w-full mt-2">
    <svg viewBox="0 0 200 100" className="w-full h-full">
      <path
        d="M 10 90 Q 50 90 70 70 Q 100 10 130 70 Q 150 90 190 90"
        fill="none"
        stroke="#4f46e5"
        strokeWidth="2"
      />
      <line
        x1="100"
        y1="90"
        x2="100"
        y2="20"
        stroke="#4f46e5"
        strokeWidth="1"
        strokeDasharray="4"
      />
      <text x="100" y="98" textAnchor="middle" fontSize="8" fill="#64748b">
        μ (Mean)
      </text>
      <rect x="70" y="70" width="60" height="20" fill="#4f46e5" opacity="0.1" />
      <text x="130" y="65" fontSize="8" fill="#4f46e5">
        +1σ
      </text>
      <text x="70" y="65" fontSize="8" fill="#4f46e5" textAnchor="end">
        -1σ
      </text>
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600 font-bold text-xs">
      68%
    </div>
  </div>
);

// --- Reusable Layout Components ---

const SectionCard: React.FC<SectionProps> = ({
  title,
  children,
  className = "",
  icon: Icon,
}) => (
  <div
    className={`bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-gray-300 shadow-sm hover:shadow-md ${className}`}
  >
    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
      {Icon ? (
        <Icon size={16} className="text-blue-600" />
      ) : (
        <div className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.3)]" />
      )}
      <h3 className="font-bold text-gray-800">{title}</h3>
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
  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 group hover:border-blue-500/30 transition-colors">
    <div className="text-xs text-blue-600 font-medium tracking-wider uppercase mb-1 flex items-center gap-1">
      <Activity size={10} />
      {title}
    </div>
    <code className="block bg-white rounded px-2 py-1.5 font-mono text-lg text-emerald-700 overflow-x-auto border border-gray-200 shadow-inner">
      {formula}
    </code>
    {description && (
      <div className="text-sm text-gray-600 mt-2 flex items-start gap-1">
        <Info size={12} className="mt-0.5 shrink-0" />
        {description}
      </div>
    )}
    {note && (
      <div className="flex items-start gap-1.5 mt-2 text-xs text-amber-700 bg-amber-50 p-1.5 rounded border border-amber-200">
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
  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
    <table className="w-full text-sm text-left">
      <thead className="text-xs text-gray-500 uppercase bg-gray-50">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-2 border-b border-gray-200">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={i}
            className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            {row.map((cell, j) => (
              <td
                key={j}
                className={`px-4 py-2 ${highlightFirst && j === 0 ? "font-medium text-blue-600" : "text-gray-700"}`}
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
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    green: "bg-emerald-50 text-emerald-700 border-emerald-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    red: "bg-red-50 text-red-700 border-red-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
  };

  return (
    <div
      className={`flex flex-col p-2 rounded border ${colorClasses[color as keyof typeof colorClasses]} hover:scale-105 transition-transform cursor-default shadow-sm`}
    >
      <span className="text-[10px] uppercase tracking-wider opacity-70">
        {label}
      </span>
      <span className="font-mono font-medium text-sm">{value}</span>
    </div>
  );
};

// --- Main Application Component ---

const SafetyKnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState("math");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const menuItems = [
    {
      id: "math",
      label: "Mathematics",
      icon: Calculator,
      color: "text-blue-600",
    },
    { id: "chem", label: "Chemistry", icon: Atom, color: "text-purple-600" },
    {
      id: "phys",
      label: "Physics & Mech",
      icon: BookOpen,
      color: "text-emerald-600",
    },
    { id: "elec", label: "Electrical", icon: Zap, color: "text-yellow-600" },
    {
      id: "noise",
      label: "Noise & Hearing",
      icon: Volume2,
      color: "text-pink-600",
    },
    { id: "vent", label: "Ventilation", icon: Wind, color: "text-cyan-600" },
    { id: "rad", label: "Radiation", icon: Radio, color: "text-red-600" },
    {
      id: "therm",
      label: "Thermal Stress",
      icon: Thermometer,
      color: "text-orange-600",
    },
    {
      id: "econ",
      label: "Engineering Econ",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      id: "stat",
      label: "Safety Stats",
      icon: BarChart2,
      color: "text-indigo-600",
    },
    {
      id: "visuals",
      label: "Visual Resources",
      icon: FileImage,
      color: "text-orange-600",
    },
  ];

  // --- Content Renderers ---

  const renderMath = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
      <SectionCard title="Core Arithmetic" icon={Calculator}>
        <FormulaBox
          title="Order of Operations"
          formula="PEMDAS"
          description="Parentheses, Exponents, Multiplication/Division, Addition/Subtraction"
        />
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-blue-600 flex items-center gap-2">
            <TrendingUp size={14} /> Percentage Rules
          </h4>
          <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
            <li>
              <span className="text-emerald-600 font-medium">
                Part/Total = %
              </span>{" "}
              (e.g., 60/80 = 0.75 = 75%)
            </li>
            <li>If % is found: Multiply & Divide by 100</li>
            <li>If No %: Divide & Multiply by 100</li>
            <li>
              <span className="text-amber-600 font-medium">Calc Rule:</span> To
              convert % to decimal, move point 2 places left (35% → 0.35)
            </li>
          </ul>
        </div>
      </SectionCard>

      <SectionCard title="Geometry (2D & 3D)" icon={Layers}>
        <VisualTrigTriangle />
        <div className="grid grid-cols-2 gap-2 mt-4">
          <InfoTag label="Circle Area" value="πr²" color="green" />
          <InfoTag label="Circumference" value="πd or 2πr" color="green" />
          <InfoTag label="Triangle Area" value="½(b × h)" color="green" />
          <InfoTag label="Cylinder Vol" value="πr²h" color="blue" />
          <InfoTag label="Sphere Vol" value="4/3πr³" color="blue" />
          <InfoTag label="Cone Vol" value="1/3πr²h" color="blue" />
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-blue-600 mb-2">
            Trigonometry
          </h4>
          <div className="grid grid-cols-3 gap-2 text-center text-xs text-gray-700">
            <div className="bg-gray-50 p-2 rounded border border-gray-200 shadow-sm">
              sinθ = Opp/Hyp
            </div>
            <div className="bg-gray-50 p-2 rounded border border-gray-200 shadow-sm">
              cosθ = Adj/Hyp
            </div>
            <div className="bg-gray-50 p-2 rounded border border-gray-200 shadow-sm">
              tanθ = Opp/Adj
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-400 text-center font-mono">
            Pythagorean: a² + b² = c²
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Scientific Notation" icon={Activity}>
        <DataTable
          headers={["Prefix", "Symbol", "Power", "Value"]}
          data={[
            ["Giga", "G", "10⁹", "1,000,000,000"],
            ["Mega", "M", "10⁶", "1,000,000"],
            ["Kilo", "k", "10³", "1,000"],
            ["Milli", "m", "10⁻³", "0.001"],
            ["Micro", "μ", "10⁻⁶", "0.000001"],
            ["Nano", "n", "10⁻⁹", "0.000000001"],
          ]}
          highlightFirst
        />
        <div className="mt-2 text-xs text-amber-600 flex items-center gap-1.5 p-2 bg-amber-50 rounded border border-amber-100">
          <Info size={12} />
          <span>
            Calc Note: 6.02 x 10²³ → Enter 6.02, press EXP/EE, enter 23
          </span>
        </div>
      </SectionCard>
    </div>
  );

  const renderChem = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
      <SectionCard title="Fundamentals" icon={Atom}>
        <FormulaBox
          title="Density"
          formula="ρ = Mass / Volume"
          description="Water Density: 62.4 lb/ft³ or 1 g/cm³"
        />
        <FormulaBox
          title="Specific Gravity"
          formula="SG = ρ(sub) / ρ(H₂O)"
          description="SG < 1 Floats, SG > 1 Sinks"
        />
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-blue-600 mb-1">
            Molarity (M)
          </h4>
          <p className="text-sm text-gray-700">
            Moles of Solute / Liters of Solution
          </p>
          <div className="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-500 border border-gray-200 flex items-center gap-2">
            <div className="h-6 w-0.5 bg-purple-500"></div>
            Steps: 1. Balance Eq, 2. Get Molecular Wt, 3. Get Moles, 4. Solve
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Gas Laws" icon={Wind}>
        <div className="space-y-3">
          <FormulaBox
            title="Ideal Gas Law"
            formula="PV = nRT"
            note="@STP: T=0°C, P=1atm, Vol=22.4L"
          />
          <FormulaBox
            title="Combined Gas Law"
            formula="(P₁V₁)/T₁ = (P₂V₂)/T₂"
            description="Temp must be absolute (Kelvin/Rankine)"
          />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <InfoTag label="Boyle's Law" value="P₁V₁ = P₂V₂" color="purple" />
            <InfoTag
              label="Charles' Law"
              value="V₁/T₁ = V₂/T₂"
              color="purple"
            />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Conversions & Bonding" icon={Layers}>
        <FormulaBox
          title="PPM to mg/m³"
          formula="mg/m³ = (PPM × MW) / 24.45"
          note="At NTP (25°C, 1 atm)"
        />
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-semibold text-emerald-600">
            Chemical Bonding
          </h4>
          <div className="bg-gray-50 p-2 rounded border-l-2 border-emerald-500 hover:bg-gray-100 transition-colors">
            <span className="font-bold text-gray-800 block">Ionic</span>
            <span className="text-xs text-gray-500">
              Transfer of electrons. Strong bond (e.g., NaCl).
            </span>
          </div>
          <div className="bg-gray-50 p-2 rounded border-l-2 border-blue-500 hover:bg-gray-100 transition-colors">
            <span className="font-bold text-gray-800 block">Covalent</span>
            <span className="text-xs text-gray-500">
              Sharing of electrons. Weaker than ionic (e.g., H₂O).
            </span>
          </div>
          <div className="text-[10px] text-gray-400 mt-2 bg-gray-50 p-2 rounded border border-gray-200">
            *Oxidation = Loss of Electrons (OIL) | *Reduction = Gain of
            Electrons (RIG)
          </div>
        </div>
      </SectionCard>
    </div>
  );

  const renderPhys = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
      <SectionCard title="Mechanics & Motion" icon={Activity}>
        <FormulaBox
          title="Newton's 2nd Law"
          formula="F = ma"
          description="Force = Mass × Acceleration"
        />
        <div className="grid grid-cols-2 gap-2 my-3">
          <InfoTag label="Kinetic Energy" value="KE = ½mv²" color="green" />
          <InfoTag label="Potential Energy" value="PE = mgh" color="green" />
        </div>
        <div className="p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
          <h4 className="text-sm font-semibold text-blue-600 mb-2">
            Equations of Motion
          </h4>
          <ul className="text-xs font-mono text-gray-700 space-y-1">
            <li>V = V₀ + at (No Distance)</li>
            <li>S = V₀t + ½at² (No Final V)</li>
            <li>V² = V₀² + 2aS (No Time)</li>
          </ul>
        </div>
      </SectionCard>

      <SectionCard title="Hydraulics & Fluids" icon={Wind}>
        <FormulaBox
          title="Pressure"
          formula="P = F / A"
          description="P = ρgh (Fluid Pressure)"
        />
        <FormulaBox
          title="Bernoulli's Principle"
          formula="P + ½ρv² + ρgh = Const"
        />
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-orange-600">
            Reynolds Number (Re)
          </h4>
          <VisualReynolds />
        </div>
        <div className="mt-3">
          <FormulaBox
            title="Torricelli's Law"
            formula="V = 1.2 √(gh)"
            note="Or V = √(2gh)"
          />
        </div>
      </SectionCard>

      <SectionCard title="Special Calcs: Dike Height" icon={Layers}>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="font-semibold text-blue-600 mb-1 flex items-center gap-2">
            <AlertTriangle size={14} /> Worst Case Scenario:
          </div>
          <ol className="list-decimal pl-4 space-y-2 text-xs bg-gray-50 p-3 rounded border border-gray-200">
            <li>Only largest tank calculated.</li>
            <li>
              Subtract volume of other tanks (displacement) from available area.
            </li>
            <li>
              <code className="text-emerald-700 font-bold">
                Vol(req) = Area(avail) × H
              </code>
            </li>
            <li>
              <code className="text-emerald-700 font-bold">
                H = Vol(req) / (L×W - Displacement)
              </code>
            </li>
          </ol>
          <div className="mt-2 text-xs text-amber-700 p-2 bg-amber-50 rounded border border-amber-200 flex items-center gap-2 shadow-sm">
            <CheckCircle size={12} />
            Safety Factor: If required, add volume before calculating H.
          </div>
        </div>
      </SectionCard>
    </div>
  );

  const renderElec = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
      <SectionCard title="Fundamental Laws" icon={Zap}>
        <VisualOhmsTriangle />
        <div className="grid grid-cols-2 gap-3 mt-4">
          <FormulaBox title="DC Power" formula="P = I × V" />
          <FormulaBox title="AC Power" formula="P = V I PF" />
        </div>
        <div className="mt-3">
          <FormulaBox
            title="Resistance"
            formula="R = ρ(L/A)"
            description="ρ=Resistivity, L=Length, A=Area"
          />
        </div>
      </SectionCard>

      <SectionCard title="Hazards: BSAFE Model" icon={AlertTriangle}>
        <div className="space-y-2">
          {[
            { l: "B", t: "Burns", d: "Shock related, Arc, Thermal contact" },
            { l: "S", t: "Shock", d: "Current passing through body" },
            {
              l: "A",
              t: "Arc-Blast",
              d: "Pressure wave, high heat, molten metal",
            },
            { l: "F", t: "Fire", d: "Overloading, defective equipment" },
            { l: "E", t: "Explosions", d: "Ignition of vapors/dusts" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-orange-600/10 text-orange-600 font-bold rounded-full border border-orange-600/30">
                {item.l}
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm">{item.t}</div>
                <div className="text-[10px] text-gray-500">{item.d}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200">
          <h4 className="text-xs font-bold text-red-600 mb-1 flex items-center gap-2">
            <Gauge size={12} /> Shock Thresholds
          </h4>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden flex mt-2 mb-1">
            <div className="w-[10%] bg-emerald-500"></div>
            <div className="w-[20%] bg-yellow-500"></div>
            <div className="w-[30%] bg-orange-500"></div>
            <div className="w-[40%] bg-red-600"></div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 font-mono">
            <span>1mA</span>
            <span>25mA</span>
            <span>150mA+</span>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Circuits & Controls" icon={Activity}>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-600 mb-2">
            Resistors
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-gray-700">
            <div className="p-2 bg-gray-50 rounded border border-gray-200 shadow-sm">
              Series:
              <br />
              Rt = R1 + R2...
            </div>
            <div className="p-2 bg-gray-50 rounded border border-gray-200 shadow-sm">
              Parallel:
              <br />
              1/Rt = 1/R1 + 1/R2...
            </div>
          </div>
          <div className="mt-2 text-[10px] text-amber-700 bg-amber-50 p-1.5 rounded border border-amber-100">
            *Capacitors are opposite!
          </div>
        </div>

        <h4 className="text-sm font-semibold text-blue-600 mb-2">Controls</h4>
        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
          <li>
            <span className="text-emerald-700 font-bold">GFCI:</span> Protects
            People (Trips @ 5mA)
          </li>
          <li>
            <span className="text-emerald-700 font-bold">AFCI:</span> Protects
            Structures (Fire/Arcing)
          </li>
          <li>
            <span className="text-emerald-700 font-bold">Bonding:</span>{" "}
            Equalizes potential
          </li>
          <li>
            <span className="text-emerald-700 font-bold">Grounding:</span> Path
            to earth
          </li>
        </ul>
      </SectionCard>
    </div>
  );

  const renderNoise = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
      <SectionCard title="Sound Physics" icon={Volume2}>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <InfoTag label="Speed (Air)" value="1,126 ft/s" color="blue" />
          <InfoTag label="Speed (Steel)" value="20,000 ft/s" color="blue" />
        </div>
        <FormulaBox title="Sound Pressure Level" formula="Lp = 20 log(P/P₀)" />
        <FormulaBox
          title="Inverse Square Law"
          formula="L₂ = L₁ - 20 log(d₂/d₁)"
          description="-6 dB per doubled distance"
        />
      </SectionCard>

      <SectionCard title="Calculations & NRR" icon={Calculator}>
        <h4 className="text-sm font-semibold text-pink-600 mb-2">
          Adding Decibels (Rule of Thumb)
        </h4>
        <DataTable
          headers={["Difference", "Add to Higher"]}
          data={[
            ["0 - 1 dB", "+ 3 dB"],
            ["2 - 4 dB", "+ 2 dB"],
            ["5 - 9 dB", "+ 1 dB"],
            ["10+ dB", "+ 0 dB"],
          ]}
        />
        <div className="mt-4 p-3 bg-pink-50 border border-pink-200 rounded shadow-sm">
          <h4 className="text-sm font-semibold text-pink-700 mb-1">
            Hearing Protection (NRR)
          </h4>
          <p className="text-xs text-gray-600 mb-2">
            Standard Derating Formula (OSHA):
          </p>
          <code className="block bg-white border border-gray-200 p-2 rounded text-emerald-700 font-mono text-center mb-2 shadow-inner">
            Actual = (NRR - 7) / 2
          </code>
          <p className="text-xs text-gray-400">
            Example: NRR 27 → (27-7)/2 = 10dB reduction
          </p>
        </div>
      </SectionCard>

      <SectionCard title="OSHA vs NIOSH Standards" icon={Shield}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-bold text-orange-600 mb-1">
              OSHA (PEL)
            </h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>Limit: 90 dBA (8hr)</li>
              <li>Exchange Rate: 5 dB</li>
              <li>Action Level: 85 dBA</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-emerald-600 mb-1">
              NIOSH (REL)
            </h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>Limit: 85 dBA (8hr)</li>
              <li>Exchange Rate: 3 dB</li>
              <li>More conservative</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-blue-600 mb-2">
            Dose Calculation
          </h4>
          <FormulaBox
            title="Dose"
            formula="D = 100 × (C1/T1 + ...)"
            description="C=Actual Time, T=Allowed Time"
          />
        </div>
      </SectionCard>
    </div>
  );

  const renderVent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
      <SectionCard title="Flow Mechanics" icon={Wind}>
        <FormulaBox
          title="Continuity Eq"
          formula="Q = V × A"
          description="Flow(cfm) = Vel(fpm) × Area(ft²)"
        />
        <FormulaBox
          title="Velocity from VP"
          formula="V = 4005 × √VP"
          description="Standard Air Conditions"
        />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <InfoTag label="Total Pressure" value="TP = SP + VP" color="cyan" />
          <InfoTag
            label="Room Changes"
            value="N = (60 × Q) / Vol"
            color="cyan"
          />
        </div>
      </SectionCard>

      <SectionCard title="Fan Laws" icon={Activity}>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-1">
            <div className="text-blue-600 font-bold w-12">CFM</div>
            <span className="text-xs">Directly with RPM</span>
            <code className="ml-auto text-[10px] bg-gray-50 border border-gray-200 p-1 rounded text-emerald-700 font-medium">
              Q2 = Q1(N2/N1)
            </code>
          </div>
          <div className="flex items-center gap-2 border-b border-gray-100 pb-1">
            <div className="text-blue-600 font-bold w-12">SP/VP</div>
            <span className="text-xs">Square of RPM</span>
            <code className="ml-auto text-[10px] bg-gray-50 border border-gray-200 p-1 rounded text-emerald-700 font-medium">
              P2 = P1(N2/N1)²
            </code>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-blue-600 font-bold w-12">HP</div>
            <span className="text-xs">Cube of RPM</span>
            <code className="ml-auto text-[10px] bg-gray-50 border border-gray-200 p-1 rounded text-emerald-700 font-medium">
              H2 = H1(N2/N1)³
            </code>
          </div>
        </div>
        <VisualFanLaws />
      </SectionCard>

      <SectionCard title="Dilution & Capture" icon={Layers}>
        <FormulaBox
          title="Concentration (Dilution)"
          formula="C = (G × 10⁶) / Q"
          note="G = Generation Rate"
        />
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-blue-600 mb-2">
            Capture Velocities
          </h4>
          <ul className="text-xs text-gray-700 space-y-1">
            <li className="flex justify-between border-b border-gray-100 pb-1">
              <span>Vapors/Gases</span>{" "}
              <span className="font-mono text-emerald-600 font-bold">
                1,000 fpm
              </span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-1">
              <span>Light Dust</span>{" "}
              <span className="font-mono text-emerald-600 font-bold">
                2,000 - 2,500 fpm
              </span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-1">
              <span>Heavy Dust</span>{" "}
              <span className="font-mono text-emerald-600 font-bold">
                4,000+ fpm
              </span>
            </li>
          </ul>
        </div>
      </SectionCard>
    </div>
  );

  const renderRad = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
      <SectionCard title="Ionizing Fundamentals" icon={Radio}>
        <h4 className="text-sm font-semibold text-red-600 mb-2">
          Shielding Effectiveness
        </h4>
        <VisualShielding />
        <div className="mt-4">
          <FormulaBox
            title="Inverse Square Law"
            formula="I₁ (d₁)² = I₂ (d₂)²"
            description="Double Dist = 1/4 Intensity"
          />
        </div>
      </SectionCard>

      <SectionCard title="Decay & Half Life" icon={Activity}>
        <FormulaBox title="Radioactive Decay" formula="Nt = N₀e^(-λt)" />
        <FormulaBox title="Half Life" formula="λ = 0.693 / t½" />
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded shadow-sm">
          <h4 className="text-sm font-semibold text-red-700 flex items-center gap-2">
            <Shield size={14} /> ALARA Principle
          </h4>
          <div className="flex justify-between mt-2 text-xs font-bold text-gray-700">
            <span className="bg-white border border-gray-200 p-1.5 rounded text-emerald-700 shadow-sm">
              TIME (↓)
            </span>
            <span className="bg-white border border-gray-200 p-1.5 rounded text-emerald-700 shadow-sm">
              DISTANCE (↑)
            </span>
            <span className="bg-white border border-gray-200 p-1.5 rounded text-emerald-700 shadow-sm">
              SHIELDING (↑)
            </span>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Lasers & Limits" icon={AlertTriangle}>
        <div className="space-y-2 mb-4">
          <h4 className="text-sm font-semibold text-blue-600">Laser Classes</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-emerald-50 text-emerald-700 p-2 rounded text-center border border-emerald-200 font-medium">
              Class 1: Safe
            </div>
            <div className="bg-yellow-50 text-yellow-700 p-2 rounded text-center border border-yellow-200 font-medium">
              Class 2: Blink
            </div>
            <div className="bg-orange-50 text-orange-700 p-2 rounded text-center border border-orange-200 font-medium">
              Class 3B: Eye Haz
            </div>
            <div className="bg-red-50 text-red-700 p-2 rounded text-center border border-red-200 font-medium">
              Class 4: Fire/Skin
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-3">
          <h4 className="text-sm font-semibold text-orange-600">
            OSHA Limits (Rem/Yr)
          </h4>
          <ul className="text-xs text-gray-700 mt-1 space-y-1">
            <li>
              Whole Body:{" "}
              <span className="text-emerald-700 font-mono font-bold">
                5 rem
              </span>
            </li>
            <li>
              Hands/Feet:{" "}
              <span className="text-emerald-700 font-mono font-bold">
                50 rem
              </span>
            </li>
            <li>
              Skin:{" "}
              <span className="text-emerald-700 font-mono font-bold">
                30 rem
              </span>
            </li>
          </ul>
        </div>
      </SectionCard>
    </div>
  );

  const renderTherm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
      <SectionCard title="Heat Stress (WBGT)" icon={Thermometer}>
        <FormulaBox
          title="Outdoor (Solar Load)"
          formula="WBGT = 0.7WB + 0.2GT + 0.1DB"
        />
        <FormulaBox title="Indoor (No Solar)" formula="WBGT = 0.7WB + 0.3GT" />
        <div className="mt-3 text-xs text-gray-700 space-y-1">
          <p>
            <span className="text-orange-600 font-bold">WB:</span> Wet Bulb
            (Humidity)
          </p>
          <p>
            <span className="text-orange-600 font-bold">GT:</span> Globe Temp
            (Radiant)
          </p>
          <p>
            <span className="text-orange-600 font-bold">DB:</span> Dry Bulb (Air
            Temp)
          </p>
        </div>
        <div className="mt-2 bg-gray-50 border border-gray-200 p-2 rounded text-xs text-amber-700 shadow-inner">
          Add +3.5°C for double layers, +5°C for impermeable suits.
        </div>
      </SectionCard>

      <SectionCard title="Metabolic Rates & Work" icon={Activity}>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-emerald-50 p-2 rounded border border-emerald-200 shadow-sm">
            <div className="text-emerald-600 text-sm font-bold">Light</div>
            <div className="text-gray-500 text-xs">&lt; 200 kcal</div>
          </div>
          <div className="bg-yellow-50 p-2 rounded border border-yellow-200 shadow-sm">
            <div className="text-yellow-600 text-sm font-bold">Med</div>
            <div className="text-gray-500 text-xs">200-350</div>
          </div>
          <div className="bg-red-50 p-2 rounded border border-red-200 shadow-sm">
            <div className="text-red-600 text-sm font-bold">Heavy</div>
            <div className="text-gray-500 text-xs">&gt; 350</div>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-blue-600 mb-1">
            Work/Rest Calc
          </h4>
          <FormulaBox
            title="Avg Metabolic Rate"
            formula="M(avg) = Σ(M × t) / Σt"
            note="Multiply result by 60/78 to convert min→hr"
          />
        </div>
      </SectionCard>

      <SectionCard title="Cold Stress (Wind Chill)" icon={Wind}>
        <FormulaBox
          title="Wind Chill Formula"
          formula="WC = 35.74 + 0.6215T - ..."
          description="Complex formula; use charts."
        />
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-semibold text-blue-600">Cold Injuries</h4>
          <div className="bg-blue-50 p-2 rounded text-xs border border-blue-100 hover:bg-blue-100 transition-colors shadow-sm">
            <span className="font-bold text-blue-700">Hypothermia:</span> Core
            temp drop. Mild (90-95F), Moderate (80-90F), Severe (&lt;80F).
          </div>
          <div className="bg-blue-50 p-2 rounded text-xs border border-blue-100 hover:bg-blue-100 transition-colors shadow-sm">
            <span className="font-bold text-blue-700">Frostbite:</span> Freezing
            of tissue. 1st (Surface) to 4th (Gangrene).
          </div>
          <div className="bg-blue-50 p-2 rounded text-xs border border-blue-100 hover:bg-blue-100 transition-colors shadow-sm">
            <span className="font-bold text-blue-700">Trench Foot:</span>{" "}
            Non-freezing, wet/cold exposure.
          </div>
        </div>
      </SectionCard>
    </div>
  );

  const renderEcon = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
      <SectionCard title="Interest Formulas" icon={DollarSign}>
        <FormulaBox title="Simple Interest" formula="I = P × n × i" />
        <FormulaBox
          title="Compound Amount"
          formula="F = P(1 + i)ⁿ"
          description="Single Payment Compound Amount"
        />
        <FormulaBox
          title="Present Worth"
          formula="P = F(1 + i)⁻ⁿ"
          description="Single Payment Present Worth"
        />
      </SectionCard>

      <SectionCard title="Annuities (The 6 Factors)" icon={Layers}>
        <div className="space-y-3">
          <div>
            <div className="text-xs text-emerald-700 font-bold mb-1">
              Uniform Series Compound Amount (F/A)
            </div>
            <code className="block bg-gray-50 border border-gray-200 text-xs text-gray-700 p-1.5 rounded font-mono shadow-inner">
              F = A [((1+i)ⁿ - 1) / i]
            </code>
          </div>
          <div>
            <div className="text-xs text-emerald-700 font-bold mb-1">
              Sinking Fund (A/F)
            </div>
            <code className="block bg-gray-50 border border-gray-200 text-xs text-gray-700 p-1.5 rounded font-mono shadow-inner">
              A = F [i / ((1+i)ⁿ - 1)]
            </code>
          </div>
          <div>
            <div className="text-xs text-emerald-700 font-bold mb-1">
              Capital Recovery (A/P)
            </div>
            <code className="block bg-gray-50 border border-gray-200 text-xs text-gray-700 p-1.5 rounded font-mono shadow-inner">
              A = P [(i(1+i)ⁿ) / ((1+i)ⁿ - 1)]
            </code>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Analysis Metrics" icon={BarChart2}>
        <div className="space-y-3">
          <FormulaBox
            title="ROI"
            formula="(Gain - Cost) / Cost"
            description="Return on Investment %"
          />
          <div className="p-3 bg-gray-50 rounded border border-gray-200 shadow-inner">
            <h4 className="text-sm font-semibold text-emerald-700 mb-1">
              Cost Benefit Analysis (CBA)
            </h4>
            <p className="text-xs text-gray-500">
              Ratio of Benefits to Costs. &gt;1 is good. Includes tangible and
              intangible factors.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 shadow-inner">
            <h4 className="text-sm font-semibold text-emerald-700 mb-1">
              Total Cost of Risk
            </h4>
            <ul className="text-xs text-gray-500 list-disc pl-4">
              <li>Insurance Premiums</li>
              <li>Retained Losses</li>
              <li>Risk Control Costs</li>
              <li>Admin Costs</li>
            </ul>
          </div>
        </div>
      </SectionCard>
    </div>
  );

  const renderStat = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
      <SectionCard title="Descriptive Stats" icon={BarChart2}>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <InfoTag label="Mean" value="Avg (μ)" />
          <InfoTag label="Median" value="Middle" />
          <InfoTag label="Mode" value="Freq" />
        </div>
        <FormulaBox
          title="Standard Deviation"
          formula="σ = √[Σ(x-μ)² / N]"
          description="Root Mean Square Deviation"
        />
        <FormulaBox
          title="Z-Score"
          formula="Z = (x - μ) / σ"
          description="How many std devs away from mean?"
        />
      </SectionCard>

      <SectionCard title="Normal Distribution" icon={Activity}>
        <VisualBellCurve />
        <div className="space-y-1 text-xs text-gray-700 mt-2">
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span>±1σ</span>{" "}
            <span className="font-bold text-indigo-600">68.2%</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span>±2σ</span>{" "}
            <span className="font-bold text-indigo-600">95.4%</span>
          </div>
          <div className="flex justify-between">
            <span>±3σ</span>{" "}
            <span className="font-bold text-indigo-600">99.7%</span>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Correlation & Chi" icon={Layers}>
        <FormulaBox
          title="Chi-Square"
          formula="χ² = Σ[(O-E)² / E]"
          description="O=Observed, E=Expected"
        />
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-indigo-600 mb-1">
            Spearman Coeff
          </h4>
          <p className="text-xs text-gray-500">
            Used for ranked variables. Range: -1 to +1.
          </p>
          <ul className="text-xs text-gray-500 mt-2 list-decimal pl-4">
            <li>Rank variables</li>
            <li>Calculate difference (d)</li>
            <li>Apply formula: 1 - (6Σd² / n(n²-1))</li>
          </ul>
        </div>
      </SectionCard>
    </div>
  );

  const renderVisuals = () => (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fadeIn">
      <SectionCard title="Advanced Science & Math Mindmap" icon={Layers}>
        <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
          <img
            src="/assets/mindmap.png"
            alt="Science and Math Mindmap"
            className="w-full h-auto cursor-zoom-in hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-100 shadow-sm">
          <h4 className="text-sm font-bold text-blue-800 mb-1">
            NotebookLM Intelligence
          </h4>
          <p className="text-xs text-blue-700/80">
            A comprehensive visual topology for Domain 1 principles.
          </p>
        </div>
      </SectionCard>

      <SectionCard title="BSAFE Framework Visual" icon={Shield}>
        <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
          <img
            src="/assets/bsafe-framework.png"
            alt="BSAFE Framework Diagram"
            className="w-full h-auto cursor-zoom-in hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="mt-4 p-3 bg-orange-50 rounded border border-orange-100 shadow-sm">
          <h4 className="text-sm font-bold text-orange-800 mb-1">
            Hazard Identification HUD
          </h4>
          <p className="text-xs text-orange-700/80">
            Visual breakdown of the Burn, Shock, Arc, Fire, Explosion framework.
          </p>
        </div>
      </SectionCard>
    </div>
  );

  // --- Main Render Structure ---

  const menuItems = [
    {
      id: "math",
      label: "Mathematics",
      icon: Calculator,
      color: "text-blue-600",
    },
    { id: "chem", label: "Chemistry", icon: Atom, color: "text-purple-600" },
    {
      id: "phys",
      label: "Physics & Mech",
      icon: BookOpen,
      color: "text-emerald-600",
    },
    { id: "elec", label: "Electrical", icon: Zap, color: "text-yellow-600" },
    {
      id: "noise",
      label: "Noise & Hearing",
      icon: Volume2,
      color: "text-pink-600",
    },
    { id: "vent", label: "Ventilation", icon: Wind, color: "text-cyan-600" },
    { id: "rad", label: "Radiation", icon: Radio, color: "text-red-600" },
    {
      id: "therm",
      label: "Thermal Stress",
      icon: Thermometer,
      color: "text-orange-600",
    },
    {
      id: "econ",
      label: "Engineering Econ",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      id: "stat",
      label: "Safety Stats",
      icon: BarChart2,
      color: "text-indigo-600",
    },
    {
      id: "visuals",
      label: "Visual Resources",
      icon: FileImage,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-lg shadow-md shadow-blue-200">
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800">
                Ahmed Shady Knowledge Base
              </h1>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-1">
                <Shield size={10} className="text-emerald-500" /> HSE DOMAIN
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-gray-100 p-1 rounded-lg border border-gray-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
            <Search size={16} className="ml-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search formulas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-sm text-gray-800 w-48 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 p-4 lg:p-6">
        {/* Sidebar / Mobile Menu */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:h-auto lg:bg-transparent lg:border-none lg:w-64 shrink-0 shadow-xl lg:shadow-none ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-4 lg:p-0 space-y-1">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3 pt-2">
              Modules
            </div>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <item.icon
                  size={18}
                  className={
                    activeTab === item.id ? item.color : "text-gray-400"
                  }
                />
                {item.label}
                {activeTab === item.id && (
                  <ChevronRight size={14} className="ml-auto opacity-50" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 px-4 lg:px-0">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold text-sm">
                <FileText size={16} /> Original Source
              </div>
              <div className="space-y-2">
                <p className="text-[11px] text-blue-800/80 hover:text-blue-950 font-medium transition-colors cursor-default">
                  • Domain 1 - Advanced Sciences and Math (1-30)
                </p>
                <p className="text-[11px] text-blue-800/80 hover:text-blue-950 font-medium transition-colors cursor-default">
                  • Domain 1 - Advanced Sciences and Math (31-65)
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-gray-900/20 z-30 lg:hidden backdrop-blur-sm"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              {menuItems.find((m) => m.id === activeTab)?.icon &&
                React.createElement(
                  menuItems.find((m) => m.id === activeTab)!.icon,
                  {
                    className:
                      activeTab === activeTab
                        ? menuItems.find((m) => m.id === activeTab)!.color
                        : "text-blue-600",
                  },
                )}
              {menuItems.find((m) => m.id === activeTab)?.label}
            </h2>
            <div className="text-xs text-gray-400 font-mono hidden sm:block">
              REF: DOMAIN-1-COMPRESSED
            </div>
          </div>

          {activeTab === "math" && renderMath()}
          {activeTab === "chem" && renderChem()}
          {activeTab === "phys" && renderPhys()}
          {activeTab === "elec" && renderElec()}
          {activeTab === "noise" && renderNoise()}
          {activeTab === "vent" && renderVent()}
          {activeTab === "rad" && renderRad()}
          {activeTab === "therm" && renderTherm()}
          {activeTab === "econ" && renderEcon()}
          {activeTab === "stat" && renderStat()}
          {activeTab === "visuals" && renderVisuals()}

          <footer className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
            <div className="flex items-center justify-center gap-2 mb-2 text-blue-600 font-semibold">
              <Activity size={14} />
              <span>
                Knowledge Base & HSE Domain were generated by Ahmed Shady in
                Collaboration with Yousef Ali.
              </span>
            </div>
            <p className="text-xs text-gray-600 font-mono">
              2026 Powered By J. SERVO ENGINEERING • www.jservo.com
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default SafetyKnowledgeBase;
