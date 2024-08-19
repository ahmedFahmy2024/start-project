import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

const ProductDetails = ({params: {locale, productId}}) => {
      unstable_setRequestLocale(locale);
      const t = useTranslations('ProductsDetails');

  return (
    <div>
      <h1 className="text-center text-3xl">{t('title')}</h1>
    </div>
  )
}

export default ProductDetails