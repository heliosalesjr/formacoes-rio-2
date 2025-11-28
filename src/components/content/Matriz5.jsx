"use client";

import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC = [
  {
    label: "Revisão do 4º ano",
    code: "EF04MA01-06, EF04MA11-15",
    caps: [1],
  },
  {
    label: "Números racionais expressos na forma decimal e sua representação na reta numérica",
    code: "EF05MA02",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Representação fracionária dos números racionais: reconhecimento, significados e leitura",
    code: "EF05MA03",
    caps: [4],
  },
  {
    label: "Comparação e ordenação de números racionais na representação decimal e na fracionária utilizando a noção de equivalência",
    code: "EF05MA04 e EF05MA05",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Cálculo de porcentagens e representação fracionária",
    code: "EF05MA06",
    caps: [4],
  },
  {
    label: "Problemas: adição e subtração de números naturais e números racionais cuja representação decimal é finita",
    code: "EF05MA07",
    caps: [1, 2],
  },
  {
    label: "Problemas: multiplicação e divisão de números racionais cuja representação decimal é finita por números naturais",
    code: "EF05MA08",
    caps: [3, 4],
  },
  {
    label: "Propriedades da igualdade e noção de equivalência",
    code: "EF05MA10 e EF05MA11",
    caps: [3, 4],
  },
  {
    label: "Grandezas diretamente proporcionais",
    code: "EF05MA12 e EF05MA13",
    caps: [3, 4],
  },
  {
    label: "Leitura, coleta, classificação interpretação e representação de dados em tabelas de dupla entrada, gráfico de colunas agrupadas, gráficos pictóricos e gráfico de linhas",
    code: "EF05MA24 e EF05MA25",
    caps: [1],
  },
];

const habilidadesTN = [
  {
    label: "Reconhecer troco e desconto em situações de uso do dinheiro, identificando o significado de cada um deles",
    code: "EF35LF05",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Calcular troco e desconto em situações de uso do dinheiro",
    code: "EF35LF06",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Identificar, com base na forma e conteúdo, a função de gêneros textuais relacionados à vida financeira como recibos, extratos, cupons fiscais, faturas, boletos, notas promissórias, entre outros",
    code: "EF35LF07",
    caps: [1],
  },
  {
    label: "Diferenciar lucro de prejuízo com base na análise de situações de uso do dinheiro",
    code: "EF45LF02",
    caps: [3, 4],
  },
  {
    label: "Localizar diferentes informações em textos da vida financeira, interpretando suas funções (partes que formam os documentos)",
    code: "EF35LF08",
    caps: [4],
  },
];

const titulosCapitulos = [
  "Capítulo 1: A festa dos meus sonhos",
  "Capítulo 2: Planejando o cardápio da festa!",
  "Capítulo 3: Os custos da festa",
  "Capítulo 4: Recebendo os meus presentes de aniversário",
];

const objetivosBNCC_parte2 = [
  {
    label: "Números racionais expressos na forma decimal e sua representação na reta numérica",
    code: "EF05MA02",
    caps: [5, 6, 7],
  },
  {
    label: "Comparação e ordenação de números racionais na representação decimal e na fracionária utilizando a noção de equivalência",
    code: "EF05MA04 e EF05MA05",
    caps: [5, 6, 7],
  },
  {
    label: "Problemas: multiplicação e divisão de números racionais cuja representação decimal é finita por números naturais",
    code: "EF05MA08",
    caps: [5, 6, 7],
  },
  {
    label: "Propriedades da igualdade e noção de equivalência",
    code: "EF05MA10 e EF05MA11",
    caps: [5, 6, 7],
  },
  {
    label: "Grandezas diretamente proporcionais",
    code: "EF05MA12 e EF05MA13",
    caps: [5, 6, 7],
  },
  {
    label: "Leitura, coleta, classificação interpretação e representação de dados em tabelas de dupla entrada, gráfico de colunas agrupadas, gráficos pictóricos e gráfico de linhas",
    code: "EF05MA24 e EF05MA25",
    caps: [5],
  },
  {
    label: "Revisão do livro",
    code: "",
    caps: [7],
  },
];

const habilidadesTN_parte2 = [
  {
    label: "Reconhecer troco e desconto em situações de uso do dinheiro, identificando o significado de cada um deles",
    code: "EF35LF05",
    caps: [5, 6, 7],
  },
  {
    label: "Calcular troco e desconto em situações de uso do dinheiro",
    code: "EF35LF06",
    caps: [5, 6, 7],
  },
  {
    label: "Diferenciar lucro de prejuízo com base na análise de situações de uso do dinheiro",
    code: "EF45LF02",
    caps: [5, 6, 7],
  },
  {
    label: "Identificar, com base na forma e conteúdo, a função de gêneros textuais relacionados à vida financeira como recibos, extratos, cupons fiscais, faturas, boletos, notas promissórias, entre outros",
    code: "EF35LF07",
    caps: [5],
  },
  {
    label: "Localizar diferentes informações em textos da vida financeira, interpretando suas funções (partes que formam os documentos)",
    code: "EF35LF08",
    caps: [7],
  },
];

