import { Upload,  Search, Filter } from 'lucide-react';


const Documents: React.FC = () => {

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
             
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
             
            >
              
            </select>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Documents;
