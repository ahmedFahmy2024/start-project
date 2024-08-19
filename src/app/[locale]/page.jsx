import Breadcrumbs from "@/components/Breadcrumbs";
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Home({params: {locale}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage");
  return (
    <main>
      <h1>{t("title")}</h1>
      <Breadcrumbs locale={locale} />
    </main>
  );
}
