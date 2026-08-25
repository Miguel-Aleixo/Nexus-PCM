"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

export default function CheckoutPage() {
  const [payment, setPayment] = useState("pix")

  return (
    <main className="min-h-screen bg-[#f2f1ea] text-[#20251f]">

      {/* HEADER */}
      <header className="flex h-[72px] items-center justify-between border-b border-[#ccd2c2] px-[clamp(22px,5vw,76px)]">
        <a
          href="/"
          className="flex items-center gap-[11px] font-[family-name:var(--font-space-grotesk)] text-[19px] font-semibold tracking-[-.05em]"
        >
          <span className="flex h-[22px] w-[24px] items-end gap-[3px]">
            <i className="block h-[12px] w-[5px] skew-x-[-18deg] rounded-[1px] bg-[#20251f]" />
            <i className="block h-[19px] w-[5px] skew-x-[-18deg] rounded-[1px] bg-[#78b83e]" />
            <i className="block h-[15px] w-[5px] skew-x-[-18deg] rounded-[1px] bg-[#20251f]" />
          </span>

          <span>
            Nexo{" "}
            <b className="ml-[4px] text-[11px] tracking-[.13em] text-[#477d29]">
              PCM
            </b>
          </span>
        </a>

        <div className="flex items-center gap-2 text-[11px] text-[#647064]">
          <Lock size={14} />
          Checkout seguro
        </div>
      </header>


      {/* CONTENT */}
      <section className="mx-auto max-w-[1250px] px-[22px] py-[42px]">

        {/* TOP */}
        <div className="mb-[35px] flex flex-col justify-between gap-6 border-b border-[#ccd2c2] pb-[32px] md:flex-row md:items-end">

          <div>
            <a
              href="/"
              className="mb-[20px] inline-flex items-center gap-2 text-[11px] text-[#647064] transition-colors duration-200 hover:text-[#20251f]"
            >
              <ArrowLeft size={14} />
              Voltar para o site
            </a>

            <div>
              <p className="mb-[10px] text-[10px] font-bold uppercase tracking-[.16em] text-[#477d29]">
                Inscrição · Nexo PCM
              </p>

              <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(40px,5vw,64px)] font-semibold leading-[.92] tracking-[-.065em]">
                Comece sua{" "}
                <span className="text-[#477d29]">
                  jornada.
                </span>
              </h1>
            </div>
          </div>

          <div className="max-w-[330px] text-[12px] leading-[1.6] text-[#647064]">
            <p>
              Preencha seus dados e garanta acesso à trilha completa
              de Planejamento e Controle da Manutenção.
            </p>
          </div>
        </div>


        {/* GRID PRINCIPAL */}
        <div className="grid gap-[35px] lg:grid-cols-[1fr_390px]">

          {/* FORMULÁRIO */}
          <div>

            {/* DADOS */}
            <section className="border border-[#ccd2c2] bg-[#f5f4ed] p-[25px] md:p-[30px]">

              <div className="mb-[25px] flex items-start justify-between">
                <div>
                  <span className="mb-[7px] block text-[10px] font-bold tracking-[.12em] text-[#477d29]">
                    01
                  </span>

                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-[23px] font-medium tracking-[-.04em]">
                    Seus dados
                  </h2>

                  <p className="mt-1 text-[11px] text-[#647064]">
                    Precisamos dessas informações para criar seu acesso.
                  </p>
                </div>

                <div className="border border-[#ccd2c2] p-[9px] text-[#477d29]">
                  <ShieldCheck size={18} />
                </div>
              </div>


              <div className="grid gap-[18px] md:grid-cols-2">

                <label className="grid gap-[7px]">
                  <span className="text-[10px] font-bold uppercase tracking-[.1em]">
                    Nome completo
                  </span>

                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="h-[48px] border border-[#ccd2c2] bg-[#f2f1ea] px-[14px] text-[13px] outline-none transition-colors duration-200 placeholder:text-[#9aa196] focus:border-[#78b83e]"
                  />
                </label>


                <label className="grid gap-[7px]">
                  <span className="text-[10px] font-bold uppercase tracking-[.1em]">
                    CPF
                  </span>

                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    className="h-[48px] border border-[#ccd2c2] bg-[#f2f1ea] px-[14px] text-[13px] outline-none transition-colors duration-200 placeholder:text-[#9aa196] focus:border-[#78b83e]"
                  />
                </label>


                <label className="grid gap-[7px] md:col-span-2">
                  <span className="text-[10px] font-bold uppercase tracking-[.1em]">
                    E-mail
                  </span>

                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="h-[48px] border border-[#ccd2c2] bg-[#f2f1ea] px-[14px] text-[13px] outline-none transition-colors duration-200 placeholder:text-[#9aa196] focus:border-[#78b83e]"
                  />
                </label>

              </div>
            </section>


            {/* PAGAMENTO */}
            <section className="mt-[20px] border border-[#ccd2c2] bg-[#f5f4ed] p-[25px] md:p-[30px]">

              <div className="mb-[25px]">
                <span className="mb-[7px] block text-[10px] font-bold tracking-[.12em] text-[#477d29]">
                  02
                </span>

                <h2 className="font-[family-name:var(--font-space-grotesk)] text-[23px] font-medium tracking-[-.04em]">
                  Pagamento
                </h2>

                <p className="mt-1 text-[11px] text-[#647064]">
                  Escolha como deseja realizar o pagamento.
                </p>
              </div>


              <div className="grid gap-[12px] md:grid-cols-2">

                {/* PIX */}
                <button
                  type="button"
                  onClick={() => setPayment("pix")}
                  className={`relative flex min-h-[100px] flex-col justify-between border p-[17px] text-left transition-all duration-200 ${
                    payment === "pix"
                      ? "border-[#78b83e] bg-[#78b83e]/10"
                      : "border-[#ccd2c2] hover:border-[#78b83e]"
                  }`}
                >

                  <div className="flex items-center justify-between">
                    <strong className="text-[13px]">
                      PIX
                    </strong>

                    {payment === "pix" && (
                      <span className="grid h-[21px] w-[21px] place-items-center rounded-full bg-[#78b83e] text-[#172312]">
                        <Check size={13} />
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] text-[#647064]">
                    Aprovação rápida
                  </span>

                </button>


                {/* CARTÃO */}
                <button
                  type="button"
                  onClick={() => setPayment("card")}
                  className={`relative flex min-h-[100px] flex-col justify-between border p-[17px] text-left transition-all duration-200 ${
                    payment === "card"
                      ? "border-[#78b83e] bg-[#78b83e]/10"
                      : "border-[#ccd2c2] hover:border-[#78b83e]"
                  }`}
                >

                  <div className="flex items-center justify-between">
                    <strong className="text-[13px]">
                      Cartão de crédito
                    </strong>

                    {payment === "card" && (
                      <span className="grid h-[21px] w-[21px] place-items-center rounded-full bg-[#78b83e] text-[#172312]">
                        <Check size={13} />
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] text-[#647064]">
                    Pagamento seguro
                  </span>

                </button>

              </div>


              {/* INFO PAGAMENTO */}
              <div className="mt-[20px] flex items-center gap-3 border-t border-[#ccd2c2] pt-[18px] text-[10px] text-[#647064]">
                <Lock size={14} className="shrink-0 text-[#477d29]" />

                <span>
                  Seus dados são protegidos durante todo o processo
                  de pagamento.
                </span>
              </div>

            </section>

          </div>


          {/* RESUMO */}
          <aside className="h-fit lg:sticky lg:top-[95px]">

            <div className="bg-[#20251f] p-[25px] text-[#f2f1ea]">

              <div className="flex items-center justify-between">

                <span className="border border-[#4a5548] px-[8px] py-[5px] text-[9px] font-bold tracking-[.12em]">
                  NEXO PCM
                </span>

                <Sparkles
                  size={18}
                  className="text-[#78b83e]"
                />

              </div>


              <div className="mt-[27px]">

                <p className="text-[10px] uppercase tracking-[.12em] text-[#8c9989]">
                  Você está adquirindo
                </p>

                <h2 className="mt-[7px] font-[family-name:var(--font-space-grotesk)] text-[27px] font-medium tracking-[-.05em]">
                  Trilha completa
                </h2>

                <p className="mt-[8px] text-[11px] leading-[1.6] text-[#aeb8aa]">
                  Formação completa em Planejamento e Controle
                  da Manutenção.
                </p>

              </div>


              {/* PREÇO */}
              <div className="my-[25px] border-y border-[#4a5548] py-[16px]">

                <span className="text-[10px] text-[#8c9989]">
                  Pagamento único
                </span>

                <div className="mt-[3px] flex items-end justify-between">

                  <strong className="font-[family-name:var(--font-space-grotesk)] text-[47px] font-medium leading-none tracking-[-.08em]">
                    R$ 199
                  </strong>

                  <span className="mb-[3px] text-[9px] text-[#8c9989]">
                    acesso completo
                  </span>

                </div>

              </div>


              {/* BENEFÍCIOS */}
              <div className="grid gap-[12px]">

                {[
                  "40+ aulas práticas",
                  "8 horas de conteúdo",
                  "Certificado de conclusão",
                  "Acesso online",
                  "Estude no seu ritmo",
                ].map((item) => (

                  <span
                    key={item}
                    className="flex items-center gap-2 text-[11px] text-[#d2d8cf]"
                  >
                    <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#78b83e] text-[#172312]">
                      <Check size={11} />
                    </span>

                    {item}
                  </span>

                ))}

              </div>


              {/* BOTÃO */}
              <button
                type="button"
                className="mt-[27px] flex w-full items-center justify-center gap-[9px] bg-[#78b83e] px-[19px] py-[15px] text-[12px] font-bold text-[#172312] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8cca4f] active:scale-[.97]"
              >
                Finalizar compra
                <ArrowUpRight size={16} />
              </button>


              <p className="mt-[13px] text-center text-[9px] leading-[1.5] text-[#8c9989]">
                Ao finalizar, você receberá as instruções
                para acessar sua conta.
              </p>

            </div>


            {/* GARANTIA */}
            <div className="flex items-center gap-[13px] border border-[#ccd2c2] border-t-0 bg-[#e6e7dc] p-[13px]">

              <div className="grid h-[34px] w-[34px] shrink-0 place-items-center border border-[#ccd2c2] text-[#477d29]">
                <ShieldCheck size={18} />
              </div>

              <div>
                <strong className="block text-[11px]">
                  Compra protegida
                </strong>

                <span className="text-[9px] text-[#647064]">
                  Seus dados são tratados com segurança.
                </span>
              </div>

            </div>

          </aside>

        </div>


        {/* RODAPÉ */}
        <div className="mt-[30px] flex flex-col justify-between items-center gap-3 border-t border-[#ccd2c2] pt-[18px] text-[9px] text-[#647064] sm:flex-row">

          <span>
            Nexo PCM · Formação em Planejamento e Controle da Manutenção
          </span>

          <span>
            © 2026 Nexo PCM
          </span>

        </div>

      </section>
    </main>
  )
}