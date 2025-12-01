"use client";

import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import Image from 'next/image'
import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC = [
  {
    label: "Revisão do 3º ano",
    code: "",
    caps: [1],
  },
  {
    label: "Sistema de numeração decimal",
    code: "EF04MA01",
    caps: [1, 2, 3],
  },

  {
    label:
      "Propriedades das operações para o desenvolvimento de diferentes estratégias de cálculo com números naturais",
    code: "EF04MA03-05",
    caps: [1, 2, 3],
  },

  {
    label:
      "Problemas envolvendo diferentes significados da multiplicação e da divisão: adição de parcelas iguais, configuração retangular, proporcionalidade, repartição equitativa e medida",
    code: "EF04MA06-08",
    caps: [1, 2, 3, 4],
  },

  {
    label: "Propriedades da igualdade",
    code: "EF04MA14-15",
    caps: [1, 2, 3],
  },

  {
    label: "Problemas utilizando o sistema monetário brasileiro",
    code: "EF04MA25",
    caps: [1, 2, 3, 4],
  },

  {
    label: "Inferir informações implícitas nos textos lidos",
    code: "EF35LP04",
    caps: [1],
  },

  {
    label:
      "Opinar e defender ponto de vista sobre tema polêmico relacionado a situações vivenciadas na escola e/ou na comunidade, utilizando registro formal e estrutura adequada à argumentação, considerando a situação comunicativa e o tema/assunto do texto. ",
    code: "EF04MA09",
    caps: [1],
  },

  {
    label: "Números racionais: frações unitárias mais usuais (1/2, 1/3 e 1/4)",
    code: "EF35LP04",
    caps: [2],
  },

  {
    label:
      "Sequência numérica recursiva formada por múltiplos de um número natural",
    code: "EF04MA11",
    caps: [2, 3, 4],
  },

  
  {
    label:
      "Relações entre adição e subtração e entre multiplicação e divisão",
    code: "EF04MA12-13",
    caps: [2, 4],
  },
  
  
  {
    label:
      "Ler e compreender, com autonomia, boletos, faturas e carnês, dentre outros gêneros do campo da vida cotidiana.",
    code: "EF04LP09",
    caps: [2],
  },
];

const habilidadesTN = [
  {
    label: "Reconhecer que o dinheiro é limitado e pode ser adquirido de diferentes fontes",
    code: "EF35LF26",
    caps: [1, 2, 3],
  },
  {
    label: "Definir trabalho, relacionando-o ao conceito de profissões e remuneração",
    code: "EF35LF27",
    caps: [1, 2, 3],
  },
  {
    label: "Relacionar diferentes profissões às suas características, identificando exemplos na comunidade",
    code: "EF35LF28",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Identificar a presença de atividades empreendedoras na comunidade em que vive",
    code: "EF45LF19",
    caps: [1, 2, 3],
  },
  {
    label: "Reconhecer troco e desconto em situações de uso do dinheiro, identificando o significado de cada um deles",
    code: "EF35LF05",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Calcular troco e desconto em situações de uso do dinheiro",
    code: "EF35LF06",
    caps: [2, 4],
  },
  {
    label: "Localizar diferentes informações em textos da vida financeira, interpretando suas funções",
    code: "EF35LF08",
    caps: [2],
  },
];

const titulosCapitulos = [
  "Capítulo 1: De onde vem o dinheiro?",
  "Capítulo 2: Bateu uma fome! Onde vamos comer?",
  "Capítulo 3: Aprendendo a economizar dinheiro",
  "Capítulo 4: Sonhando com um presente de aniversário",
];

const objetivosBNCC_parte2 = [
  {
    label: "Propriedades da igualdade",
    code: "EF04MA14-15",
    caps: [5],
  },
  {
    label: "Problemas utilizando o sistema monetário brasileiro",
    code: "EF04MA25",
    caps: [5],
  },
  {
    label: "Números racionais: representação decimal para escrever valores do sistema monetário brasileiro",
    code: "EF04MA10",
    caps: [5],
  },
  {
    label: "Identificar gêneros do discurso oral, utilizados em diferentes situações e contextos comunicativos, e suas características linguístico-expressivas e composicionais",
    code: "EF35LP10",
    caps: [5],
  },
  {
    label: "Identificar, em narrativas, cenário, personagem central, conflito gerador, resolução e o ponto de vista com base no qual histórias são narradas",
    code: "EF35LP29",
    caps: [5],
  },
  {
    label: "Leitura, interpretação e representação de dados em gráficos de colunas simples, gráficos de barras e colunas",
    code: "EF04MA27",
    caps: [6],
  },
  {
    label: "Coleta, classificação e representação de dados de pesquisa realizada",
    code: "EF04MA28",
    caps: [6],
  },
  {
    label: "Reconhecer especificidades e analisar a interdependência do campo e da cidade, considerando fluxos econômicos, de informações, de ideias e de pessoas",
    code: "EF04GE04",
    caps: [6],
  },
  {
    label: "Comparar as características do trabalho no campo e na cidade",
    code: "EF04GE07",
    caps: [6],
  },
  {
    label: "Descrever e discutir o processo de produção (transformação de matérias-primas), circulação e consumo de diferentes produtos",
    code: "EF04GE08",
    caps: [6],
  },
  {
    label: "Opinar e defender ponto de vista sobre tema polêmico relacionado a situações vivenciadas na escola e/ou na comunidade, utilizando registro formal e estrutura adequada à argumentação, considerando a situação comunicativa e o tema/assunto do texto",
    code: "EF35LP15",
    caps: [6],
  },
  {
    label: "Revisão do livro",
    code: "",
    caps: [7],
  },
];

