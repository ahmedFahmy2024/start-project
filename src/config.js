
export const defaultLocale = 'en';
export const locales = ['en', 'ar'];

export const pathnames = {
  '/': '/',
  '/products': {
    en: '/products',
    ar: '/المنتجات'
  },
  '/products/[productId]': {
    en: '/products/[productId]',
    ar: '/المنتجات/[productId]'
  },
};

export const localePrefix = 'always';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;