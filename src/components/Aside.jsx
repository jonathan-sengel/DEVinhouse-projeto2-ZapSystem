import styled from "styled-components";
import { useHistory } from "react-router";

const LateralMenu = styled.aside`
  width: 220px;
  box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  z-index: 5;
  grid-area: aside;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  font-size: 18px;
  & li {
    padding: 15px 0;
    margin: 5px 0;
    transition: 0.2s;
    &:hover {
      background-color: #e5ecf4;
      cursor: pointer;
    }
  }
`;

const Aside = () => {
  const history = useHistory();
  console.log(history);

  return (
    <LateralMenu>
      <List>
        <li onClick={() => history.push("/dash/home")}>Dashboard</li>
        <li onClick={() => history.push("/dash/messages")}>Mensagens</li>
      </List>
    </LateralMenu>
  );
};

export default Aside;
