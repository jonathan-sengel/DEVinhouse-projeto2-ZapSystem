import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 220px 1fr;
  grid-template-areas: "header header" "aside main";
`;

const GridArea = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GridArea;
