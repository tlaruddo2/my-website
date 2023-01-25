import { Layout } from "components/layout/layout";
import {
  AboutPage,
  BodyErrorPage,
  HomePage,
  ExperiencePage,
  ProjectPage,
  ContactPage,
  SkillPage,
} from "pages";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const RootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} errorElement={<BodyErrorPage />} />
      <Route
        path="/about"
        element={<AboutPage />}
        errorElement={<BodyErrorPage />}
      />
      <Route
        path="/skill"
        element={<SkillPage />}
        errorElement={<BodyErrorPage />}
      />
      <Route
        path="/experience"
        element={<ExperiencePage />}
        errorElement={<BodyErrorPage />}
      />
      <Route
        path="/project"
        element={<ProjectPage />}
        errorElement={<BodyErrorPage />}
      />
      <Route
        path="/contact"
        element={<ContactPage />}
        errorElement={<BodyErrorPage />}
      />
    </Route>
  )
);
