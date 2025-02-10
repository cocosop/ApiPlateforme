import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ProjeTypes } from '../../types'; // Mettez à jour le chemin vers votre fichier types
import ActionButtonComponent from '../../components/actionButtonComponent/actionButtonComponent';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import CAO1 from "../../assets/img/cao1.jpg";
import CAO2 from "../../assets/img/cao2.jpg";
import CAO3 from "../../assets/img/cao3.jpg";
import CAO4 from "../../assets/img/cao4.jpg";
type DetailProjetProps = {
  projects: ProjeTypes[];
};

const DetailProjet: React.FC<DetailProjetProps> = ({ projects }) => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(proj => proj.id === parseInt(id || '', 10));

  if (!project) {
    return <Typography variant="h6">Projet introuvable</Typography>;
  }

  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if (project.latitude && project.longitude) {
        setCoords({ lat: project.latitude, lon: project.longitude });
      } else {
        const query = `${project.quartier}, ${project.ville}, Cameroon`;
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.length > 0) {
            setCoords({ lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) });
          } else {
            console.log("Localisation non trouvée.");
          }
        } catch (error) {
          console.error("Erreur de récupération des coordonnées:", error);
        }
      }
    };

    fetchLocation();
  }, [project.ville, project.quartier]);


  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Titre */}
        <h1 className="text-center text-2xl font-bold text-blue-900">
          {project.titre}
        </h1>
        <p className="text-center text-gray-600">{project.ville}, {project.quartier}</p>

        {/* Images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          <img
            src={CAO1}
            alt="Cacao"
            className="rounded-lg w-full h-32 object-cover"
          />
          <img
            src={CAO2}
            alt="Cacao"
            className="rounded-lg w-full h-32 object-cover"
          />
          <img
            src={CAO3}
            alt="Cacao"
            className="rounded-lg w-full h-32 object-cover"
          />
          <img
            src={CAO4}
            alt="Cacao"
            className="rounded-lg w-full h-32 object-cover"
          />
        </div>

        {/* Contenu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Description */}
          <div className="md:col-span-2 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-900">Description</h2>
            <p className="text-gray-700 mt-2 text-justify">
              {project.description}
            </p>
          </div>

          {/* Investissement */}
          <div>
            <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
              <h2 className="text-red-600 font-bold">
                Investissement Initial de 5 millions de dollars
              </h2>

              <ul className="mt-2 text-gray-700">
                <li>
                  <strong>Secteur:</strong> {project.secteur}
                </li>
                <li>
                  <strong>Adresse :</strong> {project.ville}, {project.quartier}
                </li>

                <li>
                  <strong>Promoteurs :</strong> {project.promoteur}
                </li>
              </ul>

              <div className="mt-4">
                <a href="/login" className="block">
                  <ActionButtonComponent title="Investissez maintenant" color="#DC2123" />
                </a>
              </div>
            </div>

            {/* Documentation sous Investissement */}
            <div className="bg-gray-100 p-4 rounded-lg mt-6">
              <h2 className="text-lg font-semibold text-blue-900">
                Documentation
              </h2>
              <div className="mt-2">
                <div className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V8l-6-6h-4zM14 3.5V8a1 1 0 001 1h4.5L14 3.5zM10 6H4a2 2 0 00-2 2v12a2 2 0 002 2h6v-2H4V8h6V6z" />
                  </svg>
                  <a href="#" className="text-red-500 font-semibold">
                    Présentation PDF du Projet
                  </a>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <svg
                    className="h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V8l-6-6h-4zM14 3.5V8a1 1 0 001 1h4.5L14 3.5zM10 6H4a2 2 0 00-2 2v12a2 2 0 002 2h6v-2H4V8h6V6z" />
                  </svg>
                  <a href="#" className="text-red-500 font-semibold">
                    Étude de Faisabilité
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carte */}
        <div className="mt-6">
          <h2 className="text-center text-xl font-semibold text-blue-900 mb-4">
            Localisation du Site d'Investissement
          </h2>
          {coords ? (
            <MapContainer center={[coords.lat, coords.lon]} zoom={13} className="w-full h-96 rounded-lg" style={{ zIndex: 1 }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[coords.lat, coords.lon]}>
                <Popup>{`${project.titre} - ${project.quartier}, ${project.ville}`}</Popup>
              </Marker>
            </MapContainer>
          ) : (
            <p className="text-center text-gray-500">Chargement de la carte...</p>
          )}
        </div>
      </div>
    </div>



  );
};

export default DetailProjet;