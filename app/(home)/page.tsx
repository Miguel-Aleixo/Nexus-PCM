'use client'

import { useState } from "react"
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleGauge,
  ClipboardCheck,
  Clock3,
  Menu,
  MoveRight,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react"

import { DM_Sans, Space_Grotesk } from "next/font/google"
import Image from "next/image"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
})

const modules = [
  {
    number: "01",
    title: "Fundamentos do PCM",
    text: "Entenda a lógica do planejamento, os papéis da rotina e os indicadores que orientam decisões melhores.",
  },
  {
    number: "02",
    title: "Planejamento de paradas",
    text: "Estruture escopo, recursos e sequenciamento para reduzir improvisos antes da execução.",
  },
  {
    number: "03",
    title: "Programação e controle",
    text: "Transforme prioridades em uma agenda acompanhável, com clareza sobre o que está avançando.",
  },
  {
    number: "04",
    title: "Indicadores e melhoria",
    text: "Leia a operação, encontre gargalos e crie ciclos de melhoria que sustentam o resultado.",
  },
]

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Método aplicável",
    text: "Aprenda uma forma de organizar o PCM que conversa com a realidade do campo.",
  },
  {
    icon: BarChart3,
    title: "Decisão com dados",
    text: "Use indicadores para sair do achismo e priorizar o que realmente move a operação.",
  },
  {
    icon: Users,
    title: "Troca entre profissionais",
    text: "Aproxime-se de uma comunidade que vive os mesmos desafios de planejamento.",
  },
  {
    icon: ShieldCheck,
    title: "Certificado de conclusão",
    text: "Registre sua evolução com um certificado ao concluir a jornada formativa.",
  },
]

const faqs = [
  {
    question: "Para quem é o Nexo PCM?",
    answer:
      "Para profissionais de manutenção, planejamento, engenharia, operações e pessoas que desejam construir uma base sólida em PCM.",
  },
  {
    question: "Preciso ter experiência prévia?",
    answer:
      "Não. O conteúdo começa pelos fundamentos e evolui até a aplicação prática, respeitando o ritmo de quem está começando.",
  },
  {
    question: "Como funciona o acesso?",
    answer:
      "O acesso é online e pensado para você estudar pelo computador ou celular, avançando de acordo com a sua disponibilidade.",
  },
  {
    question: "O curso tem certificado?",
    answer:
      "Sim. Ao concluir a trilha, você poderá emitir seu certificado de conclusão do Nexo PCM.",
  },
]

function BrandMark() {
  return (
    <span
      className="inline-flex h-[22px] w-6 items-end gap-[3px]"
      aria-hidden="true"
    >
      <i className="block h-3 w-[5px] skew-x-[-18deg] rounded-[1px] bg-[#20251f]" />
      <i className="block h-[19px] w-[5px] skew-x-[-18deg] rounded-[1px] bg-[#78b83e]" />
      <i className="block h-[15px] w-[5px] skew-x-[-18deg] rounded-[1px] bg-[#20251f]" />
    </span>
  )
}

const eyebrowClass =
  "mb-[21px] text-[11px] font-bold uppercase tracking-[.16em] text-[#477d29]"

