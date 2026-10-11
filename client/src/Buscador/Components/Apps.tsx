import { LayoutGridIcon } from "lucide-react";


export default function Apps() {
  return (
   <div className="m-4">
     
      <div className="flex flex-col items-center justify-center py-10">
        <div className="duration-400 animate-bounce p-4 border-2 rounded-2xl border-zinc-500">
          <LayoutGridIcon className="h-9 w-9 text-zinc-500  transition-all
                 duration-300 group-hover:scale-110 
                 group-hover:text-zinc-300"
              strokeWidth={1.5}>                
          </LayoutGridIcon>
        </div>
         <div className="mt-6 max-w-sm space-y-2">
          <h3 className="text-base font-semibold tracking-tight 
                        text-zinc-200">
            Sin aplicaciones disponibles
          </h3>

          <p className="text-sm leading-6 text-zinc-500">
            Todavía no tienes aplicaciones para mostrar.
            Cuando haya nuevas apps disponibles, aparecerán aquí.
          </p>
        </div>
      </div>
   </div>
  )
}
