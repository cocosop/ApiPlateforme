import React from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  DollarSign,
  TrendingUp,
  Briefcase
} from 'lucide-react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const stats = [
  {
    title: "Total Investissements",
    value: "€125,000",
    change: "+12.5%",
    isPositive: true,
    icon: DollarSign
  },
  {
    title: "Projets Actifs",
    value: "24",
    change: "+3",
    isPositive: true,
    icon: Briefcase
  },
  {
    title: "Rendement Mensuel",
    value: "€2,450",
    change: "-2.1%",
    isPositive: false,
    icon: TrendingUp
  },
  {
    title: "Investisseurs",
    value: "1,234",
    change: "+15",
    isPositive: true,
    icon: Users
  }
];

const performanceData = [
  { month: 'Jan', value: 45 },
  { month: 'Fév', value: 52 },
  { month: 'Mar', value: 48 },
  { month: 'Avr', value: 65 },
  { month: 'Mai', value: 58 },
  { month: 'Jun', value: 72 }
];

export default function Dashboard() {
  return (
    <div className="p-6">     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-sm text-gray-500 mb-1">{stat.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold">{stat.value}</span>
              <div className={`flex items-center ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {stat.isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                <span className="text-sm">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Investissements Récents</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Projet {i + 1}</h3>
                    <p className="text-sm text-gray-500">Tech Startup</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">€25,000</p>
                  <p className="text-sm text-gray-500">Il y a 2 jours</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Performance Mensuelle</h2>
          <div className="h-64 bg-gray-50 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#0F0B60" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
