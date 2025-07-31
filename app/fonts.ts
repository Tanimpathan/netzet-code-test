import { Figtree, Urbanist } from 'next/font/google';

export const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['400', '700'],
  // style: ['normal', 'italic'],
})