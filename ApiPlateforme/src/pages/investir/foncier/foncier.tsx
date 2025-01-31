import { NavLink } from 'react-router-dom'
import Fonciere from "../../../assets/img/foncier.jpg"

const Foncier = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
        <img src={Fonciere} alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-30" />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-20" ></div>
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30" ></div>
        </div>

        <div className="mx-auto max-w-2xl">
          <h2 className="text-5xl font-semibold tracking-tight text-white text-center">
            Aspects Fonciers
          </h2>
        </div>
      </div>
      <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
        <NavLink className="text-slate-500 hover:text-slate-600" to={'/'}>Accueil</NavLink>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <NavLink className="text-slate-500 hover:text-slate-600" to={'#'}>Investir</NavLink>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <NavLink className="text-slate-500 hover:text-slate-600" to={'/secteur-de-lagriculture'}>Aspects Fonciers</NavLink>
      </div>
    </div>



  )
}

export default Foncier
