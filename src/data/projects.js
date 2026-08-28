export const featuredProject = {
  slug: "hem-over-heels",
  title: "Hem Over Heels",
  client: "Hem Over Heels — Boynton Beach, FL",
  year: "2026",
  role: "Product engineer, Tempest Labs",
  category: "featured",
  tag: "Live mobile product",
  image: "hemoverheels.png",
  description:
    "Customer app for a real tailoring and repair shop. Book services, track orders, and explore the shop from iPhone or Android.",
  longDescription:
    "Hem Over Heels has served Boynton Beach since 2009 — alterations, shoe repair, leather work, embroidery, and sharpening. I designed and shipped their official mobile app so customers can book visits, follow orders, and browse the shop’s services without calling the front desk.",
  highlights: [
    "Live on the App Store and Google Play",
    "Service catalog with in-shop photos, videos, and guides",
    "Order history, appointment booking, and holiday hours",
    "Team profiles and promotions for a brick-and-mortar business",
  ],
  links: [
    {
      label: "App Store",
      href: "https://apps.apple.com/us/app/hem-over-heels/id6756508298",
    },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.hemoverheels.mobile",
    },
    {
      label: "hemoverheels.com",
      href: "https://hemoverheels.com/",
    },
  ],
};

export const projects = [
  featuredProject,
  {
    title: "Property Preservation Plus",
    category: "apps",
    description:
      "Property management platform for properties, tenants, leases, maintenance, and finances, with role-based access and live weather data.",
    url: "https://github.com/notAnotherAverageJoe/Property-Preservation-Plus",
    image: "PPP.png",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "BitBuddy",
    category: "apps",
    description:
      "Educational cryptocurrency platform with portfolios, live market data, staking tools, and a full transaction flow.",
    url: "https://github.com/notAnotherAverageJoe/bit_buddy",
    image: "big.jpg",
    tags: ["Flask", "PostgreSQL", "APIs"],
  },
  {
    title: "Jobly API",
    category: "apps",
    description:
      "RESTful API for companies and job listings with authentication and full CRUD, built to production API conventions.",
    url: "https://github.com/notAnotherAverageJoe/jobly-express",
    image: "jobly.png",
    tags: ["Express", "Node.js"],
  },
  {
    title: "Giggle Gate",
    category: "apps",
    description:
      "Sinatra web app with authentication, categorized jokes from an external API, and saved favorites.",
    url: "https://github.com/notAnotherAverageJoe/GG---GiggleGate-A-joke-paradise",
    image: "gg.png",
    tags: ["Ruby", "Sinatra"],
  },
  {
    title: "Grocery Inventory Manager",
    category: "apps",
    description:
      "Interactive inventory system for grocery, meat, produce, and bakery stock, built with Python and Streamlit.",
    url: "https://github.com/notAnotherAverageJoe/Grocery_Inventory_Magement_System---GIMS",
    image: "gims.png",
    tags: ["Python", "Streamlit"],
  },
  {
    title: "Dice Roller PWA",
    category: "apps",
    description:
      "Progressive web app that works offline on iOS and Android after install.",
    url: "https://github.com/notAnotherAverageJoe/Dice-PWA",
    image: "dicepwa.png",
    tags: ["PWA", "JavaScript"],
  },
  {
    title: "Loyalty Checkout",
    category: "apps",
    description:
      "Ruby checkout system that processes purchases and calculates customer rewards.",
    url: "https://github.com/notAnotherAverageJoe/Loyalty-Points-Checkout-Program---Ruby",
    image: "ruby.png",
    tags: ["Ruby"],
  },
  {
    title: "Pokédex",
    category: "apps",
    description:
      "React client for the first 151 Pokémon, pulling names and abilities from PokéAPI.",
    url: "https://github.com/notAnotherAverageJoe/pokedex-react",
    image: "pokedex.png",
    tags: ["React"],
  },
  {
    title: "Thai Food Yum",
    category: "apps",
    description:
      "Restaurant site for a fictional Thai kitchen, built in PHP with a clean menu-first layout.",
    url: "https://github.com/notAnotherAverageJoe/Thai-food-php",
    image: "thaifoodyum.png",
    tags: ["PHP"],
  },
  {
    title: "Virtual Pet",
    category: "apps",
    description:
      "React game where you feed, play with, and keep a digital pet healthy.",
    url: "https://github.com/notAnotherAverageJoe/Virtual-Pet-React",
    image: "VP.png",
    tags: ["React"],
  },
  {
    title: "Erlang Chat Server",
    category: "systems",
    description:
      "Distributed chatroom in Erlang with multiple clients and a periodic chatbot.",
    url: "https://github.com/notAnotherAverageJoe/Erlang-Distributed-Chat-Server",
    image: "erlchats.jpg",
    tags: ["Erlang"],
  },
  {
    title: "Distributed Food Ordering",
    category: "systems",
    description:
      "Client–server ordering system in Erlang that tracks inventory and client balance.",
    url: "https://github.com/notAnotherAverageJoe/Distributed-Food-Ordering-System-in-Erlang",
    image: "EDF.png",
    tags: ["Erlang"],
  },
  {
    title: "COBOL Payroll + PostgreSQL",
    category: "systems",
    description:
      "Legacy COBOL payroll entry wired to a modern PostgreSQL database.",
    url: "https://github.com/notAnotherAverageJoe/COBOL-Payroll-Data-Entry-System-with-PostgreSQL-",
    image: "cobolpsql.png",
    tags: ["COBOL", "PostgreSQL"],
  },
  {
    title: "OceanShell",
    category: "systems",
    description:
      "Interactive Unix-style shell written in C, with file operations and custom commands.",
    url: "https://github.com/notAnotherAverageJoe/OceanShell-C-based-Shell",
    image: "oceanshell.jpg",
    tags: ["C"],
  },
  {
    title: "Traffic Light Simulator",
    category: "systems",
    description:
      "RTOS traffic-light simulation with a pedestrian crossing and non-blocking input.",
    url: "https://github.com/notAnotherAverageJoe/Traffic-Light-Simulation",
    image: "traffic.jpg",
    tags: ["C", "RTOS"],
  },
  {
    title: "Virtual CPU",
    category: "systems",
    description:
      "Lightweight CPU emulator in C++ with registers, memory, and a small instruction set.",
    url: "https://github.com/notAnotherAverageJoe/VirtualPC-ASM-Emulator",
    image: "emuasm.jpg",
    tags: ["C++", "ASM"],
  },
  {
    title: "Energy Calculator",
    category: "systems",
    description:
      "Rust CLI that estimates appliance energy use and cost from wattage, runtime, and rate.",
    url: "https://github.com/notAnotherAverageJoe/Energy-Consumption-Calculator_Rust",
    image: "energy.png",
    tags: ["Rust"],
  },
  {
    title: "Arduino Even/Odd Timer",
    category: "systems",
    description:
      "TinkerCad Arduino project with a 16×2 LCD that counts seconds and flags even or odd.",
    url: "https://github.com/notAnotherAverageJoe/Arduino-timer",
    image: "ardtimer.png",
    tags: ["Arduino"],
  },
  {
    title: "Statistical Calculator API",
    category: "systems",
    description:
      "Express API that returns mean, median, and mode for a list of numbers.",
    url: "https://github.com/notAnotherAverageJoe/Statistical-calculator-API",
    image: "nodeapi.png",
    tags: ["Node.js"],
  },
  {
    title: "Financial Transactions SQL",
    category: "data",
    description:
      "SQL system for deposits, withdrawals, transfers, and interest across accounts.",
    url: "https://github.com/notAnotherAverageJoe/Financial-Transactions-System--SQL",
    image: "SQLfinance.png",
    tags: ["SQL"],
  },
  {
    title: "Fair Foods Expense Dashboard",
    category: "data",
    description:
      "Dash and Plotly dashboard for monthly expenses by category and over time.",
    url: "https://github.com/notAnotherAverageJoe/FairFoods-Dash",
    image: "firstdash.png",
    tags: ["Dash", "Plotly"],
  },
  {
    title: "Crypto Price Dashboard",
    category: "data",
    description:
      "Streamlit dashboard for live cryptocurrency prices and 24-hour change.",
    url: "https://github.com/notAnotherAverageJoe/Crypto-Dashboard",
    image: "crypto-dash.png",
    tags: ["Streamlit"],
  },
  {
    title: "Markov Text Generator",
    category: "data",
    description:
      "Markov-chain generator that produces text from a source file or URL.",
    url: "https://github.com/notAnotherAverageJoe/markovJS/tree/main",
    image: "markov.png",
    tags: ["JavaScript"],
  },
  {
    title: "PDF Invoice Generator",
    category: "data",
    description:
      "Script that reads invoice rows from Excel and generates PDF invoices.",
    url: "https://github.com/notAnotherAverageJoe/InvoicePDF_generator",
    image: "4.png",
    tags: ["Python"],
  },
  {
    title: "PDF Templates",
    category: "data",
    description:
      "Generator for multi-page PDF templates from predefined layout rules.",
    url: "https://github.com/notAnotherAverageJoe/Pdf_generator",
    image: "3.png",
    tags: ["Python"],
  },
];

export const selectedProjects = projects.filter((project) =>
  [
    "Property Preservation Plus",
    "BitBuddy",
    "Jobly API",
    "Erlang Chat Server",
    "OceanShell",
    "COBOL Payroll + PostgreSQL",
  ].includes(project.title)
);
