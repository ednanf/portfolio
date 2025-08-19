import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './ProjectsPage.module.css';
import sharedStyles from '../shared.module.css';

const ProjectsPage: React.FC = () => {
  const { i18n } = useTranslation();
  const isPt = Boolean(i18n?.language && i18n.language.startsWith('pt'));

  return (
    <div className={sharedStyles.pageContent}>
      <div className={styles.projectList}>
        <ProjectCard
          titleKey="gameJournal.title"
          pointsKeys={[
            'gameJournal.points.point1',
            'gameJournal.points.point2',
            'gameJournal.points.point3',
            'gameJournal.points.point4',
          ]}
          githubUrl="https://github.com/ednanf/game-journal"
          demoUrl="https://game-journal-ednan.vercel.app"
        />

        <ProjectCard
          titleKey="mernTaskManager.title"
          // Resize in portuguese due to length
          {...(isPt ? { titleKeyFontSize: 20 } : {})}
          pointsKeys={[
            'mernTaskManager.points.point1',
            'mernTaskManager.points.point2',
            'mernTaskManager.points.point3',
            'mernTaskManager.points.point4',
          ]}
          githubUrl="https://github.com/ednanf/mern-task-manager"
          demoUrl="https://mern-task-manager-eight.vercel.app"
        />

        <ProjectCard
          titleKey="weatherTailWind.title"
          pointsKeys={[
            'weatherTailWind.points.point1',
            'weatherTailWind.points.point2',
            'weatherTailWind.points.point3',
          ]}
          githubUrl="https://github.com/ednanf/weather-tailwind"
          demoUrl="https://ednanf-tailwind.vercel.app/"
        />

        <ProjectCard
          titleKey="boxShadowGenerator.title"
          pointsKeys={[
            'boxShadowGenerator.points.point1',
            'boxShadowGenerator.points.point2',
            'boxShadowGenerator.points.point3',
          ]}
          githubUrl="https://github.com/ednanf/box-shadow-generator"
          demoUrl="https://ednanf.github.io/box-shadow-generator/"
        />

        <ProjectCard
          titleKey="stickies.title"
          pointsKeys={[
            'stickies.points.point1',
            'stickies.points.point2',
            'stickies.points.point3',
            'stickies.points.point4',
          ]}
          githubUrl="https://github.com/ednanf/stickies"
          demoUrl="https://ednanf.github.io/stickies/"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
