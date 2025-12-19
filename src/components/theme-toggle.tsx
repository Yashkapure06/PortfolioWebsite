'use client';

import { useTheme } from 'next-themes';

import { Button, ButtonProps } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const ThemeToggle = ({ className }: ButtonProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={cn('size-9 sm:size-11', className)}
      variant="outline"
      size="icon"
      aria-label="theme toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="size-4 sm:size-5 dark:hidden" />
      <Icons.moon className="hidden size-4 sm:size-5 dark:block" />
    </Button>
  );
};
