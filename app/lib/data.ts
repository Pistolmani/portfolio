export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: ".NET Software Developer",
    company: "Andersen",
    location: "Tbilisi, Georgia",
    period: "2023 — Present",
    bullets: [
      "Building features for a multi-repo banking platform using Clean Architecture, CQRS, and MediatR in .NET / ASP.NET Core.",
      "Implemented account management modules (current & savings accounts) end-to-end — commands, handlers, validators, and repository layer.",
      "Developed Angular frontends consuming RESTful APIs; applied Tailwind CSS for styling.",
      "Collaborated in a Git/GitLab workflow with code reviews, feature branching, and CI pipelines.",
      "Apply SOLID principles, GoF design patterns, and DDD concepts daily.",
    ],
    stack: [
      ".NET 8",
      "ASP.NET Core",
      "EF Core",
      "MediatR",
      "Angular",
      "Tailwind CSS",
      "GitLab CI",
      "Azure",
    ],
  },
  {
    role: "Technical Support Specialist",
    company: "Bank of Georgia",
    location: "Tbilisi, Georgia",
    period: "2022 — 2023",
    bullets: [
      "Diagnosed and resolved infrastructure and software incidents across banking systems, maintaining high availability for internal and customer-facing services.",
      "Wrote and executed SQL queries against production databases for incident investigation and data reconciliation.",
      "Identified data inconsistencies by cross-referencing multiple tables, enabling faster root-cause analysis.",
      "Collaborated with development and operations teams to escalate and document bugs with structured reproduction steps.",
      "Worked daily in enterprise MSSQL environments — stored procedures, transactional integrity, regulated finance.",
    ],
    stack: ["MSSQL", "T-SQL", "Stored Procedures", "Incident Response"],
  },
];

export type CodeSnippet = {
  file: string;
  lang: string;
  code: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: "Live" | "Working Prototype" | "In Development";
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  summary: string;
  problem: string;
  approach: string[];
  highlights: string[];
  codeSnippet: CodeSnippet;
};

