import { Button } from './ui/button';
import { Bell, Menu, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';

function Navbar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg dark:bg-slate-950/80 transition-all'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <Menu className='h-5 w-5' />
            </Button>
            <h1 className='text-xl font-bold bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent'>
              Inwren
            </h1>
          </div>

          <div className='flex-1 max-w-md mx-4 hidden md:block'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400' />
              <Input
                placeholder='Search campaigns...'
                className='pl-9 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700'
              />
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Button
              size='icon'
              variant='ghost'
              className='relative hover:bg-slate-100 dark:hover:bg-slate-800'
            >
              <Bell className='h-5 w-5' />
              <span className='absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-950' />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='relative h-9 w-9 rounded-full'
                >
                  <Avatar className='h-9 w-9 ring-2 ring-slate-200 dark:ring-slate-800'>
                    <AvatarImage src='' alt='User' />
                    <AvatarFallback className='bg-gradient-to-br from-slate-600 to-slate-800 text-white'>
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='w-56'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
