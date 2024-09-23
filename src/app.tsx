import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestesInputOpen, setIsGuestesInputOpen] = useState(false)

  function openGuestesInput() {
    setIsGuestesInputOpen(true)
  }

  function closeGuestesInput() {
    setIsGuestesInputOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center">
          <img src="/logo.svg" alt="" />
          <p className="text-zinc-300 text-lg">Convide seus amigos, planeje sua próxima viagem!</p>
        </div>
        {/* Input */}
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin size={20} className="text-zinc-400" />
              <input
                disabled={isGuestesInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                placeholder="Para onde você vai?"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-zinc-400" />
              <input
                disabled={isGuestesInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
                placeholder="Quando?"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestesInputOpen ? (
              <button
                className="bg-zinc-800 text-zinc-200 rounded-lg px-5 
                py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
                onClick={closeGuestesInput}
              >
                <Settings2 size={20} className="text-zinc-200" />
                Alterar local/data
              </button>
            ) : (
              <button
                className="bg-lime-300 text-lime-950 rounded-lg px-5 
                py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                onClick={openGuestesInput}
              >
                <ArrowRight size={20} className="text-lime-950" />
                Continuar
              </button>
            )}
          </div>

          {isGuestesInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlus size={20} className="text-zinc-400" />
                <input
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  placeholder="Quem estará na viagem?"
                />
              </div>
              <div className="w-px h-6 bg-zinc-800" />

              <button
                className="bg-lime-300 text-lime-950 rounded-lg px-5 
                py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                <ArrowRight size={20} className="text-lime-950" />
                Confirmar Viagem
              </button>
            </div>
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e
          <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.
        </p>
      </div>
    </div >
  )
}
