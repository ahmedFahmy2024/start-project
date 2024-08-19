import Breadcrumbs from "@/components/Breadcrumbs";
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

const ProductsPage = ({params: {locale}}) => {
    // Enable static rendering
    unstable_setRequestLocale(locale);
    const t = useTranslations('ProductsPage');

  return (
    <div>
      <h1 className="text-center text-3xl">{t('title')}</h1>
      <Breadcrumbs locale={locale} />
    </div>
  )
}

export default ProductsPage