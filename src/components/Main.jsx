import { Route } from "react-router-dom";
import styled from "styled-components";

import BarGraph from "./BarGraph";
import LineChart from "./LineGraph";

const Content = styled.main`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  flex-direction: column;
  padding: 20px;
  background-color: #e5ecf4;
  grid-area: main;
`;

const Main = () => {
  return (
    <Content>
      <Route path="/dash/home">
        <BarGraph />
        <LineChart />
      </Route>
      <Route path="/dash/messages">
        <h1>HOMES TESTES</h1>
      </Route>
    </Content>
  );
};

export default Main;
