import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Smartphone, BatteryCharging, Plug, Cpu, Camera, Droplets, Volume2, ShieldCheck,
  Zap, Award, Clock, MapPin, Phone, Mail, Instagram, Facebook, Youtube, ChevronLeft,
  ChevronRight, Play, Truck, CalendarCheck, ArrowRight, MessageCircle, Wrench, Menu, X,
} from "lucide-react";
import { Reveal, SectionHead } from "@/components/site/Reveal";
// Substitua estas imagens pelas fotos reais da loja/produtos (mesmos caminhos).
import hero from "@/assets/hero.jpg";
import lab from "@/assets/lab.jpg";
import pCase from "@/assets/p-case.jpg";
import pBuds from "@/assets/p-buds.jpg";
import pCharger from "@/assets/p-charger.jpg";
import pGlass from "@/assets/p-glass.jpg";
import v1 from "@/assets/v1.jpg";
import v2 from "@/assets/v2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VoltFix — Assistência técnica de celulares com delivery" },
      { name: "description", content: "Troca de tela, bateria, conector e software com garantia. Busca e entrega do seu celular e acessórios premium." },
      { property: "og:title", content: "VoltFix — Assistência técnica de celulares" },
      { property: "og:description", content: "Reparo de smartphones com precisão de laboratório, delivery e loja de acessórios." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Troque pelo número real (formato internacional, só dígitos)
const WHATSAPP = "5511999999999";
const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const NAV = [
  ["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Loja", "#loja"],
  ["Delivery", "#delivery"], ["Vídeos", "#videos"], ["Contato", "#contato"],
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
        href={wa("Olá! Quero um orçamento.")}
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
          VOLT<span className="text-neon">FIX</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="relative text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-neon after:transition-all hover:after:w-full">{l}</a>
          ))}
        </nav>
        <a href="#delivery" className="btn-primary hidden !py-2.5 md:inline-flex">Agendar reparo</a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mx-4 mt-2 grid gap-1 rounded-3xl border bg-background/95 p-4 backdrop-blur-xl lg:hidden">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 hover:bg-secondary">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32">
      {/* Para vídeo em loop: troque <img> por <video autoPlay muted loop playsInline src="..."/> */}
      <img src={hero} alt="Smartphone desmontado com componentes iluminados em azul" width={1920} height={1088}
        className="absolute inset-0 size-full object-cover opacity-70 animate-kenburns" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
      <div className="absolute inset-0 tech-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-60 animate-scan" />

      <div className="relative mx-auto w-full max-w-7xl px-5">
        <span className="pill-tag animate-rise"><span className="size-1.5 rounded-full bg-neon shadow-neon" /> Laboratório certificado · Garantia de 6 meses</span>
        <h1 className="display mt-6 max-w-5xl text-5xl font-black sm:text-7xl lg:text-[8.5rem]">
          <span className="block animate-rise" style={{ animationDelay: "120ms" }}>Seu celular,</span>
          <span className="block text-gradient animate-rise" style={{ animationDelay: "260ms" }}>renascido.</span>
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lg text-muted-foreground animate-rise" style={{ animationDelay: "420ms" }}>
            Reparo de smartphones com precisão de laboratório, peças de alta qualidade e busca e entrega na sua porta. Diagnóstico grátis em até 30 minutos.
          </p>
          <div className="flex flex-wrap gap-3 animate-rise" style={{ animationDelay: "560ms" }}>
            <a href="#delivery" className="btn-primary">Agendar reparo <ArrowRight className="size-4" /></a>
            <a href="#loja" className="btn-ghost">Ver catálogo</a>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-4 animate-rise" style={{ animationDelay: "700ms" }}>
          {[["+12 mil", "aparelhos reparados"], ["30 min", "diagnóstico médio"], ["4,9★", "avaliação no Google"], ["6 meses", "de garantia"]].map(([n, l]) => (
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
    { i: Award, t: "Técnicos certificados", d: "Equipe treinada em microssoldagem e reparo de placa." },
    { i: ShieldCheck, t: "Peças de qualidade", d: "Componentes testados e rastreáveis, com garantia." },
    { i: Cpu, t: "Diagnóstico digital", d: "Laudo completo com mais de 40 testes de hardware." },
    { i: Clock, t: "Reparo expresso", d: "Grande parte dos serviços fica pronta no mesmo dia." },
  ];
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead tag="Quem somos" title={<>Tecnologia de laboratório, <span className="text-gradient">atendimento humano.</span></>}
          text="Nascemos em 2014 numa bancada de 2 metros. Hoje somos um laboratório completo, com a missão de devolver seu aparelho como novo — rápido, transparente e com garantia." />
        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="relative overflow-hidden rounded-3xl lg:col-span-7 lg:row-span-2">
            <img src={lab} alt="Técnico reparando placa de smartphone com pinça" loading="lazy" width={1280} height={960} className="size-full min-h-80 object-cover transition-transform duration-[1.5s] hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
            <div className="absolute bottom-0 grid gap-4 p-6 sm:grid-cols-3 md:p-8">
              {[["2014", "Fundação"], ["Missão", "Reparar com honestidade"], ["Visão", "Referência em reparo"]].map(([a, b]) => (
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
// Ajuste os preços estimados conforme sua tabela real.
const SERVICES = [
  { i: Smartphone, t: "Troca de tela", d: "Display original ou premium, com película de brinde.", p: "a partir de R$ 249", time: "1h" },
  { i: BatteryCharging, t: "Bateria", d: "Saúde 100% novamente, com calibração.", p: "a partir de R$ 149", time: "40min" },
  { i: Plug, t: "Conector de carga", d: "Limpeza ou substituição do conector.", p: "a partir de R$ 99", time: "1h" },
  { i: Cpu, t: "Software", d: "Atualização, desbloqueio, backup e formatação.", p: "a partir de R$ 79", time: "1h" },
  { i: Camera, t: "Câmeras", d: "Lente traseira, módulo frontal e foco.", p: "a partir de R$ 129", time: "1h30" },
  { i: Droplets, t: "Contato com líquido", d: "Banho químico e recuperação de placa.", p: "sob diagnóstico", time: "24h" },
  { i: Volume2, t: "Áudio & microfone", d: "Alto-falante, auricular e microfone.", p: "a partir de R$ 89", time: "1h" },
  { i: Wrench, t: "Reparo de placa", d: "Microssoldagem e troca de CI.", p: "sob diagnóstico", time: "48h" },
];

function Services() {
  return (
    <section id="servicos" className="relative bg-band py-24 md:py-32">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHead tag="Serviços de reparo" title={<>Tudo que seu celular <span className="text-gradient">precisa.</span></>}
          text="Passe o mouse (ou toque) em cada serviço para ver o tempo médio e o preço estimado. Orçamento final após diagnóstico gratuito." />
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
                <div className="relative mt-5 flex translate-y-3 items-center justify-between border-t pt-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                  <span className="text-sm font-semibold text-neon">{s.p}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="size-3" />{s.time}</span>
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
const PRODUCTS = [
  { img: pCase, n: "Capa Aero Shield", c: "Capas", p: "R$ 89,90", tag: "Lançamento" },
  { img: pBuds, n: "Fone Pulse ANC", c: "Fones", p: "R$ 349,90", tag: "Oferta" },
  { img: pCharger, n: "Carregador GaN 65W", c: "Carregadores", p: "R$ 199,90", tag: "Mais vendido" },
  { img: pGlass, n: "Película Nano Glass 9H", c: "Protetores", p: "R$ 49,90", tag: "" },
  { img: pBuds, n: "Fone Pulse Lite", c: "Fones", p: "R$ 179,90", tag: "" },
  { img: pCase, n: "Capa MagSafe Carbon", c: "Capas", p: "R$ 119,90", tag: "Oferta" },
  { img: pCharger, n: "Cabo Braided USB-C 2m", c: "Carregadores", p: "R$ 59,90", tag: "" },
  { img: pGlass, n: "Película Privacidade", c: "Protetores", p: "R$ 69,90", tag: "Lançamento" },
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
        <SectionHead tag="Catálogo & loja" title={<>Acessórios que <span className="text-gradient">elevam</span> seu aparelho.</>}
          text="Seleção curada de capas, carregadores, fones e protetores. Retire na loja ou receba junto com seu reparo." />
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
                    <a href={wa(`Olá! Tenho interesse no produto: ${p.n}`)} target="_blank" rel="noreferrer" aria-label={`Comprar ${p.n}`}
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

/* ---------------- Delivery ---------------- */
function Delivery() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Olá! Quero agendar uma coleta.\nNome: ${f.get("nome")}\nAparelho: ${f.get("aparelho")}\nProblema: ${f.get("problema")}\nBairro: ${f.get("bairro")}`;
    window.open(wa(msg), "_blank");
    setSent(true);
  };
  const steps = [
    { i: CalendarCheck, t: "Agende", d: "Pelo formulário ou WhatsApp" },
    { i: Truck, t: "Coletamos", d: "Motoboy busca em até 2h" },
    { i: Wrench, t: "Reparamos", d: "Laudo e aprovação online" },
    { i: Zap, t: "Entregamos", d: "Pronto e com garantia" },
  ];
  const input = "w-full rounded-xl border bg-background/50 px-4 py-3 text-sm placeholder:text-muted-foreground/70 transition-all focus:border-neon focus:shadow-neon focus:outline-none";
  return (
    <section id="delivery" className="relative bg-band py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHead tag="Delivery & agendamento" title={<>A gente <span className="text-gradient">busca e entrega.</span></>}
          text="Sem sair de casa: coletamos seu aparelho, reparamos no laboratório e devolvemos no mesmo endereço. Coleta grátis na área de cobertura." />
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, k) => (
            <Reveal key={s.t} delay={k * 100} className="relative flex items-center gap-4 rounded-2xl border bg-background/40 p-5 backdrop-blur">
              <div className="grid size-12 shrink-0 place-items-center rounded-full bg-royal shadow-glow"><s.i className="size-5 text-primary-foreground" /></div>
              <div><div className="font-semibold">{k + 1}. {s.t}</div><div className="text-sm text-muted-foreground">{s.d}</div></div>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-5">
          <Reveal className="card-tech p-6 md:p-8 lg:col-span-2">
            <h3 className="display text-2xl font-bold">Agendar coleta</h3>
            <p className="mt-2 text-sm text-muted-foreground">Enviamos seu pedido direto para nosso WhatsApp.</p>
            <form onSubmit={submit} className="mt-6 grid gap-3">
              <label className="sr-only" htmlFor="nome">Nome</label>
              <input id="nome" name="nome" required maxLength={80} placeholder="Seu nome" className={input} />
              <label className="sr-only" htmlFor="aparelho">Aparelho</label>
              <input id="aparelho" name="aparelho" required maxLength={60} placeholder="Modelo do aparelho (ex: iPhone 13)" className={input} />
              <label className="sr-only" htmlFor="problema">Problema</label>
              <select id="problema" name="problema" className={input} defaultValue="Troca de tela">
                {SERVICES.map((s) => <option key={s.t} className="bg-card">{s.t}</option>)}
              </select>
              <label className="sr-only" htmlFor="bairro">Bairro</label>
              <input id="bairro" name="bairro" required maxLength={60} placeholder="Bairro" className={input} />
              <button type="submit" className="btn-primary mt-2 justify-center">Agendar pelo WhatsApp <MessageCircle className="size-4" /></button>
              {sent && <p className="text-center text-sm text-neon">Pedido aberto no WhatsApp. É só enviar!</p>}
            </form>
          </Reveal>
          <Reveal delay={150} className="relative min-h-96 overflow-hidden rounded-[1.25rem] border lg:col-span-3">
            {/* Ajuste as coordenadas do mapa para a sua região de cobertura */}
            <iframe title="Mapa da área de cobertura" loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.75%2C-23.65%2C-46.55%2C-23.5&layer=mapnik"
              className="absolute inset-0 size-full [filter:invert(.92)_hue-rotate(185deg)_saturate(1.6)_brightness(.9)]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neon/60 bg-primary/15 shadow-neon">
              <span className="absolute inset-0 rounded-full border border-neon animate-pulse-ring" />
              <MapPin className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-full text-neon animate-float" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {["Centro", "Pinheiros", "Vila Mariana", "Moema", "Perdizes"].map((b) => (
                <span key={b} className="pill-tag bg-background/80 backdrop-blur">{b}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Vídeos ---------------- */
// Substitua `src` pelos seus vídeos reais (MP4 hospedado ou link). `poster` é a miniatura.
const VIDEOS = [
  { poster: v1, t: "Antes & depois: troca de tela", d: "0:48", src: "" },
  { poster: lab, t: "Microssoldagem na prática", d: "1:12", src: "" },
  { poster: v2, t: "Como funciona nosso delivery", d: "0:35", src: "" },
  { poster: hero, t: "Por dentro de um smartphone", d: "1:30", src: "" },
];

function Videos() {
  const [active, setActive] = useState(0);
  const v = VIDEOS[active] ?? VIDEOS[0]!;
  return (
    <section id="videos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead tag="Galeria de vídeos" title={<>Veja o reparo <span className="text-gradient">acontecer.</span></>}
          text="Processos reais do nosso laboratório, transformações antes e depois e depoimentos de clientes." />
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="group relative aspect-video overflow-hidden rounded-3xl border shadow-glow lg:col-span-2">
            {v.src ? (
              <video key={v.src} src={v.src} poster={v.poster} controls autoPlay muted playsInline className="size-full object-cover" />
            ) : (
              <>
                <img key={active} src={v.poster} alt={v.t} loading="lazy" className="size-full object-cover animate-kenburns" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <button aria-label={`Reproduzir ${v.t}`} className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-royal shadow-glow transition-transform group-hover:scale-110">
                  <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
                  <Play className="relative ml-1 size-8 fill-primary-foreground text-primary-foreground" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="pill-tag">{v.d}</span>
                  <h3 className="display mt-3 text-2xl font-bold md:text-3xl">{v.t}</h3>
                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-muted"><div className="h-full w-1/3 bg-royal" /></div>
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
  // Dados de exemplo: substitua pelos reais.
  const info = [
    { i: MapPin, t: "Endereço", d: "Av. Paulista, 1000 — Bela Vista, São Paulo/SP" },
    { i: Phone, t: "Telefone / WhatsApp", d: "(11) 99999-9999" },
    { i: Mail, t: "E-mail", d: "contato@voltfix.com.br" },
    { i: Clock, t: "Horário", d: "Seg–Sex 9h–19h · Sáb 9h–14h" },
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
                <div><div className="text-xs uppercase tracking-widest text-muted-foreground">{x.t}</div><div className="mt-1 font-medium">{x.d}</div></div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="relative min-h-96 overflow-hidden rounded-[1.25rem] border lg:col-span-3">
            <iframe title="Mapa da loja" loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.665%2C-23.57%2C-46.645%2C-23.558&layer=mapnik&marker=-23.5641%2C-46.6545"
              className="absolute inset-0 size-full [filter:invert(.92)_hue-rotate(185deg)_saturate(1.6)_brightness(.9)]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ["Serviços", ["Troca de tela", "Bateria", "Conector", "Software"]],
    ["Empresa", ["Quem somos", "Garantia", "Trabalhe conosco", "Blog"]],
    ["Ajuda", ["Delivery", "Rastrear reparo", "Perguntas frequentes", "Privacidade"]],
  ] as const;
  return (
    <footer className="relative overflow-hidden border-t pt-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="display text-2xl font-black">VOLT<span className="text-neon">FIX</span></div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">Assistência técnica de celulares com precisão de laboratório e delivery.</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, k) => (
                <a key={k} href="#" aria-label="Rede social" className="grid size-10 place-items-center rounded-full border transition-all hover:border-neon hover:text-neon hover:shadow-neon"><I className="size-4" /></a>
              ))}
            </div>
          </div>
          {cols.map(([t, ls]) => (
            <div key={t}>
              <div className="text-xs font-semibold uppercase tracking-widest text-neon">{t}</div>
              <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
                {ls.map((l) => <li key={l}><a href="#" className="transition-colors hover:text-foreground">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="display pointer-events-none mt-16 select-none text-center text-[22vw] font-black leading-none text-gradient opacity-15">VOLTFIX</div>
        <div className="flex flex-col justify-between gap-2 border-t py-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} VoltFix. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  );
}
