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
        t('projectsPage:reactSwiftStacks.points.point1'),
        t('projectsPage:reactSwiftStacks.points.point2'),
        t('projectsPage:reactSwiftStacks.points.point3'),
        t('projectsPage:reactSwiftStacks.points.point4'),
    ];
    const miniCommunityPoints = [
        t('projectsPage:miniCommunity.points.point1'),
        t('projectsPage:miniCommunity.points.point2'),
        t('projectsPage:miniCommunity.points.point3'),
        t('projectsPage:miniCommunity.points.point4'),
    ];
    const gameJournalPoints = [
        t('projectsPage:gameJournal.points.point1'),
        t('projectsPage:gameJournal.points.point2'),
        t('projectsPage:gameJournal.points.point3'),
        t('projectsPage:gameJournal.points.point4'),
    ];
    const mernTaskManagerPoints = [
        t('projectsPage:mernTaskManager.points.point1'),
        t('projectsPage:mernTaskManager.points.point2'),
        t('projectsPage:mernTaskManager.points.point3'),
        t('projectsPage:mernTaskManager.points.point4'),
    ];
    const weatherTailWindPoints = [
        t('projectsPage:weatherTailWind.points.point1'),
        t('projectsPage:weatherTailWind.points.point2'),
        t('projectsPage:weatherTailWind.points.point3'),
        t('projectsPage:weatherTailWind.points.point4'),
    ];
    const boxShadowGeneratorPoints = [
        t('projectsPage:boxShadowGenerator.points.point1'),
        t('projectsPage:boxShadowGenerator.points.point2'),
        t('projectsPage:boxShadowGenerator.points.point3'),
    ];
    const stickiesPoints = [
        t('projectsPage:stickies.points.point1'),
        t('projectsPage:stickies.points.point2'),
        t('projectsPage:stickies.points.point3'),
        t('projectsPage:stickies.points.point4'),
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
                    title={t('projectsPage:reactSwiftStacks.title')}
                    points={reactSwiftStacksPoints}
                    githubUrl="https://github.com/ednanf/react-swiftstacks"
                    demoUrl="https://www.npmjs.com/package/react-swiftstacks"
                />

                <ProjectCard
                    title={t('projectsPage:miniCommunity.title')}
                    points={miniCommunityPoints}
                    githubUrl="https://github.com/ednanf/mini-community"
                    demoUrl="https://mini-community.frizzera.dev"
                />

                <ProjectCard
                    title={t('projectsPage:gameJournal.title')}
                    points={gameJournalPoints}
                    githubUrl="https://github.com/ednanf/game-journal"
                    demoUrl="https://game-journal.frizzera.dev "
                />

                <ProjectCard
                    title={t('projectsPage:mernTaskManager.title')}
                    // Resize in portuguese due to length
                    {...(isPt ? { titleKeyFontSize: 20 } : {})}
                    points={mernTaskManagerPoints}
                    githubUrl="https://github.com/ednanf/mern-task-manager"
                    demoUrl="https://taskmanager.frizzera.dev"
                />

                <ProjectCard
                    title={t('projectsPage:weatherTailWind.title')}
                    points={weatherTailWindPoints}
                    githubUrl="https://github.com/ednanf/weather-tailwind"
                    demoUrl="https://tailwind.frizzera.dev"
                />

                <ProjectCard
                    title={t('projectsPage:boxShadowGenerator.title')}
                    points={boxShadowGeneratorPoints}
                    githubUrl="https://github.com/ednanf/box-shadow-generator"
                    demoUrl="https://ednanf.github.io/box-shadow-generator"
                />

                <ProjectCard
                    title={t('projectsPage:stickies.title')}
                    points={stickiesPoints}
                    githubUrl="https://github.com/ednanf/stickies"
                    demoUrl="https://ednanf.github.io/stickies"
                />
            </div>
        </div>
    );
};

export default ProjectsPage;
