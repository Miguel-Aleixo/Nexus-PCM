"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CreditCard,
  Lock,
  QrCode,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

const benefits = [
  "40+ aulas práticas",
  "8 horas de conteúdo",
  "Certificado de conclusão",
  "Acesso online",
  "Estude no seu ritmo",
]

const steps = ["Dados", "Pagamento", "Confirmação"]

export default function CheckoutPage() {
  const [payment, setPayment] = useState("pix")
  const [currentStep, setCurrentStep] = useState(0)
  const [form, setForm] = useState({ name: "", cpf: "", email: "" })

  const goToStep = (step: number) => {
    if (step < 0 || step > steps.length - 1 || step === currentStep) return
    setCurrentStep(step)
  }

  const nextStep = () => goToStep(currentStep + 1)
  const previousStep = () => goToStep(currentStep - 1)

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }))
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f5ef] text-[#20251f] selection:bg-[#b9df91] selection:text-[#172312]">
      <header className="border-b border-[#d8dfd2] bg-[#f4f5ef]/90 px-6 backdrop-blur sm:px-10 lg:px-16">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between">
          <a href="/" aria-label="Voltar para a página inicial do Nexo PCM" className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)] text-[19px] font-semibold tracking-[-.05em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e] focus-visible:ring-offset-4">
            <Image
              src={'/imagens/logo.png'}
              height={125}
              width={125}
              alt="Logo" />
          </a>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#647064] sm:text-[11px]">
            <Lock size={14} className="text-[#477d29]" strokeWidth={1.8} />
            <span className="hidden sm:inline">Checkout seguro</span>
            <span className="sm:hidden">Seguro</span>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-[1440px] px-6 py-9 sm:px-10 lg:px-16 lg:py-8">
        <div className="absolute -left-28 top-20 h-64 w-64 rounded-full bg-[#dceccf] blur-3xl" />

        <div className="relative mb-7 flex flex-col justify-between gap-8 border-b border-[#d8dfd2] pb-9 md:flex-row md:items-end lg:mb-7">
          <div>
            <a href="/" className="mb-8 inline-flex items-center gap-2 text-[11px] font-medium text-[#647064] transition-colors hover:text-[#20251f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e] focus-visible:ring-offset-4">
              <ArrowLeft size={14} strokeWidth={1.8} /> Voltar para o site
            </a>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#477d29]"><span className="h-1.5 w-1.5 rounded-full bg-[#78b83e]" />Inscrição · Nexo PCM</div>
            <h1 className="mt-5 max-w-[650px] font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[.9] tracking-[-.075em]">Comece sua <span className="text-[#477d29]">jornada.</span></h1>
          </div>
          <div className="max-w-[360px] text-[13px] leading-7 text-[#647064] md:pb-1"><p>Preencha seus dados e garanta acesso à trilha completa de Planejamento e Controle da Manutenção.</p></div>
        </div>

        <nav aria-label="Etapas da inscrição" className="relative mb-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#647064] sm:gap-3">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-2 sm:gap-3">
              <button type="button" onClick={() => index < currentStep && goToStep(index)} aria-current={currentStep === index ? "step" : undefined} aria-label={`Etapa ${index + 1}: ${step}`} className={`flex h-7 w-7 items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e] focus-visible:ring-offset-2 ${currentStep >= index ? "bg-[#78b83e] text-[#172312]" : "border border-[#bfcbb9]"} ${index < currentStep ? "cursor-pointer hover:scale-105" : "cursor-default"}`}>{currentStep > index ? <Check size={13} strokeWidth={2.5} /> : index + 1}</button>
              <span className={currentStep === index ? "text-[#20251f]" : "hidden sm:inline"}>{step}</span>
              {index < steps.length - 1 && <span className="h-px w-8 bg-[#ccd5c6] sm:w-16" />}
            </div>
          ))}
        </nav>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_550px] lg:gap-12">
          <div className="min-w-0">
            <div className="overflow-hidden" aria-live="polite">
              <div className={`flex w-[300%] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${currentStep === 0 ? "translate-x-0" : currentStep === 1 ? "-translate-x-1/3" : "-translate-x-2/3"}`}>
                <section aria-hidden={currentStep !== 0} className="w-1/3 shrink-0 border border-[#d8dfd2] bg-white/55 p-6 shadow-[0_16px_50px_rgba(42,61,35,0.04)] sm:p-8">
                  <div className="mb-8 flex items-start justify-between gap-4"><div><span className="mb-2 block text-[10px] font-bold tracking-[.14em] text-[#477d29]">01</span><h2 className="font-[family-name:var(--font-space-grotesk)] text-[25px] font-medium tracking-[-.05em]">Seus dados</h2><p className="mt-2 text-[12px] leading-5 text-[#647064]">Precisamos dessas informações para criar seu acesso.</p></div><div className="grid h-11 w-11 shrink-0 place-items-center border border-[#d8dfd2] bg-[#f4f5ef] text-[#477d29]"><ShieldCheck size={20} strokeWidth={1.7} /></div></div>
                  <div className="grid gap-5 mb-5 md:grid-cols-2">
                    <label className="grid gap-2"><span className="text-[10px] font-bold uppercase tracking-[.1em]">Nome completo</span><input value={form.name} onChange={(event) => updateForm("name", event.target.value)} name="name" type="text" autoComplete="name" placeholder="Seu nome" className="h-14 border border-[#ccd5c6] bg-[#f9faf6] px-4 text-[13px] outline-none transition-all placeholder:text-[#9aa196] hover:border-[#aebca7] focus:border-[#78b83e] focus:bg-white focus:ring-4 focus:ring-[#78b83e]/10" /></label>
                    <label className="grid gap-2"><span className="text-[10px] font-bold uppercase tracking-[.1em]">CPF</span><input value={form.cpf} onChange={(event) => updateForm("cpf", event.target.value)} name="cpf" type="text" inputMode="numeric" autoComplete="off" placeholder="000.000.000-00" className="h-14 border border-[#ccd5c6] bg-[#f9faf6] px-4 text-[13px] outline-none transition-all placeholder:text-[#9aa196] hover:border-[#aebca7] focus:border-[#78b83e] focus:bg-white focus:ring-4 focus:ring-[#78b83e]/10" /></label>
                    <label className="grid gap-2 md:col-span-2"><span className="text-[10px] font-bold uppercase tracking-[.1em]">E-mail</span><input value={form.email} onChange={(event) => updateForm("email", event.target.value)} name="email" type="email" autoComplete="email" placeholder="seu@email.com" className="h-14 border border-[#ccd5c6] bg-[#f9faf6] px-4 text-[13px] outline-none transition-all placeholder:text-[#9aa196] hover:border-[#aebca7] focus:border-[#78b83e] focus:bg-white focus:ring-4 focus:ring-[#78b83e]/10" /></label>
                  </div>
                  <StepButton label="Continuar para pagamento" onClick={nextStep} />
                </section>

                <section aria-hidden={currentStep !== 1} className="w-1/3 shrink-0 border border-[#d8dfd2] bg-white/55 p-6 shadow-[0_16px_50px_rgba(42,61,35,0.04)] sm:p-8">
                  <div className="mb-8"><span className="mb-2 block text-[10px] font-bold tracking-[.14em] text-[#477d29]">02</span><h2 className="font-[family-name:var(--font-space-grotesk)] text-[25px] font-medium tracking-[-.05em]">Pagamento</h2><p className="mt-2 text-[12px] leading-5 text-[#647064]">Escolha como deseja realizar o pagamento.</p></div>
                  <div className="grid gap-3 md:grid-cols-2">{[{ id: "pix", title: "PIX", description: "Aprovação rápida", icon: QrCode }, { id: "card", title: "Cartão de crédito", description: "Pagamento seguro", icon: CreditCard }].map(({ id, title, description, icon: Icon }) => { const active = payment === id; return <button key={id} type="button" aria-pressed={active} onClick={() => setPayment(id)} className={`group relative flex min-h-[112px] flex-col justify-between border p-5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e] focus-visible:ring-offset-2 ${active ? "border-[#78b83e] bg-[#78b83e]/10 shadow-[0_8px_20px_rgba(120,184,62,0.08)]" : "border-[#ccd5c6] bg-[#f9faf6] hover:border-[#78b83e] hover:bg-white"}`}><div className="flex items-start justify-between gap-3"><span className={`grid h-8 w-8 place-items-center transition-colors ${active ? "bg-[#78b83e] text-[#172312]" : "bg-[#e9eee5] text-[#477d29] group-hover:bg-[#dceccf]"}`}><Icon size={16} strokeWidth={1.8} /></span><span className={`grid h-5 w-5 place-items-center rounded-full border transition-colors ${active ? "border-[#78b83e] bg-[#78b83e] text-[#172312]" : "border-[#bfcbb9]"}`}>{active && <Check size={12} strokeWidth={2.5} />}</span></div><div><strong className="block text-[13px]">{title}</strong><span className="mt-1 block text-[10px] text-[#647064]">{description}</span></div></button> })}</div>
                  <div className="mt-6 flex items-start gap-3 border-t border-[#d8dfd2] pt-5 text-[10px] leading-5 text-[#647064]"><Lock size={14} className="mt-0.5 shrink-0 text-[#477d29]" strokeWidth={1.8} /><span>Seus dados são protegidos durante todo o processo de pagamento.</span></div>
                  <div className="mt-8 flex gap-3"><StepButton label="Voltar" onClick={previousStep} secondary /><StepButton label="Revisar pedido" onClick={nextStep} /></div>
                </section>

                <section aria-hidden={currentStep !== 2} className="w-1/3 shrink-0 border border-[#d8dfd2] bg-white/55 p-6 shadow-[0_16px_50px_rgba(42,61,35,0.04)] sm:p-8"><span className="mb-2 block text-[10px] font-bold tracking-[.14em] text-[#477d29]">03</span><h2 className="font-[family-name:var(--font-space-grotesk)] text-[25px] font-medium tracking-[-.05em]">Confirme sua inscrição</h2><p className="mt-2 text-[12px] leading-5 text-[#647064]">Confira os dados antes de finalizar a compra.</p><div className="mt-8 grid gap-4 border-y border-[#d8dfd2] py-6 text-[12px]"><div><span className="block text-[10px] uppercase tracking-[.1em] text-[#647064]">Nome</span><strong className="mt-1 block">{form.name || "Não informado"}</strong></div><div><span className="block text-[10px] uppercase tracking-[.1em] text-[#647064]">E-mail</span><strong className="mt-1 block break-all">{form.email || "Não informado"}</strong></div><div><span className="block text-[10px] uppercase tracking-[.1em] text-[#647064]">Forma de pagamento</span><strong className="mt-1 block">{payment === "pix" ? "PIX" : "Cartão de crédito"}</strong></div></div><div className="mt-8 flex gap-3"><StepButton label="Voltar" onClick={previousStep} secondary /><button type="button" className="group flex h-14 flex-1 items-center justify-center gap-2 bg-[#78b83e] text-[12px] font-bold text-[#172312] transition-all hover:-translate-y-0.5 hover:bg-[#8cca4f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8cca4f] focus-visible:ring-offset-2">Finalizar compra <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button></div></section>
              </div>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#647064]"><span className="h-1.5 w-1.5 rounded-full bg-[#78b83e]" />Etapa {currentStep + 1} de {steps.length}<span className="hidden sm:inline">· Deslize usando os botões abaixo</span></p>
          </div>

          <aside className="h-fit lg:sticky lg:top-8">
            <div className="relative overflow-hidden bg-[#263125] p-8 md:px-8 md:py-11.5 text-[#f4f5ef] shadow-[0_20px_60px_rgba(32,37,31,0.16)] ">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#8cca4f]/20" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#78b83e]/10 blur-3xl" />

              <div className="relative grid gap-7 sm:grid-cols-2 sm:gap-8">
                <div className="min-w-0">
                  <div className="flex items-center justify-between ">
                    <span className=" border border-[#52604f] px-2 py-1 text-[9px] font-bold tracking-[.14em]">NEXO PCM</span>
                    <Sparkles size={18} className="text-[#8cca4f] " strokeWidth={1.7} />
                  </div>

                  <div className="mt-7 sm:mt-8">
                    <p className="text-[10px] uppercase tracking-[.14em] text-[#9cab97]">Você está adquirindo</p>
                    <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-[27px] font-medium leading-none tracking-[-.06em] sm:text-[30px]">Trilha completa</h2>
                    <p className="mt-3 max-w-[220px] text-[12px] leading-6 text-[#b7c3b0]">Formação completa em Planejamento e Controle da Manutenção.</p>
                  </div>

                  <div className="mt-7 border-t border-[#52604f] pt-5 sm:mt-8">
                    <span className="text-[10px] text-[#9cab97]">Pagamento único</span>
                    <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
                      <strong className="font-[family-name:var(--font-space-grotesk)] text-[45px] font-medium leading-none tracking-[-.09em]">R$ 199</strong>
                      <span className="mb-1 text-[9px] text-[#9cab97]">acesso completo</span>
                    </div>
                  </div>
                </div>

                <div className="min-w-0 border-t border-[#52604f] pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[.14em] text-[#9cab97]">O que está incluído</p>
                  <div className="grid gap-3">
                    {benefits.map((item) => (
                      <span key={item} className="flex items-start gap-2.5 text-[11px] leading-4 text-[#d9e2d6]">
                        <span className="mt-[-1px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#78b83e] text-[#172312]">
                          <Check size={11} strokeWidth={2.5} />
                        </span>
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 border-t border-[#52604f] pt-15">
                    <div className="flex items-start gap-2.5 text-[10px] leading-5 text-[#b7c3b0]">
                      <Lock size={14} className="mt-0.5 shrink-0 text-[#8cca4f]" strokeWidth={1.8} />
                      <span>Pagamento protegido e acesso liberado após a confirmação.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 border border-t-0 border-[#d8dfd2] bg-[#e8ebe1] p-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center border border-[#ccd5c6] text-[#477d29]">
                <ShieldCheck size={19} strokeWidth={1.7} />
              </div>
              <div>
                <strong className="block text-[11px]">Compra protegida</strong>
                <span className="mt-1 block text-[9px] text-[#647064]">Seus dados são tratados com segurança.</span>
              </div>
            </div>
          </aside>

        </div>

      </section>
    </main>
  )
}

function StepButton({ label, onClick, secondary = false }: { label: string; onClick: () => void; secondary?: boolean }) {
  return <button type="button" onClick={onClick} className={`group w-full flex h-14 flex-1 items-center justify-center gap-2 border text-[11px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78b83e] focus-visible:ring-offset-2 ${secondary ? "border-[#ccd5c6] bg-[#f9faf6] text-[#477d29] hover:border-[#78b83e] hover:bg-white" : "border-[#78b83e] bg-[#78b83e] text-[#172312] hover:-translate-y-0.5 hover:bg-[#8cca4f] hover:shadow-[0_12px_28px_rgba(120,184,62,0.2)]"}`}>{secondary ? <ArrowLeft size={15} /> : null}{label}{!secondary && <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />}</button>
}
