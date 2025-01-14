import { useEffect, useRef, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  BeakerIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  CogIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  GiftIcon,
  GlobeAltIcon,
  LifebuoyIcon,
  LightBulbIcon,
  MapIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import CameroonFlag from '../../assets/img/Camer.png'
import { Divider } from '@mui/material'
import './navbar.css'

interface NavbartProps {
  onMenuClick: any | null;
}



const investir = [
  { name: "Créer son entreprise", description: "Guides et ressources pour la création et le développement d'une entreprise.", link: "/creer-son-entreprise", icon: BriefcaseIcon },
  { name: "Main d'oeuvre", description: "Informations sur les ressources humaines et la disponibilité de la main-d'œuvre.", link: "/main-d-oeuvre", icon: UserGroupIcon },
  { name: "Facteurs de production", description: "Ressources clés pour la production, y compris le capital et les infrastructures.", link: "/factures-de-production", icon: CogIcon },
  { name: "Foncier", description: "Accès aux terrains et propriétés pour les projets d'investissement.", link: "/foncier", icon: MapIcon },
  { name: "Fiscalité", description: "Informations sur les taxes, impôts et incitations fiscales pour les investisseurs.", link: "/fiscalite", icon: CurrencyDollarIcon },
  { name: "Droit des investisseurs", description: "Garanties et protections légales offertes aux investisseurs.", link: "/droit-des-investisseurs", icon: ShieldCheckIcon },

]

const secteurs = [
  { name: "Agriculture", description: "Projets liés à l'agriculture, de la production à la transformation des produits agricoles.", link: "/secteur-de-lagriculture", icon: BeakerIcon },
  { name: "Energie", description: "Projets liés à la production, la distribution et l'utilisation de l'énergie, y compris les énergies renouvelables.", link: "/secteur-de-lenergie", icon: LightBulbIcon },
  { name: "TIC", description: "Projets dans les technologies de l'information et de la communication, favorisant l'innovation et la transformation digitale.", link: "/secteur-des-tic", icon: ComputerDesktopIcon },
  { name: "Tourisme", description: "Projets visant à développer le secteur touristique, de l'hôtellerie à la gestion des attractions touristiques.", link: "/projets", icon: GlobeAltIcon },
  { name: "Infrastructure", description: "Projets liés à la construction et à la maintenance d'infrastructures publiques et privées, incluant routes et bâtiments.", link: "/projets", icon: BuildingLibraryIcon }

]

const eServices = [
  { name: "Creation d'entreprise", description: "Aide à la création d'entreprise, y compris l'enregistrement et les démarches administratives.", link: "/creation-d-entreprise", icon: BuildingOfficeIcon },
  { name: "Octroi d'incitation", description: "Projets et aides visant à inciter les investissements et stimuler l'économie locale.", link: "/octroi-d-incitation", icon: GiftIcon },
  { name: "Investor service desk", description: "Un guichet unique pour les investisseurs, offrant des informations et des services personnalisés.", link: "/investor-service-desk", icon: LifebuoyIcon },
  { name: "Permis zones industrielles", description: "Démarches et services pour l'obtention des permis nécessaires dans les zones industrielles.", link: "/permis-zones-industrielles", icon: BuildingStorefrontIcon },
  { name: "Permis zones économiques", description: "Obtention de permis pour l'implantation dans les zones économiques spéciales.", link: "/permis-zones-economiques", icon: GlobeAltIcon }

]


const navbar: React.FC<NavbartProps> = ({ onMenuClick }) => {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('fr')

  const languages = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const changeLanguage = (lang: any) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const [isSticky, setIsSticky] = useState(false);
  const firstNavRef = useRef<HTMLDivElement>(null);
  const secondNavRef = useRef<HTMLDivElement>(null);
  const [secondNavHeight, setSecondNavHeight] = useState(0);

  useEffect(() => {
    if (secondNavRef.current) {
      // Définir la hauteur de la deuxième navbar
      setSecondNavHeight(secondNavRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (firstNavRef.current) {
        const firstNavBottom = firstNavRef.current.getBoundingClientRect().bottom;
        setIsSticky(firstNavBottom <= 0); // Active "sticky" si la première navbar est hors vue
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (

    <header className='bg-white'>
      <div className='bg-gray-100 flex items-center justify-between p-3 px-10' ref={firstNavRef}>
        <span>
          <img
            className="h-6 w-auto"
            src={CameroonFlag}
            alt='Cameroon-Flag'
          />
        </span>
        <span>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleMenu}
              className="flex items-center px-4 py-2  rounded-md"
            >
              <GlobeAltIcon className="h-5 w-5 mr-2 text-gray-500" />
              {languages.find((lang) => lang.code === language)?.code.toUpperCase()}
              <ChevronDownIcon className="h-5 w-5 ml-2 text-gray-500" />
            </button>

            {isOpen && (
              <div className="absolute right-0 z-30 mt-2 bg-white rounded-md shadow-lg w-28">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2 text-sm ${lang.code === language
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </span>
      </div>
      <div style={{ height: isSticky ? secondNavHeight : 0 }}></div>
      <div
        className='sticky top-0 z-20 shadow-lg bg-white w-full'
        style={{ position: isSticky ? "fixed" : "relative" }}
        ref={secondNavRef}
      >
        <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                alt="Api-logo"
                src={Logo}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">

            <Link to="/" className="text-sm/6 font-semibold text-gray-900"> Accueil</Link>
            <Link to={"#"} className="text-sm/6 font-semibold text-gray-900">
              Le Cameroun
            </Link>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Investir
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-[15rem] top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="grid grid-cols-2 gap-4 p-4">
                  {investir.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.link ? item.link : "#"} onClick={() => onMenuClick(item)} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <small className="mt-1 text-gray-600">{item.description}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Secteurs et Opportunités
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-[20rem] top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="grid grid-cols-2 gap-4 p-4">
                  {secteurs.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.link ? item.link : "#"} onClick={() => onMenuClick(item)} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <small className="mt-1 text-gray-600">{item.description}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                e-Services
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-[34rem] top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="grid grid-cols-2 gap-4 p-4">
                  {eServices.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.link ? item.link : "#"} onClick={() => onMenuClick(item)} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <small className="mt-1 text-gray-600">{item.description}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Link to={"/FAQ"} className="text-sm/6 font-semibold text-gray-900">
              FAQ
            </Link>

            <Link to="/login">
              <button className="ps-btn text-sm/6 font-semibold">
                Espace  Privé
              </button>
            </Link>
          </PopoverGroup>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  alt=""
                  src={Logo}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to={'/'}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Le Cameroun
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Investir
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 ">
                      {[...investir].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.link}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >

                          <div className='flex items-center gap-5'>
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                            {item.name}
                          </div>
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Secteurs et Opportunités
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 ">
                      {[...secteurs].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.link}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          <div className='flex items-center gap-5'>
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                            {item.name}
                          </div>
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>

                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      e-Services
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 ">
                      {[...eServices].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.link}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          <div className='flex items-center gap-5'>
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                            {item.name}
                          </div>
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>

                  </Disclosure>
                  <Link
                    to={'/FAQ'}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    FAQ
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to={'/login'}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Espace Privé
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
  )
}

export default navbar;

