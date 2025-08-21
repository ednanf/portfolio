import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button.tsx';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const { t } = useTranslation('notFoundPage');
  return (
    <div className={styles.pageContent}>
      <h2 className={styles.h2}>
        <MdOutlineReportGmailerrorred size={40} /> {t('title')}
      </h2>
      <p>{t('description')}</p>
      <Button to="/" disabled={false}>
        {t('button')}
      </Button>
    </div>
  );
};
export default NotFoundPage;
