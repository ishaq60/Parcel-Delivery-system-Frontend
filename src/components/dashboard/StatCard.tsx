import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  color?: 'orange' | 'green' | 'blue' | 'red';
}

const colorStyles = {
  orange: {
    bg: 'rgba(245, 166, 35, 0.08)',
    text: '#F5A623',
    border: 'rgba(245, 166, 35, 0.2)',
    icon: '#F5A623',
  },
  green: {
    bg: 'rgba(34, 197, 94, 0.08)',
    text: '#22c55e',
    border: 'rgba(34, 197, 94, 0.2)',
    icon: '#22c55e',
  },
  blue: {
    bg: 'rgba(59, 130, 246, 0.08)',
    text: '#3b82f6',
    border: 'rgba(59, 130, 246, 0.2)',
    icon: '#3b82f6',
  },
  red: {
    bg: 'rgba(239, 68, 68, 0.08)',
    text: '#ef4444',
    border: 'rgba(239, 68, 68, 0.2)',
    icon: '#ef4444',
  },
};

export default function StatCard({ title, value, icon, color = 'orange' }: StatCardProps) {
  const colors = colorStyles[color];

  return (
    <div 
      className="p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
      style={{
        backgroundColor: colors.bg,
        borderColor: colors.border,
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-70" style={{color: colors.text}}>{title}</p>
          <p className="text-4xl font-bold mt-3" style={{color: colors.text}}>
            {value}
          </p>
          <div className="mt-2 h-1 w-12 rounded-full group-hover:w-24 transition-all duration-300" style={{backgroundColor: colors.text}}></div>
        </div>
        <div className="text-5xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 group-hover:scale-110 transform">
          {icon}
        </div>
      </div>
    </div>
  );
}
