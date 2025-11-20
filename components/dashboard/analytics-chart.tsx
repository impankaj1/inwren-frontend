'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { useState } from 'react';

const data = [
  { date: 'Jan 1', sent: 2400, opened: 1800, clicked: 420 },
  { date: 'Jan 8', sent: 2800, opened: 2100, clicked: 520 },
  { date: 'Jan 15', sent: 3200, opened: 2450, clicked: 680 },
  { date: 'Jan 22', sent: 2900, opened: 2200, clicked: 590 },
  { date: 'Jan 29', sent: 3600, opened: 2850, clicked: 750 },
  { date: 'Feb 5', sent: 4100, opened: 3200, clicked: 890 },
  { date: 'Feb 12', sent: 3800, opened: 2950, clicked: 820 },
  { date: 'Feb 19', sent: 4500, opened: 3600, clicked: 1020 },
  { date: 'Feb 26', sent: 5200, opened: 4100, clicked: 1180 },
  { date: 'Mar 4', sent: 4800, opened: 3850, clicked: 1050 },
  { date: 'Mar 11', sent: 5600, opened: 4450, clicked: 1290 },
  { date: 'Mar 18', sent: 6100, opened: 4920, clicked: 1420 },
];

export function AnalyticsChart() {
  const [metric, setMetric] = useState<'sent' | 'opened' | 'clicked'>('sent');

  const getMetricColor = () => {
    switch (metric) {
      case 'sent':
        return '#0f172a';
      case 'opened':
        return '#3b82f6';
      case 'clicked':
        return '#10b981';
    }
  };

  const getMetricLabel = () => {
    switch (metric) {
      case 'sent':
        return 'Emails Sent';
      case 'opened':
        return 'Emails Opened';
      case 'clicked':
        return 'Clicks';
    }
  };

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
      <CardHeader className="border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
            Campaign Performance
          </CardTitle>
          <Tabs value={metric} onValueChange={(v) => setMetric(v as any)}>
            <TabsList className="bg-slate-100 dark:bg-slate-800">
              <TabsTrigger
                value="sent"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700"
              >
                Sent
              </TabsTrigger>
              <TabsTrigger
                value="opened"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700"
              >
                Opened
              </TabsTrigger>
              <TabsTrigger
                value="clicked"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700"
              >
                Clicked
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={getMetricColor()}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={getMetricColor()}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
                className="dark:stroke-slate-800"
              />
              <XAxis
                dataKey="date"
                stroke="#94a3b8"
                style={{ fontSize: '12px' }}
              />
              <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
                labelStyle={{ color: '#0f172a', fontWeight: 600 }}
                itemStyle={{ color: getMetricColor() }}
                formatter={(value: number) => [
                  value.toLocaleString(),
                  getMetricLabel(),
                ]}
              />
              <Area
                type="monotone"
                dataKey={metric}
                stroke={getMetricColor()}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorMetric)"
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
