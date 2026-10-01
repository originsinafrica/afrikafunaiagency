import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import universeAsset from "@/assets/sam-et-les-tresors.jpeg.asset.json";
import zemzemAsset from "@/assets/sam.jpeg.asset.json";
import statuesAsset from "@/assets/trois-statues.jpeg.asset.json";
import tresorRoyalAsset from "@/assets/tabouret.jpeg.asset.json";
import soundjataImage from "@/assets/images/soundjata_sogolon_portrait_1790848341391.jpg";

const universeImage = universeAsset.url;
const zemzemImage = zemzemAsset.url;
const statuesImage = statuesAsset.url;
const tresorRoyalImage = tresorRoyalAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AAA — Afrikafun AI Agency · Agence créative augmentée par l'IA" },
      {
        name: "description",
        content:
          "Une agence créative augmentée par l'intelligence artificielle, qui explore le Bénin pour raconter la puissance, la profondeur et la beauté des cultures africaines.",
      },
      {
        property: "og:title",
        content: "AAA — Afrikafun AI Agency · Agence créative augmentée par l'IA",
      },
      {
        property: "og:description",
        content:
          "Une agence créative augmentée par l'intelligence artificielle, qui explore le Bénin pour raconter la puissance, la profondeur et la beauté des cultures africaines.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AAA — Afrikafun AI Agency · Agence créative augmentée par l'IA",
      },
      {
        name: "twitter:description",
        content:
          "Une agence créative augmentée par l'intelligence artificielle, qui explore le Bénin pour raconter la puissance, la profondeur et la beauté des cultures africaines.",
      },
      { name: "twitter:image", content: "/og-image.jpeg" },
    ],
  }),
  component: Index,
});

// ---------- Données ----------

type Pillar = {
  id: string;
  name: string;
  role: string;
  summary: string;
};

type Builder = {
  id: string;
  name: string;
  role: string;
  badge?: string;
  summary: string;
};

type AgentHorizon = "phase1" | "phase2";

type AgentItem = {
  id: string;
  number: string;
  horizon: AgentHorizon;
  horizonLabel: string;
  name: string;
  mission: string;
  budget: string;
  duties: string[];
  usageSteps: string;
  tools: [string, string][];
};

const pillars: Pillar[] = [
  {
    id: "stephane",
    name: "Stéphane",
    role: "Vision & Ambition",
    summary:
      "Porte la vision globale du studio et la stratégie pour aller vers le cinéma, l'animation et les grandes productions.",
  },
  {
    id: "rodrigue",
    name: "Rodrigue",
    role: "Éditorial & Patrimoine",
    summary:
      "Ancre chaque création dans la vérité historique, la richesse du patrimoine béninois et la transmission culturelle.",
  },
  {
    id: "legrand",
    name: "Legrand",
    role: "Direction artistique",
    summary:
      "Façonne l'écriture narrative, la création des personnages et l'identité artistique des univers dès l'origine.",
  },
  {
    id: "romeo",
    name: "Roméo",
    role: "Process & Optimisation",
    summary:
      "Structure l'organisation et le calendrier, optimise les outils d'IA et veille à la qualité d'ensemble.",
  },
];

const builders: Builder[] = [
  {
    id: "cesaire",
    name: "Césaire",
    role: "Montage, Rythme & Réalisation",
    summary:
      "Production audiovisuelle, génération vidéo, montage image et son, habillage sonore, voix et masters.",
  },
  {
    id: "fifame",
    name: "Fifamè",
    role: "Scénario, Recherche & Continuité",
    badge: "Profil projeté · Formée au studio",
    summary:
      "Écriture de scripts, recherche documentaire et continuité des univers — un profil curieux formé au sein du studio aux méthodes narratives et au montage.",
  },
  {
    id: "houefa",
    name: "Houéfa",
    role: "Graphisme, Character Design & Création",
    badge: "Profil projeté · Formée au studio",
    summary:
      "Design de personnages, univers visuels et déclinaisons graphiques — un profil créatif formé au sein du studio aux outils d'image et à la culture du montage.",
  },
];

