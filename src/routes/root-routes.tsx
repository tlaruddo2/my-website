import { Layout } from "components/layout/body";
import { HomePage } from "pages/home-page";
import {
  Route,
  createMemoryRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const RootRouter = createMemoryRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
    </Route>
  )
);
