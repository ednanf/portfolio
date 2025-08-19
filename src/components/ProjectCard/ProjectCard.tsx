import React from 'react';
import { useTranslation } from 'react-i18next';
import { VscLinkExternal } from 'react-icons/vsc';
import styles from './ProjectCard.module.css';
import H2Custom from '../H2Custom/H2Custom';

export interface ProjectCardProps {
  // keys are resolved inside the given namespace (default 'projectsPage')
  titleKey?: string;
  pointsKeys?: string[];
  githubUrl?: string;
  demoUrl?: string;
  namespace?: string;
  // optional: allow fully-translated strings instead of keys
  title?: string;
  points?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  titleKey,
  pointsKeys = [],
  githubUrl,
  demoUrl,
  namespace = 'projectsPage',
  title,
  points,
}) => {
  const { t } = useTranslation(namespace);

  const resolvedTitle = titleKey ? t(titleKey) : title;
  const resolvedPoints = pointsKeys.length ? pointsKeys.map((k) => t(k)) : (points ?? []);

  return (
    <div className={styles.projectCard}>
      <H2Custom iconSize={24}>{resolvedTitle}</H2Custom>
      <ul className={styles.list}>
        {resolvedPoints.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
        {(githubUrl || demoUrl) && (
          <li>
            <div className={styles.listLinks}>
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  {t('githubLink', { defaultValue: 'GitHub' })} <VscLinkExternal />
                </a>
              )}
              {githubUrl && demoUrl && ' | '}
              {demoUrl && (
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  {t('liveDemoLink', { defaultValue: 'Live demo' })} <VscLinkExternal />
                </a>
              )}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProjectCard;