export const projects: Project[] = [
  {
    slug: "infralens",
    title: "InfraLens Georgia",
    tagline: "AI infrastructure-incident platform — bilingual, local-first, cited.",
    year: "2025",
    status: "In Development",
    githubUrl: "https://github.com/Pistolmani/infralens-georgia",
    stack: [
      "FastAPI",
      "Python 3.12",
      "LangGraph",
      "PostgreSQL 16",
      "pgvector",
      "Redis / RQ",
      "Next.js 14",
      "Ollama",
      "Docker Compose",
    ],
    summary:
      "Privacy-preserving infrastructure intelligence for Georgian municipal incidents. Submit a free-text report, get a structured, cited, bilingual brief — without sending anything to a hosted LLM.",
    problem:
      "Municipal infrastructure reports arrive as unstructured Georgian or English text. Decision-makers need consistent classification, severity, and procurement evidence — but most AI tooling either ships the data offshore or hallucinates without grounding.",
    approach: [
      "Designed a LangGraph agent pipeline with five sequential nodes — ExtractEntities, ClassifyIncident, RetrieveEvidence, GenerateBrief, VerifyGrounding — each traced and confidence-scored.",
      "Implemented hybrid RAG: pgvector semantic search fused with PostgreSQL full-text search via Reciprocal Rank Fusion (RRF) for higher recall.",
      "Reports below 0.6 confidence are automatically flagged for human review.",
      "Runs entirely local: Ollama with qwen3:8b for generation and bge-m3 for embeddings — no hosted LLM APIs, no paid cloud.",
      "Containerised across 6 services with Docker Compose; FastAPI backend, Next.js frontend, Postgres + pgvector, Redis/RQ worker, Ollama.",
    ],
    highlights: [
      "Hybrid retrieval (vector + BM25 + RRF fusion)",
      "Citation grounding with confidence scoring",
      "Bilingual Georgian / English briefs",
      "Local-only inference (Ollama)",
      "LangGraph traced agent pipeline",
    ],
    codeSnippet: {
      file: "pipeline.py",
      lang: "python",
      code: `async def retrieve_evidence(state: BriefState):
    semantic = await pgvector_search(state.query, k=10)
    lexical  = await pg_fulltext(state.query, k=10)
    fused    = reciprocal_rank_fusion(semantic, lexical)
    state.evidence = fused[:5]
    state.confidence = mean(d.score for d in fused[:5])
    return state`,
    },
  },
  {
    slug: "dressfield",
    title: "DressField",
    tagline: "Full-stack e-commerce platform — shipped, live, taking real orders.",
    year: "2025",
    status: "Live",
    liveUrl: "https://dressfield.ge",
    githubUrl: "https://github.com/Pistolmani/Dressfield",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Fabric.js",
      "ASP.NET Core 8",
      "MySQL",
      "Azure",
      "BOG iPay",
    ],
    summary:
      "End-to-end e-commerce platform for a Georgian embroidery business. Catalog, custom-order designer, real payments, and a live store at dressfield.ge.",
    problem:
      "A custom-embroidery business needed an online storefront where customers could not just browse, but actively design custom orders — uploading artwork, previewing it on garments, and paying with the local Bank of Georgia gateway.",
    approach: [
      "Designed and shipped end-to-end — architecture, API, frontend, deployment, DNS, SSL.",
      "Built the frontend with Next.js 15, Tailwind, and shadcn/ui for a fast, responsive shopping experience with server-side rendering.",
      "Implemented a real-time custom-order designer using Fabric.js — customers upload artwork and preview it live on products before ordering.",
      "Developed a RESTful backend with ASP.NET Core 8 and MySQL handling product catalog, authentication, and order management.",
      "Integrated Bank of Georgia iPay for live card payments.",
      "Deployed backend on Azure, frontend on Hostinger; managed environment configuration end-to-end.",
    ],
    highlights: [
      "Live in production at dressfield.ge",
      "Real-time canvas-based custom-order designer",
      "Bank of Georgia iPay integration",
      "Server-side rendered storefront",
      "Self-managed Azure + Hostinger deployment",
    ],
    codeSnippet: {
      file: "OrderController.cs",
      lang: "csharp",
      code: `[HttpPost("custom")]
public async Task<IActionResult> CreateCustomOrder(
    [FromBody] CustomOrderDto dto)
{
    var order = Order.CreateCustom(
        dto.ProductId, dto.ArtworkUrl,
        dto.Placement, dto.Size);
    await _repo.AddAsync(order);
    var payment = await _ipay.InitiateAsync(order);
    return Ok(new { order.Id, payment.RedirectUrl });
}`,
    },
  },
  {
    slug: "stitchprice",
    title: "StitchPrice",
    tagline: "A transparent pricing engine for custom embroidery shops.",
    year: "2025",
    status: "Working Prototype",
    githubUrl: "https://github.com/Pistolmani/stitchprice",
    stack: [
      ".NET 9",
      "Clean Architecture",
      "CQRS / MediatR",
      "Domain-Driven Design",
      "xUnit",
      "React",
      "TypeScript",
      "Docker Compose",
    ],
    summary:
      "Full-stack pricing engine that turns stitch-count, color complexity, quantity, and urgency into transparent, profitable quotes — backed by a disciplined domain model with zero external dependencies.",
    problem:
      "Custom embroidery shops quote inconsistently — pricing drifts between staff, undercuts margins, and is impossible to audit. The domain has real rules (stitch counts, digitizing fees, bulk thresholds) that deserve a real engine, not a spreadsheet.",
    approach: [
      "Modelled the pricing domain with zero external dependencies — pure C#, fully unit-tested.",
      "Layered the solution with Clean Architecture: Domain → Application (CQRS handlers) → Infrastructure → API.",
      "Configurable rules: per-1k-stitch rate, per-color overhead, digitizing & setup fees, quantity discount thresholds, urgency multipliers.",
      "React + TypeScript frontend consumes the API; full quote breakdown is returned for transparency.",
      "Containerised with Docker Compose for one-command local startup.",
    ],
    highlights: [
      ".NET 9 Clean Architecture reference",
      "CQRS + MediatR command/query split",
      "Pure-domain pricing engine, fully unit-tested",
      "Configurable business rules",
      "React + TypeScript frontend",
    ],
    codeSnippet: {
      file: "PricingEngine.cs",
      lang: "csharp",
      code: `public Quote Calculate(PricingRequest request)
{
    var baseCost = request.StitchCount / 1000m
                 * _rules.PerThousandRate;
    var colorFee = request.Colors * _rules.PerColorFee;
    var discount = GetVolumeDiscount(request.Quantity);
    var urgency  = request.IsRush
        ? _rules.RushMultiplier : 1m;
    return new Quote(
        baseCost, colorFee, discount, urgency);
}`,
    },
  },
  {
    slug: "pasukhi",
    title: "Pasukhi",
    tagline: "Multi-tenant AI messaging automation across Instagram, Facebook & WhatsApp.",
    year: "2025",
    status: "Live",
    liveUrl: "https://pasukhi.com",
    githubUrl: "https://github.com/Pistolmani/Pasukhi",
    stack: [
      "ASP.NET Core 8",
      "PostgreSQL",
      "EF Core",
      "RabbitMQ",
      "Multi-tenant",
      "Meta Graph APIs",
      "AI / LLM",
    ],
    summary:
      "Multi-tenant SaaS that auto-responds to customer DMs across Instagram, Facebook and WhatsApp using AI-generated replies — tenant-isolated, queue-backed, horizontally scalable.",
    problem:
      "Small businesses get DMs across three Meta channels at all hours. Manual replies don't scale; off-the-shelf bots don't know the business. Each tenant needs its own bot personality and data, fully isolated from every other tenant.",
    approach: [
      "Built on ASP.NET Core 8 with a clean multi-tenant architecture — each tenant's data and bot configuration fully isolated.",
      "Integrated RabbitMQ as a message broker to handle high-throughput inbound webhook events from Meta APIs asynchronously and reliably.",
      "Persisted tenant configurations, conversation history, and message queues in PostgreSQL via EF Core.",
      "Decoupled ingestion, processing, and delivery layers to support future horizontal scaling.",
    ],
    highlights: [
      "Live in production at pasukhi.com",
      "Multi-tenant data & bot isolation",
      "RabbitMQ-backed async ingestion",
      "Three-channel Meta integration (IG / FB / WA)",
      "Decoupled ingest → process → deliver pipeline",
    ],
    codeSnippet: {
      file: "WebhookConsumer.cs",
      lang: "csharp",
      code: `public async Task HandleAsync(InboundMessage msg)
{
    var tenant = await _tenants
        .GetByPageIdAsync(msg.PageId);
    var history = await _conversations
        .GetRecentAsync(tenant.Id, msg.SenderId);
    var reply = await _ai.GenerateReply(
        tenant.Prompt, history, msg.Text);
    await _meta.SendAsync(
        msg.Channel, msg.SenderId, reply);
}`,
    },
  },
];
