"use client"

import { useState } from "react"
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import {
    ArrowLeft,
    ArrowUpRight,
    Lock,
} from "lucide-react"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <main className="flex min-h-screen bg-[#f2f1ea] text-[#20251f]">
            {/* LOGIN */}
            <section className="flex w-full items-center justify-center px-[22px] py-[50px] lg:px-[55px]">
                <div className="w-full md:px-10">
                    <a
                        href="/"
                        className="relative bottom-20 flex items-center gap-2 text-[12px] text-[#647064] transition-colors duration-200 hover:text-[#20251f]"
                    >
                        <ArrowLeft size={15} />
                        Voltar para o site
                    </a>

                    <div className="mb-[35px]">
                        <p className="mb-[15px] text-[11px] font-bold uppercase tracking-[.16em] text-[#477d29]">
                            Acesso
                        </p>

                        <h2 className="font-[family-name:var(--font-space-grotesk)] text-[42px] font-semibold leading-[.95] tracking-[-.065em]">
                            Entrar
                        </h2>

                        <p className="mt-[17px] text-[13px] leading-[1.6] text-[#647064]">
                            Acesse sua área de aluno.
                        </p>
                    </div>

                    <form className="grid gap-[22px]">
                        <label className="grid gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-[.1em]">
                                E-mail
                            </span>

                            <input
                                type="email"
                                placeholder="seu@email.com"
                                className="h-[52px] border border-[#ccd2c2] bg-transparent px-[15px] text-[14px] outline-none transition-colors duration-200 placeholder:text-[#8b9388] focus:border-[#78b83e]"
                            />
                        </label>

                        <label className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold uppercase tracking-[.1em]">
                                    Senha
                                </span>

                                <a
                                    href="/recuperar-senha"
                                    className="text-[11px] text-[#477d29] transition-colors hover:text-[#20251f]"
                                >
                                    Esqueci minha senha
                                </a>
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Sua senha"
                                    className="h-[52px] w-full border border-[#ccd2c2] bg-transparent px-[15px] pr-[70px] text-[14px] outline-none transition-colors duration-200 placeholder:text-[#8b9388] focus:border-[#78b83e]"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#477d29]"
                                >
                                    {showPassword ? <LuEye /> : <LuEyeOff />}
                                </button>
                            </div>
                        </label>    

                        <button
                            type="submit"
                            className="mt-[8px] flex h-[52px] w-full items-center justify-center gap-[10px] bg-[#78b83e] text-[13px] font-bold text-[#172312] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8cca4f] active:scale-[.97]"
                        >
                            Entrar
                            <ArrowUpRight size={17} />
                        </button>
                    </form>

                    <div className="my-[30px] flex items-center gap-[12px]">
                        <span className="h-px flex-1 bg-[#ccd2c2]" />
                        <span className="text-[10px] text-[#647064]">
                            ou
                        </span>
                        <span className="h-px flex-1 bg-[#ccd2c2]" />
                    </div>

                    <p className="text-center text-[12px] text-[#647064]">
                        Ainda não possui acesso?
                    </p>

                    <a
                        href="/checkout"
                        className="mt-[12px] flex h-[48px] w-full items-center justify-center gap-2 border border-[#ccd2c2] text-[12px] font-bold transition-colors duration-200 hover:border-[#78b83e]"
                    >
                        Conhecer o Nexo PCM
                        <ArrowUpRight size={15} />
                    </a>

                    <div className="mt-[30px] flex items-center justify-center gap-2 text-[10px] text-[#647064]">
                        <Lock size={13} />
                        Ambiente seguro
                    </div>
                </div>
            </section>

            {/* LADO DIREITO */}
            <section className="hidden md:flex w-full flex-col justify-between items-left border-l border-[#ccd2c2] p-[clamp(30px,5vw,80px)]">
                <a
                    href="/"
                    className="flex w-fit items-centergap-[11px] font-[family-name:var(--font-space-grotesk)] text-[19px] font-semibold tracking-[-.05em]"
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

                <div className="flex flex-col gap-10">
                    <p className=" text-[11px] font-bold uppercase tracking-[.16em] text-[#477d29]">
                        Área do aluno
                    </p>

                    <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(50px,6vw,78px)] font-semibold leading-[.94] tracking-[-.065em]">
                        Continue sua
                        <br />
                        <span className="text-[#477d29]">
                            jornada.
                        </span>
                    </h1>

                    <p className="mt-[25px] text-[15px] leading-[1.75] text-[#647064]">
                        Entre na sua conta para continuar suas aulas e acompanhar seu
                        progresso no Nexo PCM.
                    </p>
                </div>

                <p className="text-[10px] text-[#647064]">
                    © 2026 Nexo PCM · Feito para a manutenção.
                </p>
            </section>


        </main>
    )
}