const agents: AgentItem[] = [
  // ---------- PHASE 1 : LES 4 ESSENTIELLES ----------
  {
    id: "da",
    number: "01",
    horizon: "phase1",
    horizonLabel: "Phase 1 · Essentielle",
    name: "Exploration Visuelle & Cohérence IA",
    mission:
      "Garde les personnages, décors et palettes fidèles à l'identité visuelle de chaque univers.",
    budget: "≈ 20–50 $ / mois",
    duties: [
      "Exploration visuelle ciblée",
      "Cohérence des personnages et décors",
      "Planches d'ambiance et textures",
      "Déclinaisons graphiques",
    ],
    usageSteps: "Esquisse → cohérence visuelle → assets",
    tools: [
      ["Midjourney", "≈ 10–30 $ / mois selon la formule"],
      ["Adobe Firefly", "Inclus ou crédits dès 10 $ / mois"],
    ],
  },
  {
    id: "producteur",
    number: "02",
    horizon: "phase1",
    horizonLabel: "Phase 1 · Essentielle",
    name: "Producteur Vidéo IA",
    mission: "Transforme les planches artistiques et storyboards en séquences vidéo animées.",
    budget: "≈ 150–350 $ / mois",
    duties: [
      "Génération de plans animés",
      "Animation des personnages et décors",
      "Mouvements de caméra",
      "Préparation des séquences",
    ],
    usageSteps: "Planches → générations vidéo → séquences",
    tools: [
      ["Runway", "Crédits et abonnement selon volume"],
      ["Google Veo", "Génération de plans cinématographiques"],
      ["Kling", "Animation complémentaire à l'usage"],
    ],
  },
  {
    id: "monteur",
    number: "03",
    horizon: "phase1",
    horizonLabel: "Phase 1 · Essentielle",
    name: "Voix, Son & Montage IA",
    mission: "Assemble le rythme, les voix, l'habillage sonore, les sous-titres et les masters.",
    budget: "≈ 30–60 $ / mois",
    duties: [
      "Voix et doublages expressifs",
      "Nettoyage et mixage audio",
      "Montage rythmique",
      "Sous-titrage multilingue",
    ],
    usageSteps: "Rushes → voix & son → master",
    tools: [
      ["Adobe Premiere", "≈ 23 $ / mois"],
      ["ElevenLabs", "≈ 5–22 $ / mois selon l'usage"],
      ["Sous-titrage IA", "Déclinaisons multilingues"],
    ],
  },
  {
    id: "gardien",
    number: "04",
    horizon: "phase1",
    horizonLabel: "Phase 1 · Essentielle",
    name: "Process, Mémoire & Automatisation IA",
    mission: "Conserve la mémoire des univers et fluidifie le suivi des productions.",
    budget: "≈ 0–20 $ / mois",
    duties: [
      "Suivi des process et du calendrier",
      "Bibles créatives et fiches des 26 trésors",
      "Contrôle de continuité",
      "Automatisations légères du studio",
    ],
    usageSteps: "Structurer → documenter → coordonner",
    tools: [
      ["Base documentaire AAA", "Socle partagé sans surcoût"],
      ["Workflows internes", "Optimisation & suivi"],
      ["API légère", "À l'usage si nécessaire"],
    ],
  },

  // ---------- PHASE 2 : EN DÉPLOIEMENT ----------
  {
    id: "showrunner",
    number: "05",
    horizon: "phase2",
    horizonLabel: "Phase 2 · En déploiement",
    name: "Showrunner IA",
    mission:
      "Démultiplie les arcs narratifs pour accompagner le passage aux séries longues et aux films.",
    budget: "≈ 20–40 $ / mois",
    duties: [
      "Développement d'arcs longs",
      "Structuration de saisons",
      "Variantes narratives",
      "Préparation de formats cinéma & animation",
    ],
    usageSteps: "Concept → saison → série longue",
    tools: [
      ["OpenAI", "≈ 20 $ / mois ou API"],
      ["Claude / Gemini", "Recherche et variantes narratives"],
    ],
  },
  {
    id: "scenariste",
    number: "06",
    horizon: "phase2",
    horizonLabel: "Phase 2 · En déploiement",
    name: "Scénariste & Storyboarder IA",
    mission:
      "Accélère le découpage en scènes et la pré-visualisation lorsque plusieurs projets tournent en parallèle.",
    budget: "≈ 20–50 $ / mois",
    duties: [
      "Découpage technique en scènes",
      "Storyboard préparatoire",
      "Indications de cadrage",
      "Passerelle rapide vers la production",
    ],
    usageSteps: "Histoire → scènes → storyboard",
    tools: [
      ["OpenAI / Gemini", "Mutualisé avec le pôle narratif"],
      ["Outils de storyboard", "Pré-découpage visuel"],
    ],
  },
  {
    id: "social",
    number: "07",
    horizon: "phase2",
    horizonLabel: "Phase 2 · En déploiement",
    name: "Social Media Manager IA",
    mission: "Décline chaque œuvre en formats adaptés et orchestre la diffusion multicanale.",
    budget: "≈ 20–45 $ / mois",
    duties: [
      "Formats par plateforme",
      "Calendrier de diffusion",
      "Adaptation des textes",
      "Programmation automatisée",
    ],
    usageSteps: "Œuvre → déclinaisons → diffusion",
    tools: [
      ["Metricool", "≈ 20 $ / mois dès le niveau Starter"],
      ["n8n", "≈ 20 € / mois ou auto-hébergé"],
    ],
  },
  {
    id: "growth",
    number: "08",
    horizon: "phase2",
    horizonLabel: "Phase 2 · En déploiement",
    name: "Community & Growth Intelligence IA",
    mission:
      "Observe les réactions du public et transforme l'écoute de la communauté en boussole créative.",
    budget: "≈ 20–40 $ / mois",
    duties: [
      "Analyse des réactions du public",
      "Lecture des signaux culturels",
      "Tableaux de bord d'audience",
      "Synthèses pour les prochaines œuvres",
    ],
    usageSteps: "Diffusion → écoute → prochaine création",
    tools: [
      ["Metricool", "Mutualisé avec Social Media Manager"],
      ["Analytics natifs", "Données directes des plateformes"],
      ["n8n", "Rapports automatisés"],
    ],
  },
];

const timeline = [
  ["Jours 1–30", "Assembler", "Piliers, méthodes de travail et premiers univers créatifs"],
  ["Jours 31–60", "Produire", "Premiers épisodes Zem Zem et Les Trésors avec le socle essentiel"],
  ["Jours 61–90", "Consolider", "Qualité, rythme de production maîtrisé et processus rodés"],
  [
    "Mois 4–6",
    "Accompagner & déployer",
    "Soutenir la production audiovisuelle existante et ouvrir les outils de seconde phase",
  ],
  [
    "Mois 7–9",
    "Devenir la référence",
    "Studio phare au Bénin et en Afrique de l'Ouest, vers les films d'animation et le cinéma",
  ],
] as const;

const commitments = [
  {
    num: "01",
    title: "Raconter le quotidien & l'histoire",
    subtitle:
      "Faire connaître le Bénin autrement : de l'énergie populaire de Cotonou à la profondeur royale de son histoire et de son patrimoine.",
  },
  {
    num: "02",
    title: "Élever la création vers le cinéma & l'animation",
    subtitle:
      "Façonner des univers forts qui accompagnent la production audiovisuelle existante et ouvrent la voie aux films d'animation et au cinéma.",
  },
  {
    num: "03",
    title: "Transmettre & former la relève",
    subtitle:
      "Partager les méthodes, éveiller les vocations et former une nouvelle génération de jeunes talents aux métiers du récit et de l'IA.",
  },
  {
    num: "04",
    title: "Ancrer un pôle de référence au Bénin",
    subtitle:
      "Bâtir à Cotonou un pilier créatif et technologique solide pour l'écosystème national, rayonnant en Afrique de l'Ouest et dans le monde.",
  },
] as const;

