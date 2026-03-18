import { useTranslation } from 'react-i18next';
import H2Custom from '../../components/H2Custom/H2Custom.tsx';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { VscLinkExternal } from 'react-icons/vsc';
import { PiDownloadSimpleLight } from 'react-icons/pi';

import styles from './CurriculumPage.module.css';
import sharedStyles from '../shared.module.css';

type TechCategory = {
    title: string;
    content: string;
};

type TechCategories = Record<string, TechCategory>;

const CurriculumPage = () => {
    const { t } = useTranslation('curriculumPage');

    const techCategories = t('techStack.categories', {
        returnObjects: true,
    }) as TechCategories;

    return (
        <div className={sharedStyles.pageContent}>
            {/* CONTACT */}
            <section className={styles.container}>
                <H2Custom iconSize={20}>{t('contact.title')}</H2Custom>

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

                    <span className={styles.viewMore}>
                        <a
                            className={styles.link}
                            href={t('contact.cv.url')}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('contact.cv.text')} <PiDownloadSimpleLight className={styles.icon} />
                        </a>
                    </span>
                </div>
            </section>

            {/* PROFILE */}
            <section className={styles.container}>
                <H2Custom iconSize={20}>{t('profile.title')}</H2Custom>

                <div className={styles.sectionContent}>
                    <p>{t('profile.body')}</p>
                </div>
            </section>

            {/* TECH STACK */}
            <section className={styles.container}>
                <H2Custom iconSize={20}>{t('techStack.title')}</H2Custom>

                <div className={styles.sectionContent}>
                    <div className={styles.techStack}>
                        {Object.entries(techCategories).map(([key, category]) => (
                            <div key={key} className={styles.techCategory}>
                                <h3 className={styles.techTitle}>{category.title}</h3>
                                <p className={styles.techContent}>{category.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EDUCATION */}
            <section className={styles.container}>
                <H2Custom iconSize={20}>{t('education.title')}</H2Custom>

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

            {/* CERTIFICATIONS */}
            <section className={styles.container}>
                <H2Custom iconSize={20}>{t('certifications.title')}</H2Custom>

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

                        <span className={styles.viewMore}>
                            <a
                                href={t('certifications.viewAllUrl')}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('certifications.viewAll')} <VscLinkExternal />
                            </a>
                        </span>
                    </ul>
                </div>
            </section>

            {/* LANGUAGES */}
            <section className={styles.container}>
                <H2Custom iconSize={20}>{t('languages.title')}</H2Custom>

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