const titulosCapitulos_parte2 = [
  "Capítulo 5: Como é ser dona de uma loja de brinquedos",
  "Capítulo 6: Aprendendo a fazer uma propaganda",
  "Capítulo 7: Tudo que aprendemos juntos",
];


export default function Matriz5() {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && markAsViewed("matriz-5"),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <section
      ref={ref}
      id="matriz-5"
      className="scroll-mt-20 bg-white border border-slate-200 rounded-2xl shadow-xl p-8 space-y-10"
    >
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-700">Matriz de Habilidades</h1>
        <p className="text-slate-600 text-xl font-bold pt-4">5º ano — Parte 1</p>
      </div>

      <TooltipProvider>
        {/* 📊 TABELA BNCC */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-700 text-center">BNCC</h2>
          <div className="overflow-auto rounded-xl border bg-slate-50">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-blue-100 text-blue-700 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[1, 2, 3, 4].map((n) => (
                    <th key={n} className="p-3 text-center">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">Cap. {n}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{titulosCapitulos[n-1]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {objetivosBNCC.map((obj, i) => (
                  <tr key={i} className="hover:bg-blue-50/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800">{obj.label}</span>
                      {obj.code && (
                        <span className="text-blue-600 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[1, 2, 3, 4].map((cap) => (
                      <td key={cap} className="p-3 text-center">
                        {obj.caps.includes(cap) && (
                          <FaCheckCircle className="text-emerald-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 📊 TABELA TESOURO NACIONAL */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-emerald-700 text-center">Habilidades Tesouro Nacional</h2>
          <div className="overflow-auto rounded-xl border bg-slate-50">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-emerald-100 text-emerald-700 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[1, 2, 3, 4].map((n) => (
                    <th key={n} className="p-3 text-center">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">Cap. {n}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{titulosCapitulos[n-1]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {habilidadesTN.map((obj, i) => (
                  <tr key={i} className="hover:bg-emerald-50/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800">{obj.label}</span>
                      {obj.code && (
                        <span className="text-emerald-600 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[1, 2, 3, 4].map((cap) => (
                      <td key={cap} className="p-3 text-center">
                        {obj.caps.includes(cap) && (
                          <FaCheckCircle className="text-emerald-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TooltipProvider>

      {/* DIVISOR PARTES 2 E 3 */}
      <div className="text-center space-y-2 pt-8 border-t-2 border-slate-300">
        <p className="text-slate-600 text-xl font-bold pt-4">5º ano — Partes 2 e 3</p>
      </div>

      <TooltipProvider>
        {/* 📊 TABELA BNCC - PARTE 2 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-700 text-center">BNCC</h2>
          <div className="overflow-auto rounded-xl border bg-slate-50">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-blue-100 text-blue-700 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[5, 6, 7].map((n) => (
                    <th key={n} className={`p-3 text-center ${n === 7 ? 'bg-orange-100 text-orange-700' : ''}`}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">Cap. {n}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{titulosCapitulos_parte2[n-5]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {objetivosBNCC_parte2.map((obj, i) => (
                  <tr key={i} className="hover:bg-blue-50/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800">{obj.label}</span>
                      {obj.code && (
                        <span className="text-blue-600 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[5, 6, 7].map((cap) => (
                      <td key={cap} className={`p-3 text-center ${cap === 7 ? 'bg-orange-50' : ''}`}>
                        {obj.caps.includes(cap) && (
                          <FaCheckCircle className="text-emerald-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 📊 TABELA TESOURO NACIONAL - PARTE 2 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-emerald-700 text-center">Habilidades Tesouro Nacional</h2>
          <div className="overflow-auto rounded-xl border bg-slate-50">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-emerald-100 text-emerald-700 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[5, 6, 7].map((n) => (
                    <th key={n} className={`p-3 text-center ${n === 7 ? 'bg-orange-100 text-orange-700' : ''}`}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">Cap. {n}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{titulosCapitulos_parte2[n-5]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {habilidadesTN_parte2.map((obj, i) => (
                  <tr key={i} className="hover:bg-emerald-50/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800">{obj.label}</span>
                      {obj.code && (
                        <span className="text-emerald-600 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[5, 6, 7].map((cap) => (
                      <td key={cap} className={`p-3 text-center ${cap === 7 ? 'bg-orange-50' : ''}`}>
                        {obj.caps.includes(cap) && (
                          <FaCheckCircle className="text-emerald-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TooltipProvider>

    </section>
  );
}