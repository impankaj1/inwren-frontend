'use client';

import { StatsCards } from '@/components/dashboard/stats-cards';
import { CampaignList } from '@/components/dashboard/campaign-list';
import { AnalyticsChart } from '@/components/dashboard/analytics-chart';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { Button } from '@/components/ui/button';
import { Plus} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className=''>
      <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 dark:text-white'>
                Dashboard
              </h2>
              <p className='text-slate-600 dark:text-slate-400 mt-1'>
                Welcome back! Here's your campaign overview.
              </p>
            </div>
            <Button
              size='lg'
              className='bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white shadow-lg hover:shadow-xl transition-all duration-200'
            >
              <Plus className='mr-2 h-5 w-5' />
              New Campaign
            </Button>
          </div>

          <StatsCards />

          <div className='grid grid-cols-1  outline lg:grid-cols-3 gap-6'>
            <div className='lg:col-span-2'>
              <AnalyticsChart />
            </div>
            <div>
              <RecentActivity />
            </div>
          </div>

          <CampaignList />
        </div>
      </main>
    </div>
  );
}
