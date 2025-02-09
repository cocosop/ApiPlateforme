import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ProjeTypes } from '../../types'; // Mettez à jour le chemin vers votre fichier types
import ActionButtonComponent from '../../components/actionButtonComponent/actionButtonComponent';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet"; // Import du type
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

const [mapUrl, setMapUrl] = useState("");
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
                <img
                  src="/images/pdf-icon.png"
                  alt="PDF"
                  className="w-8"
                />
                <a href="#" className="text-red-500 font-semibold">
                  Présentation PDF du Projet
                </a>
              </div>
              <div className="flex items-center space-x-3 mt-2">
                <img
                  src="/images/pdf-icon.png"
                  alt="PDF"
                  className="w-8"
                />
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
            <MapContainer center={[coords.lat, coords.lon]} zoom={13} className="w-full h-96 rounded-lg">
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