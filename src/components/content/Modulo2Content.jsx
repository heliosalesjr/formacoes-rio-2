'use client'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const atividades = [
  {
    title: "Introdução",
    content: `No livro, há uma série de atividades que valem ponto na Gincana da Educação Financeira, que funcionam como pequenos projetos.`,
  },
  {
    title: "Capítulo 1",
    content: `
Agora é sua vez!

🟢 Exposição das profissões
Os alunos fazem uma pesquisa sobre duas profissões diferentes, descrevendo suas funções e importância social. A proposta estimula a valorização de todo tipo de trabalho e compreensão das funções na sociedade.

🟢 Pesquisa de preços
O objetivo desta atividade é comparar os preços dos itens da padaria mencionados na aula com os preços reais de uma padaria local, a título de comparação para entender a dinâmica dos preços.

🟢 Entrevistando um adulto
Os alunos entrevistam um adulto sobre sua profissão, registrando as respostas em um roteiro de perguntas. A ideia é compreender a rotina profissional e o valor social do trabalho, exercitando a oralidade, escuta e escrita.`,
  },
  {
    title: "Capítulo 2",
    content: `
🟢 Encarte de preços
Os estudantes pesquisam preços de produtos ou alimentos para comparar valores e refletir sobre diferenças de custo e escolhas de consumo consciente, aplicando noções básicas de cálculo e comparação de preços.`,
  },
  {
    title: "Capítulo 4",
    content: `
🟢 O que quero comprar?
Os alunos têm poder de escolher qual produto decidiram comprar com o dinheiro, estimulando autonomia e discernimento.`,
  },
  {
    title: "Capítulo 5",
    content: `
🟢 Anúncio de promoção
Os alunos farão uma pesquisa sobre promoções no dia a dia, para entender como a dinâmica funciona no mundo real.

🟢 Anúncio de parcelamento
Os alunos farão uma pesquisa sobre os parcelamentos e trarão os que chamarem mais a atenção.`,
  },
  {
    title: "Capítulo 6",
    content: `
🟢 Reciclar garrafas de plástico
Os alunos devem separar garrafas plásticas usadas em casa, lavá-las e levá-las à escola para coleta. Em sala, calculam quantas garrafas juntaram, projetando o total até o fim do ano. O projeto promove educação ambiental, responsabilidade coletiva e cálculo matemático aplicado.

🟢 Cartaz de economia
Eles farão um cartaz de economia, por meio da pesquisa sobre como ser mais sustentável.`,
  },
];

export default function Modulo2Content() {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-2-ppda');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <section
      ref={ref}
      id="modulo-2-ppda"
      className="scroll-mt-20 max-w-5xl mx-auto my-16 py-8 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card className="w-full bg-white rounded-2xl shadow-2xl border border-blue-100">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Atividades de Projeto do Livro
            </CardTitle>

          </CardHeader>
          <CardContent className="py-8">
            <Accordion type="multiple" className="space-y-3">
              {atividades.map((item, i) => (
                <AccordionItem
                  value={`item-${i}`}
                  key={i}
                  className="border border-blue-100 rounded-lg"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-800 text-lg px-4 py-3 hover:bg-blue-50 rounded-md">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-4 text-slate-700 leading-relaxed whitespace-pre-line text-[1rem]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
