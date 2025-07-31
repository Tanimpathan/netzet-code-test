// app/fonts.ts (or fonts.js if using JavaScript)
import { Figtree } from 'next/font/google';

export const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  // You can specify weights you need:
  weight: ['300', '400', '500', '600', '700', '800'],
});