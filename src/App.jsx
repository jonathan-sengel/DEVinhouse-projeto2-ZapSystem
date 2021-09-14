import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ZapSystemPage from "./pages/ZapSystemPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <ZapSystemPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
