import { ImageDown } from "lucide-react";


export default function Media() {
  return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="duration-400 animate-bounce p-4 border-2 rounded-2xl border-zinc-500">
            <ImageDown className="h-8 w-8 text-zinc-500  transition-all
                    duration-300 group-hover:scale-110 
                    group-hover:text-zinc-300"
                strokeWidth={1.5}>                
            </ImageDown>
            </div>
            <div className="mt-6 max-w-sm space-y-2">
                <h3 className="text-base font-semibold tracking-tight 
                                text-zinc-200">
                    Sin multimedia disponibles
                </h3>

                <p className="text-sm leading-6 text-zinc-500">
                    Todavía no tienes multimedia para mostrar.
                    Cuando haya nuevas multimedia disponibles, aparecerán aquí.
                </p>
            </div>
      </div>
  )
}
