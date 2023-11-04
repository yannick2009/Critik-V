import { Fragment } from "react";
import "./App.scss";
import Header from "@layouts/Header";
import Resumes from "@/pages/Resumes";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Resumes />
      </main>
    </Fragment>
  );
}

export default App;
