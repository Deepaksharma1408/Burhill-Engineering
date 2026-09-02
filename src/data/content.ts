export interface ServicePillar {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  iconName: string;
  sectors: string[];
}

export interface SectorExpertise {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  keyChallenges: string[];
  ourValue: string;
  featuredProjectsCount: number;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  sector: string;
  location: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  technicalKeypoints: string[];
  blueprintType: 'tunnel' | 'datacenter' | 'bridge' | 'foundation';
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  contentParagraphs: string[];
  keyTakeaways: string[];
}

export interface DirectorProfile {
  id: string;
  name: string;
  title: string;
  credentials: string;
  experienceYears: number;
  bio: string;
  specialisations: string[];
  imagePlaceholder: string;
}

export const SITE_CONTENT = {
  company: {
    name: "Burhill Engineering Partners",
    shortName: "Burhill Engineering",
    tagline: "Engineering Clarity in Complex Construction.",
    subtext: "Forensic. Technical. Accountable.",
    location: "Sydney, Australia",
    address: "Level 28, 175 Liverpool Street, Sydney NSW 2000",
    phone: "+61 (02) 8912 7400",
    email: "enquiries@burhillengineering.com.au",
    disclaimer: "Content on this site is provided for general informational purposes only and does not constitute formal legal or engineering advice.",
  },
  
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Industry Expertise", href: "/industry-expertise" },
    { label: "Project Experience", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    badge: "Director-Led Engineering Advisory",
    headline: "Engineering Clarity in Complex Construction.",
    subtext: "Forensic. Technical. Accountable.",
    leadParagraph: "Burhill Engineering Partners provides forensic engineering, technical advisory, quality governance, risk management, and surveillance expertise for major Australian infrastructure, hyperscale data centres, and specialist civil works.",
    primaryCta: "Request a Consultation",
    secondaryCta: "Explore Services",
    metrics: [
      { value: "$12B+", label: "Asset Value Advised" },
      { value: "100%", label: "Director-Led Oversight" },
      { value: "450+", label: "Forensic & Technical Reviews" },
      { value: "Sydney", label: "Headquartered in NSW" }
    ]
  },

  positioning: {
    eyebrow: "TECHNICAL RIGOUR & EVIDENCE-BASED ADVICE",
    heading: "We are construction engineers first — translating structural and systemic complexity into definitive action.",
    description: "In major infrastructure and high-stakes building projects, ambiguity creates cost overruns, disputes, and structural failure. Burhill was established to bridge the critical gap between high-level advisory and hands-on site reality. Our Sydney-based team brings senior Tier 1 delivery experience to asset owners, project directors, contractors, insurers, and legal counsel.",
  },

  messagingPillars: [
    {
      id: "engineers-first",
      title: "Construction engineers first",
      quote: "Practical site intelligence over theoretical desktop audits.",
      desc: "Our directors and senior specialists have spent decades managing site operations, structural pours, TBM tunnelling, and complex commissioning. We understand how site realities impact commercial and structural integrity."
    },
    {
      id: "quality-system",
      title: "Quality is not a deliverable — it is the system",
      quote: "Defect prevention engineered directly into governance workflows.",
      desc: "True quality governance goes beyond compliance checklists. We design and enforce robust inspection test plans (ITPs), material traceability matrixes, and quality control systems that stand up to regulatory and forensic scrutiny."
    },
    {
      id: "risk-identified",
      title: "Risk identified before it becomes cost",
      quote: "Early forensic diagnosis averts catastrophic project delays.",
      desc: "We apply quantitative risk modeling and forensic engineering methodologies early in project lifecycles to detect structural anomalies, design drift, and constructability bottlenecks before capital is compromised."
    },
    {
      id: "translating-complexity",
      title: "Translating complexity into practical advice",
      quote: "Definitive guidance backed by legal-grade technical evidence.",
      desc: "Whether advising a project board, testifying in arbitration, or optimizing a hyperscale data centre's cooling topology, we communicate complex engineering physics into transparent, decision-ready briefings."
    }
  ],

  services: [
    {
      id: "forensic-engineering",
      slug: "forensic-engineering",
      title: "Forensic Engineering & Expert Witness",
      shortDesc: "Independent investigation of structural failures, material degradation, design non-conformance, and dispute resolution technical testimony.",
      fullDesc: "When structural anomalies, foundation movement, or material failures threaten asset viability, Burhill provides forensic root-cause analysis backed by advanced diagnostic testing and mathematical modeling. Our experts prepare objective, legal-grade reports for litigation, arbitration, and insurance claims.",
      deliverables: [
        "Root Cause Failure Analysis (RCFA)",
        "Expert Witness Reports & Court Testimony (CPR 35 / Federal Court Guidelines)",
        "Concrete, Steel & Composite Structural Investigations",
        "Dispute Resolution & Technical Arbitration Support"
      ],
      iconName: "Compass",
      sectors: ["Infrastructure", "Civil Works", "Built Environment"]
    },
    {
      id: "technical-advisory",
      slug: "technical-advisory",
      title: "Technical Advisory & Due Diligence",
      shortDesc: "Comprehensive technical due diligence, constructability reviews, and asset condition assessments for major capital investments.",
      fullDesc: "Burhill advises asset owners, infrastructure funds, and project directors through complex procurement and capital expenditure decisions. We evaluate technical feasibility, specification rigor, contractor capability, and long-term durability risks.",
      deliverables: [
        "Pre-Acquisition Technical Due Diligence",
        "Constructability & Peer Design Reviews",
        "Asset Condition & Remaining Life Assessment",
        "Specification & Standards Compliance Audits"
      ],
      iconName: "ShieldCheck",
      sectors: ["Data Centres", "Infrastructure", "Civil Works"]
    },
    {
      id: "quality-governance",
      slug: "quality-governance",
      title: "Quality & Governance Systems",
      shortDesc: "Engineering quality assurance frameworks, ITP verification, governance audits, and defect elimination systems for Tier 1 projects.",
      fullDesc: "We audit and rebuild project quality management systems to guarantee compliance with Australian Standards, ISO 9001, and project-specific deed requirements. We institute verifiable quality gates across engineering, procurement, and construction phases.",
      deliverables: [
        "Quality Management System (QMS) Architecture & Audits",
        "Inspection & Test Plan (ITP) Verification Frameworks",
        "Defect Root-Cause Elimination Protocols",
        "Material Traceability & Compliance Auditing"
      ],
      iconName: "FileCheck",
      sectors: ["Infrastructure", "Data Centres", "Built Environment"]
    },
    {
      id: "risk-management",
      slug: "risk-management",
      title: "Risk Management & Delay Forensics",
      shortDesc: "Quantitative technical risk modeling, delay analysis, and schedule mitigation strategy for complex multi-disciplinary works.",
      fullDesc: "Unforeseen ground conditions, design changes, and interface clashes endanger project timelines. Burhill combines schedule forensic analysis with technical risk assessments to isolate root drivers of delay and establish defensible mitigation pathways.",
      deliverables: [
        "Technical Risk Register Development & Quantitative Monte Carlo Modeling",
        "Forensic Schedule & Extension of Time (EOT) Analysis",
        "Design Interface & Constructability Risk Mapping",
        "Early Warning Indicator Systems"
      ],
      iconName: "TrendingUp",
      sectors: ["Civil Works", "Infrastructure", "Data Centres"]
    },
    {
      id: "surveillance",
      slug: "surveillance",
      title: "Surveillance & Site Inspection",
      shortDesc: "Resident surveillance engineering, third-party technical oversight, and structural verification during critical construction phases.",
      fullDesc: "Our senior surveillance engineers act as independent eyes and ears on site. We provide real-time oversight of critical structural pours, post-tensioning operations, foundation piling, precast erection, and mechanical infrastructure installation.",
      deliverables: [
        "Independent Surveillance Engineering (ISE)",
        "Critical Hold-Point Inspection & Verification",
        "Non-Conformance Report (NCR) Technical Review & Resolution",
        "As-Built Conformance & Commissioning Oversight"
      ],
      iconName: "Eye",
      sectors: ["Infrastructure", "Civil Works", "Data Centres"]
    },
    {
      id: "business-systems",
      slug: "business-systems",
      title: "Business Systems & Operational Readiness",
      shortDesc: "Operational readiness frameworks, handover documentation verification, and technical digital asset management integration.",
      fullDesc: "Seamless transition from construction completion to operational asset handover requires rigorous verification. Burhill bridges the gap between project teams and facility managers to ensure operational readiness, asset tagging, and O&M compliance.",
      deliverables: [
        "Operational Readiness & Handover Frameworks (OR&H)",
        "O&M Manual & Asset Data Verification",
        "Digital Twin & Asset Management Alignment",
        "Defects Liability Period (DLP) Governance"
      ],
      iconName: "Layers",
      sectors: ["Data Centres", "Built Environment", "Infrastructure"]
    },
    {
      id: "tender-support",
      slug: "tender-support",
      title: "Tender Support & Commercial Advisory",
      shortDesc: "Technical bid strategy, scope clarification, risk pricing evaluation, and specification alignment for major tenders.",
      fullDesc: "We assist asset owners in structuring technical tender requirements and help major contractors de-risk high-stakes bids. Our technical-commercial integration ensures that scope inclusions, constructability assumptions, and technical risks are transparently priced.",
      deliverables: [
        "Technical Tender Evaluation & Scoring Frameworks",
        "Scope Gap & Interface Risk Analysis",
        "Contract Technical Specification Drafting & Review",
        "Constructability & Value Engineering Briefs"
      ],
      iconName: "FileText",
      sectors: ["Infrastructure", "Civil Works", "Data Centres"]
    },
    {
      id: "datacenter-services",
      slug: "datacenter-services",
      title: "Hyperscale Data Centre Infrastructure",
      shortDesc: "Specialist structural, civil, thermal, and quality governance advisory dedicated to mission-critical hyperscale data centre facilities.",
      fullDesc: "Hyperscale data centres demand zero-downtime structural resilience, strict floor slab vibration tolerances, specialized cooling duct support structures, and fast-track delivery. Burhill provides specialized engineering advisory tailored to hyperscale operators and Tier 1 EPC contractors.",
      deliverables: [
        "Superflat Slab & Vibration Tolerance Forensic Audits",
        "Mission-Critical Civil & Structural Peer Review",
        "Commissioning & Level 1–5 Quality Oversight",
        "Fast-Track Modular Constructability Reviews"
      ],
      iconName: "Server",
      sectors: ["Data Centres"]
    }
  ] as ServicePillar[],

  sectors: [
    {
      id: "infrastructure",
      slug: "infrastructure",
      title: "Major Infrastructure & Transport",
      tagline: "Rail corridors, subterranean tunnels, bridges, and highway interchanges.",
      summary: "Australia's major transport networks require rigorous structural surveillance, underground civil expertise, and strict compliance with state authority standards (TfNSW, VicRoads). Burhill brings deep Tier 1 experience across road, rail, and port infrastructure.",
      keyChallenges: [
        "Complex ground-structure interaction in urban tunnel environments",
        "Stringent TfNSW/State Authority quality and asset handover deeds",
        "Managing multi-contractor interface risks in active rail corridors"
      ],
      ourValue: "Independent technical oversight that ensures compliance while protecting project delivery milestones.",
      featuredProjectsCount: 4
    },
    {
      id: "datacenter",
      slug: "datacenter",
      title: "Hyperscale Data Centres",
      tagline: "Mission-critical digital infrastructure delivering 99.999% reliability.",
      summary: "Hyperscale facilities in Sydney, Melbourne, and regional hubs demand fast-track construction schedules without compromising structural integrity or mechanical precision. Burhill provides specialist quality governance, structural slab verification, and risk mitigation.",
      keyChallenges: [
        "Compressed construction timelines with zero tolerance for structural defects",
        "High static and dynamic loading requirements for heavy generator and chiller arrays",
        "Strict environmental containment and acoustic barrier structural requirements"
      ],
      ourValue: "Specialized engineering surveillance and quality gating from initial earthworks to Level 5 commissioning.",
      featuredProjectsCount: 3
    },
    {
      id: "civil-works",
      slug: "civil-works",
      title: "Specialist Civil & Maritime Works",
      tagline: "Deep excavations, marine piles, coastal retaining structures, and heavy foundations.",
      summary: "Specialist civil works operate under high geotechnical and environmental uncertainty. Burhill provides forensic geotechnical interpretation, foundation verification, and marine structure condition assessments.",
      keyChallenges: [
        "Unforeseen sub-surface geology and groundwater hydrology movement",
        "Corrosive marine environments impacting reinforced concrete longevity",
        "Deep diaphragm wall and ground anchor tension verification"
      ],
      ourValue: "Forensic geotechnical and structural insight that mitigates subterranean risks before major pours.",
      featuredProjectsCount: 3
    },
    {
      id: "built-environment",
      slug: "built-environment",
      title: "Built Environment & Healthcare",
      tagline: "Complex commercial towers, hospital expansions, and heritage retrofits.",
      summary: "Major building projects demand technical clarity across structural alterations, facade integrity, and compliance with the NSW Design and Building Practitioners (DBP) Act.",
      keyChallenges: [
        "DBP Act regulated design compliance and declaration governance",
        "Complex structural retrofits within live operational hospital environments",
        "Facade structural support and water ingress forensic investigations"
      ],
      ourValue: "Legal-grade engineering accountability that safeguards asset value and regulatory compliance.",
      featuredProjectsCount: 2
    }
  ] as SectorExpertise[],

  projects: [
    {
      id: "project-1",
      slug: "sydney-rail-corridor-underpinning",
      title: "Sydney Major Metro Rail Corridor Underpinning & Forensic Review",
      clientType: "Government Asset Authority / Tier 1 Joint Venture",
      sector: "Major Infrastructure & Transport",
      location: "Sydney, NSW",
      summary: "Forensic structural audit and real-time surveillance for deep foundation underpinning adjacent to an operational rail line.",
      challenge: "During tunnel excavation adjacent to an active heavy rail corridor, telemetry detected minor differential settlement exceeding allowable serviceability limits. Construction was temporarily halted pending an independent forensic determination of ground-structure interaction.",
      approach: "Burhill deployed a specialized team to re-examine geotechnical finite element models, inspect structural pile integrity via ultrasonic testing, and implement an augmented real-time deformation monitoring system with customized alert thresholds.",
      outcome: "Identified the exact mechanism of localized soil relaxation, designed a targeted pressure-grouting soil stabilization remediation, and safely resumed rail operations without structural compromise.",
      metrics: [
        { label: "Asset Value", value: "$2.4B" },
        { label: "Downtime Prevented", value: "14 Weeks" },
        { label: "Settlement Accuracy", value: "< 0.5mm" }
      ],
      technicalKeypoints: [
        "Geotechnical finite element re-analysis under dynamic train loads",
        "Ultrasonic integrity testing of 42 deep concrete shafts",
        "Remedial pressure-grouting specification & execution oversight",
        "Formal compliance sign-off provided to TfNSW Independent Certifier"
      ],
      blueprintType: "tunnel"
    },
    {
      id: "project-2",
      slug: "hyperscale-datacenter-slab-forensics",
      title: "60MW Hyperscale Data Centre Superflat Slab & Vibration Governance",
      clientType: "Global Cloud Infrastructure Operator",
      sector: "Hyperscale Data Centres",
      location: "Western Sydney, NSW",
      summary: "Technical advisory and quality governance for 45,000m² of post-tensioned superflat floor slabs supporting high-density server racks.",
      challenge: "The facility required strict floor flatness (FF 50 / FL 35) and micro-vibration containment across two levels of heavy server arrays. Early test pours exhibited minor micro-cracking around column drop panels, threatening post-tensioning cable durability.",
      approach: "Burhill conducted microscopic core diagnostics and Petrographic analysis, isolated shrinkage strain variables in the concrete mix design, and restructured the contractor's Inspection and Test Plan (ITP) for cable stressing sequences.",
      outcome: "Achieved full compliance across all slab zones, eliminated micro-cracking in subsequent pours, and delivered sign-off 3 weeks ahead of equipment installation dates.",
      metrics: [
        { label: "Facility Capacity", value: "60MW" },
        { label: "Slab Area", value: "45,000 m²" },
        { label: "Flatness Rating", value: "FF 58 (Exceeded)" }
      ],
      technicalKeypoints: [
        "Petrographic & scanning electron microscopy of concrete cores",
        "Modifications to water-cement ratios and fly-ash replacement blend",
        "Re-engineering of multi-stage post-tensioning stress sequences",
        "Continuous 3D laser scan flatness verification during concrete finishing"
      ],
      blueprintType: "datacenter"
    },
    {
      id: "project-3",
      slug: "port-botany-quay-wall-investigation",
      title: "Maritime Container Terminal Quay Wall Structural Assessment",
      clientType: "Port Authority & Institutional Insurer",
      sector: "Specialist Civil & Maritime Works",
      location: "Port Botany, NSW",
      summary: "Forensic investigation into tie-back anchor corrosion and residual structural capacity of a 400m berth facility.",
      challenge: "Routine underwater inspections revealed accelerated localized corrosion on heavy steel tie-back rods supporting a 30-year-old diaphragm quay wall, raising concerns regarding load redistribution under modern post-Panamax crane loads.",
      approach: "Burhill conducted non-destructive ultrasonic wall thickness testing, electrochemical corrosion rate measurement, and structural non-linear load distribution modeling to calculate exact remaining service life under modified crane wheel loads.",
      outcome: "Demonstrated that total replacement was unnecessary. Formulated a targeted cathodic protection upgrade combined with localized supplementary rock-anchor installations, saving $18M in capital expenditure.",
      metrics: [
        { label: "CapEx Saved", value: "$18M AUD" },
        { label: "Berth Length", value: "400 Metres" },
        { label: "Life Extension", value: "+25 Years" }
      ],
      technicalKeypoints: [
        "Subsea ultrasonic thickness mapping of steel sheet piles",
        "Electrochemical soil & marine water resistivity surveys",
        "Non-linear structural push-over analysis under 120-tonne crane wheel loads",
        "Design & installation supervision of high-capacity supplementary ground anchors"
      ],
      blueprintType: "bridge"
    },
    {
      id: "project-4",
      slug: "regional-highway-bridge-post-tensioning",
      title: "Regional Highway Overpass Post-Tensioning Defect Resolution",
      clientType: "State Transport Agency",
      sector: "Major Infrastructure & Transport",
      location: "Regional NSW",
      summary: "Expert technical review and grout void remediation for a dual-carriageway segmental concrete box girder bridge.",
      challenge: "Radiographic void detection during post-construction quality audits identified incomplete tendon duct grouting across major negative-moment pier segments, risking strand corrosion and potential structural fatigue under heavy freight traffic.",
      approach: "Burhill designed a non-destructive vacuum-assisted grout injection methodology, verified strand integrity via endoscopic inspection, and established an ongoing structural health monitoring protocol.",
      outcome: "Successfully re-grouted all voided duct locations without structural modification, satisfying all state transport safety criteria and avoiding bridge replacement.",
      metrics: [
        { label: "Span Length", value: "320 Metres" },
        { label: "Grout Voids Remediated", value: "100%" },
        { label: "Structural Compliance", value: "Full Sign-Off" }
      ],
      technicalKeypoints: [
        "Endoscopic inspection and radiograph interpretation of tendon ducts",
        "Development of ultra-flow thixotropic grout injection specification",
        "Post-injection acoustic echo testing for void verification",
        "Long-term structural strain gauge sensor telemetry installation"
      ],
      blueprintType: "foundation"
    }
  ] as CaseStudy[],

  insights: [
    {
      id: "insight-1",
      slug: "root-causes-concrete-cracking-infrastructure",
      title: "Beyond the Surface: Distinguishing Structural vs. Shrinkage Cracking in Heavy Infrastructure",
      author: "Marcus Burhill",
      role: "Managing Director & Principal Forensic Engineer",
      date: "August 14, 2026",
      readTime: "7 min read",
      category: "Forensic Engineering",
      excerpt: "When visual cracking appears on major structural concrete pours, hasty diagnoses can lead to costly, unnecessary structural remediation—or worse, ignored structural failure. We examine the diagnostic methodologies required to determine root cause with mathematical certainty.",
      contentParagraphs: [
        "Visual cracking in reinforced concrete is often the first visible warning light on a major construction project. However, confusing early plastic shrinkage or thermal contraction with structural shear overload can result in millions of dollars spent on redundant retrofits—or catastrophic structural oversight.",
        "In Australia's Tier 1 infrastructure sector, structural specifications often impose strict crack width limits (frequently 0.2mm to 0.3mm depending on exposure classification under AS 3600 and AS 5100). When these thresholds are exceeded during construction, immediate pressure mounts between asset owners, head contractors, and structural designers.",
        "A rigorous forensic diagnosis requires moving beyond simple optical microscope measurements. Forensic engineers must integrate structural load history, petrographic core examination, concrete mix hydration data, and non-destructive ultrasonic pulse velocity (UPV) testing.",
        "By analyzing crack propagation paths relative to reinforcement orientation and post-tensioning stress fields, engineers can isolate whether micro-cracking stemmed from improper curing temperatures, excessive restraint against thermal shrinkage, or genuine flexural/shear stress concentration."
      ],
      keyTakeaways: [
        "Crack width alone is insufficient to diagnose structural hazard; crack depth and orientation relative to stress vectors are decisive.",
        "Petrographic microscopy identifies whether micro-cracking occurred during hydration (plastic phase) or post-hardening.",
        "Clear contractual quality gates prevent premature disputation while ensuring long-term durability standards are preserved."
      ]
    },
    {
      id: "insight-2",
      slug: "governance-in-hyperscale-datacenter-delivery",
      title: "Quality Governance in Hyperscale Data Centres: Engineering for Zero-Defect Handover",
      author: "Dr. Eleanor Vance",
      role: "Director of Technical Advisory & Governance",
      date: "July 28, 2026",
      readTime: "6 min read",
      category: "Data Centre Governance",
      excerpt: "Hyperscale data centre construction operates at the intersection of compressed timelines and zero tolerance for failure. How director-led quality governance prevents costly re-commissioning delays.",
      contentParagraphs: [
        "The explosive growth of cloud computing and artificial intelligence workloads has accelerated hyperscale data centre construction schedules to unprecedented speeds. What previously took 24 months to construct and commission is now expected in 12 to 14 months.",
        "However, speed introduces systemic quality risk. In mission-critical environments, a single misaligned floor slab joint, improperly torqued structural bolt on a chiller frame, or subtle ground anchor movement can disrupt Level 4 and Level 5 integrated systems testing.",
        "Effective quality governance is not about generating voluminous paper checklists. It requires an integrated engineering surveillance framework that links digital Inspection and Test Plans (ITPs) directly to physical hold points on site.",
        "By enforcing independent third-party verification at key construction hold-points—such as rebar placement prior to superflat pours and mechanical frame anchorage—project teams eliminate systemic defects before commissioning engineers arrive."
      ],
      keyTakeaways: [
        "Quality gating must be embedded into the physical critical path, not treated as post-construction administrative compliance.",
        "Superflat slab tolerances (FF/FL) require continuous 3D laser scanning during placement, not post-cure surveys.",
        "Director-led oversight provides the technical authority needed to halt non-conforming work before defects are concealed."
      ]
    },
    {
      id: "insight-3",
      slug: "forensic-delay-analysis-in-civil-works",
      title: "De-risking Construction Disputes: Integrating Geotechnical Realities into Delay Analysis",
      author: "David Thornton",
      role: "Director of Infrastructure & Surveillance",
      date: "June 19, 2026",
      readTime: "8 min read",
      category: "Risk & Delay Forensics",
      excerpt: "Unforeseen ground conditions remain the leading cause of delay claims in major civil works. Why traditional CPM schedule analysis fails without underlying geotechnical forensic validation.",
      contentParagraphs: [
        "Extension of Time (EOT) disputes in deep civil works frequently deteriorate into prolonged legal battles over critical path schedules. Planners produce complex Critical Path Method (CPM) delay fragnets, while opposing legal counsel debate contractual risk allocation under latent condition clauses.",
        "Yet, CPM schedule software cannot evaluate the physical reality of subterranean engineering. A 20-day delay in shaft excavation might be attributed to contractor inefficiency by one party, while the contractor claims unmapped rock hardness or unexpected groundwater inflow.",
        "Resolving these disputes authoritatively requires integrating forensic delay analysis with empirical geotechnical data. Forensic engineers re-examine borehole logs, TBM cutter head wear rates, piezometer water table telemetry, and actual excavation production logs.",
        "When forensic engineering principles guide delay analysis, arbitrary schedule claims are replaced with transparent, evidence-based physical proof that clearly delineates contractor performance from genuine latent conditions."
      ],
      keyTakeaways: [
        "Schedule delay analysis must be backed by physical engineering evidence, not merely software logic ties.",
        "Empirical geotechnical analysis of TBM penetration rates and ground water telemetry provides objective proof in latent condition claims.",
        "Early independent technical mediation resolves ground disputes in weeks rather than years of court arbitration."
      ]
    }
  ] as InsightArticle[],

  directors: [
    {
      id: "marcus-burhill",
      name: "Marcus Burhill",
      title: "Managing Director & Principal Forensic Engineer",
      credentials: "BEng (Civil/Struct) Hons, MIEAust, CPEng, NER, RPEQ",
      experienceYears: 24,
      bio: "Marcus has over 24 years of experience leading forensic structural investigations, expert witness appointments, and technical due diligence across Australia and international infrastructure markets. Prior to founding Burhill Engineering Partners, he served as Principal Structural Engineer for major Tier 1 contractors and global engineering consultancies, directing technical risk on $5B+ infrastructure programs.",
      specialisations: [
        "Forensic Structural Engineering & Root Cause Failure Analysis",
        "Expert Witness Testimony (Federal & Supreme Courts)",
        "Major Infrastructure Technical Governance",
        "Concrete & Steel Durability Engineering"
      ],
      imagePlaceholder: "/images/directors/marcus-burhill-placeholder.svg"
    },
    {
      id: "eleanor-vance",
      name: "Dr. Eleanor Vance",
      title: "Director of Technical Advisory & Governance",
      credentials: "PhD (Structural Mechanics), BEng (Hons I), FIEAust",
      experienceYears: 20,
      bio: "Dr. Vance is a recognized authority in structural mechanics, risk quantification, and engineering quality systems. Her career spans advanced research in computational structural dynamics combined with 20 years of hands-on advisory for hyperscale data centre developers, institutional infrastructure funds, and government transport authorities.",
      specialisations: [
        "Technical Due Diligence & Peer Design Review",
        "Hyperscale Data Centre Infrastructure Quality Systems",
        "Quantitative Technical Risk & Reliability Modeling",
        "Design & Building Practitioners (DBP) Act Governance"
      ],
      imagePlaceholder: "/images/directors/eleanor-vance-placeholder.svg"
    },
    {
      id: "david-thornton",
      name: "David Thornton",
      title: "Director of Infrastructure & Surveillance",
      credentials: "BEng (Civil), DipPM, MIEAust, CPEng, RPEQ",
      experienceYears: 22,
      bio: "David specializes in subterranean civil engineering, major rail and tunnel surveillance, and construction delay forensics. Having managed major underground civil packages across Sydney Metro, WestConnex, and regional maritime projects, he brings an uncompromising, practical site perspective to independent surveillance and risk management.",
      specialisations: [
        "Subterranean Civil & Tunnelling Surveillance",
        "Geotechnical & Foundation Integrity Verification",
        "Forensic Delay & Extension of Time (EOT) Analysis",
        "Constructability & Interface Risk Advisory"
      ],
      imagePlaceholder: "/images/directors/david-thornton-placeholder.svg"
    }
  ] as DirectorProfile[],

  sectorsList: [
    "Major Infrastructure & Transport",
    "Hyperscale Data Centres",
    "Specialist Civil & Maritime Works",
    "Built Environment & Healthcare",
    "Defence & Energy Projects"
  ],

  officeDetails: {
    city: "Sydney (Head Office)",
    addressLine1: "Level 28, 175 Liverpool Street",
    addressLine2: "Sydney NSW 2000, Australia",
    phone: "+61 (02) 8912 7400",
    email: "enquiries@burhillengineering.com.au",
    hours: "Monday – Friday: 8:30am – 5:30pm AEST",
    coordinates: "-33.8768, 151.2096",
    mapLabel: "Sydney CBD - Hyde Park Precinct"
  }
};
