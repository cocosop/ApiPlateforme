import React, { useState } from 'react';
import { FileText, Upload, Trash2, Search, Filter } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  createdAt: Date;
}

interface DocumentManagerProps {
  projectId: string;
}

const Documents: React.FC<DocumentManagerProps> = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const newDocument: Document = {
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type,
      size: file.size,
      createdAt: new Date(),
    };

    setDocuments([...documents, newDocument]);
  }

  function handleDelete(documentId: string) {
    setDocuments(documents.filter(doc => doc.id !== documentId));
  }

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || doc.type.includes(selectedType);
    return matchesSearch && matchesType;
  });

  const documentTypes = ['all', ...new Set(documents.map(doc => doc.type))];

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="bg-white rounded-xl shadow-sm  space-y-6">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
            <Upload className="h-5 w-5" />
            <span>Ajouter un Document</span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un document..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {documentTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'Tous les types' : type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredDocuments.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          Aucun document trouvé
        </div>
      ) : (
        <div className="divide-y">
          {filteredDocuments.map((doc) => (
            <div key={doc.id} className="p-4 hover:bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{doc.name}</h3>
                  <p className="text-sm text-gray-500">
                    {formatFileSize(doc.size)} • {doc.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDelete(doc.id)}
                  className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                >
                  <Trash2 className="h-5 w-5 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Documents;
