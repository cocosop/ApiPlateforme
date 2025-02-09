import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import oeuvre from "../../../assets/img/mainOeuvre.jpg"
import AOS from 'aos';
import ProjectCard from '../../../components/projetCard/projetCard';
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"
import ModalsMainOeuvre from '../../../components/modalsMainOeuvre/modalsMainOeuvre';

const MainOeuvre = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      secteur: "Agro-industrie",
      titre: "Exploitation de plantation de cacao",
      ville: "Douala",
      quartier: "Bonaberi",
      description: "Mise en place d'une plantation moderne de cacao avec une production annuelle de 50 tonnes.",
      image: CACAO,
      latitude: 4.0511,
      longitude: 9.7679,
    },
    {
      id: 2,
      secteur: "Énergie",
      titre: "Parc solaire de 20 MW",
      ville: "Garoua",
      quartier: "Ngaoundere route",
      description: "Construction d'un parc solaire pour fournir de l'énergie propre à la région du Nord.",
      image: ENERGIE,
      latitude: 4.0511,
      longitude: 9.7679,
    },
    {
      id: 3,
      secteur: "Numérique",
      titre: "Plateforme de paiement mobile",
      ville: "Yaoundé",
      quartier: "Bastos",
      description: "Développement d'une application de paiement mobile visant à faciliter les transactions financières locales.",
      image: "https://img.freepik.com/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384825.jpg?t=st=1738099850~exp=1738103450~hmac=263dee2608a764be0cc905367387bf817f98c3b6a3df41a0103a348fa8777175&w=996",
      latitude: 4.0511,
      longitude: 9.7679,
    }
    // Ajoutez plus de projets ici...
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: 'ease-in-out', // Effet de l'animation
    });
  }, []);

  interface PopulationData { year: number; population: string; color: string; }

  const populationData: PopulationData[] = [
    { year: 2016, population: '22.7 M', color: 'bg-green-500' },
    { year: 2017, population: '23.2 M', color: 'bg-red-500' },
    { year: 2018, population: '23.7 M', color: 'bg-yellow-500' },
    { year: 2019, population: '24.3 M', color: 'bg-green-500' },
    { year: 2020, population: '24.9 M', color: 'bg-blue-500' },
  ]

  const [activeIndex, setActiveIndex] = useState<number>(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; content2: React.ReactNode }>({ title: '', content2: null });

  // Contenus des modals
  const modalContent1 = (
    <div className="p-4">
      <h2 className="flex items-center text-lg font-bold text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12V8m0 4v4m-4-4H8m4 0h4m-8 4a4 4 0 10-4-4 4 4 0 004 4z" />
        </svg>
        Une Main-d'œuvre Qualifiée
      </h2>
      <p className="ml-4 text-gray-700">
        Le Cameroun dispose d’une main-d’œuvre jeune et dynamique, soutenue par des taux élevés d’alphabétisation et de formation :
      </p>
      <ul className="ml-8 space-y-4 list-disc">
        <li>
          <strong>71,2%</strong> des adultes (15 ans et plus) sont alphabétisés, avec une répartition par genre prometteuse :
          <ul className="ml-4 list-none space-y-1">
            <li>• Hommes : <strong>78,2%</strong></li>
            <li>• Femmes : <strong>64,7%</strong></li>
          </ul>
        </li>
        <li>
          Taux net de scolarisation (TNS) :
          <ul className="ml-4 list-none space-y-1">
            <li>• Primaire : <strong>78,8%</strong></li>
            <li>• Secondaire : <strong>49,3%</strong></li>
          </ul>
        </li>
        <li>
          Répartition par niveau d’éducation :
          <ul className="ml-4 list-none space-y-1">
            <li>➤ Non scolarisés : <strong>33,7%</strong></li>
            <li>➤ Niveau primaire : <strong>35,7%</strong></li>
            <li>➤ Niveau secondaire : <strong>26%</strong></li>
            <li>➤ Niveau supérieur : <strong>4,6%</strong></li>
          </ul>
        </li>
        <li>
          Formation professionnelle diversifiée :
          <ul className="ml-4 list-none space-y-1">
            <li>★ Apprentissage sur le tas : <strong>39,3%</strong></li>
            <li>★ Formation dans des centres spécialisés : <strong>19,1%</strong></li>
            <li>★ Diplômes de niveau supérieur : <strong>16,7%</strong></li>
          </ul>
        </li>
      </ul>
      <p className="ml-4 text-gray-700">
        Ces statistiques démontrent que le Cameroun est un vivier de talents, prêt à soutenir vos projets dans divers secteurs stratégiques.
      </p>
    </div>
  );

  const modalContent2 = (
    <div className="p-4">
      <p className="ml-4 text-gray-700">
        Depuis juillet 2014, le SMIG est égal à <strong>36 270 F CFA</strong> (soit 55,3 €) par mois pour 40 heures de travail par semaine.
      </p>
      <h3 className="ml-4 text-lg font-semibold text-green-600">Assurance volontaire</h3>
      <p className="ml-4 text-gray-700">
        Depuis le 3 novembre 2014, la CNPS propose une assurance volontaire couvrant les risques vieillesse, invalidité et décès. Les travailleurs indépendants et les étudiants dès l'âge de 14 ans peuvent y adhérer. Le montant de la cotisation représente <strong>8,40 %</strong> du revenu mensuel moyen sans que ce revenu ne soit inférieur au SMIG, ni supérieur au plafond des rémunérations en vigueur (750 000 F CFA ou 1 143,4 €).
      </p>
      <h3 className="ml-4 text-lg font-semibold text-green-600">Travailleurs expatriés</h3>
      <p className="ml-4 text-gray-700">
        Tout étranger peut exercer une activité salariée au Cameroun, et aucun quota n'est fixé quant au nombre d’employés étrangers qu’une société peut recruter. En revanche, une société ne peut faire appel à une main d’œuvre étrangère que si la compétence recherchée est indisponible sur le marché du travail national.
      </p>
      <p className="ml-4 text-gray-700">
        Dès que vous exercez une activité professionnelle (sauf si vous êtes "détaché" par votre employeur dans le cadre de la convention), vous êtes assujetti à la législation camerounaise de sécurité sociale et bénéficiez de ses prestations pour vous-même et les membres de votre famille qui résident sur le territoire camerounais.
      </p>
    </div>
  );

  const modalContent3 = (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <p className="ml-4 text-gray-700 mb-4">
        Le Code de Travail est libéral, permettant de conclure librement les contrats de travail entre employeur et employé. L’âge légal du travail est établi à 16 ans. La durée légale de travail est fixée à 48 heures par semaine. Les employés ont droit à 24 heures de repos par semaine, le vendredi d’ordinaire, mais ce repos peut être aussi pris pendant la semaine. Les salariés bénéficient d’un congé de 30 jours par an.
      </p>
      <h3 className="ml-4 text-xl font-semibold text-green-600 mb-2">Types de contrats</h3>
      <ul className="ml-8 space-y-4 list-disc text-gray-700 mb-4">
        <li>
          <strong>Le contrat de travail à durée déterminée</strong> : Tout contrat conclu pour une durée déterminée ne peut excéder, en cas de renouvellement répétitif, la durée totale de 12 mois renouvelable une fois.
        </li>
        <li>
          <strong>Le contrat de travail à durée indéterminée</strong> : Le contrat de travail à durée indéterminée peut être écrit ou verbal. Le contrat de travail à durée indéterminée peut être conclu pour un travail à temps plein ou pour un travail à temps partiel. Dans les contrats à durée indéterminée, la période d’essai ne peut excéder quinze jours pour les employés, ouvriers et manœuvres payés à l’heure ; un mois pour les employés, ouvriers et manœuvres payés au mois et trois mois pour les agents de maîtrise, cadres et assimilés. Cette période ne peut être renouvelée qu’une fois et par écrit.
        </li>
      </ul>
      <h3 className="ml-4 text-xl font-semibold text-green-600 mb-2">Licenciement</h3>
      <p className="ml-4 text-gray-700 mb-4">
        Le contrat de travail à durée déterminée prend fin de plein droit à l’échéance du terme. Le contrat de travail à durée déterminée peut être rompu avant l’échéance du terme dans les cas suivants :
      </p>
      <ul className="ml-8 space-y-2 list-disc text-gray-700 mb-4">
        <li>faute lourde</li>
        <li>cas de force majeure</li>
        <li>cas de difficultés économiques et financières ou encore techniques</li>
        <li>décision judiciaire</li>
        <li>accord écrit des parties</li>
      </ul>
      <p className="ml-4 text-gray-700 mb-2">
        Dans le contrat à durée indéterminée, un salarié ne peut être licencié que s’il existe une cause réelle et sérieuse de ne pas maintenir son contrat de travail. Le motif du licenciement peut être économique ou technique, par exemple la suppression ou la transformation substantielle du poste de travail occupé par le salarié pour des raisons tenant, soit aux changements technologiques, soit à l’organisation, aux difficultés économiques ou à la fermeture de l’entreprise.
      </p>
    </div>
  );

  const modalContent4 = (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <p className="ml-4 text-gray-700 mb-4">
        Les taux de cotisations sociales sont fixés par décret et varient suivant les branches des prestations sociales.
      </p>
      <h3 className="ml-4 text-xl font-semibold text-green-600 mb-2">Branches des prestations familiales</h3>
      <ul className="ml-8 space-y-2 list-disc text-gray-700 mb-4">
        <li>Régime général : <strong>7%</strong></li>
        <li>Régime agricole : <strong>5,65%</strong></li>
        <li>Régime de l’enseignement privé : <strong>3,7%</strong></li>
        <li>Régime domestique : <strong>7%</strong></li>
      </ul>
      <p className="ml-4 text-gray-700 mb-4">
        Les cotisations de cette branche sont entièrement à la charge de l’employeur. Elles sont plafonnées par salarié.
      </p>
      <h3 className="ml-4 text-xl font-semibold text-green-600 mb-2">Branches des risques professionnels</h3>
      <ul className="ml-8 space-y-2 list-disc text-gray-700 mb-4">
        <li>Groupe A (risques faibles) : <strong>1,75% du salaire</strong></li>
        <li>Groupe B (risques moyens) : <strong>2,50% du salaire</strong></li>
        <li>Groupe C (risques élevés) : <strong>5% du salaire</strong></li>
      </ul>
      <p className="ml-4 text-gray-700 mb-4">
        Les cotisations dues pour le compte de cette branche sont entièrement à la charge de l’employeur. Elles ne sont pas plafonnées par salarié.
      </p>
      <h3 className="ml-4 text-xl font-semibold text-green-600 mb-2">Branche de l’assurance pension de vieillesse d’invalidité et de décès</h3>
      <p className="ml-4 text-gray-700 mb-4">
        Le taux de cotisation est de <strong>8,4%</strong> (depuis la signature du décret n°2016/072 du 15 février 2016) pour tous les régimes et est réparti de la manière suivante :
      </p>
      <ul className="ml-8 space-y-2 list-disc text-gray-700 mb-4">
        <li>4,2% à la charge de l’employeur</li>
        <li>4,2% à la charge du travailleur</li>
        <li>Les assurés volontaires prennent entièrement en charge leurs cotisations, c'est-à-dire <strong>8,4%</strong></li>
        <li>Les cotisations de cette branche sont plafonnées par salarié.</li>
      </ul>
    </div>
  );

  const slides = [
    {
      id: "s1",
      color: "#A8D5BA",
      title: "Qualification de la Main d'Œuvre",
      content1: `Le Cameroun a deux langues officielles : le français et l'anglais. 
          Alphabétisation: 71,2 % des personnes de 15 ans et plus.`,
      content2: modalContent1,
      icon: "👩‍🎓",
    },
    {
      id: "s2",
      color: "#F96D6D",
      title: "Salaires et Conditions d'Emploi",
      content1: `SMIG : 36 270 F CFA/mois pour 40 heures par semaine.`,
      content2: modalContent2,
      icon: "💼",
    },
    {
      id: "s3",
      color: "#FFC107",
      title: "Contrat et Licenciement",
      content1: `Code de Travail : Permet la conclusion libre des contrats.`,
      content2: modalContent3,
      icon: "📜",
    },
    {
      id: "s4",
      color: " #B3DDF2",
      title: "Les Cotisations Sociales",
      content1: `Prestations familiales, risques professionnels, pensions.`,
      content2: modalContent4,
      icon: "📊",
    },
  ];

  const getTransformStyles = (index: number) => {
    const diff = index - activeIndex;
    const totalSlides = slides.length;

    if (diff === 0) {
      return {
        transform: "translate3d(0, 0, 0)",
        zIndex: 3,
        boxShadow: "0 13px 25px rgba(0,0,0,0.3)",
      };
    } else if (diff === 1 || diff === -totalSlides + 1) {
      return {
        transform: "translate3d(10%, 0, -100px)",
        zIndex: 2,
      };
    } else if (diff === -1 || diff === totalSlides - 1) {
      return {
        transform: "translate3d(-10%, 0, -100px)",
        zIndex: 2,
      };
    } else {
      return {
        transform: "translate3d(0, 0, -200px)",
        zIndex: 1,
      };
    }
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleModalOpen = (slide: { title: string; content2: React.ReactNode }) => {
    setModalContent({ title: slide.title, content2: slide.content2 });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Section Hero */}
      <div>
        <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
          <img src={oeuvre} alt="" className="absolute inset-0 z-10 w-full h-full object-cover object-right md:object-center opacity-30" />
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-20"></div>
          </div>
          <div className="absolute -top-52 left-1/2 z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30"></div>
          </div>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-5xl font-semibold tracking-tight text-white text-center">
              Main d'oeuvre
            </h2>
            <p className="mt-4 text-lg text-gray-300 italic text-center">
              Une main-d'œuvre qualifiée est la clé qui déverrouille le potentiel de toute économie.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex items-center space-x-2 text-sm font-semibold p-6 lg:p-8">
        <NavLink className="text-slate-500 hover:text-slate-600" to={'/'}>Accueil</NavLink>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <NavLink className="text-slate-500 hover:text-slate-600" to={'#'}>Guide de l'investisseur</NavLink>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <NavLink className="text-slate-500 hover:text-slate-600" to={'/main-doeuvre'}>Main d'œuvre</NavLink>
      </div>

      {/* Contenu principal */}
      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto p-6 space-y-8">
          {/* Section Population et Institutions */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Section Population */}
            <div className="md:w-3/4 w-full pr-0 md:pr-4">
              <section>
                <div className="flex flex-col items-center mb-6">
                  <h2 className="text-3xl font-bold text-center mb-4 mt-0 text-[#0F0B60]">
                    Croissance Démographique et Main-d'Œuvre Disponible - Opportunités d'Investissement au Cameroun
                  </h2>
                  <span className="block w-1/2 h-1 bg-[#0F0B60] mb-6"></span>
                  <p data-aos="fade-up" className="text-gray-600 text-justify mt-0 mb-8">
                    En 2017, la population du Cameroun était estimée à plus de 23 millions d'habitants, une dynamique qui reflète le fort potentiel humain de notre nation. Avec un taux de croissance démographique moyen de 2,8 % par an entre 1987 et 2015, le Cameroun est en constante expansion, offrant une main-d'œuvre jeune et dynamique, idéale pour soutenir divers secteurs d'investissement. Cette répartition équilibrée entre les sexes assure une diversité et une richesse humaine prêtes à contribuer au développement économique et social du pays. Dans cette perspective, la répartition de la population du Cameroun selon
                    l’année de projection est la suivante
                  </p>
                </div>
                <div data-aos="fade-up" className="flex flex-wrap justify-center gap-6 py-10">
                  {populationData.map((data) => (
                    <div key={data.year} className={`w-32 h-32 rounded-full flex flex-col items-center justify-center text-white text-xl font-semibold shadow-lg transition transform hover:scale-105 hover:shadow-2xl ${data.color}`}>
                      <div>{data.year}</div>
                      <div className="mt-2">{data.population}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Section Institutions */}
            <div className="md:w-1/4 w-full bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Institutions Compétentes</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/docs/creation-entreprise-guide.pdf" className="text-blue-600 hover:underline">
                    Ministère de l’Emploi et de la Formation Professionnelle
                  </a>
                </li>
                <li>
                  <a href="/docs/statuts-entreprise.pdf" className="text-blue-600 hover:underline">
                    Ministère de Travail et de la Prévoyance Sociale
                  </a>
                </li>
                <li>
                  <a href="https://www.example.com/formalites-cfce" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Caisse Nationale de la Prévoyance Sociale (CNPS)
                  </a>
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Contacts</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/docs/creation-entreprise-guide.pdf" className="text-blue-600 hover:underline">
                    BP 441, Yaoundé-Cameroun
                  </a>
                </li>
                <li>
                  <a href="/docs/statuts-entreprise.pdf" className="text-blue-600 hover:underline">
                    Tél. : (00 237) 22 22 46 01<br />Fax : (00 237) 22 23 57 55
                  </a>
                </li>
                <li>
                  <a href="https://www.example.com/formalites-cfce" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Courriel : cnps.cameroun@cnps.cm
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Slider Section */}
          <div data-aos="fade-up" className="flex flex-col items-center mb-6">
            <h2 className="text-3xl font-bold text-center mb-4 mt-0 text-[#0F0B60]">
              Qualité et Réglementation de la Main-d'Œuvre au Cameroun
            </h2>
            <span className="block w-1/2 h-1 bg-[#0F0B60] mb-6"></span>
          </div>
          <section
            data-aos="fade-up"
            id="slider"
            className="relative perspective-3d transform-style-preserve-3d mx-auto"
            // Pour mobile on augmente la hauteur, et sur écran moyen on la réduit
            style={{ height: '50vw' }}
          >
            <div className="relative h-full" style={{ height: 'inherit' }}>
              {slides.map((slide, index) => (
                <input
                  key={slide.id}
                  type="radio"
                  name="slider"
                  id={slide.id}
                  checked={activeIndex === index}
                  onChange={() => setActiveIndex(index)}
                  className="hidden"
                />
              ))}

              {slides.map((slide, index) => (
                <label
                  key={slide.id}
                  htmlFor={slide.id}
                  className="absolute w-[50%] h-[80%] rounded-lg overflow-hidden shadow-lg mx-auto left-0 right-0 cursor-pointer transition-transform duration-500 ease-in-out"
                  style={{
                    backgroundColor: slide.color,
                    ...getTransformStyles(index),
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full text-center text-black p-4">
                    <span className="text-4xl">{slide.icon}</span>
                    <h3 className="text-xl font-bold my-2">{slide.title}</h3>
                    <p className="text-sm">{slide.content1}</p>
                    <button
                      className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleModalOpen(slide);
                      }}
                    >
                      En savoir plus
                    </button>
                  </div>
                </label>
              ))}

              <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900">
                &#9664;
              </button>
              <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900">
                &#9654;
              </button>
            </div>

            {isModalOpen && (
              <>
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleModalClose}></div>
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                  <ModalsMainOeuvre
                    title={modalContent.title}
                    content2={modalContent.content2}
                    onClose={handleModalClose}
                  />
                </div>
              </>
            )}
          </section>

          {/* Section Projets */}
          <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-[#0F0B60]">
              Saisissez des Opportunités Uniques !
            </h2>
            <div className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></div>
            <p className="text-center text-gray-700 mb-6">
              Investissez dès aujourd’hui dans des projets innovants et rentables pour bâtir l’avenir de l’économie camerounaise.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="/banque-de-projets"
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
              >
                Voir plus de projets
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default MainOeuvre;
