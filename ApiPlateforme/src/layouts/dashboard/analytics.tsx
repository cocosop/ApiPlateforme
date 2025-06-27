import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaChartLine, FaCheckCircle, FaSpinner, FaClock, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import projectService from '../../services/projectService';

type Stage = {
  titre: string;
  status: string;
  date: string;
};

type Projet = {
  titre: string;
  description: string;
  ville: string;
  region: string;
  quartier: string;
  status: string;
  budget: number;
  ROI: number;
  montant: number;
  dateDebut: string;
  dateFin: string;
  // documents: string[];
  stages: Stage[];
};

const SuiviProjetDetail: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const projectTitle = useParams().titre;
  const [projet, setProjet] = useState<Projet>({
    titre: '',
    description: '',
    ville: '',
    region: '',
    quartier: '',
    status: '',
    budget: 0,
    ROI: 0,
    montant: 0,
    dateDebut: '',
    dateFin: '',
    // documents: [],
    stages: [],
  });
  const [editProjet, setEditProjet] = useState<Projet>({ ...projet });

  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-700';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleProjectStatus = (status: string) => {
    if (status.toLowerCase() === 'pending') {
      return 'En attente';
    } else if (status.toLowerCase() === 'rejected') {
      return 'Rejeté';
    } else if (status.toLowerCase() === 'studying') {
      return 'En étude';
    }
    return '';
  }

  const handleEditClick = () => {
    setEditProjet({ ...projet });
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setProjet({ ...editProjet });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditProjet(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleJalonChange = (index: number, field: keyof Stage, value: string) => {
    const updatedJalons = [...editProjet.stages];
    updatedJalons[index] = {
      ...updatedJalons[index],
      [field]: value
    };
    setEditProjet(prev => ({
      ...prev,
      jalons: updatedJalons
    }));
  };

  // const handleDocumentChange = (index: number, value: string) => {
  //   const updatedDocuments = [...editProjet.documents];
  //   updatedDocuments[index] = value;
  //   setEditProjet(prev => ({
  //     ...prev,
  //     documents: updatedDocuments
  //   }));
  // };

  // const addDocument = () => {
  //   setEditProjet(prev => ({
  //     ...prev,
  //     documents: [...prev.documents, 'Nouveau document.pdf']
  //   }));
  // };

  // const removeDocument = (index: number) => {
  //   setEditProjet(prev => ({
  //     ...prev,
  //     documents: prev.documents.filter((_, i) => i !== index)
  //   }));
  // };

  const addJalon = () => {
    setEditProjet(prev => ({
      ...prev,
      stages: [...prev.stages, { titre: 'Nouveau jalon', status: 'à venir', date: new Date().toISOString().split('T')[0] }]
    }));
  };

  const removeJalon = (index: number) => {
    setEditProjet(prev => ({
      ...prev,
      stages: prev.stages.filter((_, i) => i !== index)
    }));
  };

  const renderEditableField = (name: keyof Projet, label: string, isTextarea = false) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {isTextarea ? (
        <textarea
          name={name}
          value={editProjet[name] as string}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          rows={3}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={editProjet[name] as string}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      )}
    </div>
  );

  const fetchProject = async () => {
    const res = await projectService.getProject(projectTitle ?? '');
    try {
      setProjet(res.data);
      setEditProjet(res.data);
    } catch (error) {
      console.error("Erreur lors de la récupération du projet :", error);
    }
  };

  const handleProgressionProject = (project: Projet) => {
    if (!project.stages || project.stages.length === 0) return 0;
    const completedStages = project.stages.reduce((acc, stage) => {
      if (stage.status.toLowerCase() === 'completed') {
        return acc + 1;
      }
      return acc;
    }, 0);
    return Math.round((completedStages / project.stages.length) * 100);
  };

  useEffect(() => {
    fetchProject();
  }, [projectTitle]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-gray-100 my-8">
      {/* Header Section with Edit Button */}
      <div className="flex justify-between items-start pb-6 border-b border-gray-200 mb-6">
        <div className="flex-1">
          {isEditing ? (
            renderEditableField('titre', 'titre du projet')
          ) : (
            <h1 className="text-3xl font-extrabold text-indigo-900 mb-2">
              {projet.titre}
            </h1>
          )}

          {isEditing ? (
            renderEditableField('description', 'Description', true)
          ) : (
            <p className="text-gray-700 leading-relaxed mb-3">
              {projet.description}
            </p>
          )}

          {isEditing ? (
            <>
              {renderEditableField('region', 'Région')}
              {renderEditableField('ville', 'Ville')}
              {renderEditableField('quartier', 'Quartier')}
            </>
          ) : (
            <p className="text-sm text-gray-500 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-indigo-500" />
              {projet.region}, {projet.ville}, {projet.quartier}
            </p>
          )}
        </div>

        <div className="ml-4">
          {isEditing ? (
            <div className="flex space-x-2">
              <button
                onClick={handleSaveClick}
                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                title="Enregistrer"
              >
                <FaSave />
              </button>
              <button
                onClick={handleCancelClick}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                title="Annuler"
              >
                <FaTimes />
              </button>
            </div>
          ) : (
            <button
              onClick={handleEditClick}
              className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors"
              title="Modifier"
            >
              <FaEdit />
            </button>
          )}
        </div>
      </div>

      {/* Progress & Status Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Avancement Global</h3>
          <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden shadow-inner">
            <div className="relative w-full h-6">
              <div
                className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${handleProgressionProject(projet)}%` }}
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold pointer-events-none">
                {handleProgressionProject(projet)}%
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <p className="text-md font-medium text-gray-600 mb-2">Statut Actuel du Projet</p>
          {isEditing ? (
            <select
              name="statut"
              value={editProjet.status}
              onChange={handleInputChange}
              className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusClasses(editProjet.status)}`}
            >
              <option value="STUDYING">En étude</option>
              <option value="ACCEPTED">Accepté</option>
              <option value="REJECTED">Rejeté</option>
            </select>
          ) : (
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${getStatusClasses(projet.status)}`}>
              {handleProjectStatus(projet.status).toLowerCase() === 'en attente' && <FaSpinner className="animate-spin mr-2" />}
              {handleProjectStatus(projet.status).toLowerCase() === 'completed' && <FaCheckCircle className="mr-2" />}
              {handleProjectStatus(projet.status).toLowerCase() === 'studying' && <FaClock className="mr-2" />}
              {handleProjectStatus(projet.status).toLowerCase() === 'rejected' && <FaTimes className="mr-2" />}
              {handleProjectStatus(projet.status)}
            </span>
          )}
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      {/* Financial and Timeline Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-5">Détails Financiers & Temporels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 flex flex-col items-start justify-center">
            <FaMoneyBillWave className="text-blue-600 text-2xl mb-2" />
            <p className="text-sm text-gray-600">Financement Total</p>
            {isEditing ? (
              <input
                type="text"
                name="budget"
                value={editProjet.budget}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="font-bold text-lg text-blue-900">{projet.budget ?? 0}</p>
            )}
          </div>
          <div className="bg-green-50 p-5 rounded-lg border border-green-100 flex flex-col items-start justify-center">
            <FaMoneyBillWave className="text-green-600 text-2xl mb-2" />
            <p className="text-sm text-gray-600">Montant Investi</p>
            {isEditing ? (
              <input
                type="text"
                name="montant"
                value={editProjet.montant}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="font-bold text-lg text-green-900">{projet.montant ?? 0}</p>
            )}
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 flex flex-col items-start justify-center">
            <FaChartLine className="text-purple-600 text-2xl mb-2" />
            <p className="text-sm text-gray-600">Taux de Retour Prévu</p>
            {isEditing ? (
              <input
                type="text"
                name="tauxRetour"
                value={editProjet.ROI}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="font-bold text-lg text-purple-900">{projet.ROI ?? 0}%</p>
            )}
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 flex flex-col items-start justify-center">
            <FaCalendarAlt className="text-yellow-600 text-2xl mb-2" />
            <p className="text-sm text-gray-600">Durée du Projet</p>
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="date"
                  name="debut"
                  value={editProjet.dateDebut}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="date"
                  name="finPrevue"
                  value={editProjet.dateFin}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            ) : (
              <p className="font-bold text-lg text-yellow-900">
                {projet.dateDebut ?? '0'} ➜ {projet.dateFin ?? '0'}
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      {/* Milestones (Jalons) Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-semibold text-gray-800">Jalons Clés du Projet</h3>
          <button
            onClick={addJalon}
            className="px-3 py-1 bg-indigo-500 text-white rounded-md text-sm hover:bg-indigo-600"
          >
            + Ajouter un jalon
          </button>
        </div>
        <div className="space-y-4">
          {(isEditing ? editProjet.stages : projet.stages).map((stage, index) => (
            <div
              key={index}
              className={`flex items-center p-4 rounded-lg shadow-sm border
                ${stage.status === 'terminé' ? 'bg-green-50 border-green-200' :
                  stage.status === 'en cours' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-gray-50 border-gray-200'}`}
            >
              <div className="flex-shrink-0 mr-4">
                {stage.status === 'terminé' && <FaCheckCircle className="text-green-600 text-2xl" />}
                {stage.status === 'en cours' && <FaSpinner className="animate-spin text-yellow-600 text-2xl" />}
                {stage.status === 'à venir' && <FaClock className="text-blue-600 text-2xl" />}
              </div>
              <div className="flex-grow">
                {isEditing ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={stage.titre}
                      onChange={(e) => handleJalonChange(index, 'titre', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-gray-400" />
                      <input
                        type="date"
                        value={stage.date}
                        onChange={(e) => handleJalonChange(index, 'date', e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="font-medium text-gray-900 text-lg">{stage.titre}</p>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <FaCalendarAlt className="mr-2 text-gray-400" />
                      Date prévue : {stage.date}
                    </p>
                  </>
                )}
              </div>
              {isEditing ? (
                <div className="flex flex-col items-center space-y-2 ml-4">
                  <select
                    value={stage.status}
                    onChange={(e) => handleJalonChange(index, 'status', e.target.value as Stage['status'])}
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusClasses(stage.status)}`}
                  >
                    <option value="terminé">terminé</option>
                    <option value="en cours">en cours</option>
                    <option value="à venir">à venir</option>
                  </select>
                  <button
                    onClick={() => removeJalon(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Supprimer
                  </button>
                </div>
              ) : (
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusClasses(stage.status)}`}>
                  {stage.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      {/* Documents Section */}
      {/* <div>
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-semibold text-gray-800">Documents Liés</h3>
          {isEditing && (
            <button
              onClick={addDocument}
              className="px-3 py-1 bg-indigo-500 text-white rounded-md text-sm hover:bg-indigo-600"
            >
              + Ajouter un document
            </button>
          )}
        </div>
        <ul className="space-y-3">
          {(isEditing ? editProjet.documents : projet.documents).map((doc, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center">
                <FaFileAlt className="mr-3 text-blue-500 text-xl" />
                {isEditing ? (
                  <input
                    type="text"
                    value={doc}
                    onChange={(e) => handleDocumentChange(i, e.target.value)}
                    className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                ) : (
                  <a href="#" className="font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200">
                    {doc}
                  </a>
                )}
              </div>
              {isEditing && (
                <button
                  onClick={() => removeDocument(i)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <FaTimes />
                </button>
              )}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default SuiviProjetDetail;