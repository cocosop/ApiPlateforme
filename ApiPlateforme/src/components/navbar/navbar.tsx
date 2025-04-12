import { useEffect, useRef, useState } from 'react'
import {
  CloseButton,
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
  GiftIcon,
  LightBulbIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import {
  BeakerIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  FireIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ScissorsIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/20/solid'
import Logo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import CameroonFlag from '../../assets/img/Camer.png'
import './navbar.css'
import React from 'react'
import { LeafyGreenIcon, PickaxeIcon, TreesIcon } from 'lucide-react'
import BoutonLangue from '../boutonLangues/boutonLangue'
import { useTranslation } from 'react-i18next'

interface NavbartProps {
  onMenuClick: any | null;
}

const navbar: React.FC<NavbartProps> = ({ onMenuClick }) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('fr')
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

  const { t } = useTranslation();
  const infos = [
    {
      name: t('navbar.menu_items.presentation_cameroun'),
      description: t('navbar.descriptions.presentation_cameroun'),
      link: "/presentation-du-cameroun",
      icon: LightBulbIcon
    },
    {
      name: t('navbar.menu_items.cadre_juridique'),
      description: t('navbar.descriptions.cadre_juridique'),
      link: "/cadre-juridique-et-fiscal",
      icon: ScaleIcon
    },


  ];
  const investir = [
    {
      name: t('navbar.menu_items.creation_entreprise'),
      description: t('navbar.descriptions.creation_entreprise'),
      link: "/creation-dentreprise",
      icon: BriefcaseIcon
    },
    {
      name: t('navbar.menu_items.droit_investisseurs'),
      description: t('navbar.descriptions.droit_investisseurs'),
      link: "/droits-des-investisseurs",
      icon: ShieldCheckIcon
    },
    {
      name: t('navbar.menu_items.facteurs_production'),
      description: t('navbar.descriptions.facteurs_production'),
      link: "/facteurs-de-production",
      icon: CogIcon
    },
    {
      name: t('navbar.menu_items.incitation'),
      description: t('navbar.descriptions.incitation'),
      link: "/incitation",
      icon: GiftIcon
    }
  ];
  const categories = [
    {
      name: t('navbar.menu_items.sanctuaires'),
      description: t('navbar.descriptions.sanctuaires'),
      secteurs: [
        { name: t('navbar.menu_items.agro_industrie'), link: "/sanctuaire-agro-industrie", icon: LeafyGreenIcon },
        { name: t('navbar.menu_items.energie'), link: "/sanctuaire-energie", icon: LightBulbIcon },
        { name: t('navbar.menu_items.numerique'), link: "/sanctuaire-numerique", icon: ComputerDesktopIcon },
      ],
    },
    {
      name: t('navbar.menu_items.piliers'),
      description: t('navbar.descriptions.piliers'),
      secteurs: [
        { name: t('navbar.menu_items.bois_forets'), link: "/pilier-bois-forets", icon: TreesIcon },
        { name: t('navbar.menu_items.textile_confection_cuir'), link: "/pilier-textile-confection-cuir", icon: ScissorsIcon },
        { name: t('navbar.menu_items.hydrocarbures_raffinage'), icon: FireIcon, link: "/pilier-hydrocarbures-raffinage" },
        { name: t('navbar.menu_items.chimie_pharmacie'), icon: BeakerIcon, link: "/pilier-chimie-pharmacie" },
        { name: t('navbar.menu_items.mines_metallurgie_siderurgie'), icon: PickaxeIcon, link: "/pilier-mines-metallurgie-siderurgie" },
      ],
    },
    {
      name: t('navbar.menu_items.socles'),
      description: t('navbar.descriptions.socles'),
      secteurs: [
        { name: t('navbar.menu_items.financement'), link: "/socle-financement", icon: CurrencyDollarIcon },
        { name: t('navbar.menu_items.infrastructure'), link: "/socle-infrastructure", icon: BuildingOfficeIcon },
      ],
    },
  ];
  const aPropos = [
    { name: t('navbar.menu_items.presentation_api'), description: t('navbar.menu_items.presentation_api'), link: "/presentation-api", icon: BuildingOfficeIcon },
    { name: t('navbar.menu_items.faq'), description: t('navbar.menu_items.faq'), link: "/FAQ", icon: QuestionMarkCircleIcon },
    { name: t('navbar.menu_items.conseil_en_ligne'), description: t('navbar.menu_items.conseil_en_ligne'), link: "/conseil-en-ligne", icon: ChatBubbleBottomCenterTextIcon },
  ]
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
            <BoutonLangue />
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
            <Link to={"/"} className="text-sm/6 font-semibold text-gray-900">
              {t('navbar.accueil')}
            </Link>
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                {t('navbar.informations')}
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
                        <CloseButton as={NavLink} to={item.link ? item.link : "#"} onClick={() => onMenuClick(item)} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </CloseButton>
                        <small className="mt-1 text-gray-600">{item.description}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                {t('navbar.opportunites')}
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
                            <CloseButton as={NavLink} to={secteur.link ? secteur.link : "#"} onClick={() => onMenuClick(secteur)}>
                              {secteur.name}
                              <span className="absolute inset-0" />
                            </CloseButton>
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
                {t('navbar.investir')}
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -right-24 top-full z-10 mt-3 w-screen max-w-3xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="grid grid-cols-2 gap-4 p-4 text-sm/6 bg-white rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                  {investir.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <CloseButton as={NavLink} to={item.link ? item.link : "#"} onClick={() => onMenuClick(item)} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </CloseButton>
                        <small className="mt-1 text-gray-600">{item.description}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                {t('navbar.apropos')}
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
                        <CloseButton as={NavLink} to={item.link ? item.link : "#"} onClick={() => onMenuClick(item)} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </CloseButton>
                        <small className="mt-1 text-gray-600">{item.description}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <NavLink to="/signin">
              <button className="ps-btn text-sm/6 font-semibold">
                {t('navbar.espace_prive')}
              </button>
            </NavLink>
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
                  <CloseButton
                    as={NavLink}
                    to={'/'}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {t('navbar.accueil')}
                  </CloseButton>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Informations générales{t('navbar.Accueil')}
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 ">
                      {[...infos].map((item) => (
                        <CloseButton
                          as={NavLink}
                          key={item.name}
                          to={item.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >

                          <div className='flex items-center gap-5'>
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                            {item.name}
                          </div>
                        </CloseButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      {t('navbar.investir')}
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 ">
                      {[...investir].map((item) => (
                        <CloseButton
                          as={NavLink}
                          key={item.name}
                          to={item.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >

                          <div className='flex items-center gap-5'>
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                            {item.name}
                          </div>
                        </CloseButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      {t('navbar.opportunites')}
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-4">
                      {categories.map((group) => (
                        <div key={group.name} className="border-b border-gray-200 p-4">
                          <h3 className="text-sm font-semibold text-gray-900">{group.name}</h3>
                          <small className="text-xs text-gray-600">{group.description}</small>
                          <div className="mt-2 space-y-1">
                            {group.secteurs.map((item) => (
                              <CloseButton
                                as={NavLink}
                                key={item.name}
                                to={item.link}
                                onClick={() => setMobileMenuOpen(false)}
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
                              </CloseButton>
                            ))}
                          </div>
                        </div>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      A propos{t('navbar.Accueil')}
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 ">
                      {[...aPropos].map((item) => (
                        <CloseButton
                          as={NavLink}
                          key={item.name}
                          to={item.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          <div className='flex items-center gap-5'>
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                            {item.name}
                          </div>
                        </CloseButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                </div>
                <div className="py-6">
                  <CloseButton
                    as={NavLink}
                    to={'/signin'}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {t('navbar.Espace_Privé')}
                  </CloseButton>
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