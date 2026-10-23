import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Smartphone, Plug, Cpu, ShieldCheck,
  Zap, Clock, MapPin, Phone, Instagram, Facebook, Youtube, ChevronLeft,
  ChevronRight, Play, CalendarCheck, ArrowRight, MessageCircle, Wrench, Menu, X,
} from "lucide-react";
import { Reveal, SectionHead } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import lab from "@/assets/lab.jpg";
import pCase from "@/assets/p-case.jpg";
import pBuds from "@/assets/p-buds.jpg";
import pCharger from "@/assets/p-charger.jpg";
import pGlass from "@/assets/p-glass.jpg";
import v1 from "@/assets/v1.jpg";
import v2 from "@/assets/v2.jpg";

const SITE_ORIGIN = "https://caio18685810-rgb.github.io";
const ogImageUrl = typeof hero === "string" && hero.startsWith("http")
  ? hero
  : `${SITE_ORIGIN}${hero.startsWith("/") ? "" : "/"}${hero}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arcanjo Cell — Assistência Técnica em Parauapebas–PA" },
      { name: "description", content: "Assistência técnica de celulares em Parauapebas–PA. Troca de telas, desbloqueio e recuperação de acesso, películas e acessórios. Atendimento presencial e suporte via WhatsApp." },
      { property: "og:title", content: "Arcanjo Cell — Assistência Técnica" },
      { property: "og:description", content: "Troca de telas, desbloqueio e recuperação de acesso, películas e acessórios para celulares com atendimento presencial e suporte via WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImageUrl },
      { property: "og:url", content: "https://caio18685810-rgb.github.io/reference-guided-sites/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImageUrl },
    ],
  }),
  component: Index,
});

// Número oficial Arcanjo Cell: (94) 98444-9409 (formato internacional)
const WHATSAPP = "5594984449409";
const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const NAV = [
  ["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Loja", "#loja"],
  ["Atendimento", "#delivery"], ["Vídeos", "#videos"], ["Contato", "#contato"],
] as const;

function Index() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Shop />
        <Delivery />
        <Videos />
        <Contact />
      </main>
      <Footer />
      <a
        href={wa("Olá! Gostaria de falar com a Arcanjo Cell.")}
        target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-royal shadow-glow transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
        <MessageCircle className="relative size-6 text-primary-foreground" />
      </a>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? "mx-4 border bg-background/70 backdrop-blur-xl md:mx-auto" : ""}`}>
        <a href="#top" className="display flex items-center gap-2 text-lg font-black">
          <span className="grid size-8 place-items-center rounded-lg bg-royal"><Zap className="size-4 text-primary-foreground" /></span>
          ARCANJO<span className="text-neon"> CELL</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="relative text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-neon after:transition-all hover:after:w-full">{l}</a>
          ))}
        </nav>
        <a href="#delivery" className="btn-primary hidden !py-2.5 md:inline-flex">Solicitar atendimento</a>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="mx-4 mt-2 grid gap-1 rounded-3xl border bg-background/95 p-4 backdrop-blur-xl lg:hidden"
        >
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 hover:bg-secondary">{l}</a>
          ))}
          <div className="mt-2 border-t border-border/60 pt-3">
            <a
              href="#delivery"
              onClick={() => setOpen(false)}
              className="btn-primary flex w-full justify-center !py-3"
            >
              Solicitar atendimento
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32">
      <img src={hero} alt="Manutenção e componentes de celular" width={1920} height={1088}
        className="absolute inset-0 size-full object-cover opacity-70 animate-kenburns" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
      <div className="absolute inset-0 tech-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-60 animate-scan" />

      <div className="relative mx-auto w-full max-w-7xl px-5">
        <span className="pill-tag animate-rise"><span className="size-1.5 rounded-full bg-neon shadow-neon" /> Assistência Técnica · Parauapebas–PA</span>
        <h1 className="display mt-6 max-w-5xl text-5xl font-black sm:text-7xl lg:text-[8.5rem]">
          <span className="block animate-rise" style={{ animationDelay: "120ms" }}>Seu celular,</span>
          <span className="block text-gradient animate-rise" style={{ animationDelay: "260ms" }}>em boas mãos.</span>
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lg text-muted-foreground animate-rise" style={{ animationDelay: "420ms" }}>
            Troca de telas, desbloqueio e recuperação de acesso, películas e acessórios para o seu celular. Atendimento presencial no bairro Nova Vida e solicitação ágil de suporte via WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3 animate-rise" style={{ animationDelay: "560ms" }}>
            <a href="#delivery" className="btn-primary">Solicitar atendimento <ArrowRight className="size-4" /></a>
            <a href="#loja" className="btn-ghost">Ver acessórios</a>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-4 animate-rise" style={{ animationDelay: "700ms" }}>
          {[["Telas", "Troca e manutenção"], ["Acesso", "Desbloqueio e recuperação"], ["Películas", "Aplicação e proteção"], ["Localização", "Nova Vida · Parauapebas"]].map(([n, l]) => (
            <div key={l} className="bg-background/80 p-5 backdrop-blur">
              <div className="display text-2xl font-bold text-neon md:text-3xl">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const brands = ["Apple", "Samsung", "Motorola", "Xiaomi", "Google Pixel", "Realme", "Asus", "LG"];
  return (
    <div className="border-y bg-surface py-5">
      <div className="flex w-max animate-marquee gap-14">
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="display flex items-center gap-14 text-xl font-bold text-muted-foreground/60">
            {b} <Zap className="size-4 text-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Quem somos ---------------- */
function About() {
  const items = [
    { i: Smartphone, t: "Troca de telas", d: "Substituição de tela e display realizada após análise do modelo e do aparelho." },
    { i: Cpu, t: "Recuperação de acesso", d: "Análise da viabilidade técnica para procedimentos de recuperação de acesso e software." },
    { i: ShieldCheck, t: "Aplicação de películas", d: "Aplicação de películas protetoras para conservação da tela do celular." },
    { i: Plug, t: "Acessórios e comodidade", d: "Opções selecionadas em acessórios para smartphone e atendimento dedicado." },
  ];
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead tag="Quem somos" title={<>Atendimento e assistência <span className="text-gradient">para o seu celular.</span></>}
          text="A Arcanjo Cell atua no bairro Nova Vida, em Parauapebas–PA, prestando serviços de manutenção para smartphones com atendimento via WhatsApp e presencial. Nossos procedimentos são orientados pela clareza e transparência, com avaliação prévia de cada aparelho." />
        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="relative overflow-hidden rounded-3xl lg:col-span-7 lg:row-span-2">
            <img src={lab} alt="Bancada de assistência e manutenção técnica" loading="lazy" width={1280} height={960} className="size-full min-h-80 object-cover transition-transform duration-[1.5s] hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
            <div className="absolute bottom-0 grid gap-4 p-6 sm:grid-cols-3 md:p-8">
              {[["Parauapebas", "Bairro Nova Vida"], ["Atendimento", "Presencial e WhatsApp"], ["Avaliação", "Análise prévia do aparelho"]].map(([a, b]) => (
                <div key={a} className="rounded-2xl border bg-background/60 p-4 backdrop-blur-md">
                  <div className="display text-lg font-bold text-neon">{a}</div>
                  <div className="text-sm text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5">
            {items.map((it, k) => (
              <Reveal key={it.t} delay={k * 100} className="card-tech group p-6">
                <div className="grid size-12 place-items-center rounded-xl border border-primary/40 bg-primary/10 transition-all group-hover:bg-royal group-hover:shadow-neon">
                  <it.i className="size-5 text-neon transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-semibold">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Serviços ---------------- */
const SERVICES = [
  { i: Smartphone, t: "Troca de telas", d: "Substituição de tela ou display, mediante avaliação técnica prévia do aparelho." },
  { i: Cpu, t: "Desbloqueio e recuperação", d: "Análise da viabilidade técnica para recuperação de acesso ou restauração, conforme o caso e modelo." },
  { i: ShieldCheck, t: "Aplicação de películas", d: "Aplicação de películas para proteção e conservação da tela do smartphone." },
  { i: Plug, t: "Acessórios para celular", d: "Opções em cabos, carregadores, capas e itens para celulares disponíveis para consulta." },
];

function Services() {
  return (
    <section id="servicos" className="relative bg-band py-24 md:py-32">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHead tag="Serviços prestados" title={<>Serviços dedicados ao seu <span className="text-gradient">smartphone.</span></>}
          text="Conheça nossos serviços de manutenção e acessórios em Parauapebas. Valores e procedimentos são definidos mediante avaliação técnica prévia do aparelho." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, k) => (
            <Reveal key={s.t} delay={(k % 4) * 90}>
              <div tabIndex={0} className="card-tech group h-full min-h-60 overflow-hidden p-6 focus:outline-none">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/20 blur-2xl transition-all duration-700 group-hover:bg-neon/30 group-hover:scale-150" />
                <div className="relative flex items-start justify-between">
                  <s.i className="size-9 text-neon drop-shadow-[0_0_10px_var(--neon)]" />
                  <span className="display text-xs text-muted-foreground">0{k + 1}</span>
                </div>
                <h3 className="relative mt-8 text-xl font-semibold">{s.t}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.d}</p>
                <div className="relative mt-5 flex items-center justify-between border-t pt-4 transition-all duration-500 opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-3 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus:translate-y-0 sm:group-focus:opacity-100">
                  <span className="text-sm font-semibold text-neon">Sob consulta</span>
                  <a href={wa(`Olá! Gostaria de consultar informações sobre o serviço: ${s.t}`)} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-neon transition-colors"><MessageCircle className="size-3" />Consultar</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Loja ---------------- */
// Espaços reservados mantidos na íntegra para inserção futura dos itens reais e disponibilidade confirmada
const PRODUCTS = [
  { img: pCase, n: "Capa para Celular", c: "Capas", p: "Sob consulta", tag: "Espaço reservado" },
  { img: pBuds, n: "Fone de Ouvido", c: "Fones", p: "Sob consulta", tag: "Espaço reservado" },
  { img: pCharger, n: "Carregador para Celular", c: "Carregadores", p: "Sob consulta", tag: "Espaço reservado" },
  { img: pGlass, n: "Película de Proteção", c: "Protetores", p: "Sob consulta", tag: "Espaço reservado" },
  { img: pBuds, n: "Acessório de Áudio", c: "Fones", p: "Sob consulta", tag: "Espaço reservado" },
  { img: pCase, n: "Capa Protetora", c: "Capas", p: "Sob consulta", tag: "Espaço reservado" },
  { img: pCharger, n: "Cabo para Celular", c: "Carregadores", p: "Sob consulta", tag: "Espaço reservado" },
  { img: pGlass, n: "Película de Privacidade", c: "Protetores", p: "Sob consulta", tag: "Espaço reservado" },
];
const CATS = ["Todos", "Capas", "Carregadores", "Fones", "Protetores"];

function Shop() {
  const [cat, setCat] = useState("Todos");
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const list = cat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.c === cat);
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const on = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  const max = Math.max(0, list.length - perView);
  useEffect(() => setIdx(0), [cat]);
  useEffect(() => {
    if (paused || max === 0) return;
    const t = setInterval(() => setIdx((i) => (i >= max ? 0 : i + 1)), 4500);
    return () => clearInterval(t);
  }, [paused, max]);

  return (
    <section id="loja" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead tag="Catálogo de acessórios" title={<>Acessórios e proteção para o <span className="text-gradient">seu aparelho.</span></>}
          text="Espaço reservado para apresentação de itens e acessórios. Consulte a disponibilidade de modelos diretamente pelo nosso WhatsApp." />
        <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="tablist">
            {CATS.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${cat === c ? "border-transparent bg-royal text-primary-foreground shadow-glow" : "text-muted-foreground hover:border-neon hover:text-neon"}`}>{c}</button>
            ))}
          </div>
          <div className="flex gap-2">
            <button aria-label="Anterior" onClick={() => setIdx((i) => (i <= 0 ? max : i - 1))} className="grid size-11 place-items-center rounded-full border transition-all hover:border-neon hover:text-neon hover:shadow-neon"><ChevronLeft className="size-5" /></button>
            <button aria-label="Próximo" onClick={() => setIdx((i) => (i >= max ? 0 : i + 1))} className="grid size-11 place-items-center rounded-full border transition-all hover:border-neon hover:text-neon hover:shadow-neon"><ChevronRight className="size-5" /></button>
          </div>
        </Reveal>
        <div className="overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="flex transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]" style={{ transform: `translateX(-${(idx * 100) / perView}%)` }}>
            {list.map((p) => (
              <div key={p.n} className="shrink-0 px-2.5" style={{ width: `${100 / perView}%` }}>
                <article className="card-tech group overflow-hidden">
                  <div className="relative aspect-square overflow-hidden rounded-t-[1.2rem]">
                    <img src={p.img} alt={p.n} loading="lazy" width={816} height={816} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    {p.tag && <span className="pill-tag absolute left-4 top-4 bg-background/70 backdrop-blur">{p.tag}</span>}
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.c}</div>
                      <h3 className="mt-1 font-semibold">{p.n}</h3>
                      <div className="display mt-2 text-lg font-bold text-neon">{p.p}</div>
                    </div>
                    <a href={wa(`Olá! Gostaria de consultar informações sobre: ${p.n}`)} target="_blank" rel="noreferrer" aria-label={`Consultar ${p.n}`}
                      className="grid size-12 shrink-0 place-items-center rounded-full bg-royal shadow-glow transition-transform group-hover:rotate-[-45deg]"><ArrowRight className="size-5 text-primary-foreground" /></a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} aria-label={`Ir para slide ${i + 1}`} onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === idx ? "w-10 bg-neon shadow-neon" : "w-4 bg-muted"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Atendimento ---------------- */
const SERVICE_OPTIONS = [
  "Troca de telas",
  "Desbloqueio e recuperação",
  "Aplicação de películas",
  "Acessórios para celular",
  "Outros",
] as const;

function Delivery() {
  const [nome, setNome] = useState("");
  const [aparelho, setAparelho] = useState("");
  const [selectedService, setSelectedService] = useState<string>("Troca de telas");
  const [descricao, setDescricao] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nomeTrimmed = nome.trim();
    const aparelhoTrimmed = aparelho.trim();
    const descricaoTrimmed = descricao.trim();

    if (!nomeTrimmed || !aparelhoTrimmed) {
      return;
    }
    if (selectedService === "Outros" && !descricaoTrimmed) {
      return;
    }

    const lines = [
      "Olá, Arcanjo Cell! Gostaria de solicitar atendimento para meu aparelho.",
      "",
      `Nome: ${nomeTrimmed}`,
      `Aparelho: ${aparelhoTrimmed}`,
      `Serviço desejado: ${selectedService}`,
    ];

    if (selectedService === "Outros" && descricaoTrimmed) {
      lines.push("", `Descrição: ${descricaoTrimmed}`);
    }

    const msg = lines.join("\n");
    window.open(wa(msg), "_blank");
    setSent(true);
  };

  const steps = [
    { i: CalendarCheck, t: "Preencha", d: "Informe seu aparelho e o serviço desejado" },
    { i: MessageCircle, t: "Encaminhe", d: "Inicie o contato com nossa equipe pelo WhatsApp" },
    { i: Wrench, t: "Avaliação", d: "Análise técnica prévia com esclarecimento de dúvidas" },
    { i: ShieldCheck, t: "Atendimento", d: "Procedimento seguro e transparente na loja" },
  ];
  const input = "w-full rounded-xl border border-input/80 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-neon focus:bg-background/90 focus:outline-none focus:ring-2 focus:ring-neon/20";

  return (
    <section id="delivery" className="relative bg-band py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHead
          tag="Atendimento técnico"
          title={<>Como podemos <span className="text-gradient">ajudar?</span></>}
          text="Conte o que você precisa e escolha o serviço desejado. Sua solicitação será encaminhada diretamente para nossa equipe pelo WhatsApp."
        />
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, k) => (
            <Reveal key={s.t} delay={k * 100} className="relative flex items-center gap-4 rounded-2xl border bg-background/40 p-5 backdrop-blur">
              <div className="grid size-12 shrink-0 place-items-center rounded-full bg-royal shadow-glow"><s.i className="size-5 text-primary-foreground" /></div>
              <div><div className="font-semibold">{k + 1}. {s.t}</div><div className="text-sm text-muted-foreground">{s.d}</div></div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto max-w-2xl">
          <Reveal className="card-tech rounded-3xl border border-border/80 bg-card/60 p-6 shadow-2xl backdrop-blur-xl sm:p-8 md:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neon">
              <Wrench className="size-4" /> Solicitação de atendimento
            </div>
            <h3 className="display mt-2 text-2xl font-bold md:text-3xl">Solicitar atendimento</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha os dados abaixo para iniciar sua conversa com a equipe técnica.
            </p>
            <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="nome" className="flex items-center justify-between text-xs font-semibold text-foreground/90">
                  <span>Seu nome</span>
                  <span className="text-[10px] font-normal text-muted-foreground">Obrigatório</span>
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  maxLength={80}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className={input}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="aparelho" className="flex items-center justify-between text-xs font-semibold text-foreground/90">
                  <span>Modelo do aparelho</span>
                  <span className="text-[10px] font-normal text-muted-foreground">Obrigatório</span>
                </label>
                <input
                  id="aparelho"
                  name="aparelho"
                  type="text"
                  required
                  maxLength={60}
                  value={aparelho}
                  onChange={(e) => setAparelho(e.target.value)}
                  placeholder="Ex.: Samsung Galaxy A54"
                  className={input}
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label id="servico-label" className="flex items-center justify-between text-xs font-semibold text-foreground/90">
                  <span>Qual serviço você precisa?</span>
                  <span className="text-[10px] font-normal text-muted-foreground">Escolha uma opção</span>
                </label>
                <div role="radiogroup" aria-labelledby="servico-label" className="grid gap-2.5 sm:grid-cols-2">
                  {SERVICE_OPTIONS.map((s) => {
                    const isSelected = selectedService === s;
                    return (
                      <label
                        key={s}
                        className={`group relative flex cursor-pointer items-center justify-between rounded-xl border p-3.5 transition-all duration-200 focus-within:ring-2 focus-within:ring-neon focus-within:ring-offset-2 focus-within:ring-offset-background ${
                          isSelected
                            ? "border-neon bg-primary/20 text-foreground shadow-sm shadow-neon/20 ring-1 ring-neon/40"
                            : "border-border/80 bg-background/50 text-muted-foreground hover:border-primary/60 hover:bg-background/80 hover:text-foreground"
                        } ${s === "Outros" ? "sm:col-span-2" : ""}`}
                      >
                        <span className="flex items-center gap-2.5 text-sm font-medium">
                          <span
                            className={`grid size-4 shrink-0 place-items-center rounded-full border transition-all ${
                              isSelected ? "border-neon bg-neon" : "border-muted-foreground/60 group-hover:border-primary"
                            }`}
                          >
                            {isSelected && <span className="size-1.5 rounded-full bg-background" />}
                          </span>
                          <span className={isSelected ? "font-semibold text-foreground" : ""}>{s}</span>
                        </span>
                        <input
                          type="radio"
                          name="servico"
                          value={s}
                          checked={isSelected}
                          onChange={() => setSelectedService(s)}
                          className="sr-only"
                        />
                        {isSelected && (
                          <span className="text-[11px] font-semibold uppercase tracking-wide text-neon">
                            Selecionado
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>

              {selectedService === "Outros" && (
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="descricao" className="flex items-center justify-between text-xs font-semibold text-foreground/90">
                    <span>Descreva o que aconteceu com seu aparelho</span>
                    <span className="text-[10px] font-normal text-neon">Obrigatório</span>
                  </label>
                  <textarea
                    id="descricao"
                    name="descricao"
                    required={selectedService === "Outros"}
                    rows={3}
                    maxLength={300}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Conte brevemente qual é o problema ou o que você precisa."
                    className="w-full rounded-xl border border-input/80 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-neon focus:bg-background/90 focus:outline-none focus:ring-2 focus:ring-neon/20 resize-none"
                  />
                </div>
              )}

              <div className="pt-2 sm:col-span-2">
                <button
                  type="submit"
                  className="btn-primary group relative flex w-full items-center justify-center gap-2.5 !py-3.5 text-base font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-neon/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99]"
                >
                  <span>Encaminhar para o WhatsApp</span>
                  <MessageCircle className="size-5 transition-transform duration-300 group-hover:scale-110" />
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  A conversa será aberta no WhatsApp com as informações preenchidas para você revisar e enviar.
                </p>
              </div>

              {sent && (
                <div className="sm:col-span-2 rounded-xl border border-neon/40 bg-primary/10 p-4 text-center">
                  <p className="text-sm font-medium text-neon">
                    WhatsApp aberto com a sua solicitação pronta. É só revisar e enviar a mensagem!
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Vídeos ---------------- */
// Espaço reservado para mídia audiovisual futura. A seleção de miniaturas e o layout 16:9 estão preservados.
const VIDEOS = [
  { poster: v1, t: "Troca de telas", d: "Registro em breve", src: "" },
  { poster: lab, t: "Desbloqueio e recuperação", d: "Registro em breve", src: "" },
  { poster: v2, t: "Aplicação de películas", d: "Registro em breve", src: "" },
  { poster: hero, t: "Acessórios para celular", d: "Registro em breve", src: "" },
];

function Videos() {
  const [active, setActive] = useState(0);
  const v = VIDEOS[active] ?? VIDEOS[0]!;
  return (
    <section id="videos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead tag="Galeria & registros" title={<>Acompanhe nossos <span className="text-gradient">serviços.</span></>}
          text="Espaço reservado para exibição de procedimentos de bancada, atendimento e novidades da Arcanjo Cell." />
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="group relative aspect-video overflow-hidden rounded-3xl border shadow-glow lg:col-span-2">
            {v.src ? (
              <video key={v.src} src={v.src} poster={v.poster} controls autoPlay muted playsInline className="size-full object-cover" />
            ) : (
              <>
                <img key={active} src={v.poster} alt={v.t} loading="lazy" className="size-full object-cover animate-kenburns" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <button aria-label={`Visualizar ${v.t}`} className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-royal shadow-glow transition-transform group-hover:scale-110 cursor-default">
                  <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring opacity-60" />
                  <Play className="relative ml-1 size-8 fill-primary-foreground text-primary-foreground opacity-90" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="pill-tag">Registro em breve</span>
                  <h3 className="display mt-3 text-2xl font-bold md:text-3xl">{v.t}</h3>
                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-muted"><div className="h-full w-1/3 bg-royal opacity-50" /></div>
                </div>
              </>
            )}
          </Reveal>
          <div className="grid gap-4">
            {VIDEOS.map((x, k) => (
              <Reveal key={x.t} delay={k * 80}>
                <button onClick={() => setActive(k)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-all duration-300 ${k === active ? "border-neon bg-primary/10 shadow-neon" : "hover:border-primary hover:bg-secondary"}`}>
                  <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl">
                    <img src={x.poster} alt="" loading="lazy" className="size-full object-cover" />
                    <Play className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 fill-foreground" />
                  </div>
                  <div><div className="text-sm font-semibold">{x.t}</div><div className="mt-1 text-xs text-muted-foreground">{x.d}</div></div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contato ---------------- */
function Contact() {
  const info = [
    {
      i: MapPin,
      t: "Endereço",
      d: "Rua Mangueiras, nº 360, bairro Nova Vida, Parauapebas–PA, CEP 68515-000",
      href: "https://www.google.com/maps/search/?api=1&query=Rua+Mangueiras%2C+360+-+Nova+Vida%2C+Parauapebas+-+PA",
    },
    {
      i: Phone,
      t: "WhatsApp / Atendimento",
      d: "(94) 98444-9409",
      href: wa("Olá! Gostaria de falar com a Arcanjo Cell."),
    },
    {
      i: Smartphone,
      t: "Serviços",
      d: "Telas, recuperação de acesso, películas e acessórios",
    },
    {
      i: Clock,
      t: "Horário",
      d: "Atendimento presencial e via WhatsApp · Consulte horários",
    },
  ];
  return (
    <section id="contato" className="relative bg-band py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead tag="Localização & contato" title={<>Venha nos <span className="text-gradient">visitar.</span></>} />
        <div className="grid gap-5 lg:grid-cols-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {info.map((x, k) => (
              <Reveal key={x.t} delay={k * 80} className="card-tech flex items-start gap-4 p-5">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/10"><x.i className="size-5 text-neon" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{x.t}</div>
                  {x.href ? (
                    <a
                      href={x.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block font-medium transition-colors hover:text-neon"
                    >
                      {x.d}
                    </a>
                  ) : (
                    <div className="mt-1 font-medium">{x.d}</div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="relative min-h-96 overflow-hidden rounded-[1.25rem] border lg:col-span-3">
            {/* Visualização aproximada da região do bairro Nova Vida, Parauapebas–PA */}
            <iframe title="Mapa aproximado da região da loja" loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-49.900266967841785%2C-6.089011078829035%2C-49.890266967841785%2C-6.083011078829035&layer=mapnik&marker=-6.086011078829035%2C-49.895266967841785"
              className="absolute inset-0 size-full [filter:invert(.92)_hue-rotate(185deg)_saturate(1.6)_brightness(.9)]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: "Serviços",
      links: [
        { label: "Troca de telas", href: "#servicos" },
        { label: "Recuperação de acesso", href: "#servicos" },
        { label: "Películas", href: "#servicos" },
        { label: "Acessórios", href: "#loja" },
      ],
    },
    {
      title: "Atendimento",
      links: [
        { label: "Bairro Nova Vida", href: "#contato" },
        { label: "Parauapebas–PA", href: "#contato" },
        { label: "Solicitar atendimento", href: "#delivery" },
        { label: "WhatsApp", href: wa("Olá! Gostaria de falar com a Arcanjo Cell."), external: true },
      ],
    },
    {
      title: "Navegação",
      links: [
        { label: "Sobre", href: "#sobre" },
        { label: "Serviços", href: "#servicos" },
        { label: "Loja", href: "#loja" },
        { label: "Contato", href: "#contato" },
      ],
    },
  ];
  return (
    <footer className="relative overflow-hidden border-t pt-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="display text-2xl font-black">ARCANJO<span className="text-neon"> CELL</span></div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">Assistência técnica de celulares no bairro Nova Vida em Parauapebas–PA. Atendimento presencial e suporte via WhatsApp.</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, k) => (
                <span key={k} aria-label="Canal social" className="grid size-10 place-items-center rounded-full border border-border/50 text-muted-foreground/40 cursor-default"><I className="size-4" /></span>
              ))}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-widest text-neon">{col.title}</div>
              <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="display pointer-events-none mt-16 select-none text-center text-[22vw] font-black leading-none text-gradient opacity-15">ARCANJO CELL</div>
        <div className="flex flex-col justify-between gap-2 border-t py-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Arcanjo Cell Assistência Técnica. Todos os direitos reservados.</span>
          <span>Rua Mangueiras, nº 360, Nova Vida · Parauapebas–PA</span>
        </div>
      </div>
    </footer>
  );
}
