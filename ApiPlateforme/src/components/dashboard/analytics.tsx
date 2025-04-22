import React from 'react';
import { BarChart2, TrendingUp, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const performanceData = [
  { month: 'Jan', value: 45 },
  { month: 'Fév', value: 52 },
  { month: 'Mar', value: 48 },
  { month: 'Avr', value: 65 },
  { month: 'Mai', value: 58 },
  { month: 'Jun', value: 72 }
];

const Analytics = () => {
  return (
    <div className="space-y-6">
 <div className="p-6">    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Performance Mensuelle</h2>
            <BarChart2 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {performanceData.map((data, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div 
                  className="w-12 bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600"
                  style={{ height: `${data.value}%` }}
                ></div>
                <span className="text-sm text-gray-500">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Répartition des Investissements</h2>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { category: 'Tech', percentage: 45, value: '€56,250', trend: '+5.2%' },
              { category: 'Immobilier', percentage: 30, value: '€37,500', trend: '+2.1%' },
              { category: 'Finance', percentage: 15, value: '€18,750', trend: '-1.3%' },
              { category: 'Autres', percentage: 10, value: '€12,500', trend: '+0.8%' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{item.value}</p>
                  <p className={`text-sm flex items-center ${item.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {item.trend.startsWith('+') ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    {item.trend}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Historique des Transactions</h2>
          <TrendingUp className="h-5 w-5 text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left pb-3">Date</th>
                <th className="text-left pb-3">Projet</th>
                <th className="text-left pb-3">Type</th>
                <th className="text-right pb-3">Montant</th>
                <th className="text-right pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { date: '2024-03-15', project: 'Tech Startup A', type: 'Investissement', amount: '€15,000', status: 'Complété' },
                { date: '2024-03-14', project: 'Immobilier B', type: 'Retrait', amount: '€5,000', status: 'En cours' },
                { date: '2024-03-13', project: 'Finance C', type: 'Investissement', amount: '€8,000', status: 'Complété' },
                { date: '2024-03-12', project: 'Tech Startup D', type: 'Investissement', amount: '€12,000', status: 'En attente' }
              ].map((transaction, index) => (
                <tr key={index}>
                  <td className="py-3">{transaction.date}</td>
                  <td className="py-3">{transaction.project}</td>
                  <td className="py-3">{transaction.type}</td>
                  <td className="py-3 text-right">{transaction.amount}</td>
                  <td className="py-3 text-right">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      transaction.status === 'Complété' ? 'bg-green-100 text-green-700' :
                      transaction.status === 'En cours' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>    </div>
  );
};

export default Analytics;
