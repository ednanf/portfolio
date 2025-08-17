import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './i18n.ts';
import './index.css';

import Layout from './components/Layout/Layout.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import CurriculumPage from './pages/CurriculumPage/CurriculumPage.tsx';
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage.tsx';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <CurriculumPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'project-details',
        element: <ProjectDetailsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
