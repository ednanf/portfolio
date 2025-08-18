import { useTranslation } from 'react-i18next';
import H2Custom from '../../components/H2Custom/H2Custom.tsx';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { VscLinkExternal } from 'react-icons/vsc';

import styles from './CurriculumPage.module.css';
import sharedStyles from '../shared.module.css';

const CurriculumPage = () => {
  const { t } = useTranslation('curriculumPage');

  return (
    <div className={sharedStyles.pageContent}>
      <section className={styles.container}>
        <H2Custom>{t('contact.title')}</H2Custom>
        <div className={styles.sectionContent}>
          <ul className={sharedStyles.list}>
            <li>{t('contact.name')}</li>
            <li>{t('contact.email')}</li>
            <li>
              <a
                href="https://www.linkedin.com/in/ednanrff/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaLinkedin /> {t('contact.linkedin')}
              </a>{' '}
              |{' '}
              <a
                href="https://github.com/ednanf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                style={{ marginLeft: 8 }}
              >
                <FaGithubSquare /> {t('contact.github')}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.container}>
        <H2Custom>{t('profile.title')}</H2Custom>
        <div className={styles.sectionContent}>
          <p>{t('profile.body')}</p>
        </div>
      </section>

      <section className={styles.container}>
        <H2Custom>{t('techStack.title')}</H2Custom>
        <div className={styles.sectionContent}>
          <ul className={sharedStyles.list}>
            <li>{t('techStack.items.item1')}</li>
            <li>{t('techStack.items.item2')}</li>
            <li>{t('techStack.items.item3')}</li>
            <li>{t('techStack.items.item4')}</li>
            <li>{t('techStack.items.item5')}</li>
          </ul>
        </div>
      </section>

      <section className={styles.container}>
        <H2Custom>{t('education.title')}</H2Custom>
        <div className={styles.sectionContent}>
          <div className={styles.educationItem}>
            <h3>{t('education.postgrad.degree')}</h3>
            <p>{t('education.postgrad.focus')}</p>
          </div>
          <div className={styles.educationItem}>
            <h3>{t('education.bachelor.degree')}</h3>
            <p>{t('education.bachelor.focus')}</p>
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <H2Custom>{t('certifications.title')}</H2Custom>
        <div className={styles.sectionContent}>
          <ul className={sharedStyles.list}>
            <li>
              <a
                href={t('certifications.list.cert1.url')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('certifications.list.cert1.name')} <VscLinkExternal />
              </a>
            </li>
            <li>
              <a
                href={t('certifications.list.cert2.url')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('certifications.list.cert2.name')} <VscLinkExternal />
              </a>
            </li>
            <li>
              <a
                href={t('certifications.list.cert3.url')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('certifications.list.cert3.name')} <VscLinkExternal />
              </a>
            </li>
            <li>
              <a
                href={t('certifications.list.cert4.url')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('certifications.list.cert4.name')} <VscLinkExternal />
              </a>
            </li>
            <li>
              <a
                href={t('certifications.list.cert5.url')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('certifications.list.cert5.name')} <VscLinkExternal />
              </a>
            </li>
            <li>
              <a
                href={t('certifications.list.cert6.url')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('certifications.list.cert6.name')} <VscLinkExternal />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ednanrff/details/certifications/">
                {t('certifications.viewAll')} <VscLinkExternal />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.container}>
        <H2Custom>{t('languages.title')}</H2Custom>
        <div className={styles.sectionContent}>
          <ul className={sharedStyles.list}>
            <li>{t('languages.english')}</li>
            <li>{t('languages.portuguese')}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CurriculumPage;
