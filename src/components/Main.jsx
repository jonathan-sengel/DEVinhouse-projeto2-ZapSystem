import { Route } from "react-router-dom";
import styled from "styled-components";

const Content = styled.main`
  width: 100%;
  padding: 20px;
  background-color: #e5ecf4;
  grid-area: main;
`;

const Main = () => {
  return (
    <Content>
      <Route path="/dash/teste">
        <h1>EAI TESTE</h1>
        <input type="text"></input>
      </Route>
      <Route path="/dash/home">
        <h1>HOMES TESTES</h1>
      </Route>
    </Content>
  );
};

export default Main;
