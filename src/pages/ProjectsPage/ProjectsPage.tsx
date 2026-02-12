import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './ProjectsPage.module.css';
import sharedStyles from '../shared.module.css';

const ProjectsPage: React.FC = () => {
    const { t, i18n } = useTranslation('projectsPage');
    const isPt = Boolean(i18n?.language && i18n.language.startsWith('pt'));

    // Explicit keys to make it easier to read
    const gameJournalV2Points = [
        t('projectsPage:gameJournalV2.points.point1'),
        t('projectsPage:gameJournalV2.points.point2'),
        t('projectsPage:gameJournalV2.points.point3'),
        t('projectsPage:gameJournalV2.points.point4'),
    ];

    const reactSwiftStacksPoints = [
        t('reactSwiftStacks.points.point1'),
        t('reactSwiftStacks.points.point2'),
        t('reactSwiftStacks.points.point3'),
        t('reactSwiftStacks.points.point4'),
    ];
    const miniCommunityPoints = [
        t('miniCommunity.points.point1'),
        t('miniCommunity.points.point4'),
        t('miniCommunity.points.point3'),
        t('miniCommunity.points.point2'),
    ];
    const gameJournalPoints = [
        t('gameJournal.points.point1'),
        t('gameJournal.points.point2'),
        t('gameJournal.points.point3'),
        t('gameJournal.points.point4'),
    ];
    const mernTaskManagerPoints = [
        t('mernTaskManager.points.point1'),
        t('mernTaskManager.points.point2'),
        t('mernTaskManager.points.point3'),
        t('mernTaskManager.points.point4'),
    ];
    const weatherTailWindPoints = [
        t('weatherTailWind.points.point1'),
        t('weatherTailWind.points.point2'),
        t('weatherTailWind.points.point3'),
    ];
    const boxShadowGeneratorPoints = [
        t('boxShadowGenerator.points.point1'),
        t('boxShadowGenerator.points.point2'),
        t('boxShadowGenerator.points.point3'),
    ];
    const stickiesPoints = [
        t('stickies.points.point1'),
        t('stickies.points.point2'),
        t('stickies.points.point3'),
        t('stickies.points.point4'),
    ];

    return (
        <div className={sharedStyles.pageContent}>
            <div className={styles.projectList}>
                <ProjectCard
                    title={t('projectsPage:gameJournalV2.title')}
                    points={gameJournalV2Points}
                    githubUrl="https://github.com/ednanf/game-journal-v2"
                    demoUrl="https://journal.frizzera.dev"
                />

                <ProjectCard
                    title={t('reactSwiftStacks.title')}
                    points={reactSwiftStacksPoints}
                    githubUrl="https://github.com/ednanf/react-swiftstacks"
                    demoUrl="https://www.npmjs.com/package/react-swiftstacks"
                />

                <ProjectCard
                    title={t('miniCommunity.title')}
                    points={miniCommunityPoints}
                    githubUrl="https://github.com/ednanf/mini-community"
                    demoUrl="https://mini-community.frizzera.dev"
                />

                <ProjectCard
                    title={t('gameJournal.title')}
                    points={gameJournalPoints}
                    githubUrl="https://github.com/ednanf/game-journal"
                    demoUrl="https://game-journal.frizzera.dev "
                />

                <ProjectCard
                    title={t('mernTaskManager.title')}
                    // Resize in portuguese due to length
                    {...(isPt ? { titleKeyFontSize: 20 } : {})}
                    points={mernTaskManagerPoints}
                    githubUrl="https://github.com/ednanf/mern-task-manager"
                    demoUrl="https://taskmanager.frizzera.dev"
                />

                <ProjectCard
                    title={t('weatherTailWind.title')}
                    points={weatherTailWindPoints}
                    githubUrl="https://github.com/ednanf/weather-tailwind"
                    demoUrl="https://tailwind.frizzera.dev"
                />

                <ProjectCard
                    title={t('boxShadowGenerator.title')}
                    points={boxShadowGeneratorPoints}
                    githubUrl="https://github.com/ednanf/box-shadow-generator"
                    demoUrl="https://ednanf.github.io/box-shadow-generator"
                />

                <ProjectCard
                    title={t('stickies.title')}
                    points={stickiesPoints}
                    githubUrl="https://github.com/ednanf/stickies"
                    demoUrl="https://ednanf.github.io/stickies"
                />
            </div>
        </div>
    );
};

export default ProjectsPage;
