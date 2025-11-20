'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  TrendingUp,
  TrendingDown,
  Mail,
  Users,
  MousePointerClick,
  DollarSign,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  trend: 'up' | 'down';
  delay: number;
}

function StatCard({ title, value, change, icon, trend, delay }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card
      className={`relative overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {title}
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                {value}
              </h3>
              <div
                className={`flex items-center text-sm font-medium ${
                  trend === 'up'
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                {Math.abs(change)}%
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
              vs last month
            </p>
          </div>
          <div
            className={`rounded-xl p-3 ${
              trend === 'up'
                ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                : 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400'
            }`}
          >
            {icon}
          </div>
        </div>
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-1000 ${
            isVisible ? 'w-full' : 'w-0'
          } ${
            trend === 'up'
              ? 'from-emerald-400 to-emerald-600'
              : 'from-red-400 to-red-600'
          }`}
        />
      </CardContent>
    </Card>
  );
}

export function StatsCards() {
  const stats = [
    {
      title: 'Total Emails Sent',
      value: '24,563',
      change: 12.5,
      icon: <Mail className="h-6 w-6" />,
      trend: 'up' as const,
    },
    {
      title: 'Active Subscribers',
      value: '8,492',
      change: 8.2,
      icon: <Users className="h-6 w-6" />,
      trend: 'up' as const,
    },
    {
      title: 'Click Rate',
      value: '28.4%',
      change: -2.1,
      icon: <MousePointerClick className="h-6 w-6" />,
      trend: 'down' as const,
    },
    {
      title: 'Revenue',
      value: '$12,456',
      change: 15.3,
      icon: <DollarSign className="h-6 w-6" />,
      trend: 'up' as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={stat.title} {...stat} delay={index * 100} />
      ))}
    </div>
  );
}
