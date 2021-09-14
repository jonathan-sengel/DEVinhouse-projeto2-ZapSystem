import GridArea from "./components/GridArea";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <GridArea>
            <Header />
            <Aside />
            <Main />
          </GridArea>
        </Route>
        <Route>
          <h1 style={{ color: "#fff", textAlign: "center" }}>404 Não Encontrado!</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
