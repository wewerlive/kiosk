import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { Loader, Error, ErrorBoundary } from './utils.jsx';
import Layout from './Layout/Layout.jsx';
import App from './App.jsx';
import './index.css';
import Login from './pages/LogIn.jsx';
import MoreInfo from './pages/MoreInfo.jsx';
import SignUp from './pages/SignUp.jsx';
import Projects from './pages/Projects.jsx';
import Editor from './pages/Editor.jsx';

const Router = createBrowserRouter([
  {
    path: '*',
    element: <Error />,
  },
  {
    path: '/',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: 'app',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/app/home',
        element: <App />,
        errorElement: <Error />,
      },
      {
        path: '/app/design/:id',
        element: <Editor />,
        errorElement: <Error />,
      },
      {
        path: '/app/projects',
        element: <Projects />,
        errorElement: <Error />,
      }
    ],
  },
  {
    path: '/info',
    element: <MoreInfo />,
    errorElement: <Error />,
  },
  {
    path: '/join',
    element: <SignUp />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider
        router={Router}
        fallbackElement={<Loader />}
      />
    </ErrorBoundary>
  </React.StrictMode>
);
