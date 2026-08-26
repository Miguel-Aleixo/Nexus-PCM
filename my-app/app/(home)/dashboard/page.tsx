"use client"

import { useState } from "react"
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleUserRound,
  Clock3,
  LogOut,
  Menu,
  Play,
  Settings,
  ShieldCheck,
  Trophy,
  X,
} from "lucide-react"

const modules = [
  {
    number: "01",
    title: "Fundamentos do PCM",
    description:
      "Entenda a lógica do planejamento, os papéis da rotina e os indicadores.",
    lessons: 10,
    duration: "1h 45min",
    progress: 100,
    status: "completed",
  },
  {
    number: "02",
    title: "Planejamento de paradas",
    description:
      "Estruture escopo, recursos e sequenciamento para reduzir improvisos.",
    lessons: 12,
    duration: "2h 10min",
    progress: 42,
    status: "current",
  },
  {
    number: "03",
    title: "Programação e controle",
    description:
      "Transforme prioridades em uma agenda acompanhável.",
    lessons: 9,
    duration: "1h 50min",
    progress: 0,
    status: "locked",
  },
  {
    number: "04",
    title: "Indicadores e melhoria",
    description:
      "Leia a operação, encontre gargalos e crie ciclos de melhoria.",
    lessons: 11,
    duration: "2h 15min",
    progress: 0,
    status: "locked",
  },
]

