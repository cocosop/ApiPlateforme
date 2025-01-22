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
  BuildingOfficeIcon,
  CogIcon,
  GlobeAltIcon,
  LightBulbIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  BeakerIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
  CubeTransparentIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  FireIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ScissorsIcon,
  SparklesIcon
} from '@heroicons/react/20/solid'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import CameroonFlag from '../../assets/img/Camer.png'
import { Divider } from '@mui/material'
import './navbar.css'

interface NavbartProps {
  onMenuClick: any | null;
}

const infos = [
  {
    name: "Présentation du Cameroun",
    description: "Découvrez les opportunités stratégiques, économiques et naturelles du Cameroun qui attirent les investisseurs du monde entier.",
    link: "/presentation-du-cameroun",
    icon: LightBulbIcon
  },
  {
    name: "Cadre juridique et fiscal",
    description: "Accédez à des informations essentielles sur la fiscalité et le cadre légal qui garantissent un environnement d’investissement sûr et compétitif au Cameroun.",
    link: "/cadre-juridique-et-fiscal",
    icon: ScaleIcon
  },
  {
    name: "Aspects juridiques",
    description: "Découvrez les lois et règlements conçus pour protéger et encourager les investissements dans différents secteurs au Cameroun.",
    link: "/aspects-juridiques",
    icon: DocumentTextIcon
  },
];

const investir = [
  { name: "Main d'oeuvre", description: "Informations sur les ressources humaines et la disponibilité de la main-d'œuvre.", link: "/main-d-oeuvre", icon: UserGroupIcon },
  { name: "Facteurs de production", description: "Ressources clés pour la production, y compris le capital et les infrastructures.", link: "/factures-de-production", icon: CogIcon },
]

const categories = [
  {
    name: "Sanctuaires",
    description: "Les infrastructures et pôles stratégiques du développement industriel.",
    secteurs: [
      { name: "Agro-industrie", link: "/sanctuaire-agro-industrie", icon: BeakerIcon },
      { name: "Énergie", link: "/sanctuaire-energie", icon: LightBulbIcon },
      { name: "Numérique", link: "/sanctuaire-numerique", icon: ComputerDesktopIcon },
    ],
  },
  {
    name: "Piliers",
    description: "Les secteurs clés qui soutiennent la croissance économique.",
    secteurs: [
      { name: "Bois-Forêts", link: "/pilier--bois-forets", icon: SparklesIcon },
      { name: "Textile/Confection/Cuir", link: "/pilier--textile-confection-cuir", icon: ScissorsIcon },
      { name: "Hydrocarbures/Raffinage", icon: FireIcon, link: "/pilier-hydrocarbures-raffinage" },
      { name: "Chimie et Pharmacie", icon: BeakerIcon, link: "/pilier-chimie-pharmacie" },
      { name: "Mines/Métallurgie/Sidérurgie", icon: CubeTransparentIcon, link: "/pilier-mines-metallurgie-siderurgie" },
    ],
  },
  {
    name: "Socles",
    description: "Les bases fondamentales pour un développement industriel solide.",
    secteurs: [
      { name: "Financements", link: "/socle-financement", icon: CurrencyDollarIcon },
      { name: "Infrastructures", link: "/socle-infrastructure", icon: BuildingOfficeIcon },
    ],
  },
];

const aPropos = [
  { name: "Présentation de l'API", description: "Découvrez le rôle de l’Agence de Promotion des Investissements dans l’accompagnement et la facilitation des projets d’investissement au Cameroun.", link: "/presentation-de-lAPI", icon: BuildingOfficeIcon },
  { name: "FAQ", description: "Trouvez des réponses rapides et claires à vos questions fréquentes concernant l’investissement au Cameroun.", link: "/FAQ", icon: QuestionMarkCircleIcon },
  { name: "Conseil en ligne", description: "Accédez à une assistance personnalisée et obtenez des réponses rapides à toutes vos questions sur les opportunités d'investissement.", link: "/conseil-en-ligne", icon: ChatBubbleBottomCenterTextIcon },
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
      <div className='bg-gray-100 flex items-center justify-between p-3' ref={firstNavRef}>
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
      <Divider></Divider>
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

            <Link to={"/"} className="text-sm/6 font-semibold text-gray-900">
              Accueil
            </Link>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Informations générales
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-1/2 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="w-screen max-w-md p-4 flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                  {infos.map((item) => (
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
                Guide de l'investisseur
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-24 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="w-screen max-w-md p-4 flex-auto overflow-hidden rounded-3xl text-sm/6 shadow-lg ring-1 ring-gray-900/5">
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
                Secteurs d'opportunités
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-[34rem] top-full z-10 mt-3 w-screen max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="grid grid-cols-3 gap-4 p-4 text-sm/6 bg-white rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                  {categories.map((category, index) => (
                    <div
                      key={category.name}
                      className={`mb-6 p-4 ${index < categories.length - 1 ? "border-r-2 border-gray-200" : ""}`}
                    >
                      <h3 className="mb-2 text-sm/6 font-semibold text-gray-900">{category.name}</h3>
                      <small className="mb-6 text-gray-600">{category.description}</small>
                      {category.secteurs.map((secteur) => (
                        <div
                          key={secteur.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 hover:bg-gray-50"
                        >
                          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <secteur.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                          </div>
                          <div className="flex-auto">
                            <Link
                              to={secteur.link ? secteur.link : "#"}
                              onClick={() => onMenuClick(secteur)}
                              className="block font-semibold text-gray-900"
                            >
                              {secteur.name}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                A propos
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-[12rem] top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="w-screen max-w-md p-4 flex-auto overflow-hidden rounded-3xl text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                  {aPropos.map((item) => (
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
                    Accueil
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Informations générales
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 ">
                      {[...infos].map((item) => (
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
                      Guide de l'investisseur
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
                      Secteurs d'opportunités
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-4">
                      {categories.map((group) => (
                        <div key={group.name} className="border-b border-gray-200 p-4">
                          <h3 className="text-sm font-semibold text-gray-900">{group.name}</h3>
                          <small className="text-xs text-gray-600">{group.description}</small>
                          <div className="mt-2 space-y-1">
                            {group.secteurs.map((item) => (
                              <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.link}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                              >
                                <div className="flex items-center gap-5">
                                  {item.icon ? (
                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                  ) : (
                                    <SparklesIcon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                  )}
                                  {item.name}
                                </div>
                              </DisclosureButton>
                            ))}
                          </div>
                        </div>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      A propos
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 ">
                      {[...aPropos].map((item) => (
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

