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
          type: "text",
          title: "Trigonometry",
          data: "sinθ = Opp/Hyp | cosθ = Adj/Hyp | tanθ = Opp/Adj",
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
          type: "list",
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
        { type: "visual", data: "Reynolds" },
        {
          type: "formula",
          title: "Torricelli's Law",
          formula: "V = 1.2 √(gh)",
          note: "Or V = √(2gh)",
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
        { type: "formula", title: "DC Power", formula: "P = I × V" },
        { type: "formula", title: "AC Power", formula: "P = V I PF" },
      ],
    },
  ],
  noise: [
    {
      title: "Sound Physics",
      icon: "Volume2",
      content: [
        {
          type: "info-grid",
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
      ],
    },
  ],
  rad: [
    {
      title: "Ionizing Fundamentals",
      icon: "Radio",
      content: [
        { type: "visual", data: "Shielding" },
        {
          type: "formula",
          title: "Inverse Square Law",
          formula: "I₁ (d₁)² = I₂ (d₂)²",
          description: "Double Dist = 1/4 Intensity",
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
      ],
    },
  ],
  econ: [
    {
      title: "Interest Formulas",
      icon: "DollarSign",
      content: [
        { type: "formula", title: "Simple Interest", formula: "I = P × n × i" },
        { type: "formula", title: "Compound Amount", formula: "F = P(1 + i)ⁿ" },
      ],
    },
  ],
  stat: [
    {
      title: "Descriptive Stats",
      icon: "BarChart2",
      content: [
        { type: "visual", data: "BellCurve" },
        {
          type: "formula",
          title: "Standard Deviation",
          formula: "σ = √[Σ(x-μ)² / N]",
        },
      ],
    },
  ],
};
