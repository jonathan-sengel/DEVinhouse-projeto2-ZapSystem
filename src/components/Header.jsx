import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  color: #0b1b73b3;
  background-color: #fff;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.15);
  grid-area: header;
  z-index: 4;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 220px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background-color: #0b1a73;
`;

const Avatar = styled.div`
  padding: 10px;
  margin: 5px 30px;
  border-radius: 50%;
  color: #fff;
  background-color: #0b1a73;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>ZAP SYSTEM</Logo>
      <h1>Nome da página</h1>
      <Avatar>OP</Avatar>
    </HeaderContainer>
  );
};

export default Header;
