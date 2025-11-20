import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  color?: 'orange' | 'green' | 'blue' | 'red';
}

const colorClasses = {
  orange: 'bg-orange-50 text-orange-600 border-orange-200',
  green: 'bg-green-50 text-green-600 border-green-200',
  blue: 'bg-blue-50 text-blue-600 border-blue-200',
  red: 'bg-red-50 text-red-600 border-red-200',
};

export default function StatCard({ title, value, icon, color = 'orange' }: StatCardProps) {
  return (
    <div className={`p-6 rounded-lg border ${colorClasses[color]} transition-transform hover:scale-105`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-75">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className="text-4xl opacity-50">{icon}</div>
      </div>
    </div>
  );
}
