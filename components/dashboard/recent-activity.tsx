'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Mail,
  UserPlus,
  UserMinus,
  MousePointerClick,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

interface Activity {
  id: string;
  type: 'sent' | 'subscribed' | 'unsubscribed' | 'clicked' | 'bounced' | 'delivered';
  message: string;
  timestamp: string;
  email?: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'clicked',
    message: 'john.doe@example.com clicked on Summer Sale link',
    timestamp: '2 min ago',
    email: 'john.doe@example.com',
  },
  {
    id: '2',
    type: 'subscribed',
    message: 'New subscriber joined Newsletter',
    timestamp: '15 min ago',
    email: 'sarah.smith@example.com',
  },
  {
    id: '3',
    type: 'delivered',
    message: 'Campaign "Weekly Digest #42" delivered to 8,192 subscribers',
    timestamp: '1 hour ago',
  },
  {
    id: '4',
    type: 'clicked',
    message: 'emily.johnson@example.com clicked on Product Launch link',
    timestamp: '2 hours ago',
    email: 'emily.johnson@example.com',
  },
  {
    id: '5',
    type: 'unsubscribed',
    message: 'Subscriber opted out from Newsletter',
    timestamp: '3 hours ago',
    email: 'mike.wilson@example.com',
  },
  {
    id: '6',
    type: 'bounced',
    message: 'Email bounced for invalid address',
    timestamp: '4 hours ago',
    email: 'invalid@example.com',
  },
  {
    id: '7',
    type: 'sent',
    message: 'Campaign "Holiday Special" sent to 6,754 subscribers',
    timestamp: '5 hours ago',
  },
  {
    id: '8',
    type: 'subscribed',
    message: 'New subscriber joined Newsletter',
    timestamp: '6 hours ago',
    email: 'alex.brown@example.com',
  },
];

function getActivityIcon(type: Activity['type']) {
  switch (type) {
    case 'sent':
      return <Mail className="h-4 w-4" />;
    case 'subscribed':
      return <UserPlus className="h-4 w-4" />;
    case 'unsubscribed':
      return <UserMinus className="h-4 w-4" />;
    case 'clicked':
      return <MousePointerClick className="h-4 w-4" />;
    case 'bounced':
      return <AlertCircle className="h-4 w-4" />;
    case 'delivered':
      return <CheckCircle2 className="h-4 w-4" />;
  }
}

function getActivityColor(type: Activity['type']) {
  switch (type) {
    case 'sent':
      return 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400';
    case 'subscribed':
      return 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400';
    case 'unsubscribed':
      return 'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400';
    case 'clicked':
      return 'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400';
    case 'bounced':
      return 'bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400';
    case 'delivered':
      return 'bg-teal-100 text-teal-600 dark:bg-teal-950 dark:text-teal-400';
  }
}

export function RecentActivity() {
  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 h-full">
      <CardHeader className="border-b border-slate-200 dark:border-slate-800">
        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[440px]">
          <div className="p-4 space-y-4">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="flex gap-4 group hover:bg-slate-50 dark:hover:bg-slate-800/50 p-3 rounded-lg transition-colors"
                style={{
                  animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`,
                }}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full ${getActivityColor(
                    activity.type
                  )} flex items-center justify-center`}
                >
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-900 dark:text-white font-medium leading-snug">
                    {activity.message}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Card>
  );
}
