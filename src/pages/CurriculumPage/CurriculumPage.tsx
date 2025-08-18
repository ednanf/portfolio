import { useTranslation } from 'react-i18next';
import H2Custom from '../../components/H2Custom/H2Custom.tsx';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { VscLinkExternal } from 'react-icons/vsc';

import styles from './CurriculumPage.module.css';
import sharedStyles from '../shared.module.css';

interface Certification {
  name: string;
  url: string;
}

const CurriculumPage = () => {
  const { t } = useTranslation('curriculumPage');

  return (
    <div className={sharedStyles.pageContent}>
      <section className={styles.container}>
        <H2Custom>{t('contact.title')}</H2Custom>
        <div className={styles.sectionContent}>
          <p>{t('contact.name')}</p>
          <p>{t('contact.email')}</p>
          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/ednanrff/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaLinkedin /> {t('contact.linkedin')}
            </a>
            <a
              href="https://github.com/ednanf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithubSquare /> {t('contact.github')}
            </a>
          </div>
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
            {(t('techStack.items', { returnObjects: true }) as string[]).map((item: string) => (
              <li key={item}>{item}</li>
            ))}
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
            {(t('certifications.list', { returnObjects: true }) as Certification[]).map(
              (cert: Certification) => (
                <li key={cert.name}>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    {cert.name} <VscLinkExternal />
                  </a>
                </li>
              ),
            )}
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
          <p>{t('languages.english')}</p>
          <p>{t('languages.portuguese')}</p>
        </div>
      </section>
    </div>
  );
};

export default CurriculumPage;
