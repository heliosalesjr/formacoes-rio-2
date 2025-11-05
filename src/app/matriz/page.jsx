import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MatrizContentSection from "@/components/MatrizContentSection"

export default function Modulo2() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Matriz de Habilidades"
                subtitle="Quais temas são apresentados em cada livro, e como eles se conectam às Habilidades da BNCC"
                />
       
        <MatrizContentSection />
      </main>
      <Footer />
    </div>
  )
}

