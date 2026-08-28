"use client"

import { useState } from "react"
import { ArrowLeft, ArrowUpRight, Check, Eye, EyeOff, Lock, Sparkles } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-white lg:bg-[#f4f5ef] text-[#20251f] selection:bg-[#b9df91] selection:text-[#172312]">
      <div className="mx-auto grid min-h-screen lg:grid-cols-[minmax(420px,0.88fr)_minmax(560px,1.12fr)]">
        {/* Área de acesso */}
        <section className="relative flex min-h-screen items-center justify-center px-6 py-10 sm:px-10 lg:px-14 xl:px-20">
          <div className="absolute left-0 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full lg:bg-[#dceccf] blur-3xl" />

          <div className="relative w-full max-w-[600px]">
            <a
              href="/"
              className="relative mb-16 inline-flex items-center gap-2 text-[12px] font-medium text-[#647064] transition-colors hover:text-[#20251f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e] focus-visible:ring-offset-4"
            >
              <ArrowLeft size={15} strokeWidth={1.8} />
              Voltar para o site
            </a>

            <div className="mb-9">
              <div className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#477d29]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#78b83e]" />
                Acesso do aluno
              </div>


            </div>

            <form className="rounded-[2px] lg:border border-[#d8dfd2] lg:bg-white/55 p-5 lg:shadow-[0_18px_60px_rgba(42,61,35,0.06)] sm:p-7">
              <div className="grid gap-5">
                <label className="grid gap-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-[.1em]">E-mail</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="seu@email.com"
                    className="h-14 w-full border border-[#ccd5c6] bg-[#f9faf6] px-4 text-[14px] text-[#20251f] outline-none transition-all placeholder:text-[#8b9388] hover:border-[#aebca7] focus:border-[#78b83e] focus:bg-white focus:ring-4 focus:ring-[#78b83e]/10"
                  />
                </label>

                <label className="grid gap-2.5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] font-bold uppercase tracking-[.1em]">Senha</span>
                    <a
                      href="/recuperar-senha"
                      className="text-[11px] font-medium text-[#477d29] transition-colors hover:text-[#20251f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e]"
                    >
                      Esqueci minha senha
                    </a>
                  </div>

                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Sua senha"
                      className="h-14 w-full border border-[#ccd5c6] bg-[#f9faf6] px-4 pr-14 text-[14px] text-[#20251f] outline-none transition-all placeholder:text-[#8b9388] hover:border-[#aebca7] focus:border-[#78b83e] focus:bg-white focus:ring-4 focus:ring-[#78b83e]/10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((visible) => !visible)}
                      aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-sm p-1 text-[#477d29] transition-colors hover:bg-[#eaf3e3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e]"
                    >
                      {showPassword ? <Eye size={18} strokeWidth={1.8} /> : <EyeOff size={18} strokeWidth={1.8} />}
                    </button>
                  </div>
                </label>

                <button
                  type="submit"
                  className="group mt-1 flex h-14 w-full items-center justify-center gap-2 bg-[#78b83e] text-[13px] font-bold text-[#172312] transition-all hover:-translate-y-0.5 hover:bg-[#8cca4f] hover:shadow-[0_10px_24px_rgba(120,184,62,0.22)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#477d29] focus-visible:ring-offset-2"
                >
                  Entrar
                  <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>

            <div className="my-7 flex items-center gap-3">
              <span className="h-px flex-1 bg-[#d8dfd2]" />
              <span className="text-[10px] font-medium uppercase tracking-[.12em] text-[#8b9388]">ou</span>
              <span className="h-px flex-1 bg-[#d8dfd2]" />
            </div>

            <div className="text-center">
              <p className="text-[12px] text-[#647064]">Ainda não possui acesso?</p>
              <a
                href="/checkout"
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 border border-[#bfcbb9] text-[12px] font-bold transition-all hover:border-[#78b83e] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e] focus-visible:ring-offset-2"
              >
                Conhecer o Nexo PCM
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 text-[10px] font-medium text-[#7c8878]">
              <Lock size={13} strokeWidth={1.8} />
              Ambiente seguro e protegido
            </div>
          </div>
        </section>

        {/* Painel de posicionamento */}
        <section className="relative hidden min-h-screen overflow-hidden border-l border-[#d8dfd2] bg-[#263125] p-10 text-[#f4f5ef] lg:flex lg:flex-col lg:justify-between  xl:p-16">
          <div className="absolute -right-40 -top-36 h-[520px] w-[520px] rounded-full border border-[#8cca4f]/20" />
          <div className="absolute -right-16 -top-12 h-[360px] w-[360px] rounded-full border border-[#8cca4f]/15" />
          <div className="absolute bottom-[-220px] left-[-180px] h-[480px] w-[480px] rounded-full bg-[#78b83e]/10 blur-3xl" />

          <a
            href="/"
            className="relative flex w-fit items-center gap-3 font-[family-name:var(--font-space-grotesk)] text-[19px] font-semibold tracking-[-.05em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8cca4f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#263125]"
          >
            <Image
              src={'/imagens/logo.png'}
              height={150}
              width={150}
              alt="Logo"
              className="relative bottom-12 cover" />
          </a>

          <div className="relative bottom-11 max-w-[590px]">
            <div className="mb-7 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#8cca4f]">
              <Sparkles size={14} strokeWidth={1.8} />
              Sua evolução começa aqui
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(54px,6vw,88px)] font-semibold leading-[.9] tracking-[-.075em]">
              Conhecimento que
              <br />
              <span className="text-[#8cca4f]">transforma.</span>
            </h2>
            <p className="mt-8 max-w-[480px] text-[15px] leading-7 text-[#b7c3b0]">
              Conteúdos práticos, organização e clareza para você construir uma jornada de manutenção mais eficiente.
            </p>

            <div className="mt-10 grid max-w-[480px] gap-3 sm:grid-cols-3">
              {['Aulas práticas', 'Seu progresso', 'Método Nexo'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[11px] text-[#dce6d7]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8cca4f]/15 text-[#8cca4f]"><Check size={12} /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="relative top-5 text-[10px] text-[#91a08c]">© 2026 Nexo PCM · Feito para a manutenção.</p>
        </section>
      </div>
    </main>
  )
}

