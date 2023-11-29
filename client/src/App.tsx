import { Fragment } from "react";
import "./App.scss";
import Header from "@layouts/Header";
import Resumes from "@pages/Resumes";
import Upload from "@pages/Upload";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResumesList from "@layouts/ResumesList";
import MyResumesList from "@layouts/MyResumesList";
import FavResumesList from "@layouts/FavResumesList";
import AboutUs from "@pages/AboutUs";
import ResumeGuide from "@pages/ResumeGuide";
import SingleResume from "@pages/SingleResume";
import Modal from "./modals/Modal";
import { modalContext } from "./context/store";

// ROUTER
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
        element: <SingleResume />,
      },
      {
        path: "resume-guide",
        element: <ResumeGuide />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "upload-resume",
        element: <Upload />,
      },
    ],
  },
]);

// FINAL RENDER
function App(): JSX.Element {
  // VARIABLES
  const modalVisibilty = modalContext((state) => state.visible);
  // RETURN
  return (
    <Fragment>
      {modalVisibilty && <Modal />}
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
