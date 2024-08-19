import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { locales } from "@/config";
import { getLangDir } from 'rtl-detect';   // to detect if user is in arabic or not

import { Inter } from "next/font/google";
import "../globals.css";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({ children, params: { locale } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const direction = getLangDir(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={direction}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <LocaleSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
