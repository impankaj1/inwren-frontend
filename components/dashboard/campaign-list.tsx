'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  MoreVertical,
  Mail,
  Eye,
  MousePointerClick,
  CheckCircle2,
  Clock,
  AlertCircle,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'scheduled' | 'draft';
  sent: number;
  opened: number;
  clicked: number;
  openRate: number;
  clickRate: number;
  lastModified: string;
}

const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale 2024',
    status: 'active',
    sent: 5420,
    opened: 3251,
    clicked: 892,
    openRate: 60,
    clickRate: 16.4,
    lastModified: '2 hours ago',
  },
  {
    id: '2',
    name: 'Product Launch Newsletter',
    status: 'scheduled',
    sent: 0,
    opened: 0,
    clicked: 0,
    openRate: 0,
    clickRate: 0,
    lastModified: '1 day ago',
  },
  {
    id: '3',
    name: 'Weekly Digest #42',
    status: 'active',
    sent: 8192,
    opened: 5234,
    clicked: 1456,
    openRate: 63.9,
    clickRate: 17.8,
    lastModified: '3 days ago',
  },
  {
    id: '4',
    name: 'Re-engagement Campaign',
    status: 'draft',
    sent: 0,
    opened: 0,
    clicked: 0,
    openRate: 0,
    clickRate: 0,
    lastModified: '5 days ago',
  },
  {
    id: '5',
    name: 'Holiday Special Offer',
    status: 'active',
    sent: 6754,
    opened: 4123,
    clicked: 1234,
    openRate: 61,
    clickRate: 18.3,
    lastModified: '1 week ago',
  },
];

function getStatusIcon(status: Campaign['status']) {
  switch (status) {
    case 'active':
      return <CheckCircle2 className="h-4 w-4" />;
    case 'scheduled':
      return <Clock className="h-4 w-4" />;
    case 'draft':
      return <AlertCircle className="h-4 w-4" />;
  }
}

function getStatusColor(status: Campaign['status']) {
  switch (status) {
    case 'active':
      return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900';
    case 'scheduled':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 border-blue-200 dark:border-blue-900';
    case 'draft':
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700';
  }
}

export function CampaignList() {
  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
      <CardHeader className="border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
            Recent Campaigns
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Campaign
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Sent
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Open Rate
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Click Rate
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {campaigns.map((campaign) => (
                <tr
                  key={campaign.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {campaign.name}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {campaign.lastModified}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant="outline"
                      className={`${getStatusColor(campaign.status)} capitalize`}
                    >
                      <span className="mr-1">{getStatusIcon(campaign.status)}</span>
                      {campaign.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <span className="font-medium text-slate-900 dark:text-white">
                        {campaign.sent.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {campaign.status === 'active' ? (
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-slate-400" />
                          <span className="font-medium text-slate-900 dark:text-white">
                            {campaign.openRate}%
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {campaign.opened.toLocaleString()} opens
                        </span>
                      </div>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {campaign.status === 'active' ? (
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                          <MousePointerClick className="h-4 w-4 text-slate-400" />
                          <span className="font-medium text-slate-900 dark:text-white">
                            {campaign.clickRate}%
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {campaign.clicked.toLocaleString()} clicks
                        </span>
                      </div>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
