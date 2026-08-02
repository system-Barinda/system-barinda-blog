import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const EmptyPage = ({ title }: { title: string }) => (
  <section className="flex h-[80vh] items-center justify-center">
    <h1 className="text-5xl font-bold text-white">{title}</h1>
  </section>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <EmptyPage title="Blog" />,
      },
      {
        path: "projects",
        element: <EmptyPage title="Projects" />,
      },
      {
        path: "about",
        element: <EmptyPage title="About" />,
      },
      {
        path: "contact",
        element: <EmptyPage title="Contact" />,
      },
    ],
  },
]);
