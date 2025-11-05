import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import SmartContentSection from "@/components/SmartContentSection"

export default function Smart() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="FERRAMENTAS DE PLANEJAMENTO"
                subtitle="Como utilizar as ferramentas Metas SMART e 5W2H para planejar aulas e projetos"
                />
        <SmartContentSection />
      </main>
      <Footer />
    </div>
  )
}

