import { Link } from '@/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl';
import { getLangDir } from 'rtl-detect';

const Breadcrumbs = ({ locale }) => {
  const t = useTranslations('Breadcrumbs');
  // const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <div style={{ display: 'flex' }}>
      <Link href='/'>
        <p>{t('home')}</p>
      </Link>
      <div style={{ marginInlineStart: 10 }}>
        {direction === 'ltr' ? <ArrowRight /> : <ArrowLeft />}
      </div>
      <Link href='/products'>
        <p style={{ marginInlineStart: 10 }}>{t('about')}</p>
      </Link>
    </div>
  )
}

export default Breadcrumbs