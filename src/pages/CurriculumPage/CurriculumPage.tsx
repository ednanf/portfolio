import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { VscLinkExternal } from 'react-icons/vsc';
import styles from './CurriculumPage.module.css';
import sharedStyles from '../shared.module.css';

const CurriculumPage = () => {
  const { t } = useTranslation('curriculumPage');

  type Certification = {
    name: string;
    url: string;
  };

  return (
    <div className={sharedStyles.pageContent}>
      <section className={styles.container}>
        <h2>{t('contact.title')}</h2>
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
      </section>

      <section className={styles.container}>
        <h2>{t('profile.title')}</h2>
        <p>{t('profile.body')}</p>
      </section>

      <section className={styles.container}>
        <h2>{t('techStack.title')}</h2>
        <ul className={sharedStyles.list}>
          {(t('techStack.items', { returnObjects: true }) as string[]).map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.container}>
        <h2>{t('education.title')}</h2>
        <div className={styles.education}>
          <h3>{t('education.postgrad.degree')}</h3>
          <p>{t('education.postgrad.focus')}</p>
        </div>
        <div className={styles.education}>
          <h3>{t('education.bachelor.degree')}</h3>
          <p>{t('education.bachelor.focus')}</p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.certifications}>
          <h2>{t('certifications.title')}</h2>
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
        <div className={styles.certifications}>
          <h2>{t('languages.title')}</h2>
          <p>{t('languages.english')}</p>
          <p>{t('languages.portuguese')}</p>
        </div>
      </section>
    </div>
  );
};
export default CurriculumPage;
