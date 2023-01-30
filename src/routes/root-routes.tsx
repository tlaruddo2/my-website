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
    <Route
      path="/my-website"
      element={<Layout />}
      errorElement={<BodyErrorPage />}
    >
      <Route
        path="/my-website"
        element={<HomePage />}
        errorElement={<BodyErrorPage />}
      />
      <Route
        path="/my-website/about"
        element={<AboutPage />}
        errorElement={<BodyErrorPage />}
      />
      <Route
        path="/my-website/skill"
        element={<SkillPage />}
        errorElement={<BodyErrorPage />}
      />
      <Route
        path="/my-website/experience"
        element={<ExperiencePage />}
        errorElement={<BodyErrorPage />}
      />
      <Route
        path="/my-website/project"
        element={<ProjectPage />}
        errorElement={<BodyErrorPage />}
      />
      <Route
        path="/my-website/contact"
        element={<ContactPage />}
        errorElement={<BodyErrorPage />}
      />
    </Route>
  )
);
