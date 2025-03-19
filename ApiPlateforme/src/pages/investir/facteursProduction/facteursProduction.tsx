import { NavLink } from 'react-router-dom'
import { useState } from "react";
import { Droplet, Plane, Truck, Users, X, MessageSquare, Phone, Wifi, Cog, } from "lucide-react";
import Courant from './../../../assets/img/energie.jpg'
import Telecom from './../../../assets/img/telecommunication.jpg'
import Assurance from './../../../assets/img/assurance.jpg'
import Bank from './../../../assets/img/bank.jpg'
import Transport from './../../../assets/img/transport.jpg'
import Terrain from './../../../assets/img/terrains.jpg'
import Personnel from './../../../assets/img/personnel.jpg'
import Intrant from './../../../assets/img/intrants.jpg'
import Facteur from './../../../assets/img/production.jpg'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ProjectCard from '../../../components/projetCard/projetCard';
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"
import {  } from "lucide-react";
import MainOeuvre from '../../../components/mainOeuvre/mainOeuvre';
import Foncier from '../../../components/foncier/foncier';
import FiscalitePage from '../../../components/fiscalite/fiscalite';
import ProductionCostsBySector from '../../../components/coutProdSecteur/coutProdSecteur';

interface Factor {
  name: string;
  description: string;
  image: string;
  details?: JSX.Element; // Optional details
}
const FacteursProduction = () => {
  const [projects] = useState([
    {
      id: 1,
      secteur: "Agro-industrie",
      titre: "Exploitation de plantation de cacao",
      ville: "Douala",
      quartier: "Bonaberi",
      description: "Mise en place d'une plantation moderne de cacao avec une production annuelle de 50 tonnes.",
      image: CACAO,
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    },
    {
      id: 2,
      secteur: "Énergie",
      titre: "Parc solaire de 20 MW",
      ville: "Garoua",
      quartier: "Ngaoundere route",
      description: "Construction d'un parc solaire pour fournir de l'énergie propre à la région du Nord.",
      image: ENERGIE,
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    },
    {
      id: 3,
      secteur: "Numérique",
      titre: "Plateforme de paiement mobile",
      ville: "Yaoundé",
      quartier: "Bastos",
      description: "Développement d'une application de paiement mobile visant à faciliter les transactions financières locales.",
      image: "https://img.freepik.com/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384825.jpg?t=st=1738099850~exp=1738103450~hmac=263dee2608a764be0cc905367387bf817f98c3b6a3df41a0103a348fa8777175&w=996",
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    }
    // Ajoutez plus de projets ici...
  ]);
  const [zone, setZone] = useState('Zone 1');

  const data = [
    { name: "Ferroviaire", cost: 40 },
    { name: "Routier", cost: 90 },
    { name: "Maritime", cost: 150 },
    { name: "Aérien", cost: 2600 },
    { name: "Personnel", cost: 7500 },
  ];

  const landData = [
    { name: 'Bonabéri', cost: 680 },
    { name: 'Bassa', cost: 480 },
    { name: 'Bassa (Zone Franche)', cost: 720 },
    { name: 'Terrains aménagés', cost: 300 },
    { name: 'Terrains bâtis', cost: 1000 },
  ];
    const [selectedFactor, setSelectedFactor] = useState<Factor | null>(null);
  const closeModal = () => setSelectedFactor(null);
  const factors = [
    {
      name: "Frais d'achat des intrants",
      description: "Coût lié à l'achat des matériaux nécessaires à la production.",
      image: Intrant,
      details: (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-4">Frais d'Achat des Intrants</h2>

          <div className="space-y-4">
            {/* Définition des intrants */}
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-600">Définition des Intrants</h3>
              <p className="text-gray-700">
                Les « intrants » comprennent les matières premières, consommables, accessoires, outillages et machines importés.
                Les produits achetés localement au Cameroun sont considérés comme sans frais d’achat supplémentaires.
              </p>
            </div>

            {/* Tarif douanier */}
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-600">Tarif Douanier</h3>
              <p className="text-gray-700">
                Le tarif douanier sur les produits importés varie de 0% à 81%.
              </p>
            </div>

            {/* Frais de transitaire */}
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-600">Frais de Transitaire</h3>
              <p className="text-gray-700">
                Les frais de transitaire s'élèvent à 50 000 FCFA (76,22 €), avec un maximum de 940 000 FCFA (1 433 €).
                À partir de 10 millions de FCFA (15 245 €), le tarif est de 0,5% par million supplémentaire.
              </p>
            </div>

            {/* Frais financiers */}
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-600">Frais Financiers</h3>
              <p className="text-gray-700">
                Les frais financiers relatifs aux achats varient entre 29 000 FCFA (44,21 €) + 2,35% et 39 000 FCFA (59,45 €) + 4,85%.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Transport",
      description: "Frais pour déplacer les marchandises ou les matériaux.",
      image: Transport,
      details: (
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
          {/* En-tête */}
          <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#0E600B] flex items-center gap-2">
              <Truck className="text-[#F5BA3A]" /> Détails du Transport
            </h2>
            <button onClick={closeModal} className="text-red-500 text-xl">
              <X />
            </button>
          </div>

          {/* Contenu */}
          <div className="p-4 space-y-6">
            {/* Cartes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-100 p-4 rounded-lg shadow flex gap-3">
                <Truck className="text-green-600" />
                <div>
                  <h3 className="font-semibold text-lg text-green-800">Transport de marchandises</h3>
                  <p className="text-sm">Coût moyen: 40 - 90 FCFA/T</p>
                </div>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow flex gap-3">
                <Droplet className="text-blue-600" />
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Transport de liquides</h3>
                  <p className="text-sm">Coût moyen: 135 FCFA/L</p>
                </div>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow flex gap-3">
                <Plane className="text-yellow-600" />
                <div>
                  <h3 className="font-semibold text-lg text-yellow-800">Transport aérien</h3>
                  <p className="text-sm">Coût moyen: 2 600 FCFA/Kg</p>
                </div>
              </div>
              <div className="bg-red-100 p-4 rounded-lg shadow flex gap-3">
                <Users className="text-red-600" />
                <div>
                  <h3 className="font-semibold text-lg text-red-800">Transport du personnel</h3>
                  <p className="text-sm">Coût moyen: 5 000 - 10 000 FCFA/Mois</p>
                </div>
              </div>
            </div>

            {/* Graphique */}
            <div className="w-full h-64 bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold text-[#0E600B]">Coût des Transports</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cost" fill="#F5BA3A" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bouton de fermeture */}
          <div className="sticky bottom-0 bg-white z-10 p-4 border-t flex justify-end">

          </div>
        </div>
      )
    },
    {
      name: "Terrain",
      description: "Coût d'acquisition ou de location de terrain pour l'activité.",
      image: Terrain,
      details: (<div className="bg-white p-6  shadow-xl max-w-4xl w-full max-h-100 overflow-y-auto">
        {/* En-tête */}
        <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[#0E600B]">Détails des Terrains</h2>
          <button onClick={closeModal} className="text-red-500 text-xl">✖</button>
        </div>

        {/* Contenu */}
        <div className="p-4 space-y-6">
          {/* Cartes des tarifs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F5BA3A] p-4 rounded-lg text-white shadow-md">
              <h3 className="font-semibold">Terrains Aménagés</h3>
              <p className="text-lg">300 FCFA/m²/an</p>
            </div>
            <div className="bg-[#DC2124] p-4 rounded-lg text-white shadow-md">
              <h3 className="font-semibold">Terrains Bâtis</h3>
              <p className="text-lg">1000 - 3000 FCFA/m²/an</p>
            </div>
          </div>

          {/* Graphique */}
          <div className="w-full h-64 bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#0E600B]">Comparaison des Loyers</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={landData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cost" fill="#0E600B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pied de page */}

      </div>)
    },
    {
      name: "Énergie",
      description: "Dépenses en électricité, carburant, ou autres sources d'énergie.",
      image: Courant,
      details: (
        <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg overflow-y-auto max-h-[600px]">
          <h1 className="text-3xl font-bold mb-4 text-center text-green-700">Énergie</h1>

          <section className="mb-4 bg-white p-3 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2 text-green-800">Carburant</h2>
            <h3 className="font-medium">Prix des carburants :</h3>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              <li>Super Carburant : <span className="font-bold">840 FCFA/L</span></li>
              <li>Gasoil : <span className="font-bold">828 FCFA/L</span></li>
              <li>Pétrole : <span className="font-bold">336,99 FCFA/L</span></li>
            </ul>
          </section>

          <section className="mb-4 bg-white p-3 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Courant électrique</h2>
            <h3 className="font-medium">Clients basse tension :</h3>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              <li>≤ 110 kWh : 50 FCFA/kWh</li>
              <li>111 à 400 kWh : 79 FCFA/kWh</li>
              <li>401 à 800 kWh : 94 FCFA/kWh</li>
              <li>801 à 2000 kWh : 99 FCFA/kWh</li>
            </ul>
            <h3 className="font-medium mt-2">Clients non résidentiels :</h3>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              <li>≤ 110 kWh : 84 FCFA/kWh</li>
              <li>111 à 400 kWh : 92 FCFA/kWh</li>
              <li>401 à 1000 kWh : 99 FCFA/kWh</li>
            </ul>
          </section>

          <section className="mb-4 bg-white p-3 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">Gaz distribué</h2>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              <li>Bouteille de 12 kg : <span className="font-bold">6 500 FCFA</span></li>
              <li>Bouteille de 6 kg : <span className="font-bold">3 200 FCFA</span></li>
            </ul>
          </section>

          <section className="mb-4 bg-white p-3 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2 text-teal-800">Eau</h2>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              <li>Eau potable (particuliers) : <span className="font-bold">364 FCFA/m³</span></li>
              <li>Eau industrielle : <span className="font-bold">182 FCFA/m³</span></li>
              <li>Assainissement : <span className="font-bold">Pas d'assainissement structuré</span></li>
            </ul>
          </section>
        </div>

      )
    },
    {
      name: "Télécommunication",
      description: "Coûts pour les services de téléphonie et internet.",
      image: Telecom,
      details: (
        <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg p-6 relative">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#0F0B60]">📶 Télécommunications au Cameroun</h2>
          </div>

          {/* Contenu du Modal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Téléphonie Fixe */}
            <div className="border-l-4 border-[#DC2124] bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="text-[#DC2124]" size={24} />
                <h3 className="font-semibold text-lg">Téléphonie Fixe (CAMTEL)</h3>
              </div>
              <ul className="list-disc pl-5 text-left text-gray-700 space-y-1">
                <li>📞 De fixe à fixe : <strong>20 - 60 FCFA/min</strong></li>
                <li>📍 Intra-provincial : <strong>20 FCFA/min</strong></li>
                <li>🌍 National : <strong>82 FCFA/min</strong></li>
                <li>📱 Fixe à mobile : <strong>85 FCFA/min</strong></li>
              </ul>
            </div>

            {/* Téléphonie Mobile */}
            <div className="border-l-4 border-[#F5BA3A] bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="text-[#F5BA3A]" size={24} />
                <h3 className="font-semibold text-lg">Téléphonie Mobile</h3>
              </div>
              <ul className="list-disc pl-5 text-left text-gray-700 space-y-1">
                <li>📱 National : <strong>30 - 90 FCFA/min</strong></li>
                <li>📩 SMS national : <strong>50 FCFA</strong></li>
                <li>🌍 SMS international : <strong>125 - 200 FCFA</strong></li>
                <li>🌎 Appels internationaux : <strong>90 - 100 FCFA/min</strong></li>
              </ul>
            </div>

            {/* Internet & Fournisseurs */}
            <div className="border-l-4 border-[#0E600B] bg-gray-100 p-4 rounded-lg shadow-md md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <Wifi className="text-[#0E600B]" size={24} />
                <h3 className="font-semibold text-lg">Internet & Fournisseurs</h3>
              </div>
              <ul className="list-disc pl-5 text-left text-gray-700 space-y-1 mb-4">
                <li>💻 Faible débit : <strong>6.000 FCFA + 25.000 FCFA</strong></li>
                <li>🌐 ADSL : <strong>20.000 - 30.000 FCFA/mois</strong></li>
                <li>⚡ Haut débit : <strong>12.000 - 300.000 FCFA/mois</strong></li>
              </ul>

              {/* Logos des Fournisseurs */}
              <div className="flex justify-around items-center bg-white p-3 rounded-lg shadow-sm">
                <img src="data:image/png;base64,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" alt="CAMTEL" className="h-12" />
                <img src="data:image/jpeg;base64,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" alt="MTN" className="h-12" />
                <img src="data:image/png;base64,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" alt="Orange" className="h-12" />
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAwcEBgECCAX/xABBEAABAgQCBggCCAQGAwAAAAAAAQIDBAURBhIHEyExYXQzNTZBUXGxwhQyIiNSgZGhstEmQnPBFRYkNFNiJWTh/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEEAgMFBv/EADYRAAIBAwIGAAMGBQQDAAAAAAABAgMEEQUSITEyM0FxEyJRBhQ0YYHBI5GhsdEWUuHwFSRC/9oADAMBAAIRAxEAPwDJ0zT0V89I01rlbLpDWM5t9jnXsl/zNFeXFI7WlUk1KfortjfxK2Wd2MckzWENs2qJ2RhjkyUTtqxky2jVjLGwavgMsbBq+CDLGwavggyxsGr8hljYNX5DLGwavyGWNg1fkMsbBq+AyxsGr4IMsbBq+AyxsGr4IMsbBq+CDLGwavyGWNg1fkMsbBq+AyxtOFh8BkOJ1VhOTFpkTmJ4ITk1NM6MixJSK2Zl3rDjQVR7HJsVHJuMlJriV6kFJYZ6Spcys5TZWaclnRoLYi+aptLy5HkKi2TcSqdMCfxJK8r7itX60d/SFmk/ZpTGlc7UUTNaYs3RRIjSDaondGgy2jKRkbRlGRtGUZG0ZRkbRlGRtGUZG0ZRkbRlGRtGUZG0ZRkbRlGRtGUZG0ZRkbRlGRtGUZG0ZQNpwrQRtI3NJMHEie0yRqkjGjt+rd5E+DS0eicN9n6by0P0Q6MelHi6/dl7ZWel/tJK8r7itcdSO/oy/hP2aZDQqncgidqEG9IlRCGZpHbKQZ4GUDBzlAwMoGBlAwMoGBlAwMoGBlAwMoGBlAwMoGBlAwMoGBlAwMoGBlAwdVQEYI3ISa2iF6EmqSMaOn1bvJTPwaGuJ6Fw51BTuWZ+lDox6UeJr92XtlaaXe0sryvuK1xzR39G7UvZpsMqndgZDUMWb4olRNhBtSOyIQZYFgMCwGBYDAsBgWAwLAYFgMCwGBYDAsBgWAwLAYFgMCwGBYDAsBg4VAQyNyEo1shehkapGJMdG7yUy8FeXM9C4c6gp3LM9EOjHpR4iu/4svbKz0u9pJXlfcV7jqR3tF7T9mmwyqd2BkNMGWIkqbiDYjuDMEAAYAGABgAYAGABgAYAGABgAYAGABgAYAGAAcKSYsjcSjBkDzI1SMWY6N3kpl4K0uZ6Dw71BTuWZ6HSj0o8PX7svbK00u9pJXlfcVrjqR3tF7T9mnQiqd6BO0wZYiSpuINiO4MwQSgAAAAAAAAAAAAAAAAAAAAAAcKSYkbiUa2QPMjVIxZjo3eSmXgryPQmHeoKdyzPQ6UelHhq/dl7ZWel3tJK8r7itcdSO9ovafs06EVTvQJ2mDLESVNxBsR3BmCCUAAAAAAAAAAAAAAAAAAAAAADhSTEjcSjWyB5kapGLMdG7yUy8FeR6Ew71BTuWZ6HSj0o8NX7svbKz0u9pJXlfcVrjqR3tF7T9mnQiqd6BO0wZYiSpuINiO4MwQSgAAAAAAAAAAAAAAAAAAAAAAcKSYkbiUa2QPMjVIxZjo3eSmXgryPQmHeoKdyzPQ6UelHhq/dl7ZWel3tJK8r7itcdSO9ovafs06EVTvQJ2mDLESVNxBsR3BmCCUAAAABdPFBwHEdyKB7AAAABx5qhIOSCcMX22BAAAAAAB1ds3qifeSYsjdxJRreSF5kapGLMdG7yUy8FeR6Ew71BTuWZ6HSj0o8NX7svbKz0u9pJXlfcVrjqR3tF7T9mnQiqd6BO0wZYiSpuINiO4MwQSgAAAl+5OJKIfFYLOwZK4er1OTPTJZJyEiJGYl/xTgpeoqnNcjxupzvbSr1va+R8zH+FIUhDSo0uDkgN2RobE+X/ALGFejt4xLmjam6kvg1nx8GiKll4FRnpwQDhe4EFl4Gw/SqjhVJudk4caPnipnW99jlRC9RpxlDLPJate16N5shLC4FbRERIj0TcjlT8yk1hnq6b+VFk4Cw/SqlhlszPScONG1sRMzr3si7C7QpwlDLR5TV764pXeyEsLgVsvzOsltq7Ck+Z6qm8wTOCDYAQAT4LA0aUWnVWnzr6hKQ472R0a1z03JlRbF23hGS4o8vrt1WoVoqnLHD92aNW4TIFXnoMJqNhw5h7WInciLsQrySUmjs2snKhCT5tHzHkGyRizHRu8lMvBXkehMO9QU7lmeh0o9KPDV+7L2ys9LvaSV5X3Fa46kd7Re0/Zp0IqnegTsS+wwZYib7gjB0lXaT8dOR47frHMyQ7JsRd97FqjRjOOWcHU9VrWtb4dNeEbK3A2F4KokV8RV8HzVvQ2/ApHNes38uX9jFq+jqnRpZz6RFiwotrtRzs7XGMraLXym231+4hPFZZRWUSBGhTD5eJDVIzXqxWJtVHItlT8Sk008Hro1YSgqifylgUPR9Ltk2zVfmFh3S7obHI1GealuFukszPMXeu1JTcLZfqZy4NwtVGOZS5pWRW/wDFHz280W5l8GlLkaFq+oUMOquH5o0+NAqOCMQwno5FVNrXN2NjQ+9FK+JUZnbjOjqtq0/P9GW1Tp2UrlMZMQssSXjtVHsciLwVrkOhGUZxyeMrUalrWcXwa/7kqXGeG3UCoLqrrIxVV0F32f8Aqpz61LY8+D2ulairqltl1L+p9rB2CYFRpqz9Y1rYURLwWtdlXL9pVNlG3Uo5kc/VNZqUqvwrd5xz9mDTKJRq1iuNTpN8dklDhuyxM6K57k7/AC/YxjCEqm1cjdWvLq2s41amHJv6eCyqFRYFGpX+Hy0R7oV3Lmeu1cyqq+pdhBRjg8rdXdS5rfFlzNedo1pLnOcs3Noqqq/M39jS7aDZ1Ia9cxWMI2ShUaBQ6c2QlXviQ0c51379q7TdCCjHajmXV1O5q/EnzNXj6NqW1j3/ABc3dqK7ehpdtHmdSnr1xwjheEaXhfDMziCZejXJBl4S2iRlS+3wRPEq0qLm/wAj0F/qkbOCzxk/Bui4SwjJL8POzK69f+WYyr+CWLPwaUeZ5/8A8rqNX5oLh+SPjYmwGknJunqNFfHhMbndCcqKuXxaveYVbdJZiX7DXHOfw7hYfh/5Pq6ILLTKhZbp8Sn6EM7Xkyp9o+/HP0/dld4h69qPNRP1KVZ9bPQWf4aHo+S8g3SMWY6N3kpl4K8j0Jh3qCncsz0OlHpR4av3Ze2Vnpd7SSvK+4rXHUjvaL2n7NOhFU70CdpgyxEuDRZ2Tif14het+g8frn4z9EVZNvf8XM3e5frn71X7SlKTeWewoRiqUeHhf2LC0T1CPEfPSUV7nwYbWxIeZbq26qiohbtZN8Gea+0VvCm41IrDeSJkjDmNLEdFYmrhfXKifayJ+5CjmsTK4lT0dJeeH9T7OO6HWK6+BAp74TZRiK57Xvy5nd1+CJ6m2vCc+CKGlXltaOUqibl4Nap2BMRSE7BmpeJLMiQ3It2xl3X2pu8zRG3nGWTrXOtWlenKEk+PLgfb0sQWuo0jMKiJFZMIxFTi1VVPyNlyvkTKP2em/vMoLyjUsE4kfQqi2FFzPkZlyNiN72qu5yf3NFCpteDtavp8bmlvXUvP1LYrVKlq1TYklNJeHEb9F3e1e5UL84qccM8ZbXE7eqpwfFFaVfEdUp1Ji4amf91AdqnTKL88H+X71S33FOpWlGOzyeqtNOoXFZXkemXHH5+TT4b3w1V0N7mrfei2Uq8UzvyhGXCSLd0dPfEwajnxHudrI30lW6/Mp0aDzT4niNZjGN80l9CqIk1Nax/+oi/Mv86+JRc5ZPY07ek4rMVyXgtrRlEe/CbXRHOc7XRdrluu8vUHmHE8ZrMYxvGorHBFSOmpnM5EmItrrs1i+JQlJ5weyhQpOC+Vcl/YuDCUlEksFSrJNG/ExYGtRzl3vft2/ih0KUcU+B4jUaqqX0nPknj9EaVH0f4gmYr4sd8s+I9VVz3RVVVVd/cVnbVHxZ3qeuWdOKjGL4G6YJpNUpVOjyVWfCfDR31SNcrrNVNqfiWqMJQWJHC1K6oV6qqUVj6+zC0aQ2QHV2BD+Rk+5Gp4bEMKC5ljWJufwpP/AGlY4h69qPNRP1KU59bPT2f4aHo+S8g3SMWY6N3kpl4K8j0Jh3qCncsz0OlHpR4av3Ze2Vnpd7SSvK+4rXHUjvaL2n7NOhFU70CdhgyxEuDRZ2UiJ36+JsL9v0Hj9c/Gfoiq5r/dzH9Z/wCpSjLmz2VDtx9L+xvGiPrSof0W+qlm15s8/wDaToh+pLHqEOnaVY0SMtmRcsJy9yXYlg5bazNcaDraOkua4mw43ZX0hQpnD8eKqQ0VIsGGiXcnc5P2N9bfjMGcvTHaObhcLnyZorK/jB8TVMizznpsy6nb6FX4lY9C7PSksvH8zCxHOYgiQ4MvXXx2oq62GyK1E27Uv+amE5TXCRZsKNmm522M8uBsejnC/wARFSsTzLwWL/p2OT5nfa+7uN1vR/8ApnL1vUsf+vSfv/BuGL6/CoFNdESz5mIitgw/F3j5IWKtRQjwOHp1jO7qqPhczVGYThVfCbahAmEmqrHVZh0e62e5d7Pu3Gl0lUp58nXWpytr34TjiC4Y/cr17VY5zHorVatlau9FQpNYeGesjJS+ZcmWzoxekXCawGr9JkaK1y8VW6fkqHQt+MMHiNcW29y/oitahR6hKz0aXiScbO162yw1VFS+xUKU6ck+R6q3vbedKMt65fUsvRe5Ew0sFdkWFMRGvaqbWrcvW/Rg8prn4vf4wis56j1GTn4stGlIyxGvVLtYqo5L7FQoypyUuR6q3vbedKL3Ll9S1sFTbqhhKDLtiOgzcvDWXiXT6UNzdiLb8DoUnmHo8dqVP4V25PjF8f5mlVSpYzpUysCZmJpbKtnsh5muTxRUT8itOVaLwd62oaXXpqSwmdYVVxrGgxIzXTywmNVznLCRqIib95jurPiZyt9KjJR4ZNj0SxHRZGpxHuzOfNZlcvfdiG62eU2zmfaGEYVYRjyS/dlc4iT/AM7UuaifqUqz62ehs/w0PR8h5BukYsx0bvJTLwV5HoTDvUFO5ZnodKPSjw1fuy9srPS72kleV9xWuOpHe0XtP2adCKp3oE7eBgzfE3LC2M1oFK+B+C193ufn1lt/3G+nX2LByb7SHdV/iqWORq8RyPiveiWzvc63hdbmhvLydunHbBR+h9vCWIf8uzMxG+G1+uY1ls1rWVV/ubKVVU3yOfqWn/fYxWcYMPEFT/xmrzFQWFqtblszNe1kRN/3GE57pZLFlaK2oRpN5xk2OgaQZynS7JafgrNwmJZr0dleif3N9O5cVhnJvNAhVk50nhs+2/SdJIy8KQmXP8HORENv3mP0OfH7O13wckfLgvj6Qq3BfFlWy8lKIute1bq5F/lv4/8A0x41pLhwLM4rR6D2yzKXD/ksKcm5OjUx8aKrYMtAZsanDcicS05KEcnnKVOpcVVBcWylK/WY9cqUScmboi/Rhsv0bf3OZUqOcss9/Y2cLWiqcf1/NmfhfFk3h6FFhQ4TI0CJt1b1VMrvFDOnXcCtf6TC8alnDPnVyosqtRfOslmS7ovSMYt0VfHzNc5bnks2VrK2p/Dcs4MzC2JZjDseI6HD10CLbWwVW21O9OJnSrOBp1HTYXq54kuRui6TZBGZkp8znt8uZvqWPvUfocD/AE7Xz1I1KkYsjUqszk7LwM0tNxFe+Xc7x4+JpjWcZZOxcaTGvbwpt/NHkzbE0myKQrrT5lX/AGcyepv+9R+hx/8ATtfPUjTJTEs3T65NVGnpq2TMV0R8By3at1vZeJW+M4z3I71TTIVbaNKpzXDJuErpNlXQ7TVPjNf35HIqKWVdRfNHDn9naql8klgxKrpJ+IgRIEpTrNe1Wq6M/uXghhK6TWEjdb/Z6UZbpz5Hw8JYt/y3KR4CSax9bER91iWtZET+xrpV9ixgvajpTvJqW7GDXKjMfFz8zNZcuviOiKiLuut7GEnmTZ0aVN0qcaec4RgvIEjFmOjd5KZeCvI9CYd6gp3LM9DpR6UeGr92XtlZ6Xe0kryvuK1x1I72i9p+zToRVO9AnaYMsRJU3EGxHcGYIABIAOU2ql1snincOb4kSzjK5liUPGlBotOhSctLTVmp9J2VPpO71UuwrwjHbg8ndaPeXNV1JSR8DGeKXV+LDhS7XQpKHtRjt73eKmmtW+JyOnpelqzTlPqZrJoO0AAAAAAAACMAEgDiAQdVJIZ0cSjWyB5kapGLMdG7yUy8FeR6Ew71BTuWZ6HSj0o8NX7svbKz0u9pJXlfcVrjqR3tF7T9mnQiqd6BO0wZYiSpuINiO4MwQSgAAAAxtAAAAAAAAAAAAAAAAABwpJiRuJRrZA8yNUjFmOjd5KZeCvI9CYd6gp3LM9DpR6UeGr92XtlZ6Xe0kryvuK1x1I72i9p+zToRVO9AnaYMsRJU3EGxHcGYIJQAAAAAAAAAAAAAAAAAAAAAAOFJMSNxKNbIHmRqkYsx0bvJTLwV5HoTDvUFO5ZnodKPSjw1fuy9srPS72kleV9xWuOpHe0XtP2adCKp3oE7TBliJKm4g2I7gzBBKAAAAAAAAAAAAAAAAAAAAAABwpJiRuJRrZA8yNUjFmOjd5KZeCvI9CYd6gp3LM9DpR6UeGr92XtlZ6Xe0kryvuK1x1I72i9p+zToRVO9AnaYMsRJU3EGxHcGYIJQAAAAAAAAAAAAAAAAAAAAAAOFJMSNxKNbIHmRqkYsx0bvJTLwV5HoTDvUFO5ZnodKPSjw1fuy9srPS72lleV9xWuOpHf0XtP2abDKp3YGQ0wZYiSpuINiO4MwQSgAAAAAAAAAAAAAAAAAAAAACDhSTFkbiUYMgf3mRqkYkx0bvJTLwVpcz0Jh3qCncsz0Q6UelHh6/dl7ZWml3tLK8r7itcc0d/Ru1L2abD3FU7sTIYuwxZuiStUg3I7IpBlkXAyLgC4AuALgC4AuALgC4AuALgC4AuALgC4AuBk4VQQyNyko1shcu8yNUjFmOjd5KZeCvLmehMOdQU7lmeiHRj0o8RX7svbKy0vL/EkryvuK9x1I7mj9p+zTGKVTuQZM1SDfFkqKQzYmd7kGWRcE5FwMi4GRcDIuBkXAyLgZFwMi4GRcDIuBkXAyLgZFwMi4GRcDJwqgjJG5TI1yZC9SUapMxZhfq3eSmXgryfE9DYc6gp3LM/Sh0Y9KPFV+7L2ysNMK/wASSq/+r7itX6kdvSO0/ZpTHFc7cWTNcYs3JkqOINiZ2RxBlkZgNxzmA3DMBuGYDcMwG4ZgNwzAbhmA3DMBuGYDcMwG4ZgNwzAbhmA3DMBuOMwI3HCuJGTo5wNbZE5xmjW2Y0dbw3eQ8GiTPROG+z9O5aH+lDox6UeOrv8Aiyz9SutM0hHbPU+pI1Vl3Q1gvd9l17pfz2miuuKZ09KqpKUMldtcV8HcjIla+xGDapM7pEIwbFI7awjBO4aziME7hrOIwN41nEYG8aziMDeNZxGBvGs4jA3jWcRgbxrOIwN41nEYG8aziMDeNZxGBvGs4jA3jWcRgbxrOIwN41nEYG8aziMDccK8YI3HRYhODByOjn8SUa5SwRshRZuMyWl2LEjRVyMane5dxklkrzqJcW+R6RpUsslTJSVcqKsGC1irxRNpeXBHkKnzycj/2Q==" alt="Nexttel" className="h-12" />
              </div>
            </div>

          </div>

          {/* Footer */}


        </div>

      )

    },
    {
      name: "Personnel",
      description: "Salaires et avantages sociaux pour les employés.",
      image: Personnel,
      details: (

        <div className="bg-white p-6 rounded-lg max-w-3xl w-full mx-auto shadow-md overflow-y-auto h-96">
          <h2 className="text-2xl font-bold text-center text-[#0F0B60] mb-4">
            Salaire et Cotisations dans le Secteur de l'Energie
          </h2>

          {/* Sélecteur de zone */}
          <div className="mb-4">
            <label className="text-gray-700 font-semibold mb-2 block">
              Sélectionner une zone
            </label>
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F0B60]"
            >
              <option value="Zone 1">Zone 1 (Douala, Yaoundé)</option>
              <option value="Zone 2">Zone 2 (Reste du pays)</option>
            </select>
          </div>

          {/* Section Salaire */}
          <div className="bg-[#F5BA3A] p-4 rounded-lg shadow-sm mb-4">
            <h3 className="text-lg font-semibold text-[#0F0B60]">Salaire Minimum</h3>
            <p className="text-md mt-2">36 270 FCFA (55,3 €)</p>
            <p className="text-sm mt-1 text-gray-600">Depuis 2014, aucun changement.</p>

            {/* Salaires par Catégorie */}
            <h3 className="text-lg font-semibold mt-4 text-[#0F0B60]">Salaires par Catégorie</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm">
                <span className="font-semibold">Cadre: </span> 267 000 - 457 000 FCFA
              </li>
              <li className="text-sm">
                <span className="font-semibold">Employés: </span> 129 000 - 325 000 FCFA
              </li>
              <li className="text-sm">
                <span className="font-semibold">Ouvriers: </span> 40 000 - 134 000 FCFA
              </li>
            </ul>
          </div>

          {/* Section Cotisations */}
          <div className="space-y-4 mb-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">Cotisations Familiales</div>
              <div className="text-sm text-gray-600">7%</div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-1">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '7%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">Cotisations Risques (Groupe A)</div>
              <div className="text-sm text-gray-600">1.75%</div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-1">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '1.75%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">Cotisations Pension</div>
              <div className="text-sm text-gray-600">8.4%</div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '8.4%' }}></div>
            </div>
          </div>

          {/* Autres Assurances Obligatoires */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-[#0F0B60]">Autres Assurances Obligatoires</h3>
            <ul className="space-y-1">
              <li className="text-sm">Redevance audiovisuelle (à charge de l’employé)</li>
              <li className="text-sm">Taxe d’apprentissage : 0,2 à 3%</li>
            </ul>
          </div>

          {/* Branches des Cotisations Sociales */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-[#0F0B60]">Branches des Cotisations Sociales</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-semibold">Prestations familiales :</span> Régime général : 7%, Régime agricole : 5,65%, Régime de l’enseignement privé : 3,70%, Régime domestique : 7%</p>
              <p><span className="font-semibold">Risques professionnels :</span> Groupe A : 1,75%, Groupe B : 2,50%, Groupe C : 5%</p>
              <p><span className="font-semibold">Pension de vieillesse et décès :</span> 8.4% (Répartition 4.2% employeur / 4.2% travailleur)</p>
            </div>
          </div>

          {/* Plafond des Cotisations */}
          <div className="bg-[#0E600B] p-4 rounded-lg text-white">
            <h3 className="text-lg font-semibold">Plafond des Cotisations</h3>
            <ul className="space-y-1 text-sm">
              <li> 750 000 FCFA/mois</li>
            </ul>
          </div>
        </div>
      )


    },
    {
      name: "Assurance",
      description: "Frais pour couvrir les risques liés à l'activité.",
      image: Assurance,
      details: (
        <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Assurance</h1>

          <section className="mb-0 bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sécurité globale (incendie et autre dégât)</h2>
            <ul className="list-disc list-inside text-gray-600">
              <h3>Taux de base pour les incendies immeubles :</h3>
              <ul className="list-disc list-inside ml-6">
                <li className='text-left'>Bureaux : <span className="font-bold">0,70 pour mille</span></li>
                <li className='text-left'>Habitations mixtes : <span className="font-bold">0,75 pour mille</span></li>
              </ul>
              <h3 className="mt-2">Les taux de base sont fonction de l'activité et peuvent varier selon la technicité de l'expert.</h3>
              <h5 >Valeur assurée = location annuelle × 15%</h5>
            </ul>
          </section>

          <section className="mb-0 bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Accident de travail</h2>
            <p className="text-gray-600 ">Inclus dans les charges sociales (cotisations de 1,5 à 5 % selon les secteurs d'activité).</p>
          </section>

          <section className="mb-0 bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Assurance transport</h2>
            <ul className="list-disc list-inside text-gray-600">
              <h3>Véhicules utilitaires de catégorie 2 en zone A :</h3>
              <ul className="list-disc list-inside ml-6">
                <li className='text-left'>Véhicules essence sans remorque de 11 à 14 chevaux : <span className="font-bold">121.212 FCFA</span></li>
                <li className='text-left'>Véhicules essence sans remorque de 15 à 23 chevaux : <span className="font-bold">150.086 FCFA</span></li>
              </ul>
            </ul>
          </section>
        </div>
      )
    },
    {
      name: "Frais bancaires",
      description: "Coûts liés aux services bancaires et financiers.",
      image: Bank,
      details: (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-4">Frais Bancaires</h2>

          <div className="space-y-4">
            {/* Intérêts */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-600">Taux d'intérêt</h3>
              <p className="text-gray-700">
                <strong>Intérêt Long Terme:</strong> 7% à 10% (affichés en 2011)
              </p>
              <p className="text-gray-700">
                <strong>Intérêt Moyen Terme:</strong> 11% à 17% (affichés en 2011)
              </p>
              <p className="text-gray-700">
                <strong>Intérêt Commercial:</strong> Taux libres, variant de 8% à 12% en 2016
              </p>
            </div>

            {/* Charges du service bancaire */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-600">Charges du Service Bancaire</h3>
              <ul className="text-gray-700">
                <li><strong>Minimum:</strong> 29 000 + 2,35%</li>
                <li><strong>Maximum:</strong> 39 000 + 4,85%</li>
              </ul>
            </div>

            {/* Dépôt à Terme */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-600">Dépôt à Terme</h3>
              <p className="text-gray-700">
                <strong>Taux appliqué:</strong> 3,5%
              </p>
            </div>

            {/* Taux d'intérêt sur crédits */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-600">Taux d'Intérêt sur Crédits</h3>
              <p className="text-gray-700">
                Les taux varient de 5% à 15% en moyenne, selon le type de crédit (immobilier, consommation, crédit scolaire).
              </p>
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
        <img src={Facteur} alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-30" />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-20" ></div>
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30" ></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl">
          <h2 className="text-5xl font-semibold tracking-tight text-white text-center">
            Facteurs de production
          </h2>
          <p className="mt-4 text-lg text-gray-300 italic text-center">
            Aligner les facteurs de production avec les objectifs d'investissement est essentiel pour optimiser les gains et réduire les coûts.          </p>

        </motion.div>
      </div>
      <div aria-label="Breadcrumbs" className="bg-gray-50 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-4 lg:p-6 border-spacing-1 overflow-scroll">
        <BreadcrumbsComponent
          breadcrumbs={[
            { name: 'Accueil', path: '/' },
            { name: "Guide de l'investisseur", path: '#' },
            { name: "Facteurs de production", path: '#' }
          ]}
        />
      </div>
      <div className="bg-white min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <div id="segments" title="Facteurs de Production pour l'Investissement au Cameroun">
            <h2 className="text-3xl font-bold mb-4"></h2>

            <p className="mb-4 text-justify">Au Cameroun, les coûts d'achat des intrants, y compris les matières premières et les équipements importés, varient en fonction des tarifs douaniers et des frais de transitaire. Le transport, qu'il soit ferroviaire, routier ou maritime, représente également un coût significatif pour les entreprises. Les terrains industriels, proposés en location par la MAGZI, offrent différentes options selon leur niveau d'aménagement. Les sources d'énergie telles que le carburant, l'électricité et le gaz sont fournies à des tarifs compétitifs, tandis que le réseau de télécommunications offre des services de téléphonie fixe et mobile, ainsi que des abonnements Internet adaptés aux besoins des entreprises.</p>

            <p className="mb-4 text-justify">Le personnel, avec des salaires variant selon les catégories et les zones géographiques, est un autre facteur crucial. Les entreprises doivent également prendre en compte les cotisations sociales et les assurances obligatoires pour leurs employés. Enfin, les frais bancaires, incluant les taux d'intérêt sur les crédits, jouent un rôle important dans la gestion financière des investissements.</p>

          </div>
          {/* Trait de séparation horizontal */}
          <h2 className="text-3xl font-bold text-center text-[#0F0B60]">
            Coûts de Production : Les Facteurs Clés à Anticiper
          </h2>
          {/* Barre de séparation */}
          <div className="w-80 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></div>

          {/* Message d'encouragement */}
          <p className="text-center text-gray-700 mb-6">
            "Découvrez les principaux postes de dépenses à prévoir pour assurer la rentabilité et la pérennité de votre investissement."      </p>
          <hr className="my-6 border-t-2 border-gray-300" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {factors.map((factor, index) => (
              <div
                key={index}
                onClick={() => setSelectedFactor(factor)}
                className="bg-white shadow-lg rounded-2xl p-6 border-l-8 border-[#F5BA3A] hover:shadow-2xl flex flex-col items-center text-center hover:scale-105 transform transition-transform duration-300 cursor-pointer"
              >
                {/* Icône commune pour tous les facteurs */}
                <div className="w-24 h-24 flex items-center justify-center mb-4">
                  <Cog size={96} className="text-[#0F0B60]" />
                </div>

      <h2 className="text-2xl font-semibold text-[#0F0B60] mb-2">{factor.name}</h2>
      <p className="text-gray-700 mb-4">{factor.description}</p>
      <button className="mt-auto bg-[#0E600B] text-white px-4 py-2 rounded-full hover:bg-[#0C550A] transition-colors duration-300">
        En savoir plus
      </button>
    </div>
  ))}
</div>;
      {selectedFactor && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl w-full mx-4">
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 absolute top-4 right-4 focus:outline-none"
                >
                  &times;
                </button>
                <div className="text-gray-700 text-center mb-6">{selectedFactor.details}</div>
                <button
                  onClick={closeModal}
                  className="bg-[#0E600B] text-white px-4 py-2 rounded-full hover:bg-[#0C550A] transition-colors duration-300 w-full"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
         
         {/* {section main d'oeuvre} */}
         <MainOeuvre/>
         {/* {section main d'oeuvre} */}
         <Foncier/>
          {/* {Fiscalité} */}
          <FiscalitePage/>
          {/* {Couts moyen par secteurs d'activité} */}
         <ProductionCostsBySector/>
        {/* Opportunités de stage */}
      <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        {/* Titre avec style attractif */}
        <h2 className="text-3xl font-bold text-center text-[#0F0B60]">
          Saisissez des Opportunités Uniques !
        </h2>
        {/* Barre de séparation */}
        <div className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></div>

        {/* Message d'encouragement */}
        <p className="text-center text-gray-700 mb-6">
          Investissez dès aujourd’hui dans des projets innovants et rentables pour bâtir l’avenir de l’économie camerounaise.
        </p>

        {/* Liste des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        {/* Lien Voir plus */}
        <div className="flex justify-center mt-8">
          <NavLink
            to="/projets"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
          >
            Voir plus de projets
          </a>
        </div>
      </div>
      </div>      
    </div>
  );
}

export default FacteursProduction



