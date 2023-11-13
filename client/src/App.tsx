import { Fragment } from "react";
import "./App.scss";
import Header from "@layouts/Header";
import Resumes from "@/pages/Resumes";
import Upload from "@/pages/Upload";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResumesList from "@layouts/ResumesList";
import MyResumesList from "@layouts/MyResumesList";
import FavResumesList from "@layouts/FavResumesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Fragment>
        <Header />
        <main>
          <Outlet />
        </main>
      </Fragment>
    ),
    children: [
      {
        path: "",
        element: <Resumes />,
        children: [
          {
            path: "",
            element: <ResumesList />,
          },
          {
            path: "favoris",
            element: <FavResumesList />,
          },
          {
            path: "my-resume",
            element: <MyResumesList />,
          },
        ],
      },
      {
        path: ":resumeId",
        element: (
          <div>
            <p>Yannick</p>
          </div>
        ),
      },
      {
        path: "resume-guide",
        element: (
          <div>
            <p>Guide du CV</p>
          </div>
        ),
      },
      {
        path: "about-us",
        element: (
          <div>
            <p>à propos de nous</p>
          </div>
        ),
      },
      {
        path: "upload-resume",
        element: <Upload />,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
