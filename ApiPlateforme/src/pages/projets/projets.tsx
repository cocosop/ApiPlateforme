import React, { useMemo, useState } from "react";
import Filters from "./../../components/filtreSecteur/filtreSecteur"; // Importation du composant
import ProjectCard from "./../../components/projetCard/projetCard"; // Importation du composant ProjectCard
import { NavLink } from "react-router-dom";
import Fonciere from "../../assets/img/foncier.jpg"
import CACAO from "../../assets/img/cacao4.png"
import ENERGIE from "../../assets/img/solar.jpg"
import NUMERIQUE from "../../assets/img/foncier.jpg"
import FORET from "../../assets/img/foncier.jpg"
import TEXTILE from "../../assets/img/foncier.jpg"
import HYDROCARBURE from "../../assets/img/foncier.jpg"
import CHIMIE from "../../assets/img/medoc.jpg"
import MINE from "../../assets/img/mine.jpg"
import FINANCEMENT from "../../assets/img/foncier.jpg"
import INFRASTRUCTURE from "../../assets/img/pont.jpg"
import PROJETS from "../../assets/img/projet.png"


const Projets = () => {
  const [filters, setFilters] = useState({
    secteur: "",
    ville: "",
    region:""
  });


  const [projects, setProjects] = useState([
    {
      id: 1,
      secteur: "Agro-industrie",
      titre: "Exploitation de plantation de cacao",
      ville: "Douala",
      promoteur: "Snk1",
      region: "Nord-Ouest",
      quartier: "Bonaberi",
      description: "Mise en place d'une plantation moderne de cacao avec une production annuelle de 50 tonnes.",
      image: CACAO,
      latitude: 4.0544,
      longitude: 9.7679
    },
    {
      id: 2,
      secteur: "Énergie",
      titre: "Parc solaire de 20 MW",
      ville: "Garoua",
      quartier: "Ngaoundere route",
      promoteur: "Snk2",
      region: "Centre",
      description: "Construction d'un parc solaire pour fournir de l'énergie propre à la région du Nord.",
      image: ENERGIE,
      latitude: 9.3006,
      longitude: 13.3930
    },
    {
      id: 3,
      secteur: "Numérique",
      titre: "Plateforme de paiement mobile",
      promoteur: "Snk3",
      region: "Littoral",
      ville: "Yaoundé",
      quartier: "Bastos",
      description: "Développement d'une application de paiement mobile visant à faciliter les transactions financières locales.",
      image: "https://img.freepik.com/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384825.jpg?t=st=1738099850~exp=1738103450~hmac=263dee2608a764be0cc905367387bf817f98c3b6a3df41a0103a348fa8777175&w=996",
      latitude: 3.8480,
      longitude: 11.5021
    },
    {
      id: 4,
      secteur: "Bois-Forêts",
      titre: "Exploitation forestière durable",
      promoteur: "Snk4",
      region: "Adamaoua",
      ville: "Bertoua",
      quartier: "Dimako",
      description: "Projet de reboisement et d'exploitation durable des ressources forestières locales.",
      image: "https://img.freepik.com/free-photo/wood-processing-factory_1112-1218.jpg?uid=R145003395&ga=GA1.1.506201312.1736953208&semt=ais_hybrid",
      latitude: 4.5773,
      longitude: 13.6827
    },
    {
      id: 5,
      secteur: "Textile/Confection/Cuir",
      titre: "Atelier de production de tissus locaux",
      promoteur: "Snk5",
      region: "Sud-Ouest",
      ville: "Bafoussam",
      quartier: "Marché A",
      description: "Création d'un atelier pour la fabrication et la commercialisation de tissus traditionnels camerounais.",
      image: "https://img.freepik.com/free-photo/tissue-shop-with-fabrics_1398-3773.jpg?t=st=1738100028~exp=1738103628~hmac=7aa2d06072648d91b7a3d7589ff78d1207b4271b355cde48bd7c7edf2b7160cc&w=360",
      latitude: 5.4781,
      longitude: 10.4134
    },
    {
      id: 6,
      secteur: "Hydrocarbures/Raffinage",
      titre: "Extension d'une raffinerie de pétrole",
      promoteur: "Snk6",
      region: "Ouest",
      ville: "Limbe",
      quartier: "Ngeme",
      description: "Modernisation et extension des installations de la raffinerie pour augmenter la capacité de production.",
      image: "https://img.freepik.com/free-photo/modern-factory-industrial-zone-blue-sky_181624-6369.jpg?t=st=1738099433~exp=1738103033~hmac=49ac491f699945c02c195d6322c0379e4d908b8ec815cadea9242a34562c6307&w=996",
      latitude: 4.0244,
      longitude: 9.2008
    },
    {
      id: 7,
      secteur: "Chimie et Pharmacie",
      titre: "Usine de production de médicaments génériques",
      promoteur: "Snk7",
      region: "Nord",
      ville: "Douala",
      quartier: "Makepe",
      description: "Mise en place d'une usine spécialisée dans la fabrication de médicaments génériques à prix abordables.",
      image: CHIMIE,
      latitude: 4.0511,
      longitude: 9.7679
    },
    {
      id: 8,
      secteur: "Mines/Métallurgie/Sidérurgie",
      titre: "Exploitation d'une mine de bauxite",
      promoteur: "Snk8",
      region: "Sud",
      ville: "Ngaoundal",
      quartier: "Centre",
      description: "Projet d'extraction et de transformation de la bauxite en aluminium.",
      image: MINE,
      latitude: 6.7486,
      longitude: 12.5186
    },
    {
      id: 9,
      secteur: "Financements",
      titre: "Fonds de soutien aux startups",
      promoteur: "Snk9",
      region: "Est",
      ville: "Douala",
      quartier: "Akwa",
      description: "Mise en place d'un fonds de soutien pour les startups innovantes dans divers secteurs.",
      image: "https://img.freepik.com/free-photo/innovation-creative-design-development-ideas-concept_53876-15871.jpg?uid=R145003395&ga=GA1.1.506201312.1736953208&semt=ais_hybrid",
      latitude: 4.0503,
      longitude: 9.7674
    },
    {
      id: 10,
      secteur: "Infrastructures",
      titre: "Construction d'un pont urbain",
      promoteur: "Snk10",
      region: "Extrême-Nord",
      ville: "Yaoundé",
      quartier: "Nlongkak",
      description: "Construction d'un pont pour améliorer la fluidité du trafic dans la capitale.",
      image: INFRASTRUCTURE,
      latitude: 3.8480,
      longitude: 11.5021
    }
    // Ajoutez plus de projets ici...
  ]);



  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSecteur = filters.secteur
        ? project.secteur === filters.secteur
        : true;
      const matchesVille = filters.ville
        ? project.ville.toLowerCase().includes(filters.ville.toLowerCase())
        : true;
      return matchesSecteur && matchesVille;
    });
  }, [filters, projects]);

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
        <img src={PROJETS} alt="" className="absolute inset-0 -z-10 size-full w-100 object-cover object-right md:object-center opacity-35" />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-20" ></div>
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30" ></div>
        </div>

        <div className="mx-auto max-w-2xl">
          <h2 className="text-5xl font-semibold tracking-tight text-white text-center">
            Banque de Projets
          </h2>
        </div>
      </div>
      <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
        <NavLink className="text-slate-500 hover:text-slate-600" to={'/'}>Accueil</NavLink>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <NavLink className="text-slate-500 hover:text-slate-600" to={'#'}>Banque de projet</NavLink>
      </div>
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Filters Sidebar */}
        <Filters filters={filters} setFilters={setFilters} />

        {/* Main Content */}
        <div className="flex-1">
          {/* Pagination (Top) */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded-md text-sm font-semibold text-gray-700 disabled:opacity-50"
            >
              Précédent
            </button>
            <div className="text-sm text-gray-700">
              Page {currentPage} sur {totalPages}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded-md text-sm font-semibold text-gray-700 disabled:opacity-50"
            >
              Suivant
            </button>
          </div>

          {/* Projects List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <NavLink 
                key={project.id} 
                to={`/projets/detailsProjets/${project.id}`} 
                className="block hover:shadow-lg transition"
              >
                <ProjectCard
                  id={project.id}
                  secteur={project.secteur}
                  titre={project.titre}
                  ville={project.ville}
                  quartier={project.quartier}
                  description={project.description}
                  image={project.image}
                  latitude={project.latitude}
                  longitude={project.longitude}
                />
              </NavLink>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">
                Aucun projet prévu dans cette ville
              </p>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Projets;
