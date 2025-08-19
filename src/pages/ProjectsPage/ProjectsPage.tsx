// ...existing code...
import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './ProjectsPage.module.css';
import sharedStyles from '../shared.module.css';

const ProjectsPage: React.FC = () => {
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
          pointsKeys={[
            'mernTaskManager.points.point1',
            'mernTaskManager.points.point2',
            'mernTaskManager.points.point3',
            'mernTaskManager.points.point4',
          ]}
          githubUrl="https://github.com/ednanf/mern-task-manager"
          demoUrl="https://mern-task-manager-eight.vercel.app"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
