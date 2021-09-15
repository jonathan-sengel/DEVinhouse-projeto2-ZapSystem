import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import BarGraph from "./BarGraph";
import LineChart from "./LineGraph";
import Select from "./Select";
import TableComponent from "./TableComponent";

const Content = styled.main`
  width: 100%;
  padding: 20px;
  background-color: #e5ecf4;
  grid-area: main;
`;

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    (async function () {
      const msgs = await fetch("http://localhost:3333/messages").then((resp) => resp.json());
      setMessages(msgs);
      setFilteredMessages(msgs);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const query = Object.entries(filters).join("&").replaceAll(",", "=");
      const msgs = await fetch(`http://localhost:3333/messages?${query}`).then((resp) =>
        resp.json()
      );
      setFilteredMessages(msgs);
    })();
  }, [filters]);

  const handleSelectChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    if (!value) {
      const filtersClone = { ...filters };
      delete filtersClone[name];
      setFilters({ ...filtersClone });
      return;
    }
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Content>
      <Route path="/sys/home">
        <BarGraph />
        <LineChart />
      </Route>
      <Route path="/sys/messages">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 0",
            }}
          >
            <Select
              selectId="channel"
              selectName="channel"
              listOptions={messages}
              onChange={handleSelectChange}
            />
            <Select
              selectId="trigger"
              selectName="trigger"
              listOptions={messages}
              onChange={handleSelectChange}
            />
            <Select
              selectId="timer"
              selectName="timer"
              listOptions={messages}
              onChange={handleSelectChange}
            />
          </div>
          {filteredMessages.length > 0 && <TableComponent content={filteredMessages} />}
          {filteredMessages.length < 1 && <p>Sem resultados...</p>}
        </div>
      </Route>
    </Content>
  );
};

export default Main;
