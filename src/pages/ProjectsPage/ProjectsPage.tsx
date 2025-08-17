import { useTranslation } from 'react-i18next';
import { VscLinkExternal } from 'react-icons/vsc';
import styles from './ProjectsPage.module.css';
import sharedStyles from '../shared.module.css';

const ProjectsPage = () => {
  const { t } = useTranslation('curriculumPage');

  return (
    <div className={sharedStyles.pageContent}>
      <div className={styles.projectList}>
        <div className={styles.project}>
          <h2>{t('projects.gameJournal.title')}</h2>
          <ul className={sharedStyles.list}>
            {(t('projects.gameJournal.points', { returnObjects: true }) as string[]).map(
              (point: string) => (
                <li key={point}>{point}</li>
              ),
            )}
            <li>
              <div className={styles.listLinks}>
                <a href="https://github.com/ednanf/game-journal">
                  {t('projects.githubLink')} <VscLinkExternal />
                </a>{' '}
                |{' '}
                <a href="https://game-journal-ednan.vercel.app">
                  {t('projects.liveDemoLink')} <VscLinkExternal />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.project}>
          <h2>{t('projects.mernTaskManager.title')}</h2>
          <ul className={sharedStyles.list}>
            {(t('projects.mernTaskManager.points', { returnObjects: true }) as string[]).map(
              (point: string) => (
                <li key={point}>{point}</li>
              ),
            )}
            <li>
              <div className={styles.listLinks}>
                <a href="https://github.com/ednanf/mern-task-manager">
                  {t('projects.githubLink')} <VscLinkExternal />{' '}
                </a>
                |{' '}
                <a href="https://mern-task-manager-eight.vercel.app">
                  {t('projects.liveDemoLink')} <VscLinkExternal />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
