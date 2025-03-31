import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import ModalsMainOeuvre from '../modalsMainOeuvre/modalsMainOeuvre';

interface MainOeuvreProps {
  id?: string; // La prop id est optionnelle
}

const MainOeuvre: React.FC<MainOeuvreProps> = ({ id }) => {  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: 'ease-in-out', // Effet de l'animation
    });
  }, []);
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
    <div id={id} className='mt-8'>
    {/* Slider Section */}
    <div data-aos="fade-up" className="flex flex-col items-center mb-6">
      <h2 className="text-3xl font-bold text-center mb-4 mt-0 text-[#0F0B60]">
        Main d'Oeuvre 
      </h2>
      <span className="block w-1/4 h-1 bg-[#0F0B60]"></span>
    </div>
    <div className="bg-white min-h-50 mt-8">      
      <section
        data-aos="fade-up"
        id="slider"
        className="relative perspective-3d transform-style-preserve-3d mx-auto"
        style={{ height: '65vh' }} // Ajustement de la hauteur pour mobile
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
              className="absolute w-[80%] md:w-[50%] h-[60%] md:h-[80%] rounded-lg overflow-hidden shadow-lg mx-auto left-0 right-0 cursor-pointer transition-transform duration-500 ease-in-out"
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

          {/* Boutons de navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 z-50"
            style={{ width: '40px', height: '40px' }} // Taille réduite pour mobile
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 z-50"
            style={{ width: '40px', height: '40px' }} // Taille réduite pour mobile
          >
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
    </div>
  </div>
  );
}

export default MainOeuvre;