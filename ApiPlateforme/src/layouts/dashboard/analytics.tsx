import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaChartLine, FaCheckCircle, FaSpinner, FaClock, FaEdit, FaSave, FaTimes, FaEllipsisV } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import projectService from '../../services/projectService';
import stageService from '../../services/stageService';

type Stage = {
  id?: number;
  title: string;
  description: string;
  seq: number;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'UPCOMING';
  date: string;
  projectId: number;
};

type Projet = {
  id?: number;
  titre: string;
  description: string;
  ville: string;
  region: string;
  quartier: string;
  status: string;
  budget: number;
  roi: number;
  montant: number;
  dateDebut: string;
  dateFin: string;
  url_image?: string; // Ajout d'un champ images (URLs ou base64)
  // documents: string[];
  stages: Stage[];
};

const SuiviProjetDetail: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingJalon, setIsAddingJalon] = useState(false);
  const [newJalon, setNewJalon] = useState<Omit<Stage, 'id'>>({
    title: '',
    description: '',
    seq: 1,
    status: 'UPCOMING',
    date: new Date().toISOString().split('T')[0],
    projectId: 0,
  });
  const [moreMenuIndex, setMoreMenuIndex] = useState<number | null>(null);
  const [editJalonIndex, setEditJalonIndex] = useState<number | null>(null);
  const projectTitle = useParams().titre;
  const [projet, setProjet] = useState<Projet>({
    url_image: '',
    titre: '',
    description: '',
    ville: '',
    region: '',
    quartier: '',
    status: '',
    budget: 0,
    roi: 0,
    montant: 0,
    dateDebut: '',
    dateFin: '',
    // documents: [],
    stages: [],
  });
  const [editProjet, setEditProjet] = useState<Projet>({ ...projet });
  const [image, setImage] = useState<string>(projet.url_image!);

  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-700';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'accepted':
        return 'bg-green-100 text-gray-700';
      case 'rejected':
        return 'bg-red-100 text-gray-700';
      case 'studying':
        return 'bg-blue-100 text-gray-700';
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
    } else if (status.toLowerCase() === 'accepted') {
      return 'Approuvé';
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
    projectService.updateProject(editProjet.titre, editProjet)
      .then(() => {
        // Optionnel : afficher un message de succès ou mettre à jour l'état
      })
      .catch(error => {
        console.error("Erreur lors de la mise à jour du projet :", error);
      });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditProjet(prev => ({
      ...prev,
      [name]: name === "budget" || name === "montant" || name === "roi"
        ? Number(value)
        : value
    }));
  };

  const handleNewJalonChange = (field: keyof Omit<Stage, 'id'>, value: string) => {
    setNewJalon(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddJalonClick = () => {
    setIsAddingJalon(true);
    setNewJalon({
      title: '',
      description: '',
      seq: (editProjet.stages?.length || 0) + 1,
      status: 'UPCOMING',
      date: new Date().toISOString().split('T')[0],
      projectId: projet.id ?? 0,
    });
  };

  const handleSaveJalon = async () => {
    if (!projet.id) return;
    const jalonToSend = {
      ...newJalon,
      seq: (editProjet.stages?.length || 0) + 1,
      projectId: projet.id,
      date: newJalon.date,
    };
    try {
      const res = await stageService.addStage(jalonToSend);
      setEditProjet(prev => ({
        ...prev,
        stages: [...prev.stages, res.data]
      }));
      setIsAddingJalon(false);
    } catch (e) {
      // Gérer l'erreur si besoin
    }
  };

  const handleCancelAddJalon = () => {
    setIsAddingJalon(false);
  };

  const handleRemoveJalon = async (index: number) => {
    const stage = editProjet.stages[index];
    if (stage.id) {
      await stageService.deleteStage(stage.id);
    }
    setEditProjet(prev => ({
      ...prev,
      stages: prev.stages.filter((_, i) => i !== index)
    }));
    setMoreMenuIndex(null);
  };

  const handleEditJalonSave = async (index: number) => {
    console.log('Saving stage at index:', index);
    const stage = editProjet.stages[index];
    if (!stage.id) {
      setEditJalonIndex(null);
      return;
    }
    try {
      await stageService.updateStage(stage.id, {
        ...stage,
        date: stage.date, // conversion ici aussi
      });
      setEditJalonIndex(null);
    } catch (e) {
      alert('Erreur lors de la sauvegarde du jalon. Veuillez réessayer.');
    }
  };

  const handleEditJalonCancel = () => {
    setEditJalonIndex(null);
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      setEditProjet(prev => ({ ...prev, url_image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImage('');
  };

  useEffect(() => {
    fetchProject();
  }, [projectTitle]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-gray-100 my-8">
      {/* Section Ajout d'image du projet (en haut) */}
      <div className="mb-8 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Image du Projet</h3>
        <div className="flex flex-col items-center">
          {image ? (
            <div className="relative w-64 h-40 rounded-xl overflow-hidden border border-gray-200 shadow mb-2">
              <img src={image} alt="Projet" className="object-cover w-fit h-fit" />
              {isEditing && (
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                  title="Supprimer l'image"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          ) : isEditing ? (
            <label className="w-64 h-40 flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-xl cursor-pointer hover:bg-indigo-50 transition mb-2">
              <span className="text-indigo-400 text-4xl mb-2">+</span>
              <span className="text-sm text-indigo-400">Ajouter une image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          ) : (
            <div className="w-64 h-40 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl text-gray-300 mb-2">
              <span>Aucune image</span>
            </div>
          )}
        </div>
      </div>

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
              name="status"
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
              {handleProjectStatus(projet.status).toLowerCase() === 'accepted' && <FaCheckCircle className="mr-2" />}
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
              <p className="font-bold text-lg text-blue-900">{projet.budget ?? 0} XAF</p>
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
              <p className="font-bold text-lg text-green-900">{projet.montant ?? 0} XAF</p>
            )}
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 flex flex-col items-start justify-center">
            <FaChartLine className="text-purple-600 text-2xl mb-2" />
            <p className="text-sm text-gray-600">Taux de Retour Prévu</p>
            {isEditing ? (
              <input
                type="number"
                name="roi"
                value={editProjet.roi}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="font-bold text-lg text-purple-900">{projet.roi ?? 0}%</p>
            )}
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 flex flex-col items-start justify-center">
            <FaCalendarAlt className="text-yellow-600 text-2xl mb-2" />
            <p className="text-sm text-gray-600">Durée du Projet</p>
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="date"
                  name="dateDebut"
                  value={editProjet.dateDebut}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="date"
                  name="dateFin"
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
          {!isAddingJalon ? (<button
            onClick={handleAddJalonClick}
            className="px-3 py-1 bg-indigo-500 text-white rounded-md text-sm hover:bg-indigo-600"
          >
            + Ajouter un jalon
          </button>) : (
            <button
              disabled={isAddingJalon}
              className="px-3 py-1 bg-indigo-300 text-white rounded-md text-sm"
            >
              + Ajouter un jalon
            </button>
          )}
        </div>
        {isAddingJalon && (
          <div className="mb-4 flex items-center p-4 rounded-lg shadow-sm border bg-gray-50 border-gray-200">
            <div className="flex-grow space-y-2">
              <input
                type="text"
                value={newJalon.title}
                onChange={e => handleNewJalonChange('title', e.target.value)}
                placeholder="Titre du jalon"
                className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <textarea
                value={newJalon.description}
                onChange={e => handleNewJalonChange('description', e.target.value)}
                placeholder="Description du jalon"
                className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                rows={2}
              />
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-gray-400" />
                <input
                  type="date"
                  value={newJalon.date}
                  onChange={e => handleNewJalonChange('date', e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleSaveJalon}
                  className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
                >
                  Enregistrer
                </button>
                <button
                  onClick={handleCancelAddJalon}
                  className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="space-y-4">
          {editProjet.stages.map((stage, index) => (
            <div
              key={stage.id ?? index}
              className={`flex items-center p-4 rounded-lg shadow-sm border
                ${stage.status === 'COMPLETED' ? 'bg-green-50 border-green-200' :
                  stage.status === 'IN_PROGRESS' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-gray-50 border-gray-200'}`}
            >
              <div className="flex-shrink-0 mr-4">
                {stage.status === 'COMPLETED' && <FaCheckCircle className="text-green-600 text-2xl" />}
                {stage.status === 'IN_PROGRESS' && <FaSpinner className="animate-spin text-yellow-600 text-2xl" />}
                {stage.status === 'UPCOMING' && <FaClock className="text-blue-600 text-2xl" />}
              </div>
              <div className="flex-grow">
                {editJalonIndex === index ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={stage.title}
                      onChange={e => {
                        const value = e.target.value;
                        setEditProjet(prev => {
                          const stages = [...prev.stages];
                          stages[index] = { ...stages[index], title: value };
                          return { ...prev, stages };
                        });
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <textarea
                      value={stage.description}
                      onChange={e => {
                        const value = e.target.value;
                        setEditProjet(prev => {
                          const stages = [...prev.stages];
                          stages[index] = { ...stages[index], description: value };
                          return { ...prev, stages };
                        });
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      rows={2}
                      placeholder="Description du jalon"
                    />
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-gray-400" />
                      <input
                        type="date"
                        value={stage.date}
                        onChange={e => {
                          const value = e.target.value;
                          setEditProjet(prev => {
                            const stages = [...prev.stages];
                            stages[index] = { ...stages[index], date: value };
                            return { ...prev, stages };
                          });
                        }}
                        className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <select
                      value={stage.status}
                      onChange={e => {
                        const value = e.target.value as Stage['status'];
                        setEditProjet(prev => {
                          const stages = [...prev.stages];
                          stages[index] = { ...stages[index], status: value };
                          return { ...prev, stages };
                        });
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusClasses(stage.status)}`}
                    >
                      <option value="IN_PROGRESS">En cours</option>
                      <option value="COMPLETED">Terminé</option>
                      <option value="UPCOMING">À venir</option>
                    </select>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditJalonSave(index)}
                        className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
                      >
                        Sauvegarder
                      </button>
                      <button
                        onClick={handleEditJalonCancel}
                        className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-400"
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="font-medium text-gray-900 text-lg">{stage.title}</p>
                    <p className="text-sm text-gray-600">{stage.description}</p>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <FaCalendarAlt className="mr-2 text-gray-400" />
                      Date prévue : {stage.date}
                    </p>
                  </>
                )}
              </div>
              <div className="relative ml-4">
                <button
                  onClick={() => setMoreMenuIndex(moreMenuIndex === index ? null : index)}
                  className="p-2 rounded-full hover:bg-gray-200"
                  title="Plus d'options"
                >
                  <FaEllipsisV />
                </button>
                {moreMenuIndex === index && (
                  <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg z-10">
                    <button
                      onClick={() => {
                        setEditJalonIndex(index);
                        setMoreMenuIndex(null);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-yellow-100"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleRemoveJalon(index)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-red-100 text-red-600"
                    >
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
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