const habilidadesTN_parte2 = [
  {
    label: "Identificar a presença de atividades empreendedoras na comunidade em que vive",
    code: "EF45LF19",
    caps: [5],
  },
  {
    label: "Reconhecer troco e desconto em situações de uso do dinheiro, identificando o significado de cada um deles",
    code: "EF35LF05",
    caps: [5, 6],
  },
  {
    label: "Reconhecer diferentes meios de pagamento (dinheiro, carnês de loja, cheque, cartões, pix, moedas digitais, etc) em situações-problema, atividades lúdicas, entre outros",
    code: "EF35LF01",
    caps: [5, 6],
  },
  {
    label: "Reconhecer troco e desconto em situações de uso do dinheiro, identificando o significado de cada um deles",
    code: "EF35LF07",
    caps: [6],
  },
  {
    label: "Localizar diferentes informações em textos da vida financeira, interpretando suas funções (partes que formam os documentos)",
    code: "EF35LF08",
    caps: [6],
  },
  {
    label: "Revisão do livro",
    code: "",
    caps: [7],
  },
];

const titulosCapitulos_parte2 = [
  "Capítulo 5: De olho nas promoções",
  "Capítulo 6: Minha responsabilidade como consumidor e cidadão",
  "Capítulo 7: Tudo que aprendemos",
];


export default function Matriz2() {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && markAsViewed("matriz-2"),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <section
      ref={ref}
      id="matriz-2"
      className="scroll-mt-20 bg-white border border-slate-200 rounded-2xl shadow-xl p-8 space-y-10"
    >
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-slate-600">Matriz de Habilidades</h1>
        <div className="flex justify-center">
                            <div className="relative w-96 h-80 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                                  <Image
                                    src="/livros4o.png"
                                    alt="Livros do 4º ano"
                                    fill
                                    className="object-contain"
                                  />
                            </div>
                </div>
        
        <p className="text-slate-600 text-xl font-bold pt-4">4º ano — Parte 1</p>
      </div>

      <TooltipProvider>
        {/* 📊 TABELA BNCC */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-red-700 text-center">BNCC</h2>
          <div className="overflow-auto rounded-xl border bg-slate-50">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-red-100 text-red-700 font-semibold">
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
                  <tr key={i} className="hover:bg-red-50/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800">{obj.label}</span>
                      {obj.code && (
                        <span className="text-red-600 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[1, 2, 3, 4].map((cap) => (
                      <td key={cap} className="p-3 text-center">
                        {obj.caps.includes(cap) && (
                          <FaCheckCircle className="text-green-500 mx-auto" />
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
          <h2 className="text-2xl font-bold text-orange-700 text-center">Habilidades Tesouro Nacional</h2>
          <div className="overflow-auto rounded-xl border bg-slate-50">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-orange-100 text-orange-700 font-semibold">
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
                  <tr key={i} className="hover:bg-orange-50/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800">{obj.label}</span>
                      {obj.code && (
                        <span className="text-orange-600 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[1, 2, 3, 4].map((cap) => (
                      <td key={cap} className="p-3 text-center">
                        {obj.caps.includes(cap) && (
                          <FaCheckCircle className="text-green-500 mx-auto" />
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

      {/* DIVISOR PARTE 2 */}
      <div className="text-center space-y-2 pt-8 border-slate-300">
        <div className="flex justify-center">
                            <div className="relative w-96 h-80 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                                  <Image
                                    src="/livros4o.png"
                                    alt="Livros do 4º ano"
                                    fill
                                    className="object-contain"
                                  />
                            </div>
                </div>
        <p className="text-slate-600 text-xl font-bold pt-4">4º ano — Parte 2</p>
      </div>

      <TooltipProvider>
        {/* 📊 TABELA BNCC - PARTE 2 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-red-700 text-center">BNCC</h2>
          <div className="overflow-auto rounded-xl border bg-slate-50">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-red-100 text-red-700 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[5, 6, 7].map((n) => (
                    <th key={n} className="p-3 text-center">
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
                  <tr key={i} className="hover:bg-red-50/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800">{obj.label}</span>
                      {obj.code && (
                        <span className="text-red-600 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[5, 6, 7].map((cap) => (
                      <td key={cap} className="p-3 text-center">
                        {obj.caps.includes(cap) && (
                          <FaCheckCircle className="text-green-500 mx-auto" />
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
          <h2 className="text-2xl font-bold text-orange-700 text-center">Habilidades Tesouro Nacional</h2>
          <div className="overflow-auto rounded-xl border bg-slate-50">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-orange-100 text-orange-700 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[5, 6, 7].map((n) => (
                    <th key={n} className="p-3 text-center">
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
                  <tr key={i} className="hover:bg-orange-50/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800">{obj.label}</span>
                      {obj.code && (
                        <span className="text-orange-600 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[5, 6, 7].map((cap) => (
                      <td key={cap} className="p-3 text-center">
                        {obj.caps.includes(cap) && (
                          <FaCheckCircle className="text-green-500 mx-auto" />
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