const recentLessons = [
  {
    module: "Módulo 02",
    title: "Como estruturar uma parada",
    duration: "12 min",
    progress: 68,
  },
  {
    module: "Módulo 02",
    title: "Definição de escopo",
    duration: "18 min",
    progress: 0,
  },
  {
    module: "Módulo 02",
    title: "Sequenciamento das atividades",
    duration: "15 min",
    progress: 0,
  },
]

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f4f5ef] text-[#20251f] selection:bg-[#b9df91] selection:text-[#172312]">
      {/* ========================================================= */}
      {/* HEADER MOBILE                                            */}
      {/* ========================================================= */}

      <header
        className="
          fixed left-0 right-0 top-0 z-50
          flex h-[72px] items-center justify-between
          border-b border-[#d8dfd2]
          bg-[#f4f5ef]/95
          px-5
          backdrop-blur
          lg:hidden
        "
      >
        <Logo />

        <button
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label={
            sidebarOpen ? "Fechar menu" : "Abrir menu"
          }
          aria-expanded={sidebarOpen}
          className="
            rounded-sm p-2
            transition-colors duration-200
            hover:bg-[#e6e7dc]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#78b83e]
          "
        >
          {sidebarOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>
      </header>

      {/* ========================================================= */}
      {/* SIDEBAR                                                   */}
      {/* ========================================================= */}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-[270px]
          border-r border-[#d8dfd2]
          bg-[#f4f5ef]

          transition-transform duration-300

          lg:translate-x-0

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="flex h-full flex-col">
          {/* LOGO */}

          <div
            className="
              flex h-[76px]
              items-center
              border-b border-[#d8dfd2]
              px-7
            "
          >
            <Logo />
          </div>

          {/* USER */}

          <div
            className="
              border-b border-[#d8dfd2]
              px-6 py-6
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  grid h-11 w-11
                  place-items-center
                  rounded-full
                  bg-[#263125]
                  text-[#f4f5ef]
                "
              >
                <CircleUserRound
                  size={21}
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <p
                  className="
                    font-[family-name:var(--font-space-grotesk)]
                    text-[14px]
                    font-medium
                  "
                >
                  Miguel Aleixo
                </p>

                <p className="mt-1 text-[10px] text-[#647064]">
                  Aluno Nexo PCM
                </p>
              </div>
            </div>
          </div>

          {/* NAV */}

          <nav className="flex flex-1 flex-col px-4 py-7">
            <p
              className="
                mb-3 px-3
                text-[9px]
                font-bold
                uppercase
                tracking-[.16em]
                text-[#7c8878]
              "
            >
              Plataforma
            </p>

            <SidebarLink
              active
              icon={
                <Trophy
                  size={17}
                  strokeWidth={1.8}
                />
              }
              label="Início"
            />

            <SidebarLink
              icon={
                <Play
                  size={17}
                  strokeWidth={1.8}
                />
              }
              label="Minha trilha"
            />

            <SidebarLink
              icon={
                <Check
                  size={17}
                  strokeWidth={1.8}
                />
              }
              label="Progresso"
            />

            <SidebarLink
              icon={
                <ShieldCheck
                  size={17}
                  strokeWidth={1.8}
                />
              }
              label="Certificado"
            />

            <p
              className="
                mb-3 mt-9 px-3
                text-[9px]
                font-bold
                uppercase
                tracking-[.16em]
                text-[#7c8878]
              "
            >
              Conta
            </p>

            <SidebarLink
              icon={
                <Settings
                  size={17}
                  strokeWidth={1.8}
                />
              }
              label="Configurações"
            />
          </nav>

          {/* LOGOUT */}

          <div
            className="
              border-t
              border-[#d8dfd2]
              p-4
            "
          >
            <button
              className="
                flex w-full
                items-center gap-3
                rounded-sm
                px-3 py-3
                text-[12px]
                text-[#647064]
                transition-colors duration-200
                hover:bg-[#e6e7dc]
                hover:text-[#20251f]
              "
            >
              <LogOut
                size={17}
                strokeWidth={1.8}
              />

              Sair da conta
            </button>
          </div>
        </div>
      </aside>

      {/* ========================================================= */}
      {/* MOBILE OVERLAY                                            */}
      {/* ========================================================= */}

      {sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(false)}
          className="
            fixed inset-0 z-40
            bg-[#20251f]/25
            backdrop-blur-[2px]
            lg:hidden
          "
          aria-label="Fechar menu"
        />
      )}

      {/* ========================================================= */}
      {/* MAIN CONTENT                                              */}
      {/* ========================================================= */}

      <section
        className="
          w-full
          pt-[72px]

          lg:ml-[270px]
          lg:w-[calc(100%-270px)]
          lg:pt-0
        "
      >
        {/* ======================================================= */}
        {/* DESKTOP NAVBAR                                         */}
        {/* ======================================================= */}

        <header
          className="
            fixed
            right-0
            top-0
            z-40
            hidden
            h-[76px]
            items-center
            justify-between
            border-b border-[#d8dfd2]
            bg-[#f4f5ef]/95
            px-8
            backdrop-blur

            lg:left-[270px]
            lg:flex

            xl:px-12
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[.16em]
                text-[#477d29]
              "
            >
              Área do aluno
            </p>

            <p className="mt-1 text-[12px] text-[#647064]">
              Sua jornada de formação
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p
                className="
                  font-[family-name:var(--font-space-grotesk)]
                  text-[13px]
                  font-medium
                "
              >
                Miguel Aleixo
              </p>

              <p className="mt-1 text-[10px] text-[#647064]">
                Trilha completa
              </p>
            </div>

            <div
              className="
                grid h-10 w-10
                place-items-center
                rounded-full
                bg-[#263125]
                text-[#f4f5ef]
              "
            >
              <CircleUserRound
                size={18}
                strokeWidth={1.7}
              />
            </div>
          </div>
        </header>

        {/* ======================================================= */}
        {/* PAGE CONTENT                                            */}
        {/* ======================================================= */}

        <div
          className="
            mx-auto
            max-w-[1340px]
            px-5
            pb-8
            pt-8

            sm:px-8

            lg:px-10
            lg:pb-12
            lg:pt-[108px]
          "
        >
          {/* ===================================================== */}
          {/* HERO                                                  */}
          {/* ===================================================== */}

          <div
            className="
              relative
              flex
              flex-col
              justify-between
              gap-8
              overflow-hidden
              rounded-[2px]
              border border-[#d8dfd2]
              bg-white/55
              p-6
              shadow-[0_16px_50px_rgba(42,61,35,0.04)]

              sm:p-9

              md:flex-row
              md:items-end
            "
          >
            <div
              className="
                absolute
                -right-20
                -top-28
                h-64
                w-64
                rounded-full
                border
                border-[#78b83e]/15
              "
            />

            <div className="relative">
              <p
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[.16em]
                  text-[#477d29]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#78b83e]
                  "
                />

                Bom te ver por aqui
              </p>

              <h1
                className="
                  font-[family-name:var(--font-space-grotesk)]
                  text-[clamp(38px,5vw,62px)]
                  font-semibold
                  leading-[.9]
                  tracking-[-.075em]
                "
              >
                Continue sua
                <br />

                <span className="text-[#477d29]">
                  jornada.
                </span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-[480px]
                  text-[13px]
                  leading-7
                  text-[#647064]
                "
              >
                Você já começou. Agora é só continuar
                avançando até dominar o planejamento e
                controle da manutenção.
              </p>
            </div>

            {/* PROGRESS */}

            <div
              className="
                relative
                w-full
                max-w-[290px]
                border border-[#d8dfd2]
                bg-[#e8ebe1]
                p-5
              "
            >
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[.1em]
                    text-[#647064]
                  "
                >
                  Progresso geral
                </span>

                <strong
                  className="
                    font-[family-name:var(--font-space-grotesk)]
                    text-[26px]
                    font-medium
                    tracking-[-.06em]
                  "
                >
                  36%
                </strong>
              </div>

              <div className="mt-5 h-1.5 w-full bg-[#ccd5c6]">
                <div className="h-full w-[36%] bg-[#78b83e]" />
              </div>

              <div
                className="
                  mt-3
                  flex
                  justify-between
                  text-[10px]
                  text-[#647064]
                "
              >
                <span>15 aulas concluídas</span>
                <span>42 aulas</span>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* CONTINUE DE ONDE PAROU                               */}
          {/* ===================================================== */}

          <section className="mt-12">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[.16em]
                    text-[#477d29]
                  "
                >
                  Continue de onde parou
                </p>

                <h2
                  className="
                    mt-2
                    font-[family-name:var(--font-space-grotesk)]
                    text-[27px]
                    font-medium
                    tracking-[-.055em]
                  "
                >
                  Planejamento de paradas
                </h2>
              </div>

              <span className="hidden text-[11px] text-[#647064] sm:block">
                Módulo 02 · 42%
              </span>
            </div>

            <div
              className="
                grid
                overflow-hidden
                border border-[#d8dfd2]
                bg-[#e8ebe1]
                shadow-[0_16px_45px_rgba(42,61,35,0.05)]

                lg:grid-cols-[1.15fr_.85fr]
              "
            >
              {/* VIDEO */}

              <div
                className="
                  relative
                  min-h-[290px]
                  overflow-hidden
                  bg-[#263125]
                "
              >
                <div
                  className="
                    absolute
                    -right-20
                    -top-24
                    h-72
                    w-72
                    rounded-full
                    border
                    border-[#8cca4f]/20
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[-130px]
                    left-[-90px]
                    h-64
                    w-64
                    rounded-full
                    bg-[#78b83e]/10
                    blur-3xl
                  "
                />

                <div className="absolute inset-0 grid place-items-center">
                  <button
                    aria-label="Reproduzir aula"
                    className="
                      group
                      grid
                      h-[68px]
                      w-[68px]
                      place-items-center
                      rounded-full
                      bg-[#78b83e]
                      text-[#172312]
                      shadow-[0_0_0_10px_rgba(120,184,62,0.12)]
                      transition-transform
                      duration-200
                      hover:scale-105
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#8cca4f]
                      focus-visible:ring-offset-4
                      focus-visible:ring-offset-[#263125]
                    "
                  >
                    <Play
                      size={23}
                      fill="currentColor"
                      className="ml-1"
                    />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6">
                  <span
                    className="
                      border
                      border-white/20
                      bg-black/20
                      px-2 py-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[.12em]
                      text-white
                    "
                  >
                    Próxima aula
                  </span>
                </div>

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                    bg-white/10
                  "
                >
                  <div className="h-full w-[42%] bg-[#78b83e]" />
                </div>
              </div>

              {/* AULA */}

              <div
                className="
                  flex
                  flex-col
                  justify-between
                  p-7

                  sm:p-8
                "
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[.12em]
                        text-[#477d29]
                      "
                    >
                      Aula 06
                    </span>

                    <span
                      className="
                        flex
                        items-center
                        gap-1
                        text-[10px]
                        text-[#647064]
                      "
                    >
                      <Clock3 size={12} />
                      18 min
                    </span>
                  </div>

                  <h3
                    className="
                      mt-5
                      font-[family-name:var(--font-space-grotesk)]
                      text-[30px]
                      font-medium
                      leading-[.96]
                      tracking-[-.06em]
                    "
                  >
                    Como estruturar
                    <br />
                    uma parada
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[310px]
                      text-[12px]
                      leading-6
                      text-[#647064]
                    "
                  >
                    Aprenda a organizar escopo, recursos e
                    sequência das atividades antes da execução.
                  </p>
                </div>

                <button
                  className="
                    group
                    mt-8
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#263125]
                    px-5
                    py-4
                    text-[12px]
                    font-bold
                    text-[#f4f5ef]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#20251f]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#78b83e]
                  "
                >
                  Continuar aula

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            </div>
          </section>

          {/* ===================================================== */}
          {/* MÓDULOS                                               */}
          {/* ===================================================== */}

          <section className="mt-14">
            <div className="flex items-end justify-between">
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[.16em]
                    text-[#477d29]
                  "
                >
                  Sua trilha
                </p>

                <h2
                  className="
                    mt-2
                    font-[family-name:var(--font-space-grotesk)]
                    text-[28px]
                    font-medium
                    tracking-[-.055em]
                  "
                >
                  Módulos do Nexo PCM
                </h2>
              </div>

              <button
                className="
                  hidden
                  items-center
                  gap-2
                  text-[11px]
                  font-bold
                  transition-colors
                  duration-200
                  hover:text-[#477d29]
                  sm:flex
                "
              >
                Ver todos
                <ArrowRight size={14} />
              </button>
            </div>

            <div
              className="
                mt-6
                divide-y
                divide-[#d8dfd2]
                border-y
                border-[#d8dfd2]
              "
            >
              {modules.map((module) => (
                <article
                  key={module.number}
                  className="
                    group
                    grid
                    grid-cols-[42px_1fr_auto]
                    items-center
                    gap-4
                    px-2 py-5
                    transition-colors
                    duration-200
                    hover:bg-[#e8ebe1]

                    sm:grid-cols-[55px_1fr_auto]
                    sm:px-3
                  "
                >
                  <span
                    className="
                      font-[family-name:var(--font-space-grotesk)]
                      text-[24px]
                      font-medium
                      tracking-[-.06em]
                      text-[#477d29]
                    "
                  >
                    {module.number}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3
                        className="
                          font-[family-name:var(--font-space-grotesk)]
                          text-[16px]
                          font-medium
                          tracking-[-.03em]

                          sm:text-[17px]
                        "
                      >
                        {module.title}
                      </h3>

                      {module.status === "completed" && (
                        <span
                          className="
                            flex
                            items-center
                            gap-1
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[.1em]
                            text-[#477d29]
                          "
                        >
                          <Check size={12} />
                          Concluído
                        </span>
                      )}

                      {module.status === "current" && (
                        <span
                          className="
                            bg-[#78b83e]/20
                            px-2 py-1
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[.1em]
                            text-[#477d29]
                          "
                        >
                          Em andamento
                        </span>
                      )}
                    </div>

                    <p
                      className="
                        mt-1
                        hidden
                        max-w-[600px]
                        text-[11px]
                        leading-[1.5]
                        text-[#647064]

                        sm:block
                      "
                    >
                      {module.description}
                    </p>

                    <div
                      className="
                        mt-2
                        flex
                        items-center
                        gap-4
                        text-[9px]
                        text-[#647064]
                      "
                    >
                      <span>
                        {module.lessons} aulas
                      </span>

                      <span>
                        {module.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="hidden w-[90px] sm:block">
                      <div className="h-1 bg-[#ccd5c6]">
                        <div
                          className="h-full bg-[#78b83e]"
                          style={{
                            width: `${module.progress}%`,
                          }}
                        />
                      </div>

                      <p className="mt-2 text-right text-[9px] text-[#647064]">
                        {module.progress}%
                      </p>
                    </div>

                    <button
                      disabled={module.status === "locked"}
                      aria-label={`Abrir ${module.title}`}
                      className={`
                        grid
                        h-9
                        w-9
                        place-items-center
                        border
                        border-[#ccd5c6]
                        transition-all
                        duration-200
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#78b83e]

                        ${
                          module.status === "locked"
                            ? "cursor-not-allowed opacity-35"
                            : "hover:border-[#78b83e] hover:bg-[#78b83e]"
                        }
                      `}
                    >
                      <ChevronRight size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ===================================================== */}
          {/* AULAS RECENTES + CERTIFICADO                         */}
          {/* ===================================================== */}

          <section
            className="
              mt-14
              grid
              gap-10

              lg:grid-cols-[1fr_320px]
            "
          >
            {/* RECENTES */}

            <div>
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[.16em]
                  text-[#477d29]
                "
              >
                Continue aprendendo
              </p>

              <h2
                className="
                  mt-2
                  font-[family-name:var(--font-space-grotesk)]
                  text-[27px]
                  font-medium
                  tracking-[-.055em]
                "
              >
                Aulas recentes
              </h2>

              <div
                className="
                  mt-5
                  divide-y
                  divide-[#d8dfd2]
                  border-y
                  border-[#d8dfd2]
                "
              >
                {recentLessons.map((lesson) => (
                  <button
                    key={lesson.title}
                    className="
                      flex
                      w-full
                      items-center
                      gap-4
                      px-2 py-4
                      text-left
                      transition-colors
                      duration-200
                      hover:bg-[#e8ebe1]

                      sm:px-3
                    "
                  >
                    <div
                      className="
                        grid
                        h-10
                        w-10
                        shrink-0
                        place-items-center
                        border
                        border-[#ccd5c6]
                        bg-white/40
                        text-[#477d29]
                      "
                    >
                      <Play
                        size={14}
                        fill="currentColor"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[.1em]
                          text-[#477d29]
                        "
                      >
                        {lesson.module}
                      </p>

                      <p
                        className="
                          mt-1
                          truncate
                          font-[family-name:var(--font-space-grotesk)]
                          text-[14px]
                          font-medium
                        "
                      >
                        {lesson.title}
                      </p>

                      <div
                        className="
                          mt-2
                          h-[3px]
                          max-w-[280px]
                          bg-[#ccd5c6]
                        "
                      >
                        <div
                          className="h-full bg-[#78b83e]"
                          style={{
                            width: `${lesson.progress}%`,
                          }}
                        />
                      </div>
                    </div>

                    <span className="hidden text-[10px] text-[#647064] sm:block">
                      {lesson.duration}
                    </span>

                    <ArrowRight
                      size={15}
                      className="text-[#647064]"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* CERTIFICADO */}

            <aside
              className="
                relative
                h-fit
                overflow-hidden
                border
                border-[#d8dfd2]
                bg-[#e8ebe1]
                p-6
              "
            >
              <div
                className="
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  border
                  border-[#78b83e]/20
                "
              />

              <div className="relative flex items-center justify-between">
                <Trophy
                  size={22}
                  className="text-[#477d29]"
                  strokeWidth={1.7}
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[.12em]
                    text-[#647064]
                  "
                >
                  Certificação
                </span>
              </div>

              <h3
                className="
                  relative
                  mt-6
                  font-[family-name:var(--font-space-grotesk)]
                  text-[24px]
                  font-medium
                  leading-[.95]
                  tracking-[-.05em]
                "
              >
                Seu certificado
                <br />
                está a caminho.
              </h3>

              <p
                className="
                  relative
                  mt-4
                  text-[11px]
                  leading-[1.6]
                  text-[#647064]
                "
              >
                Conclua os módulos da trilha para liberar
                seu certificado Nexo PCM.
              </p>

              <div
                className="
                  relative
                  mt-5
                  h-1
                  bg-[#ccd5c6]
                "
              >
                <div className="h-full w-[36%] bg-[#78b83e]" />
              </div>

              <p
                className="
                  relative
                  mt-2
                  text-right
                  text-[9px]
                  text-[#647064]
                "
              >
                36% concluído
              </p>

              <button
                disabled
                className="
                  relative
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  border
                  border-[#ccd5c6]
                  px-4
                  py-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[.08em]
                  opacity-50
                "
              >
                Certificado bloqueado
              </button>
            </aside>
          </section>

          {/* ===================================================== */}
          {/* FOOTER                                                */}
          {/* ===================================================== */}

          <footer
            className="
              mt-14
              border-t
              border-[#d8dfd2]
              pt-5
              text-[9px]
              text-[#647064]
            "
          >
            © 2026 Nexo PCM · Feito para a manutenção.
          </footer>
        </div>
      </section>
    </main>
  )
}

/* =============================================================== */
/* LOGO                                                            */
/* =============================================================== */

function Logo() {
  return (
    <a
      href="/"
      className="
        flex
        items-center
        gap-3
        font-[family-name:var(--font-space-grotesk)]
        text-[19px]
        font-semibold
        tracking-[-.05em]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#78b83e]
        focus-visible:ring-offset-4
      "
    >
      <span
        className="
          flex
          h-6
          w-[26px]
          items-end
          gap-[3px]
        "
        aria-hidden="true"
      >
        <i
          className="
            block
            h-[13px]
            w-[5px]
            skew-x-[-18deg]
            rounded-[1px]
            bg-[#20251f]
          "
        />

        <i
          className="
            block
            h-[21px]
            w-[5px]
            skew-x-[-18deg]
            rounded-[1px]
            bg-[#78b83e]
          "
        />

        <i
          className="
            block
            h-[16px]
            w-[5px]
            skew-x-[-18deg]
            rounded-[1px]
            bg-[#20251f]
          "
        />
      </span>

      <span>
        Nexo{" "}
        <b
          className="
            ml-1
            text-[11px]
            tracking-[.13em]
            text-[#477d29]
          "
        >
          PCM
        </b>
      </span>
    </a>
  )
}

/* =============================================================== */
/* SIDEBAR LINK                                                    */
/* =============================================================== */

function SidebarLink({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <button
      className={`
        flex
        items-center
        gap-3
        rounded-sm
        px-3
        py-3
        text-[12px]
        transition-colors
        duration-200

        ${
          active
            ? "bg-[#e8ebe1] font-bold text-[#20251f]"
            : "text-[#647064] hover:bg-[#e8ebe1] hover:text-[#20251f]"
        }
      `}
    >
      {icon}

      <span>{label}</span>

      {active && (
        <span
          className="
            ml-auto
            h-1.5
            w-1.5
            rounded-full
            bg-[#78b83e]
          "
        />
      )}
    </button>
  )
}