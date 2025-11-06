import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import EncerramentoContentSection from "@/components/EncerramentoContentSection"
export default function Diagnostico() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Encerramento"
                subtitle="Concluir o Módulo 2 e revisar o que aprendemos até aqui"
                />
       
       <EncerramentoContentSection />
      </main>
      <Footer />
    </div>
  )
}