// ---------- Constellation ----------

type NodeKind = "core" | "pillar" | "builder" | "agent";
type CNode = {
  id: string;
  kind: NodeKind;
  label: string;
  sub: string;
  blurb: string;
  budget?: string;
  horizon?: AgentHorizon;
  number?: string;
  x: number;
  y: number;
};

const CX = 500;
const CY = 500;

function polar(r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)] as const;
}

const pillarAngles = [315, 45, 135, 225];
const builderAngles = [0, 120, 240];
const agentAngles = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

const cPillars: CNode[] = pillars.map((p, i) => {
  const [x, y] = polar(200, pillarAngles[i] ?? 0);
  return {
    id: p.id,
    kind: "pillar",
    label: p.name,
    sub: p.role,
    blurb: p.summary,
    x,
    y,
  };
});

const cBuilders: CNode[] = builders.map((b, i) => {
  const [x, y] = polar(320, builderAngles[i] ?? 0);
  return {
    id: b.id,
    kind: "builder",
    label: b.name,
    sub: b.role,
    blurb: b.summary,
    x,
    y,
  };
});

const cAgents: CNode[] = agents.map((a, i) => {
  const [x, y] = polar(440, agentAngles[i] ?? 0);
  return {
    id: a.id,
    kind: "agent",
    label: a.name,
    sub: a.horizonLabel,
    blurb: a.mission,
    budget: a.budget,
    horizon: a.horizon,
    number: a.number,
    x,
    y,
  };
});

const coreNode: CNode = {
  id: "core",
  kind: "core",
  label: "AAA",
  sub: "Afrikafun AI Agency",
  blurb:
    "Le centre de coordination : quatre piliers orientent et accompagnent trois bâtisseurs, amplifiés par huit intelligences IA.",
  x: CX,
  y: CY,
};

const allNodes: CNode[] = [coreNode, ...cPillars, ...cBuilders, ...cAgents];

const edges: [string, string][] = [
  ["core", "stephane"],
  ["core", "rodrigue"],
  ["core", "legrand"],
  ["core", "romeo"],
  ["stephane", "cesaire"],
  ["stephane", "fifame"],
  ["stephane", "houefa"],
  ["rodrigue", "cesaire"],
  ["rodrigue", "fifame"],
  ["rodrigue", "houefa"],
  ["legrand", "cesaire"],
  ["legrand", "fifame"],
  ["legrand", "houefa"],
  ["romeo", "cesaire"],
  ["romeo", "fifame"],
  ["romeo", "houefa"],
  ["legrand", "da"],
  ["houefa", "da"],
  ["cesaire", "producteur"],
  ["romeo", "producteur"],
  ["cesaire", "monteur"],
  ["romeo", "gardien"],
  ["fifame", "gardien"],
  ["legrand", "showrunner"],
  ["rodrigue", "showrunner"],
  ["fifame", "scenariste"],
  ["houefa", "social"],
  ["romeo", "growth"],
];

function nodeById(id: string) {
  return allNodes.find((n) => n.id === id) ?? coreNode;
}

// ---------- Composants ----------

function AaaMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold ${className}`} aria-label="AAA">
      <span className="text-forest-bright">A</span>
      <span className="text-sun">A</span>
      <span className="text-red">A</span>
    </span>
  );
}

function SectionKicker({ children, tone = "" }: { children: React.ReactNode; tone?: string }) {
  return <p className={`section-kicker ${tone}`}>{children}</p>;
}

function Constellation() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>("stephane");

  const focusId = hovered ?? activeId;
  const connected = focusId
    ? new Set(edges.filter(([a, b]) => a === focusId || b === focusId).flat())
    : null;

  const active = activeId ? nodeById(activeId) : coreNode;

  return (
    <section
      id="constellation"
      className="relative overflow-hidden border-y border-line bg-canvas py-20 text-navy sm:py-24 lg:py-32"
    >
      {/* Halo solaire doux sur fond ivoire clair */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 36% 54%, color-mix(in oklab, var(--sun) 26%, transparent) 0%, color-mix(in oklab, var(--forest) 6%, transparent) 42%, transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <SectionKicker tone="lg:col-span-3">Architecture collaborative</SectionKicker>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl leading-[0.95] text-balance md:text-7xl">
              Chaque force se relie.
              <br />
              <em className="text-forest">La création circule.</em>
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-navy/70">
              Les quatre piliers accompagnent collectivement les trois bâtisseurs, soutenus par une
              couronne d'intelligences IA déployées en deux phases.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="pb-2">
              <div className="mx-auto w-full max-w-[860px]">
                <svg
                  viewBox="-175 -95 1350 1190"
                  className="constellation-map w-full"
                  role="img"
                  aria-label="Constellation AAA : 4 piliers, 3 bâtisseurs et 8 intelligences IA autour du centre AAA"
                >
                  <defs>
                    <radialGradient id="coreGlowLight" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="var(--sun)" stopOpacity="0.45" />
                      <stop offset="55%" stopColor="var(--sun)" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="var(--canvas)" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Halo solaire central */}
                  <circle cx={CX} cy={CY} r={340} fill="url(#coreGlowLight)" />

                  {/* Anneaux orbitaux */}
                  <circle
                    cx={CX}
                    cy={CY}
                    r={200}
                    fill="none"
                    stroke="var(--forest)"
                    strokeOpacity="0.28"
                    strokeDasharray="3 9"
                  />
                  <circle
                    cx={CX}
                    cy={CY}
                    r={320}
                    fill="none"
                    stroke="var(--navy)"
                    strokeOpacity="0.2"
                    strokeDasharray="3 9"
                  />
                  <circle
                    cx={CX}
                    cy={CY}
                    r={440}
                    fill="none"
                    stroke="var(--red)"
                    strokeOpacity="0.28"
                    strokeDasharray="3 9"
                  />

                  {/* Connexions */}
                  {edges.map(([a, b]) => {
                    const na = nodeById(a);
                    const nb = nodeById(b);
                    const touchesFocus = focusId ? a === focusId || b === focusId : false;
                    return (
                      <line
                        key={`${a}-${b}`}
                        x1={na.x}
                        y1={na.y}
                        x2={nb.x}
                        y2={nb.y}
                        stroke={touchesFocus ? "var(--forest)" : "var(--navy)"}
                        strokeOpacity={focusId ? (touchesFocus ? 0.78 : 0.08) : 0.18}
                        strokeWidth={touchesFocus && focusId ? 2.2 : 1.1}
                        className="transition-all duration-300"
                      />
                    );
                  })}

                  {/* Cercle 3 : Les 8 Intelligences IA */}
                  {cAgents.map((n) => {
                    const dx = n.x - CX;
                    const dy = n.y - CY;
                    const anchor: "middle" | "start" | "end" =
                      Math.abs(dx) < 60 ? "middle" : dx > 0 ? "start" : "end";
                    const tx = anchor === "middle" ? n.x : n.x + Math.sign(dx) * 28;
                    const ty = anchor === "middle" ? n.y + Math.sign(dy || 1) * 38 : n.y + 4;
                    const words = n.label.split(" ");
                    const lines: string[] = [];
                    for (let i = 0; i < words.length; i += 2) {
                      lines.push(words.slice(i, i + 2).join(" "));
                    }
                    const isPhase1 = n.horizon === "phase1";
                    const nodeColor = isPhase1 ? "var(--red)" : "var(--paper)";
                    return (
                      <g
                        key={n.id}
                        className="cursor-pointer transition-opacity duration-300"
                        style={{
                          opacity: focusId && focusId !== n.id && !connected?.has(n.id) ? 0.28 : 1,
                        }}
                        onMouseEnter={() => setHovered(n.id)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => setActiveId(n.id)}
                      >
                        <circle
                          className="constellation-hit"
                          cx={n.x}
                          cy={n.y}
                          r={38}
                          fill="transparent"
                        />
                        {focusId === n.id && (
                          <circle
                            cx={n.x}
                            cy={n.y}
                            r={27}
                            fill={isPhase1 ? "var(--red)" : "var(--navy)"}
                            fillOpacity="0.18"
                          />
                        )}
                        <circle
                          cx={n.x}
                          cy={n.y}
                          r={17}
                          fill={nodeColor}
                          stroke={isPhase1 ? "none" : "var(--navy)"}
                          strokeWidth={isPhase1 ? 0 : 2.2}
                        />
                        <text
                          x={n.x}
                          y={n.y + 4.5}
                          textAnchor="middle"
                          fontSize="12.5"
                          fontWeight="700"
                          fill={isPhase1 ? "var(--cream)" : "var(--navy)"}
                          fontFamily="Space Grotesk, sans-serif"
                        >
                          {n.number}
                        </text>
                        {lines.map((line, li) => (
                          <text
                            className="constellation-label"
                            key={li}
                            x={tx}
                            y={ty + li * 16}
                            textAnchor={anchor}
                            fontSize="13.5"
                            fontWeight="600"
                            fill="var(--navy)"
                            fontFamily="Space Grotesk, sans-serif"
                          >
                            {line}
                          </text>
                        ))}
                      </g>
                    );
                  })}

                  {/* Cercle 1 : Les 4 Piliers */}
                  {cPillars.map((n) => (
                    <g
                      key={n.id}
                      className="cursor-pointer transition-opacity duration-300"
                      style={{
                        opacity: focusId && focusId !== n.id && !connected?.has(n.id) ? 0.28 : 1,
                      }}
                      onMouseEnter={() => setHovered(n.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setActiveId(n.id)}
                    >
                      <circle
                        className="constellation-hit"
                        cx={n.x}
                        cy={n.y}
                        r={44}
                        fill="transparent"
                      />
                      {focusId === n.id && (
                        <circle cx={n.x} cy={n.y} r={42} fill="var(--forest)" fillOpacity="0.18" />
                      )}
                      <circle cx={n.x} cy={n.y} r={30} fill="var(--forest)" />
                      <text
                        className="constellation-label"
                        x={n.x}
                        y={n.y - 38}
                        textAnchor="middle"
                        fontSize="17"
                        fontWeight="700"
                        fill="var(--navy)"
                        fontFamily="Fraunces, serif"
                      >
                        {n.label}
                      </text>
                      <text
                        className="constellation-label"
                        x={n.x}
                        y={n.y + 46}
                        textAnchor="middle"
                        fontSize="11.5"
                        fontWeight="600"
                        fill="var(--forest)"
                        fontFamily="Space Grotesk, sans-serif"
                      >
                        {n.sub}
                      </text>
                    </g>
                  ))}

                  {/* Cercle 2 : Les 3 Bâtisseurs */}
                  {cBuilders.map((n) => (
                    <g
                      key={n.id}
                      className="cursor-pointer transition-opacity duration-300"
                      style={{
                        opacity: focusId && focusId !== n.id && !connected?.has(n.id) ? 0.28 : 1,
                      }}
                      onMouseEnter={() => setHovered(n.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setActiveId(n.id)}
                    >
                      <circle
                        className="constellation-hit"
                        cx={n.x}
                        cy={n.y}
                        r={48}
                        fill="transparent"
                      />
                      {focusId === n.id && (
                        <circle cx={n.x} cy={n.y} r={36} fill="var(--sun)" fillOpacity="0.35" />
                      )}
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={24}
                        fill="var(--sun)"
                        stroke="var(--navy)"
                        strokeWidth="2"
                      />
                      <text
                        className="constellation-label"
                        x={n.x}
                        y={n.y - 36}
                        textAnchor="middle"
                        fontSize="19"
                        fontWeight="700"
                        fill="var(--navy)"
                        fontFamily="Fraunces, serif"
                      >
                        {n.label}
                      </text>
                      <text
                        className="constellation-label"
                        x={n.x}
                        y={n.y + 44}
                        textAnchor="middle"
                        fontSize="11.5"
                        fontWeight="500"
                        fill="var(--navy)"
                        fillOpacity="0.72"
                        fontFamily="Space Grotesk, sans-serif"
                      >
                        {n.sub}
                      </text>
                    </g>
                  ))}

                  {/* Centre AAA */}
                  <g
                    className="cursor-pointer"
                    onMouseEnter={() => setHovered("core")}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setActiveId("core")}
                  >
                    <circle
                      cx={CX}
                      cy={CY}
                      r={96}
                      fill="none"
                      stroke="var(--forest)"
                      strokeOpacity="0.3"
                    />
                    <circle
                      cx={CX}
                      cy={CY}
                      r={84}
                      fill="var(--navy)"
                      fillOpacity={focusId === "core" || !focusId ? 1 : 0.85}
                    />
                    <text
                      x={CX}
                      y={CY + 15}
                      textAnchor="middle"
                      fontSize="44"
                      fontWeight="700"
                      fill="var(--sun)"
                      fontFamily="Fraunces, serif"
                    >
                      AAA
                    </text>
                  </g>
                </svg>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/80 sm:flex-nowrap">
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <i className="size-3 shrink-0 rounded-full bg-forest" /> 4 Piliers
                  </span>
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <i className="size-3 shrink-0 rounded-full border border-navy bg-sun" /> 3
                    Bâtisseurs
                  </span>
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <i className="size-3 shrink-0 rounded-full bg-red" /> 4 IA Phase 1
                  </span>
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <i className="size-3 shrink-0 rounded-full border-2 border-navy bg-paper" /> 4
                    IA Phase 2
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Fiche de détail sur fond clair */}
          <aside className="lg:col-span-5 xl:col-span-4">
            <div
              className={`border border-line border-t-4 bg-paper p-7 text-navy shadow-soft sm:p-8 ${
                active.kind === "pillar"
                  ? "border-t-forest"
                  : active.kind === "builder"
                    ? "border-t-sun"
                    : active.kind === "agent"
                      ? "border-t-red"
                      : "border-t-navy"
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-forest">
                {active.kind === "pillar"
                  ? "Cercle 1 · Pilier"
                  : active.kind === "builder"
                    ? "Cercle 2 · Bâtisseur"
                    : active.kind === "agent"
                      ? `Cercle 3 · Intelligence ${active.number}`
                      : "Centre de coordination"}
              </p>
              <h3 className="mt-2 font-display text-3xl text-navy">{active.label}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-red">
                {active.sub}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-navy/80">{active.blurb}</p>

              {active.kind === "agent" && active.budget && (
                <div className="mt-6 border-t border-line pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/45">
                    Fourchette mensuelle estimée
                  </p>
                  <p className="mt-1 font-display text-2xl text-red">{active.budget}</p>
                </div>
              )}

              <p className="mt-6 border-t border-line pt-3 text-[11px] text-navy/50">
                Cliquez sur n'importe quel cercle de la constellation pour explorer son rôle.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ---------- Explorateur des Intelligences IA ----------

function AgentExplorer() {
  const [activeId, setActiveId] = useState<string>("da");

  const phase1Agents = agents.filter((item) => item.horizon === "phase1");
  const phase2Agents = agents.filter((item) => item.horizon === "phase2");

  const agent = agents.find((item) => item.id === activeId) ?? agents[0];
  if (!agent) return null;

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-start">
      <div className="space-y-6">
        {/* Phase 1 : Les 4 essentielles */}
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-amber">
            Phase 1 · Les 4 essentielles
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {phase1Agents.map((item) => {
              const isSelected = item.id === agent.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={isSelected}
                  className={`group min-h-26 border p-4 text-left transition-colors ${
                    isSelected
                      ? "border-amber bg-terracotta text-cream"
                      : "border-amber/40 bg-amber/15 text-cream hover:bg-amber hover:text-earth-ink"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className={`font-display text-2xl ${
                        isSelected ? "text-cream" : "text-amber group-hover:text-earth-ink"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`text-[10px] font-semibold ${
                        isSelected ? "text-cream/90" : "text-amber/85 group-hover:text-earth-ink"
                      }`}
                    >
                      {item.budget}
                    </span>
                  </div>
                  <span className="mt-2 block text-sm font-semibold leading-snug">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Phase 2 : En déploiement */}
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-cream/70">
            Phase 2 · En déploiement
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {phase2Agents.map((item) => {
              const isSelected = item.id === agent.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={isSelected}
                  className={`group min-h-26 border p-4 text-left transition-colors ${
                    isSelected
                      ? "border-terracotta bg-terracotta text-cream"
                      : "border-line bg-paper text-earth-ink hover:border-amber hover:bg-sun-soft"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className={`font-display text-2xl ${
                        isSelected ? "text-cream" : "text-terracotta"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`text-[10px] font-semibold ${
                        isSelected ? "text-cream/90" : "text-earth-ink/60"
                      }`}
                    >
                      {item.budget}
                    </span>
                  </div>
                  <span className="mt-2 block text-sm font-semibold leading-snug">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fiche avec mission, actions et tarifs des outils */}
      <article
        key={agent.id}
        className="animate-fade-in border-t-4 border-terracotta bg-paper p-7 text-navy shadow-soft sm:p-9"
      >
        <div className="grid gap-4 border-b border-line pb-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-terracotta">
              Intelligence {agent.number} · {agent.horizonLabel}
            </p>
            <h3 className="mt-2 font-display text-3xl leading-tight md:text-4xl">{agent.name}</h3>
            <p className="mt-3 text-base leading-relaxed text-navy/80">{agent.mission}</p>
          </div>
          <div className="border border-line bg-canvas px-4 py-3 sm:text-right">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-navy/50">
              Fourchette mensuelle
            </p>
            <p className="mt-1 font-display text-xl text-terracotta">{agent.budget}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/45">
              Ce qu'elle fait
            </p>
            <ul className="mt-3 grid gap-2">
              {agent.duties.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-navy/80">
                  <span className="mt-2 size-1.5 shrink-0 bg-terracotta" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/45">
              Outils & repères tarifaires
            </p>
            <div className="mt-3 grid gap-2">
              {agent.tools.map(([tool, priceNote]) => (
                <div key={tool} className="border border-line bg-canvas px-3 py-2">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-navy">{tool}</p>
                  <p className="mt-0.5 text-xs text-navy/65">{priceNote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

// ---------- Page ----------

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas font-body text-navy selection:bg-sun selection:text-navy">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 text-navy backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Retour en haut">
            <span
              className="grid size-11 grid-cols-3 place-items-center font-display text-base font-bold"
              aria-label="AAA"
            >
              <span className="text-forest">A</span>
              <span className="text-sun">A</span>
              <span className="text-red">A</span>
            </span>
            <span className="font-display text-lg font-semibold text-navy">
              Afrikafun <i className="font-normal text-sun">AI Agency</i>
            </span>
          </a>
          <nav
            className="hidden gap-8 text-xs uppercase tracking-[0.16em] md:flex"
            aria-label="Navigation principale"
          >
            <a href="#constellation" className="transition-colors hover:text-sun">
              Constellation
            </a>
            <a href="#piliers" className="transition-colors hover:text-sun">
              Piliers
            </a>
            <a href="#agents" className="transition-colors hover:text-sun">
              Agents IA
            </a>
            <a href="#univers" className="transition-colors hover:text-sun">
              Univers
            </a>
          </nav>
          <span className="hidden w-11 md:block" aria-hidden="true" />
        </div>
      </header>

      <main id="top">
        {/* HERO LUMINEUX & DÉSENCOMBRÉ (Sur mobile : l'image entière avec taxi-moto + trésors s'affiche sans aucune coupe) */}
        <section className="relative flex flex-col overflow-hidden bg-ink pt-[84px] text-cream md:min-h-[100svh] md:justify-end md:pt-0">
          <div className="relative aspect-[1376/768] w-full shrink-0 md:absolute md:inset-0 md:aspect-auto md:size-full">
            <img
              src={universeImage}
              alt="Un conducteur de zemidjan et sa passagère reliés aux trésors d'un musée béninois"
              className="hero-visual size-full object-cover object-center"
            />
            {/* Fondu doux en bas de l'image pour relier au bloc titre */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,16,12,0.06) 0%, rgba(10,16,12,0) 54%, rgba(10,16,12,0.82) 86%, rgba(10,16,12,0.98) 100%)",
              }}
            />
          </div>
          <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between gap-6 px-5 pb-10 pt-4 sm:px-8 md:flex-row md:items-end md:pb-12 md:pt-36 lg:px-10">
            <div>
              <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-sun">
                <span className="h-px w-8 bg-sun" />
                Agence créative augmentée · Cotonou
              </p>
              <h1 className="font-display text-[clamp(2.4rem,5.4vw,5.2rem)] leading-[0.92]">
                Afrikafun <em className="font-medium text-sun">AI Agency</em>
              </h1>
              <p className="mt-4 font-display text-base uppercase tracking-[0.1em] text-cream/95 sm:text-lg md:text-xl">
                Une équipe · Une intelligence collective ·{" "}
                <span className="text-sun">Une agence.</span>
              </p>
            </div>
            <div className="flex items-end justify-between gap-6 md:justify-end">
              <div className="text-left md:text-right">
                <AaaMark className="text-5xl md:text-7xl" />
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/75">
                  Afrikafun · AI · Agency
                </p>
              </div>
              <a
                href="#constellation"
                aria-label="Découvrir la constellation"
                className="grid size-11 shrink-0 place-items-center border border-cream/40 bg-ink/40 text-cream backdrop-blur-xs transition-colors hover:bg-sun hover:text-navy"
              >
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* CONSTELLATION SUR FOND CLAIR */}
        <Constellation />

        {/* CERCLE 1 · LES 4 PILIERS */}
        <section id="piliers" className="bg-paper py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="lg:col-span-3">Cercle 1 · Les piliers</SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="font-display text-5xl leading-[0.95] text-balance md:text-6xl">
                  Quatre piliers <em className="text-forest">définissent le cap.</em>
                </h2>
              </div>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, i) => (
                <article
                  key={pillar.id}
                  className="flex flex-col border border-line border-t-4 border-t-forest bg-canvas p-7 text-navy shadow-soft"
                >
                  <span className="text-xs font-semibold text-forest">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-3xl leading-tight">{pillar.name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-forest">
                    {pillar.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy/75">{pillar.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CERCLE 2 · LES 3 BÂTISSEURS */}
        <section id="operationnels" className="bg-canvas py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="lg:col-span-3">Cercle 2 · Les bâtisseurs</SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="font-display text-5xl leading-[0.95] text-balance md:text-6xl">
                  Trois bâtisseurs
                  <br />
                  <em className="text-forest">portés par les quatre piliers.</em>
                </h2>
              </div>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {builders.map((builder, i) => {
                const isProjected = Boolean(builder.badge);
                return (
                  <article
                    key={builder.id}
                    className={`flex flex-col border border-line border-t-4 bg-paper p-7 shadow-soft ${
                      isProjected ? "border-t-sun" : "border-t-forest"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-forest">0{i + 1}</span>
                      {builder.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">
                          {builder.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-6 font-display text-3xl leading-tight">{builder.name}</h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.11em] text-forest">
                      {builder.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-navy/75">{builder.summary}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CERCLE 3 · INTELLIGENCES IA */}
        <section
          id="agents"
          className="relative overflow-hidden bg-earth-ink py-24 text-cream lg:py-32"
        >
          <div className="network-grid-earth absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="text-amber lg:col-span-3">
                Cercle 3 · Infrastructure créative
              </SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="font-display text-5xl leading-none text-balance md:text-7xl">
                  Quatre intelligences essentielles.
                  <br />
                  <em className="text-amber">Quatre autres en déploiement.</em>
                </h2>
              </div>
            </div>
            <AgentExplorer />
          </div>
        </section>

        {/* DEUX HORIZONS DISTINCTION (90 jours / 9 mois) */}
        <section id="horizons" className="bg-canvas py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="lg:col-span-3">Deux horizons distincts</SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="font-display text-5xl leading-[0.95] text-balance md:text-7xl">
                  90 jours pour construire la machine.
                  <br />
                  <em className="text-forest">9 mois pour construire la référence.</em>
                </h2>
              </div>
            </div>

            <div className="mt-14 overflow-hidden border border-line bg-paper shadow-soft">
              <div className="grid md:grid-cols-[1fr_3fr]">
                <div className="bg-red p-7 text-cream md:p-9">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/80">
                    La machine
                  </p>
                  <p className="mt-2 font-display text-6xl">90</p>
                  <p className="font-display text-2xl">jours</p>
                </div>
                <div className="grid sm:grid-cols-3">
                  {timeline.slice(0, 3).map(([period, title, detail], index) => (
                    <article
                      key={period}
                      className="group border-b border-line p-6 transition-colors hover:bg-sun-soft sm:border-b-0 sm:border-r sm:last:border-r-0"
                    >
                      <span className="text-xs font-bold text-red">0{index + 1}</span>
                      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-navy/45">
                        {period}
                      </p>
                      <h3 className="mt-2 font-display text-2xl group-hover:text-red">{title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-navy/70">{detail}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="grid border-t border-line md:grid-cols-[1fr_3fr]">
                <div className="bg-forest p-7 text-cream md:p-9">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/80">
                    La référence
                  </p>
                  <p className="mt-2 font-display text-6xl text-sun">9</p>
                  <p className="font-display text-2xl">mois</p>
                </div>
                <div className="grid sm:grid-cols-2">
                  {timeline.slice(3).map(([period, title, detail], index) => (
                    <article
                      key={period}
                      className="group p-6 transition-colors hover:bg-sun-soft sm:border-r sm:last:border-r-0 md:p-9"
                    >
                      <span className="text-xs font-bold text-forest">0{index + 4}</span>
                      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-navy/45">
                        {period}
                      </p>
                      <h3 className="mt-2 font-display text-2xl group-hover:text-forest md:text-3xl">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-navy/70">{detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETS — MISSION CULTURELLE */}
        <section id="univers" className="bg-paper py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="lg:col-span-3">Mission culturelle</SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">
                  Chaque projet est une nouvelle façon{" "}
                  <em className="text-forest">d'explorer l'Afrique.</em>
                </h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-navy/65">
                  Les projets d'AAA sont des productions et des portes d'entrée complémentaires vers
                  le Bénin et les grandes épopées africaines.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {/* Zem Zem */}
              <article className="group relative flex flex-col justify-end overflow-hidden bg-ink lg:min-h-[760px]">
                <img
                  src={zemzemImage}
                  alt="Sam, conducteur de zemidjan, dans un marché de Cotonou"
                  className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015] lg:absolute lg:inset-0 lg:aspect-auto lg:size-full lg:object-cover lg:object-top"
                />
                <div className="relative z-10 flex flex-col bg-ink/90 p-7 text-cream lg:min-h-[340px] lg:bg-ink/80 lg:p-8">
                  <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-sun">
                    Le Bénin que l'on vit · Comédie · Cotonou
                  </p>
                  <h3 className="font-display text-4xl">Zem Zem</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/85">
                    Sam transforme chaque course en aventure. Un héros populaire, un humour physique
                    et une ville pleine de mouvement.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      "Vie quotidienne",
                      "Humour",
                      "Cotonou",
                      "Traditions vivantes",
                      "Relations humaines",
                    ].map((x) => (
                      <span
                        key={x}
                        className="border border-cream/30 bg-navy/40 px-2.5 py-1 text-[10px] text-cream/85"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                  <blockquote className="mt-auto border-l-2 border-sun pl-4 pt-4 font-display text-base italic leading-snug text-cream/90">
                    « Zem Zem nous fait découvrir le Bénin de l'intérieur, à travers la vie de ceux
                    qui l'habitent. »
                  </blockquote>
                </div>
              </article>

              {/* Les Trésors */}
              <article className="group relative flex flex-col justify-end overflow-hidden bg-ink lg:min-h-[760px]">
                <img
                  src={tresorRoyalImage}
                  alt="Tabouret royal illuminé dans un espace patrimonial"
                  className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015] lg:absolute lg:inset-0 lg:aspect-auto lg:size-full lg:object-cover lg:object-top"
                />
                <div className="relative z-10 flex flex-col bg-ink/90 p-7 text-cream lg:min-h-[340px] lg:bg-ink/80 lg:p-8">
                  <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-sun">
                    Le Bénin que l'on découvre · Aventure · Histoire
                  </p>
                  <h3 className="font-display text-4xl">Les Trésors</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/85">
                    Les trésors royaux s'éveillent la nuit. Chaque objet devient une voix et un
                    passage vers l'histoire.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      "Histoire",
                      "Royaumes",
                      "Patrimoine",
                      "Savoirs & sagesses",
                      "Puissance historique",
                    ].map((x) => (
                      <span
                        key={x}
                        className="border border-cream/30 bg-navy/40 px-2.5 py-1 text-[10px] text-cream/85"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                  <blockquote className="mt-auto border-l-2 border-sun pl-4 pt-4 font-display text-base italic leading-snug text-cream/90">
                    « Les Trésors révèlent la profondeur, la puissance historique et la grandeur du
                    Bénin. »
                  </blockquote>
                </div>
              </article>

              {/* Soundjata Keïta */}
              <article className="group relative flex flex-col justify-end overflow-hidden bg-ink lg:min-h-[760px]">
                <img
                  src={soundjataImage}
                  alt="Sogolon, la Femme-Buffle — Soundjata Keïta"
                  referrerPolicy="no-referrer"
                  className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015] lg:absolute lg:inset-0 lg:aspect-auto lg:size-full lg:object-cover lg:object-top"
                />
                <div className="relative z-10 flex flex-col bg-ink/90 p-7 text-cream lg:min-h-[340px] lg:bg-ink/80 lg:p-8">
                  <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-sun">
                    L'Afrique que l'on célèbre · Épopée · Mandingue
                  </p>
                  <h3 className="font-display text-4xl">Soundjata Keïta</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/85">
                    Bien avant sa naissance, une prophétie annonce Soundjata. Sogolon, la
                    Femme-Buffle, porte le destin de l'empire du Mali.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      "Épopée mandingue",
                      "Prophétie",
                      "Sogolon",
                      "Empire du Mali",
                      "Spiritualité",
                    ].map((x) => (
                      <span
                        key={x}
                        className="border border-cream/30 bg-navy/40 px-2.5 py-1 text-[10px] text-cream/85"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                  <blockquote className="mt-auto border-l-2 border-sun pl-4 pt-4 font-display text-base italic leading-snug text-cream/90">
                    « Entre légende, spiritualité et pouvoir, ce récit revisite l'une des grandes
                    épopées de l'histoire africaine. »
                  </blockquote>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* NOTRE ENGAGEMENT */}
        <section className="border-t border-line bg-canvas py-24 text-earth-ink lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="text-terracotta lg:col-span-3">Notre engagement</SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="max-w-4xl font-display text-4xl leading-[1.02] text-balance text-earth-ink md:text-6xl">
                  Nous produisons des contenus qui ouvrent le regard.
                  <br />
                  <em className="text-terracotta">Nous construisons des façons de regarder.</em>
                </h2>
              </div>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {commitments.map((item) => (
                <article
                  key={item.num}
                  className="group flex flex-col justify-between border border-line border-t-4 border-t-terracotta bg-paper p-7 shadow-soft transition-colors hover:border-t-amber"
                >
                  <div>
                    <span className="font-display text-3xl text-terracotta transition-colors group-hover:text-amber">
                      {item.num}
                    </span>
                    <h3 className="mt-5 font-display text-2xl leading-snug text-earth-ink">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-earth-ink/75">{item.subtitle}</p>
                </article>
              ))}
            </div>

            {/* Raconter l'Afrique : Les trois statues juste en dessous de Notre engagement et au-dessus d'AFRIKAFUN AI AGENCY */}
            <div className="relative mt-8 overflow-hidden bg-ink shadow-soft">
              <img
                src={statuesImage}
                alt="Trois statues royales s'échappant d'un musée"
                className="relative aspect-[1312/816] w-full object-contain md:h-[38rem] md:aspect-auto md:object-cover md:object-center"
              />
              <div className="relative flex items-end justify-center bg-ink px-6 py-8 text-center md:absolute md:inset-0 md:bg-card-overlay md:pb-12 md:pt-0">
                <div className="max-w-4xl">
                  <p className="font-display text-3xl leading-tight text-balance text-cream md:text-5xl">
                    Raconter la puissance, la profondeur{" "}
                    <span className="text-sun">et la beauté des cultures africaines.</span>
                  </p>
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3 font-display text-xl md:text-2xl">
                    <span className="bg-sun px-4 py-2 text-navy">Bénin</span>
                    <ArrowRight className="text-cream/70" size={22} />
                    <span className="border border-cream/40 px-4 py-2 text-cream">Afrique</span>
                    <ArrowRight className="text-cream/70" size={22} />
                    <span className="border border-cream/40 px-4 py-2 text-cream">Monde</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONNEMENT FINAL ÉPURÉ */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-line bg-paper py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="font-display text-3xl font-bold md:text-4xl">AFRIKAFUN AI AGENCY</p>
                <p className="mt-4 max-w-3xl font-display text-2xl leading-snug text-navy md:text-3xl">
                  Une agence créative augmentée par l'intelligence artificielle, qui explore le
                  Bénin pour mieux raconter l'Afrique au monde.
                </p>
              </div>
              <AaaMark className="text-6xl md:text-7xl" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-8 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <span
              className="grid size-11 grid-cols-3 place-items-center bg-ink font-display text-sm font-bold"
              aria-label="AAA"
            >
              <span className="text-forest-bright">A</span>
              <span className="text-sun">A</span>
              <span className="text-red">A</span>
            </span>
            <p className="font-display text-2xl">
              Afrikafun <i className="text-sun">AI Agency</i>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
