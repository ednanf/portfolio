import { useTranslation } from 'react-i18next';
import { VscLinkExternal } from 'react-icons/vsc';
import styles from './ProjectsPage.module.css';
import sharedStyles from '../shared.module.css';

const ProjectsPage = () => {
  const { t } = useTranslation('projectsPage');

  return (
    <div className={sharedStyles.pageContent}>
      <div className={styles.projectList}>
        <div className={styles.project}>
          <h2>{t('gameJournal.title')}</h2>
          <ul className={sharedStyles.list}>
            <li>{t('gameJournal.points.0')}</li>
            <li>{t('gameJournal.points.1')}</li>
            <li>{t('gameJournal.points.2')}</li>
            <li>{t('gameJournal.points.3')}</li>
            <li>
              <div className={styles.listLinks}>
                <a href="https://github.com/ednanf/game-journal">
                  {t('githubLink')} <VscLinkExternal />
                </a>{' '}
                |{' '}
                <a href="https://game-journal-ednan.vercel.app">
                  {t('liveDemoLink')} <VscLinkExternal />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.project}>
          <h2>{t('mernTaskManager.title')}</h2>
          <ul className={sharedStyles.list}>
            <li>{t('mernTaskManager.points.0')}</li>
            <li>{t('mernTaskManager.points.1')}</li>
            <li>{t('mernTaskManager.points.2')}</li>
            <li>{t('mernTaskManager.points.3')}</li>
            <li>
              <div className={styles.listLinks}>
                <a href="https://github.com/ednanf/mern-task-manager">
                  {t('githubLink')} <VscLinkExternal />{' '}
                </a>
                |{' '}
                <a href="https://mern-task-manager-eight.vercel.app">
                  {t('liveDemoLink')} <VscLinkExternal />
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