const headingClass =
  "font-[family-name:var(--font-space-grotesk)] tracking-[-.065em]"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main
      id="top"
      className={`${dmSans.variable} ${spaceGrotesk.variable} min-h-screen scroll-smooth overflow-hidden bg-[#f2f1ea] font-[family-name:var(--font-dm-sans)] text-[#20251f]`}
    >
      {/* HEADER */}
      <header
        className="
          sticky top-0 z-20 flex h-[76px] items-center justify-between
          border-b border-[#ccd2c2]
          bg-[rgba(242,241,234,.92)]
          px-[clamp(22px,5vw,76px)]
          backdrop-blur-[16px]
        "
      >
        <a
          href="#top"
          aria-label="Nexo PCM, início"
          className="
            inline-flex items-center gap-[11px]
            whitespace-nowrap
            font-[family-name:var(--font-space-grotesk)]
            text-[19px] font-semibold
            tracking-[-.05em]
          "
        >
          

          <span>
           <Image 
           src={'/imagens/logo.png'}
           height={125}
           width={125}
           alt="Logo"           />
          </span>
        </a>

        {/* DESKTOP / MOBILE MENU */}
        <nav
  className={`
    flex items-center gap-[clamp(18px,2.7vw,40px)]
    text-[13px] text-[#647064]

    max-[850px]:absolute
    max-[850px]:left-0
    max-[850px]:right-0
    max-[850px]:top-[75px]
    max-[850px]:hidden
    max-[850px]:flex-col
    max-[850px]:items-stretch
    max-[850px]:gap-0
    max-[850px]:border-b
    max-[850px]:border-[#ccd2c2]
    max-[850px]:bg-[#f2f1ea]
    max-[850px]:p-[22px]

    ${menuOpen ? "max-[850px]:flex" : ""}
  `}
        >
          <a
            href="#jornada"
            onClick={() => setMenuOpen(false)}
            className="
      transition-colors duration-200
      hover:text-[#20251f]
      max-[850px]:border-b
      max-[850px]:border-[#ccd2c2]
      max-[850px]:py-[13px]
    "
          >
            A jornada
          </a>

          <a
            href="#metodo"
            onClick={() => setMenuOpen(false)}
            className="
      transition-colors duration-200
      hover:text-[#20251f]
      max-[850px]:border-b
      max-[850px]:border-[#ccd2c2]
      max-[850px]:py-[13px]
    "
          >
            Método
          </a>

          <a
            href="#modulos"
            onClick={() => setMenuOpen(false)}
            className="
      transition-colors duration-200
      hover:text-[#20251f]
      max-[850px]:border-b
      max-[850px]:border-[#ccd2c2]
      max-[850px]:py-[13px]
    "
          >
            Módulos
          </a>

          <a
            href="#faq"
            onClick={() => setMenuOpen(false)}
            className="
      transition-colors duration-200
      hover:text-[#20251f]
      max-[850px]:border-b
      max-[850px]:border-[#ccd2c2]
      max-[850px]:py-[13px]
    "
          >
            Dúvidas
          </a>

          {/* ENTRAR */}
          <a
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="
      inline-flex items-center justify-center gap-[7px]
      border border-[#ccd2c2]
      bg-[#f2f1ea]
      px-[15px] py-[11px]
      font-medium
      text-[#20251f]
      transition-all duration-200
      hover:border-[#78b83e]
      hover:bg-[#78b83e]
      hover:-translate-y-0.5

      max-[850px]:mt-[10px]
      max-[850px]:py-[13px]
    "
          >
            Entrar
            <ArrowUpRight size={15} />
          </a>
        </nav>

      </header>

      {/* HERO */}
      <section
        id="top"
        className="
          relative md:grid min-h-[670px] items-center
          gap-[clamp(35px,7vw,115px)]
          bg-[linear-gradient(rgba(32,37,31,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(32,37,31,.045)_1px,transparent_1px)]
          bg-[size:48px_48px]
          px-[clamp(22px,7vw,110px)]
          pb-[90px]
          pt-[clamp(62px,9vw,120px)]

          max-[850px]:grid-cols-1
          max-[850px]:pt-[70px]
        "
        style={{
          gridTemplateColumns: "minmax(0,.9fr) minmax(440px,1.1fr)",
        }}
      >
        {/* OVERLAY */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(90deg,#f2f1ea_0%,rgba(242,241,234,.96)_32%,rgba(242,241,234,.25)_72%,rgba(242,241,234,.05))]
          "
        />

        {/* HERO COPY */}
        <div className="relative z-[1]">
          <p className={eyebrowClass}>
            <span
              className="
                mr-2 inline-block h-[7px] w-[7px] rounded-full
                bg-[#78b83e]
                shadow-[0_0_0_4px_rgba(120,184,62,.14)]
              "
            />
            Formação online em PCM
          </p>

          <h1
            className={`
              ${headingClass}
              max-w-[710px]
              text-[clamp(53px,7vw,91px)]
              font-semibold
              leading-[.94]

              max-[520px]:text-[55px]
            `}
          >
            Planeje melhor.
            <br />
            <em className="not-italic text-[#477d29]">Pare menos.</em>
          </h1>

          <p
            className="
              mt-7 max-w-[490px]
              text-[17px] leading-[1.7]
              text-[#647064]
            "
          >
            O PCM deixa de ser uma planilha esquecida e passa a ser o sistema
            que conecta pessoas, prioridades e resultado na manutenção.
          </p>

          <div
            className="
              mt-9 flex items-center gap-[25px]

              max-[520px]:flex-col
              max-[520px]:items-start
              max-[520px]:gap-5
            "
          >
            <a
              href="#inscricao"
              className="
    group
    inline-flex items-center justify-center gap-[13px]
    bg-[#78b83e]
    px-[19px] py-[15px]
    text-[13px] font-bold text-[#172312]

    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:bg-[#8cca4f]
    active:scale-95
  "
            >
              Começar minha jornada

              <MoveRight
                size={18}
                className="
      transition-transform duration-300 ease-out
      group-hover:translate-x-1
    "
              />
            </a>

            <a
              href="#metodo"
              className="inline-flex items-center gap-[9px] text-[13px] font-bold"
            >
              <span
                className="
                  grid h-7 w-7 place-items-center
                  rounded-full border border-[#ccd2c2]
                "
              >
                <Play size={13} fill="currentColor" />
              </span>
              Ver como funciona
            </a>
          </div>

          <div
            className="
              mt-[75px] flex items-center gap-[15px]
              text-[12px] leading-[1.4] text-[#647064]

              max-[520px]:mt-[50px]
            "
          >
            <span>
              Para quem trabalha
              <br />
              com a operação real.
            </span>

            <span className="h-px w-[70px] bg-[#ccd2c2]" />

            <strong
              className="
                font-[family-name:var(--font-space-grotesk)]
                text-2xl font-medium text-[#20251f]
              "
            >
              01
              <span className="ml-[3px] text-xs text-[#647064]">/04</span>
            </strong>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div
          className="
            relative

            max-[850px]:mx-auto
            max-[850px]:w-full
            max-[850px]:max-w-[650px]

            md:max-[520px]:h-[385px]
            md:max-[520px]:min-h-[385px]
          "
        >
          <img
            src="/imagens/nexo-pcm-hero.png"
            alt="Ilustração editorial de um painel de manutenção industrial"
            className="
              hidden md:flex h-[490px] w-full
              object-cover
              saturate-[.75]
              contrast-[1.02]

              max-[520px]:h-[385px]
            "
          />

          {/* HEALTH PANEL */}
          <div
            className="
              hidden md:flex flex-col absolute bottom-7 left-[-45px]
              w-[300px]
              border border-[#ccd2c2]
              bg-[rgba(242,241,234,.96)]
              p-[18px]
              shadow-[12px_14px_0_rgba(32,37,31,.08)]

              max-[520px]:bottom-[18px]
              max-[520px]:left-[13px]
              max-[520px]:w-[calc(100%-26px)]
            "
          >
            <div
              className="
                flex items-center justify-between
                text-[10px] tracking-[.09em]
              "
            >
              <span
                className="
                  inline-block border border-[#ccd2c2]
                  px-[7px] py-[5px]
                  text-[10px] font-bold tracking-[.12em]
                "
              >
                ATIVO 04
              </span>

              <span className="text-[10px] text-[#477d29]">
                ● SAUDÁVEL
              </span>
            </div>

            <div
              className="
                flex items-center gap-5
                border-b border-[#ccd2c2]
                py-[25px] pb-[19px]
              "
            >
              <div
                className="
                  flex h-[78px] w-[78px]
                  flex-col items-center justify-center
                  rounded-full
                  border-[8px]
                  border-[#78b83e]
                  border-r-[#e6e7dc]
                "
              >
                <strong
                  className="
                    font-[family-name:var(--font-space-grotesk)]
                    text-[25px] leading-none
                  "
                >
                  87
                </strong>

                <span className="mt-1 text-center text-[8px] text-[#647064]">
                  saúde do ativo
                </span>
              </div>

              <div className="grid flex-1 gap-2 text-[9px] text-[#647064]">
                <span className="flex flex-col gap-[2px]">
                  Disponibilidade
                  <b className="text-[11px] text-[#20251f]">94,2%</b>
                </span>

                <span className="flex flex-col gap-[2px]">
                  Plano semanal
                  <b className="text-[11px] text-[#20251f]">Em dia</b>
                </span>

                <span className="flex flex-col gap-[2px]">
                  Backlog crítico
                  <b className="text-[11px] text-[#bd832e]">03 itens</b>
                </span>
              </div>
            </div>

            <div
              className="
                flex items-center justify-between
                pt-3 text-[10px] text-[#647064]
              "
            >
              <span>Última leitura · hoje, 08:42</span>
              <CircleGauge size={16} />
            </div>
          </div>

          {/* FLOATING NOTE */}
          <div
            className="
              absolute right-[-22px] top-[42px]
              flex items-center gap-3
              bg-[#20251f]
              px-[15px] py-[13px]
              text-[11px] leading-[1.35] text-[#f2f1ea]
              shadow-[8px_9px_0_#78b83e]

              max-[520px]:right-[10px]
              max-[520px]:top-5
            "
          >
            <span className="text-[17px] text-[#78b83e]">→</span>

            <span>
              O que pode ser
              <br />
              <b className="text-white">antecipado?</b>
            </span>
          </div>
        </div>
      </section>

      {/* SIGNAL STRIP */}
      <section
        className="
          grid grid-cols-[1.7fr_repeat(3,1fr)]
          border-y border-[#ccd2c2]
          md:px-[clamp(22px,7vw,110px)]

          max-[850px]:grid-cols-2
        "
      >
        <div
          className="
            flex min-h-[112px] items-center justify-center md:justify-start
            gap-[22px]
            md:border-0 border-b border-[#ccd2c2]
            px-0 py-[25px]

            md:max-[850px]:border-t
            max-[520px]:col-span-3
            md:max-[520px]:px-0
            md:max-[520px]:py-5
          "
        >
          <span className="text-[11px] font-bold tracking-[.1em] text-[#477d29]">
            [ 00 ]
          </span>

          <p className="m-0 text-xs leading-[1.5] text-[#647064]">
            Uma trilha para quem quer
            <br />
            <b className="text-[#20251f]">tirar o PCM do papel.</b>
          </p>
        </div>

        {[
          ["40+", "aulas diretas"],
          ["08h", "de conteúdo aplicado"],
          ["100%", "online e no seu ritmo"],
        ].map(([value, label], index) => (
          <div
            key={value}
            className={`
              flex min-h-[112px] flex-col justify-center 
              border-l border-[#ccd2c2] 
              px-7 py-[25px]

              md:max-[850px]:border-t

              ${index === 0 ? "md:max-[850px]:border-l-0" : ""}
              md:max-[520px]:px-[14px]
              md:max-[520px]:py-5
            `}
          >
            <strong
              className="
                font-[family-name:var(--font-space-grotesk)]
                text-[31px] font-medium
                tracking-[-.06em]
              "
            >
              {value}
            </strong>

            <span className="mt-[3px] text-[11px] text-[#647064]">
              {label}
            </span>
          </div>
        ))}
      </section>

      {/* JORNADA */}
      <section
        id="jornada"
        className="
          flex
          justify-between
          gap-x-[clamp(40px,10vw,160px)]
          gap-y-10
          px-[clamp(22px,7vw,110px)]
          py-[clamp(90px,12vw,170px)]

          max-[850px]:grid-cols-1
          max-[520px]:py-[90px]
        "
      >

        <div className="flex flex-col gap-10">

          <div>
            <p className={eyebrowClass}>01 · A jornada</p>

            <h2
              className={`
              ${headingClass}
              text-[clamp(40px,5vw,64px)]
              font-semibold leading-[.98]
            `}
            >
              Manutenção previsível
              <br />
              <span className="text-[#477d29]">começa antes da falha.</span>
            </h2>
          </div>

          <div className="max-w-[500px] pt-12 max-[850px]:pt-0">
            <p className="text-[15px] leading-[1.75] text-[#647064]">
              O Nexo PCM foi desenhado para transformar o conhecimento em
              rotina. Você aprende a enxergar a manutenção como um fluxo:
              observar, planejar, programar e controlar.
            </p>

            <a
              href="#modulos"
              aria-label="Ir para os módulos"
              className="
              mt-[33px] grid h-[51px] w-[51px]
              place-items-center
              rounded-full border border-[#20251f]
              transition-all duration-200
              hover:rotate-2
              hover:bg-[#20251f]
              hover:text-[#f2f1ea]
            "
            >
              <ArrowUpRight size={21} />
            </a>
          </div>

        </div>

        <div
          className="
            relative col-span-full max-w-[640px]
            justify-self-end

            max-[850px]:col-auto
            max-[850px]:justify-self-start
            max-[850px]:max-w-[90%]

            max-[520px]:max-w-full
          "
        >
          <img
            src="/imagens/checklist.png"
            alt="Profissional realizando uma inspeção de manutenção"
            className="
              hidden md:flex h-[600px] w-full
              object-cover 
              grayscale-[.15]
              saturate-[.8]

              max-[520px]:h-[300px]
            "
          />

          <div
            className="
              hidden md:flex flex-col absolute bottom-[-22px] left-[-44px]
              bg-[#78b83e]
              px-5 py-[17px]
              text-xs leading-[1.4]

              max-[520px]:left-[10px]
            "
          >
            A melhor intervenção
            <br />
            <b className="text-sm">é a que chega no tempo certo.</b>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section
        id="metodo"
        className="
          grid grid-cols-[.82fr_1.18fr]
          gap-[clamp(50px,10vw,150px)]
          bg-[#20251f]
          px-[clamp(22px,7vw,110px)]
          py-[clamp(90px,12vw,160px)]
          text-[#f2f1ea]

          max-[850px]:grid-cols-1
          max-[850px]:gap-[60px]
        "
      >
        <div>
          <p className="mb-[21px] text-[11px] font-bold uppercase tracking-[.16em] text-[#78b83e]">
            02 · O método
          </p>

          <h2
            className={`
              ${headingClass}
              text-[clamp(40px,5vw,64px)]
              font-semibold leading-[.98]
            `}
          >
            Menos improviso.
            <br />
            <span className="text-[#78b83e]">Mais controle.</span>
          </h2>

          <p className="mt-7 mb-8 max-w-[370px] text-[15px] leading-[1.75] text-[#afb9aa]">
            Conteúdo organizado para você aplicar no dia seguinte, com
            exemplos, checklists e uma visão que aproxima escritório e campo.
          </p>

          <a
            href="#inscricao"
            className="
              inline-flex items-center justify-center gap-[13px]
              bg-[#20251f]
              px-[19px] py-[15px]
              text-[13px] font-bold text-[#f2f1ea]
              ring-1 ring-[#4a5548]
              transition-all duration-200
              hover:bg-[#3a4536]
            "
          >
            Quero conhecer
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="border-t border-[#4a5548]">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon

            return (
              <div
                key={benefit.title}
                className="
                  grid grid-cols-[36px_34px_1fr_22px]
                  items-center gap-4
                  border-b border-[#4a5548]
                  py-[23px]

                  max-[520px]:grid-cols-[30px_34px_1fr_18px]
                  max-[520px]:gap-3
                "
              >
                <span className="text-[11px] text-[#78b83e]">
                  0{i + 1}
                </span>

                <div
                  className="
                    grid h-[34px] w-[34px]
                    place-items-center
                    border border-[#4a5548]
                    text-[#78b83e]
                  "
                >
                  <Icon size={20} />
                </div>

                <div>
                  <h3
                    className={`
                      ${headingClass}
                      text-[17px]
                      tracking-[-.03em]
                    `}
                  >
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-xs leading-[1.5] text-[#aeb8aa]">
                    {benefit.text}
                  </p>
                </div>

                <MoveRight
                  size={19}
                  className="
                    text-[#80907e]
                    transition-all duration-200
                    group-hover:translate-x-1
                  "
                />
              </div>
            )
          })}
        </div>
      </section>

      {/* MÓDULOS */}
      <section
        id="modulos"
        className="
          bg-[#e6e7dc]
          px-[clamp(22px,7vw,110px)]
          py-[clamp(90px,12vw,170px)]

          max-[520px]:py-[90px]
        "
      >
        <div
          className="
            flex items-end justify-between gap-10

            max-[520px]:block
          "
        >
          <div>
            <p className={eyebrowClass}>03 · Conteúdo da trilha</p>

            <h2
              className={`
                ${headingClass}
                text-[clamp(40px,5vw,64px)]
                font-semibold leading-[.98]
              `}
            >
              Quatro movimentos
              <br />
              <span className="text-[#477d29]">para evoluir o PCM.</span>
            </h2>
          </div>

          <p
            className="
              mb-[5px] max-w-[270px]
              text-[15px] leading-[1.75]
              text-[#647064] text-right

              max-[520px]:mt-[23px]
            "
          >
            Uma sequência que respeita a lógica da operação: da base à
            melhoria contínua.
          </p>
        </div>

        <div className="mt-[70px] border-t border-[#ccd2c2] max-[520px]:mt-[45px]">
          {modules.map((module) => (
            <article
              key={module.number}
              className="
                grid grid-cols-[100px_1fr_35px]
                items-center gap-5
                border-b border-[#ccd2c2]
                py-7
                transition-all duration-300
                hover:bg-[rgba(242,241,234,.45)]
                hover:px-[14px]

                max-[520px]:grid-cols-[55px_1fr_25px]
                max-[520px]:gap-[10px]
              "
            >
              <span
                className="
                  font-[family-name:var(--font-space-grotesk)]
                  text-[33px] font-medium
                  text-[#477d29]

                  max-[520px]:text-[25px]
                "
              >
                {module.number}
              </span>

              <div>
                <h3
                  className={`
                    ${headingClass}
                    text-[22px]
                    tracking-[-.04em]

                    max-[520px]:text-[18px]
                  `}
                >
                  {module.title}
                </h3>

                <p
                  className="
                    mt-[7px] max-w-[560px]
                    text-[13px] leading-[1.5]
                    text-[#647064]

                    max-[520px]:text-xs
                  "
                >
                  {module.text}
                </p>
              </div>

              <span
                className="
                  grid h-[34px] w-[34px]
                  place-items-center
                  border border-[#ccd2c2]
                  transition-all duration-200
                  hover:bg-[#78b83e]
                  hover:text-[#20251f]
                "
              >
                <ArrowUpRight size={19} />
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* INSCRIÇÃO */}
      <section
        id="inscricao"
        className="
          bg-[#78b83e]
          px-[clamp(22px,7vw,110px)]
          py-[clamp(80px,10vw,125px)]
        "
      >
        <div
          className="
            mx-auto grid max-w-[1060px]
            grid-cols-[1fr_430px]
            items-center gap-20

            max-[850px]:grid-cols-1
            max-[850px]:max-w-[620px]
            max-[850px]:gap-[50px]
          "
        >
          <div>
            <p className="mb-[21px] text-[11px] font-bold uppercase tracking-[.16em] text-[#477d29]">
              Próximo passo
            </p>

            <h2
              className={`
                ${headingClass}
                text-[clamp(45px,6vw,72px)]
                font-semibold leading-[.94]
              `}
            >
              Seu plano começa
              <br />
              <em className="not-italic text-[#477d29]">agora.</em>
            </h2>

            <p className="mt-[25px] max-w-[420px] text-[15px] leading-[1.75] text-[#345326]">
              Tenha uma trilha clara para aprender PCM, organizar sua rotina e
              gerar mais confiança nas decisões de manutenção.
            </p>
          </div>

          <div
            className="
              bg-[#f2f1ea]
              p-[27px]
              shadow-[13px_13px_0_rgba(32,37,31,.17)]
            "
          >
            <div className="flex justify-between text-[#477d29]">
              <span
                className="
                  inline-block border border-[#ccd2c2]
                  px-[7px] py-[5px]
                  text-[10px] font-bold tracking-[.12em]
                "
              >
                NEXO PCM · TRILHA COMPLETA
              </span>

              <Sparkles size={20} />
            </div>

            <div className="my-8 flex flex-col">
              <small className="text-[11px] text-[#647064]">
                acesso online
              </small>

              <strong
                className="
                  my-[7px]
                  font-[family-name:var(--font-space-grotesk)]
                  text-[58px] leading-none
                  tracking-[-.08em]
                "
              >
                R$ 199
              </strong>

              <span className="text-[11px] text-[#647064]">
                pagamento único
              </span>
            </div>

            <div
              className="
                grid gap-[10px]
                border-y border-[#ccd2c2]
                py-[18px]
                text-xs
              "
            >
              <span className="flex items-center gap-2">
                <Check size={15} className="text-[#477d29]" />
                40+ aulas práticas
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-[#477d29]" />
                Certificado de conclusão
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-[#477d29]" />
                Acesso no seu ritmo
              </span>
            </div>

            <a
              href="/checkout"
              className="
                mt-[22px]
                inline-flex w-full
                items-center justify-center gap-[13px]
                bg-[#78b83e]
                px-[19px] py-[15px]
                text-[13px] font-bold text-[#172312]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-[#8cca4f]
              "
            >
              Quero entrar para o Nexo PCM
              <ArrowUpRight size={17} />
            </a>

            <p className="mt-3 text-center text-[10px] text-[#647064]">
              Dúvidas? Fale com a nossa equipe antes de começar.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="
          grid grid-cols-[.7fr_1.3fr]
          gap-20
          px-[clamp(22px,7vw,110px)]
          py-[clamp(90px,12vw,170px)]

          max-[850px]:grid-cols-1
          max-[520px]:py-[90px]
        "
      >
        <div>
          <p className={eyebrowClass}>04 · Dúvidas frequentes</p>

          <h2
            className={`
              ${headingClass}
              text-[clamp(40px,5vw,64px)]
              font-semibold leading-[.98]
            `}
          >
            Antes de
            <br />
            <span className="text-[#477d29]">começar.</span>
          </h2>

          <Clock3
            size={35}
            strokeWidth={1.5}
            className="mt-8 text-[#477d29]"
          />
        </div>

        <div className="border-t border-[#ccd2c2]">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index

            return (
              <div
                key={faq.question}
                className="border-b border-[#ccd2c2]"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="
            flex w-full items-center justify-between
            border-0 bg-transparent
            py-[23px]
            text-left
            font-[family-name:var(--font-space-grotesk)]
            text-[18px]
            text-[#20251f]
            cursor-pointer
          "
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={19}
                    className={`
              text-[#477d29]
              transition-transform duration-300 ease-out
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
                  />
                </button>

                <div
                  className={`
            grid transition-[grid-template-rows,opacity] duration-300 ease-out
            ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }
          `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                mb-[23px]
                mr-10
                mt-[-5px]
                max-w-[600px]
                text-sm
                leading-[1.75]
                text-[#647064]
              "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="
          flex justify-between
          text-center
          border-t border-[#ccd2c2]
          px-[clamp(22px,7vw,110px)]
          py-[37px]

          max-[850px]:grid-cols-2

          max-[520px]:grid-cols-1
        "
      >
        <a
          href="#top"
          className="
            flex items-center justify-center gap-[11px]
            whitespace-nowrap
            font-[family-name:var(--font-space-grotesk)]
            text-[19px] font-semibold
            tracking-[-.05em]
          "
        >
          <BrandMark />

          <span>
            Nexo{" "}
            <b className="ml-1 align-middle text-[11px] tracking-[.13em] text-[#477d29]">
              PCM
            </b>
          </span>
        </a>

        <p className="hidden md:flex m-0 text-xs leading-[1.5] text-[#647064]">
          Planejamento que sustenta
          <br />
          a operação.
        </p>

        <span
          className="
            flex items-center text-right text-[11px] text-[#647064]

            md:max-[850px]:col-span-full
            md:max-[850px]:text-left

            md:max-[520px]:col-auto
          "
        >
          © 2026 Nexo PCM · Feito para a manutenção.
        </span>
      </footer>
    </main>
  )
}