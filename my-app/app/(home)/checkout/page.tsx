"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  CreditCard,
  Lock,
  QrCode,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const benefits = [
  "40+ aulas práticas",
  "8 horas de conteúdo",
  "Certificado de conclusão",
  "Acesso online",
  "Estude no seu ritmo",
]

export default function CheckoutPage() {
  const [payment, setPayment] = useState("pix")

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f5ef] text-[#20251f] selection:bg-[#b9df91] selection:text-[#172312]">
      <header className="border-b border-[#d8dfd2] bg-[#f4f5ef]/90 px-6 backdrop-blur sm:px-10 lg:px-16">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between">
          <a
            href="/"
            aria-label="Voltar para a página inicial do Nexo PCM"
            className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)] text-[19px] font-semibold tracking-[-.05em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e] focus-visible:ring-offset-4"
          >
            <span className="flex h-6 w-[26px] items-end gap-[3px]" aria-hidden="true">
              <i className="block h-[13px] w-[5px] skew-x-[-18deg] rounded-[1px] bg-[#20251f]" />
              <i className="block h-[21px] w-[5px] skew-x-[-18deg] rounded-[1px] bg-[#78b83e]" />
              <i className="block h-[16px] w-[5px] skew-x-[-18deg] rounded-[1px] bg-[#20251f]" />
            </span>
            <span>
              Nexo <b className="ml-1 text-[11px] tracking-[.13em] text-[#477d29]">PCM</b>
            </span>
          </a>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#647064] sm:text-[11px]">
            <Lock size={14} className="text-[#477d29]" strokeWidth={1.8} />
            <span className="hidden sm:inline">Checkout seguro</span>
            <span className="sm:hidden">Seguro</span>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-[1440px] px-6 py-9 sm:px-10 lg:px-16 lg:py-14">
        <div className="absolute -left-28 top-20 h-64 w-64 rounded-full bg-[#dceccf] blur-3xl" />

        <div className="relative mb-10 flex flex-col justify-between gap-8 border-b border-[#d8dfd2] pb-9 md:flex-row md:items-end lg:mb-12">
          <div>
            <a
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-[11px] font-medium text-[#647064] transition-colors hover:text-[#20251f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e] focus-visible:ring-offset-4"
            >
              <ArrowLeft size={14} strokeWidth={1.8} />
              Voltar para o site
            </a>

            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#477d29]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#78b83e]" />
              Inscrição · Nexo PCM
            </div>

            <h1 className="mt-5 max-w-[650px] font-[family-name:var(--font-space-grotesk)] text-[clamp(42px,6vw,72px)] font-semibold leading-[.9] tracking-[-.075em]">
              Comece sua <span className="text-[#477d29]">jornada.</span>
            </h1>
          </div>

          <div className="max-w-[360px] text-[13px] leading-7 text-[#647064] md:pb-1">
            <p>Preencha seus dados e garanta acesso à trilha completa de Planejamento e Controle da Manutenção.</p>
          </div>
        </div>

        <div className="relative mb-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#647064] sm:gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#78b83e] text-[#172312]">1</span>
          <span className="text-[#20251f]">Dados</span>
          <span className="h-px w-8 bg-[#ccd5c6] sm:w-16" />
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#bfcbb9]">2</span>
          <span>Pagamento</span>
          <span className="h-px w-8 bg-[#ccd5c6] sm:w-16" />
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#bfcbb9]">3</span>
          <span className="hidden sm:inline">Confirmação</span>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_410px] lg:gap-12">
          <div>
            <section className="border border-[#d8dfd2] bg-white/55 p-6 shadow-[0_16px_50px_rgba(42,61,35,0.04)] sm:p-8">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <span className="mb-2 block text-[10px] font-bold tracking-[.14em] text-[#477d29]">01</span>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-[25px] font-medium tracking-[-.05em]">Seus dados</h2>
                  <p className="mt-2 text-[12px] leading-5 text-[#647064]">Precisamos dessas informações para criar seu acesso.</p>
                </div>
                <div className="grid h-11 w-11 shrink-0 place-items-center border border-[#d8dfd2] bg-[#f4f5ef] text-[#477d29]">
                  <ShieldCheck size={20} strokeWidth={1.7} />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[.1em]">Nome completo</span>
                  <input name="name" type="text" autoComplete="name" placeholder="Seu nome" className="h-14 border border-[#ccd5c6] bg-[#f9faf6] px-4 text-[13px] outline-none transition-all placeholder:text-[#9aa196] hover:border-[#aebca7] focus:border-[#78b83e] focus:bg-white focus:ring-4 focus:ring-[#78b83e]/10" />
                </label>

                <label className="grid gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[.1em]">CPF</span>
                  <input name="cpf" type="text" inputMode="numeric" autoComplete="off" placeholder="000.000.000-00" className="h-14 border border-[#ccd5c6] bg-[#f9faf6] px-4 text-[13px] outline-none transition-all placeholder:text-[#9aa196] hover:border-[#aebca7] focus:border-[#78b83e] focus:bg-white focus:ring-4 focus:ring-[#78b83e]/10" />
                </label>

                <label className="grid gap-2 md:col-span-2">
                  <span className="text-[10px] font-bold uppercase tracking-[.1em]">E-mail</span>
                  <input name="email" type="email" autoComplete="email" placeholder="seu@email.com" className="h-14 border border-[#ccd5c6] bg-[#f9faf6] px-4 text-[13px] outline-none transition-all placeholder:text-[#9aa196] hover:border-[#aebca7] focus:border-[#78b83e] focus:bg-white focus:ring-4 focus:ring-[#78b83e]/10" />
                </label>
              </div>
            </section>

            <section className="mt-5 border border-[#d8dfd2] bg-white/55 p-6 shadow-[0_16px_50px_rgba(42,61,35,0.04)] sm:p-8">
              <div className="mb-8">
                <span className="mb-2 block text-[10px] font-bold tracking-[.14em] text-[#477d29]">02</span>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-[25px] font-medium tracking-[-.05em]">Pagamento</h2>
                <p className="mt-2 text-[12px] leading-5 text-[#647064]">Escolha como deseja realizar o pagamento.</p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { id: "pix", title: "PIX", description: "Aprovação rápida", icon: QrCode },
                  { id: "card", title: "Cartão de crédito", description: "Pagamento seguro", icon: CreditCard },
                ].map(({ id, title, description, icon: Icon }) => {
                  const active = payment === id
                  return (
                    <button
                      key={id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setPayment(id)}
                      className={`group relative flex min-h-[112px] flex-col justify-between border p-5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e] focus-visible:ring-offset-2 ${active ? "border-[#78b83e] bg-[#78b83e]/10 shadow-[0_8px_20px_rgba(120,184,62,0.08)]" : "border-[#ccd5c6] bg-[#f9faf6] hover:border-[#78b83e] hover:bg-white"}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className={`grid h-8 w-8 place-items-center transition-colors ${active ? "bg-[#78b83e] text-[#172312]" : "bg-[#e9eee5] text-[#477d29] group-hover:bg-[#dceccf]"}`}>
                          <Icon size={16} strokeWidth={1.8} />
                        </span>
                        <span className={`grid h-5 w-5 place-items-center rounded-full border transition-colors ${active ? "border-[#78b83e] bg-[#78b83e] text-[#172312]" : "border-[#bfcbb9]"}`}>
                          {active && <Check size={12} strokeWidth={2.5} />}
                        </span>
                      </div>
                      <div>
                        <strong className="block text-[13px]">{title}</strong>
                        <span className="mt-1 block text-[10px] text-[#647064]">{description}</span>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 flex items-start gap-3 border-t border-[#d8dfd2] pt-5 text-[10px] leading-5 text-[#647064]">
                <Lock size={14} className="mt-0.5 shrink-0 text-[#477d29]" strokeWidth={1.8} />
                <span>Seus dados são protegidos durante todo o processo de pagamento.</span>
              </div>
            </section>
          </div>

          <aside className="h-fit lg:sticky lg:top-8">
            <div className="relative overflow-hidden bg-[#263125] p-6 text-[#f4f5ef] shadow-[0_20px_60px_rgba(32,37,31,0.16)] sm:p-8">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#8cca4f]/20" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#78b83e]/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <span className="border border-[#52604f] px-2 py-1 text-[9px] font-bold tracking-[.14em]">NEXO PCM</span>
                <Sparkles size={18} className="text-[#8cca4f]" strokeWidth={1.7} />
              </div>

              <div className="relative mt-8">
                <p className="text-[10px] uppercase tracking-[.14em] text-[#9cab97]">Você está adquirindo</p>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-[30px] font-medium tracking-[-.06em]">Trilha completa</h2>
                <p className="mt-3 text-[12px] leading-6 text-[#b7c3b0]">Formação completa em Planejamento e Controle da Manutenção.</p>
              </div>

              <div className="relative my-7 border-y border-[#52604f] py-5">
                <span className="text-[10px] text-[#9cab97]">Pagamento único</span>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <strong className="font-[family-name:var(--font-space-grotesk)] text-[52px] font-medium leading-none tracking-[-.09em]">R$ 199</strong>
                  <span className="mb-1 text-[9px] text-[#9cab97]">acesso completo</span>
                </div>
              </div>

              <div className="relative grid gap-3">
                {benefits.map((item) => (
                  <span key={item} className="flex items-center gap-2.5 text-[11px] text-[#d9e2d6]">
                    <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#78b83e] text-[#172312]"><Check size={11} strokeWidth={2.5} /></span>
                    {item}
                  </span>
                ))}
              </div>

              <button type="button" className="group relative mt-8 flex h-14 w-full items-center justify-center gap-2 bg-[#78b83e] text-[12px] font-bold text-[#172312] transition-all hover:-translate-y-0.5 hover:bg-[#8cca4f] hover:shadow-[0_12px_28px_rgba(120,184,62,0.25)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8cca4f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#263125]">
                Finalizar compra
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <p className="relative mt-4 text-center text-[9px] leading-5 text-[#9cab97]">Ao finalizar, você receberá as instruções para acessar sua conta.</p>
            </div>

            <div className="flex items-center gap-3 border border-t-0 border-[#d8dfd2] bg-[#e8ebe1] p-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center border border-[#ccd5c6] text-[#477d29]"><ShieldCheck size={19} strokeWidth={1.7} /></div>
              <div>
                <strong className="block text-[11px]">Compra protegida</strong>
                <span className="mt-1 block text-[9px] text-[#647064]">Seus dados são tratados com segurança.</span>
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-10 flex flex-col gap-3 border-t border-[#d8dfd2] pt-5 text-[9px] text-[#647064] sm:flex-row sm:items-center sm:justify-between">
          <span>Nexo PCM · Formação em Planejamento e Controle da Manutenção</span>
          <span className="inline-flex items-center gap-1">Voltar ao início <ChevronRight size={12} /></span>
        </footer>
      </section>
    </main>
  )
}