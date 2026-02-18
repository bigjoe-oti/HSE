export const MENU_ITEMS = [
  {
    id: "math",
    label: "Mathematics",
    icon: "Calculator",
    color: "text-blue-400",
  },
  { id: "chem", label: "Chemistry", icon: "Atom", color: "text-purple-400" },
  {
    id: "phys",
    label: "Physics & Mech",
    icon: "BookOpen",
    color: "text-emerald-400",
  },
  { id: "elec", label: "Electrical", icon: "Zap", color: "text-yellow-400" },
  {
    id: "noise",
    label: "Noise & Hearing",
    icon: "Volume2",
    color: "text-pink-400",
  },
  { id: "vent", label: "Ventilation", icon: "Wind", color: "text-cyan-400" },
  { id: "rad", label: "Radiation", icon: "Radio", color: "text-red-400" },
  {
    id: "therm",
    label: "Thermal Stress",
    icon: "Thermometer",
    color: "text-orange-400",
  },
  {
    id: "econ",
    label: "Engineering Econ",
    icon: "DollarSign",
    color: "text-green-400",
  },
  {
    id: "stat",
    label: "Safety Stats",
    icon: "BarChart2",
    color: "text-indigo-400",
  },
];

export const KNOWLEDGE_BASE_DATA: Record<string, any[]> = {
  math: [
    {
      title: "Core Arithmetic",
      icon: "Calculator",
      content: [
        {
          type: "formula",
          title: "Order of Operations",
          formula: "PEMDAS",
          description:
            "Parentheses, Exponents, Multiplication/Division, Addition/Subtraction",
        },
        {
          type: "list",
          title: "Percentage Rules",
          data: [
            "Part/Total = % (e.g., 60/80 = 0.75 = 75%)",
            "If % is found: Multiply & Divide by 100",
            "If No %: Divide & Multiply by 100",
            "Calc Rule: To convert % to decimal, move point 2 places left (35% → 0.35)",
          ],
        },
      ],
    },
    {
      title: "Geometry (2D & 3D)",
      icon: "Layers",
      content: [
        { type: "visual", data: "TrigTriangle" },
        {
          type: "info-grid",
          data: [
            { label: "Circle Area", value: "πr²", color: "green" },
            { label: "Circumference", value: "πd or 2πr", color: "green" },
            { label: "Triangle Area", value: "½(b × h)", color: "green" },
            { label: "Cylinder Vol", value: "πr²h", color: "blue" },
            { label: "Sphere Vol", value: "4/3πr³", color: "blue" },
            { label: "Cone Vol", value: "1/3πr²h", color: "blue" },
          ],
        },
        {
          type: "text-grid",
          title: "Trigonometry",
          data: ["sinθ = Opp/Hyp", "cosθ = Adj/Hyp", "tanθ = Opp/Adj"],
          footer: "Pythagorean: a² + b² = c²",
        },
      ],
    },
    {
      title: "Scientific Notation",
      icon: "Activity",
      content: [
        {
          type: "table",
          headers: ["Prefix", "Symbol", "Power", "Value"],
          highlightFirst: true,
          data: [
            ["Giga", "G", "10⁹", "1,000,000,000"],
            ["Mega", "M", "10⁶", "1,000,000"],
            ["Kilo", "k", "10³", "1,000"],
            ["Milli", "m", "10⁻³", "0.001"],
            ["Micro", "μ", "10⁻⁶", "0.000001"],
            ["Nano", "n", "10⁻⁹", "0.000000001"],
          ],
        },
        {
          type: "note",
          data: "Calc Note: 6.02 x 10²³ → Enter 6.02, press EXP/EE, enter 23",
        },
      ],
    },
  ],
  chem: [
    {
      title: "Fundamentals",
      icon: "Atom",
      content: [
        {
          type: "formula",
          title: "Density",
          formula: "ρ = Mass / Volume",
          description: "Water Density: 62.4 lb/ft³ or 1 g/cm³",
        },
        {
          type: "formula",
          title: "Specific Gravity",
          formula: "SG = ρ(sub) / ρ(H₂O)",
          description: "SG < 1 Floats, SG > 1 Sinks",
        },
        {
          type: "molarity",
          title: "Molarity (M)",
          data: "Moles of Solute / Liters of Solution",
          steps: ["Balance Eq", "Get Molecular Wt", "Get Moles", "Solve"],
        },
      ],
    },
    {
      title: "Gas Laws",
      icon: "Wind",
      content: [
        {
          type: "formula",
          title: "Ideal Gas Law",
          formula: "PV = nRT",
          note: "@STP: T=0°C, P=1atm, Vol=22.4L",
        },
        {
          type: "formula",
          title: "Combined Gas Law",
          formula: "(P₁V₁)/T₁ = (P₂V₂)/T₂",
          description: "Temp must be absolute (Kelvin/Rankine)",
        },
        {
          type: "info-grid",
          data: [
            { label: "Boyle's Law", value: "P₁V₁ = P₂V₂", color: "purple" },
            { label: "Charles' Law", value: "V₁/T₁ = V₂/T₂", color: "purple" },
          ],
        },
      ],
    },
    {
      title: "Conversions & Bonding",
      icon: "Layers",
      content: [
        {
          type: "formula",
          title: "PPM to mg/m³",
          formula: "mg/m³ = (PPM × MW) / 24.45",
          note: "At NTP (25°C, 1 atm)",
        },
        {
          type: "bonding",
          title: "Chemical Bonding",
          data: [
            {
              type: "Ionic",
              color: "emerald",
              desc: "Transfer of electrons. Strong bond (e.g., NaCl).",
            },
            {
              type: "Covalent",
              color: "blue",
              desc: "Sharing of electrons. Weaker than ionic (e.g., H₂O).",
            },
          ],
          footer:
            "*Oxidation = Loss of Electrons (OIL) | *Reduction = Gain of Electrons (RIG)",
        },
      ],
    },
  ],
  phys: [
    {
      title: "Mechanics & Motion",
      icon: "Activity",
      content: [
        {
          type: "formula",
          title: "Newton's 2nd Law",
          formula: "F = ma",
          description: "Force = Mass × Acceleration",
        },
        {
          type: "info-grid",
          data: [
            { label: "Kinetic Energy", value: "KE = ½mv²", color: "green" },
            { label: "Potential Energy", value: "PE = mgh", color: "green" },
          ],
        },
        {
          type: "list-mono",
          title: "Equations of Motion",
          data: [
            "V = V₀ + at (No Distance)",
            "S = V₀t + ½at² (No Final V)",
            "V² = V₀² + 2aS (No Time)",
          ],
        },
      ],
    },
    {
      title: "Hydraulics & Fluids",
      icon: "Wind",
      content: [
        {
          type: "formula",
          title: "Pressure",
          formula: "P = F / A",
          description: "P = ρgh (Fluid Pressure)",
        },
        {
          type: "formula",
          title: "Bernoulli's Principle",
          formula: "P + ½ρv² + ρgh = Const",
        },
        { type: "visual", title: "Reynolds Number (Re)", data: "Reynolds" },
        {
          type: "formula",
          title: "Torricelli's Law",
          formula: "V = 1.2 √(gh)",
          note: "Or V = √(2gh)",
        },
      ],
    },
    {
      title: "Special Calcs: Dike Height",
      icon: "Layers",
      content: [
        {
          type: "dike-calc",
          title: "Worst Case Scenario:",
          data: [
            "Only largest tank calculated.",
            "Subtract volume of other tanks (displacement) from available area.",
            "Vol(req) = Area(avail) × H",
            "H = Vol(req) / (L×W - Displacement)",
          ],
          note: "Safety Factor: If required, add volume before calculating H.",
        },
      ],
    },
  ],
  elec: [
    {
      title: "Fundamental Laws",
      icon: "Zap",
      content: [
        { type: "visual", data: "OhmsTriangle" },
        {
          type: "formula-grid",
          data: [
            { title: "DC Power", formula: "P = I × V" },
            { title: "AC Power", formula: "P = V I PF" },
          ],
        },
        {
          type: "formula",
          title: "Resistance",
          formula: "R = ρ(L/A)",
          description: "ρ=Resistivity, L=Length, A=Area",
        },
      ],
    },
    {
      title: "Hazards: BSAFE Model",
      icon: "AlertTriangle",
      content: [
        {
          type: "bsafe",
          data: [
            { l: "B", t: "Burns", d: "Shock related, Arc, Thermal contact" },
            { l: "S", t: "Shock", d: "Current passing through body" },
            {
              l: "A",
              t: "Arc-Blast",
              d: "Pressure wave, high heat, molten metal",
            },
            { l: "F", t: "Fire", d: "Overloading, defective equipment" },
            { l: "E", t: "Explosions", d: "Ignition of vapors/dusts" },
          ],
        },
        {
          type: "shock-thresholds",
          title: "Shock Thresholds",
          data: ["1mA", "25mA", "150mA+"],
        },
      ],
    },
    {
      title: "Circuits & Controls",
      icon: "Activity",
      content: [
        {
          type: "text-grid",
          title: "Resistors",
          data: ["Series: Rt = R1 + R2...", "Parallel: 1/Rt = 1/R1 + 1/R2..."],
          footer: "*Capacitors are opposite!",
        },
        {
          type: "list-emerald",
          title: "Controls",
          data: [
            "GFCI: Protects People (Trips @ 5mA)",
            "AFCI: Protects Structures (Fire/Arcing)",
            "Bonding: Equalizes potential",
            "Grounding: Path to earth",
          ],
        },
      ],
    },
  ],
  noise: [
    {
      title: "Sound Physics",
      icon: "Volume2",
      content: [
        {
          type: "info-grid-mb",
          data: [
            { label: "Speed (Air)", value: "1,126 ft/s", color: "blue" },
            { label: "Speed (Steel)", value: "20,000 ft/s", color: "blue" },
          ],
        },
        {
          type: "formula",
          title: "Sound Pressure Level",
          formula: "Lp = 20 log(P/P₀)",
        },
        {
          type: "formula",
          title: "Inverse Square Law",
          formula: "L₂ = L₁ - 20 log(d₂/d₁)",
          description: "-6 dB per doubled distance",
        },
      ],
    },
    {
      title: "Calculations & NRR",
      icon: "Calculator",
      content: [
        {
          type: "table",
          title: "Adding Decibels (Rule of Thumb)",
          headers: ["Difference", "Add to Higher"],
          data: [
            ["0 - 1 dB", "+ 3 dB"],
            ["2 - 4 dB", "+ 2 dB"],
            ["5 - 9 dB", "+ 1 dB"],
            ["10+ dB", "+ 0 dB"],
          ],
        },
        {
          type: "nrr-box",
          title: "Hearing Protection (NRR)",
          formula: "Actual = (NRR - 7) / 2",
          description: "Standard Derating Formula (OSHA):",
          note: "Example: NRR 27 → (27-7)/2 = 10dB reduction",
        },
      ],
    },
    {
      title: "OSHA vs NIOSH Standards",
      icon: "Shield",
      content: [
        {
          type: "standards-grid",
          data: [
            {
              title: "OSHA (PEL)",
              color: "orange",
              list: [
                "Limit: 90 dBA (8hr)",
                "Exchange Rate: 5 dB",
                "Action Level: 85 dBA",
              ],
            },
            {
              title: "NIOSH (REL)",
              color: "emerald",
              list: [
                "Limit: 85 dBA (8hr)",
                "Exchange Rate: 3 dB",
                "More conservative",
              ],
            },
          ],
        },
        {
          type: "formula",
          title: "Dose Calculation",
          formula: "D = 100 × (C1/T1 + ...)",
          description: "C=Actual Time, T=Allowed Time",
        },
      ],
    },
  ],
  vent: [
    {
      title: "Flow Mechanics",
      icon: "Wind",
      content: [
        {
          type: "formula",
          title: "Continuity Eq",
          formula: "Q = V × A",
          description: "Flow(cfm) = Vel(fpm) × Area(ft²)",
        },
        {
          type: "formula",
          title: "Velocity from VP",
          formula: "V = 4005 × √VP",
          description: "Standard Air Conditions",
        },
        {
          type: "info-grid",
          data: [
            { label: "Total Pressure", value: "TP = SP + VP", color: "cyan" },
            {
              label: "Room Changes",
              value: "N = (60 × Q) / Vol",
              color: "cyan",
            },
          ],
        },
      ],
    },
    {
      title: "Fan Laws",
      icon: "Activity",
      content: [
        {
          type: "fan-laws-list",
          data: [
            {
              label: "CFM",
              desc: "Directly with RPM",
              formula: "Q2 = Q1(N2/N1)",
            },
            {
              label: "SP/VP",
              desc: "Square of RPM",
              formula: "P2 = P1(N2/N1)²",
            },
            { label: "HP", desc: "Cube of RPM", formula: "H2 = H1(N2/N1)³" },
          ],
        },
        { type: "visual", data: "FanLaws" },
      ],
    },
    {
      title: "Dilution & Capture",
      icon: "Layers",
      content: [
        {
          type: "formula",
          title: "Concentration (Dilution)",
          formula: "C = (G × 10⁶) / Q",
          note: "G = Generation Rate",
        },
        {
          type: "capture-list",
          title: "Capture Velocities",
          data: [
            { label: "Vapors/Gases", value: "1,000 fpm" },
            { label: "Light Dust", value: "2,000 - 2,500 fpm" },
            { label: "Heavy Dust", value: "4,000+ fpm" },
          ],
        },
      ],
    },
  ],
  rad: [
    {
      title: "Ionizing Fundamentals",
      icon: "Radio",
      content: [
        { type: "visual", title: "Shielding Effectiveness", data: "Shielding" },
        {
          type: "formula",
          title: "Inverse Square Law",
          formula: "I₁ (d₁)² = I₂ (d₂)²",
          description: "Double Dist = 1/4 Intensity",
        },
      ],
    },
    {
      title: "Decay & Half Life",
      icon: "Activity",
      content: [
        {
          type: "formula",
          title: "Radioactive Decay",
          formula: "Nt = N₀e^(-λt)",
        },
        { type: "formula", title: "Half Life", formula: "λ = 0.693 / t½" },
        {
          type: "alara-box",
          title: "ALARA Principle",
          data: ["TIME (↓)", "DISTANCE (↑)", "SHIELDING (↑)"],
        },
      ],
    },
    {
      title: "Lasers & Limits",
      icon: "AlertTriangle",
      content: [
        {
          type: "laser-grid",
          title: "Laser Classes",
          data: [
            { label: "Class 1: Safe", color: "emerald" },
            { label: "Class 2: Blink", color: "yellow" },
            { label: "Class 3B: Eye Haz", color: "orange" },
            { label: "Class 4: Fire/Skin", color: "red" },
          ],
        },
        {
          type: "limits-list",
          title: "OSHA Limits (Rem/Yr)",
          data: [
            { label: "Whole Body", value: "5 rem" },
            { label: "Hands/Feet", value: "50 rem" },
            { label: "Skin", value: "30 rem" },
          ],
        },
      ],
    },
  ],
  therm: [
    {
      title: "Heat Stress (WBGT)",
      icon: "Thermometer",
      content: [
        {
          type: "formula",
          title: "Outdoor (Solar Load)",
          formula: "WBGT = 0.7WB + 0.2GT + 0.1DB",
        },
        {
          type: "formula",
          title: "Indoor (No Solar)",
          formula: "WBGT = 0.7WB + 0.3GT",
        },
        {
          type: "wbgt-legend",
          data: [
            { label: "WB", desc: "Wet Bulb (Humidity)" },
            { label: "GT", desc: "Globe Temp (Radiant)" },
            { label: "DB", desc: "Dry Bulb (Air Temp)" },
          ],
          note: "Add +3.5°C for double layers, +5°C for impermeable suits.",
        },
      ],
    },
    {
      title: "Metabolic Rates & Work",
      icon: "Activity",
      content: [
        {
          type: "met-grid",
          data: [
            { label: "Light", value: "< 200 kcal", color: "emerald" },
            { label: "Med", value: "200-350", color: "yellow" },
            { label: "Heavy", value: "> 350", color: "red" },
          ],
        },
        {
          type: "formula",
          title: "Avg Metabolic Rate",
          formula: "M(avg) = Σ(M × t) / Σt",
          note: "Multiply result by 60/78 to convert min→hr",
        },
      ],
    },
    {
      title: "Cold Stress (Wind Chill)",
      icon: "Wind",
      content: [
        {
          type: "formula",
          title: "Wind Chill Formula",
          formula: "WC = 35.74 + 0.6215T - ...",
          description: "Complex formula; use charts.",
        },
        {
          type: "cold-list",
          title: "Cold Injuries",
          data: [
            {
              label: "Hypothermia",
              desc: "Core temp drop. Mild (90-95F), Moderate (80-90F), Severe (<80F).",
            },
            {
              label: "Frostbite",
              desc: "Freezing of tissue. 1st (Surface) to 4th (Gangrene).",
            },
            { label: "Trench Foot", desc: "Non-freezing, wet/cold exposure." },
          ],
        },
      ],
    },
  ],
  econ: [
    {
      title: "Interest Formulas",
      icon: "DollarSign",
      content: [
        { type: "formula", title: "Simple Interest", formula: "I = P × n × i" },
        {
          type: "formula",
          title: "Compound Amount",
          formula: "F = P(1 + i)ⁿ",
          description: "Single Payment Compound Amount",
        },
        {
          type: "formula",
          title: "Present Worth",
          formula: "P = F(1 + i)⁻ⁿ",
          description: "Single Payment Present Worth",
        },
      ],
    },
    {
      title: "Annuities (The 6 Factors)",
      icon: "Layers",
      content: [
        {
          type: "annuity-list",
          data: [
            {
              label: "Uniform Series Compound Amount (F/A)",
              formula: "F = A [((1+i)ⁿ - 1) / i]",
            },
            {
              label: "Sinking Fund (A/F)",
              formula: "A = F [i / ((1+i)ⁿ - 1)]",
            },
            {
              label: "Capital Recovery (A/P)",
              formula: "A = P [(i(1+i)ⁿ) / ((1+i)ⁿ - 1)]",
            },
          ],
        },
      ],
    },
    {
      title: "Analysis Metrics",
      icon: "BarChart2",
      content: [
        {
          type: "formula",
          title: "ROI",
          formula: "(Gain - Cost) / Cost",
          description: "Return on Investment %",
        },
        {
          type: "metric-box",
          title: "Cost Benefit Analysis (CBA)",
          data: "Ratio of Benefits to Costs. >1 is good. Includes tangible and intangible factors.",
        },
        {
          type: "metric-list",
          title: "Total Cost of Risk",
          data: [
            "Insurance Premiums",
            "Retained Losses",
            "Risk Control Costs",
            "Admin Costs",
          ],
        },
      ],
    },
  ],
  stat: [
    {
      title: "Descriptive Stats",
      icon: "BarChart2",
      content: [
        {
          type: "info-grid-mb",
          data: [
            { label: "Mean", value: "Avg (μ)" },
            { label: "Median", value: "Middle" },
            { label: "Mode", value: "Freq" },
          ],
        },
        {
          type: "formula",
          title: "Standard Deviation",
          formula: "σ = √[Σ(x-μ)² / N]",
          description: "Root Mean Square Deviation",
        },
        {
          type: "formula",
          title: "Z-Score",
          formula: "Z = (x - μ) / σ",
          description: "How many std devs away from mean?",
        },
      ],
    },
    {
      title: "Normal Distribution",
      icon: "Activity",
      content: [
        { type: "visual", data: "BellCurve" },
        {
          type: "stats-list",
          data: [
            { label: "±1σ", value: "68.2%" },
            { label: "±2σ", value: "95.4%" },
            { label: "±3σ", value: "99.7%" },
          ],
        },
      ],
    },
    {
      title: "Correlation & Chi",
      icon: "Layers",
      content: [
        {
          type: "formula",
          title: "Chi-Square",
          formula: "χ² = Σ[(O-E)² / E]",
          description: "O=Observed, E=Expected",
        },
        {
          type: "spearman",
          title: "Spearman Coeff",
          desc: "Used for ranked variables. Range: -1 to +1.",
          data: [
            "Rank variables",
            "Calculate difference (d)",
            "Apply formula: 1 - (6Σd² / n(n²-1))",
          ],
        },
      ],
    },
  ],
};
