// Único sítio a editar para mudar conteúdo. Mantém as duas línguas em paralelo.
// [EDITAR] marca tudo o que tens de confirmar ou substituir.

export type Lang = "en" | "pt";

export const AXIS = { from: 2006, to: 2026 }; // [EDITAR] início da tua carreira

export const cv = {
  en: {
    meta: {
      title: "Jorge Silva — Finance & software engineering",
      description:
        "Twenty years running finance for industrial SMEs, now building the software those operations need.",
    },
    langLabel: "PT",
    langHref: "/pt/",
    langAria: "Ver em português",
    name: "Jorge Silva", // [EDITAR] nome completo
    role: "Financial management · Software engineering",
    location: "Leiria, Portugal",
    spans: [
      { from: 2006, to: 2026, label: "Financial management, industrial SMEs" },
      { from: 2024, to: 2026, label: "Software engineering", emphasis: true },
    ],
    summary: [
      "I have spent two decades inside Portuguese metalworking and mould-making companies, responsible for the numbers that decide whether a plant keeps running: cash flow, cost structure, financing, payroll compliance.",
      "I am now finishing a computer engineering degree and writing the software that side of the business keeps asking for — reporting that does not live in a spreadsheet, integrations that remove manual re-typing, infrastructure that someone actually maintains.",
    ],
    sections: {
      experience: "Experience",
      education: "Education",
      stack: "Stack",
      projects: "Selected work",
      contact: "Contact",
    },
    experience: [
      {
        period: "2019 — present", // [EDITAR]
        role: "Financial manager",
        org: "SOMEMA / Impormill",
        notes: [
          "Financial planning, treasury and creditor reporting for an industrial group.",
          "Stress testing, depreciation runway analysis and sale-and-leaseback modelling for asset restructuring.",
          "IT administration: hosting, WordPress estate, VPN and internal tooling.",
        ],
      },
      {
        period: "2006 — 2019", // [EDITAR]
        role: "Finance roles, industrial SMEs",
        org: "Leiria region",
        notes: [
          "Cost accounting, payroll compliance and reporting under Portuguese SNC.",
        ],
      },
    ],
    education: [
      {
        period: "2023 — present", // [EDITAR]
        role: "BSc Computer Engineering (evening)",
        org: "ESTG — Polytechnic of Leiria",
        notes: ["Information systems track. Studying while working full time."],
      },
    ],
    stack: [
      { label: "Languages", items: ["PHP", "Java", "Python", "C#", "JavaScript", "SQL"] },
      { label: "Frameworks", items: ["Laravel", "Astro", ".NET", "Tailwind"] },
      { label: "Infrastructure", items: ["Docker", "Linux", "Nginx", "PostgreSQL", "Cloudflare"] },
      { label: "Operations", items: ["Grafana", "n8n", "Gitea", "Uptime Kuma"] },
    ],
    projects: [
      {
        name: "Self-hosted homelab",
        desc: "Docker stack running monitoring, automation, git hosting and backups on Ubuntu. Built and maintained since 2022.", // [EDITAR] ano
        href: "",
      },
      {
        name: "FunShirt",
        desc: "Laravel e-commerce with role-based routing, cart, external payment API, policies and Tailwind front end.",
        href: "",
      },
    ],
    contact: {
      line: "Open to conversations about roles where finance and engineering meet.",
      email: "jorge@example.com", // [EDITAR]
      links: [
        { label: "GitHub", href: "https://github.com/joralexsil" },
        { label: "LinkedIn", href: "" }, // [EDITAR]
      ],
    },
  },

  pt: {
    meta: {
      title: "Jorge Silva — Finanças e engenharia informática",
      description:
        "Vinte anos de gestão financeira em PME industriais, agora a construir o software que essas operações precisam.",
    },
    langLabel: "EN",
    langHref: "/",
    langAria: "View in English",
    name: "Jorge Silva", // [EDITAR]
    role: "Gestão financeira · Engenharia informática",
    location: "Leiria, Portugal",
    spans: [
      { from: 2006, to: 2026, label: "Gestão financeira, PME industriais" },
      { from: 2024, to: 2026, label: "Engenharia informática", emphasis: true },
    ],
    summary: [
      "Passei duas décadas dentro de empresas portuguesas de metalomecânica e moldes, responsável pelos números que decidem se uma fábrica continua a laborar: tesouraria, estrutura de custos, financiamento, conformidade salarial.",
      "Estou agora a terminar a licenciatura em engenharia informática e a escrever o software que esse lado do negócio continua a pedir — reporting que não vive numa folha de cálculo, integrações que eliminam redigitação manual, infraestrutura que alguém mantém de facto.",
    ],
    sections: {
      experience: "Experiência",
      education: "Formação",
      stack: "Stack",
      projects: "Trabalho selecionado",
      contact: "Contacto",
    },
    experience: [
      {
        period: "2019 — presente", // [EDITAR]
        role: "Responsável financeiro",
        org: "SOMEMA / Impormill",
        notes: [
          "Planeamento financeiro, tesouraria e reporting a credores num grupo industrial.",
          "Testes de esforço, análise de runway de amortizações e modelação de sale and leaseback para reestruturação de ativos.",
          "Administração de IT: alojamento, parque WordPress, VPN e ferramentas internas.",
        ],
      },
      {
        period: "2006 — 2019", // [EDITAR]
        role: "Funções financeiras, PME industriais",
        org: "Região de Leiria",
        notes: [
          "Contabilidade analítica, conformidade salarial e reporting em SNC.",
        ],
      },
    ],
    education: [
      {
        period: "2023 — presente", // [EDITAR]
        role: "Licenciatura em Engenharia Informática (pós-laboral)",
        org: "ESTG — Politécnico de Leiria",
        notes: ["Ramo de sistemas de informação. A estudar em regime de trabalhador-estudante."],
      },
    ],
    stack: [
      { label: "Linguagens", items: ["PHP", "Java", "Python", "C#", "JavaScript", "SQL"] },
      { label: "Frameworks", items: ["Laravel", "Astro", ".NET", "Tailwind"] },
      { label: "Infraestrutura", items: ["Docker", "Linux", "Nginx", "PostgreSQL", "Cloudflare"] },
      { label: "Operação", items: ["Grafana", "n8n", "Gitea", "Uptime Kuma"] },
    ],
    projects: [
      {
        name: "Homelab auto-alojado",
        desc: "Stack Docker com monitorização, automação, alojamento git e backups em Ubuntu. Construído e mantido desde 2022.", // [EDITAR]
        href: "",
      },
      {
        name: "FunShirt",
        desc: "E-commerce em Laravel com encaminhamento por tipo de utilizador, carrinho, API de pagamento externa, policies e front end em Tailwind.",
        href: "",
      },
    ],
    contact: {
      line: "Disponível para conversas sobre funções onde finanças e engenharia se cruzam.",
      email: "jorge@example.com", // [EDITAR]
      links: [
        { label: "GitHub", href: "https://github.com/joralexsil" },
        { label: "LinkedIn", href: "" }, // [EDITAR]
      ],
    },
  },
} as const;
