import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  secteur: string;
  titre: string;
  ville: string;
  quartier: string;
  description: string;
  image: string;
  latitude: number,
    longitude: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  titre,
  description,
  image,
}) => {
  return (
    <a  className="block">
      <motion.div
       
        className="relative bg-gray-200 shadow-md overflow-hidden"
      >
        <motion.div className="relative" whileHover={{ x: 2 }}>
          <img
            src={image}
            alt={titre}
            className="w-full h-48 object-cover"
            onError={(e) => (e.currentTarget.src = "/default-placeholder.jpg")}
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <p className="text-white p-4">{description}</p>
            <NavLink 
  to={`/projets/detailsProjets/${id}`} 
  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
>
  Plus de détails...
</NavLink>

          </motion.div>
        </motion.div>
        <div className="p-4 min-h-[100px]"> {/* Ajout de min-h-[150px] pour fixer une hauteur minimale */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{titre}</h3>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
