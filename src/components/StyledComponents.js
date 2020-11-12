import styled from "styled-components";

export const HeaderWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  padding: 0 20px;
  height: 100px;
  position: fixed;
  height: 100px;
  width: 100%;
  top: 0;
  max-width: 100%;
  margin: 0;
  background-color: #043049;
  transition: all 0.4s ease-in-out;

  svg {
    font-size: 1.6rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const SidebarWrapper = styled.div`
  width: 300px;
  height: 100%;
  z-index: 2;
  position: fixed;
  top: 100px;
  left: 0;
  display: grid;
  place-items: center;
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  background-color: #041b29;
  transition: all 0.4s ease-in-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  @media (max-width: 975px) {
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(-100%)"};
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  transition: all 0.4s ease-in-out;
  z-index: 1;
  display: grid;
  place-items: center;
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  height: 600px;
  background-color: tomato;
  @media (min-width: 975px) {
    width: ${(props) =>
      props.show ? "calc(100% - 360px)" : "calc(100% - 60px)"};
    margin: ${(props) =>
      props.show ? "130px 30px 30px 330px" : "130px 30px 30px 30px"};
  }
  @media (max-width: 975px) {
    width: calc(100% - 60px);
    margin: 130px 30px 30px 30px;
  }
`;

export const Grid = styled.div`
  width: 300px;
  height: 300px;
  flex-grow: 1;
  display: grid;
  place-items: center;
  margin: 10px;
  background-color: #9e0e67;
`;

export const GridParent = styled.div`
  position: relative;
  transition: all 0.4s ease-in-out;
  z-index: 1;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  @media (min-width: 975px) {
    width: ${(props) =>
      props.show ? "calc(100% - 340px)" : "calc(100% - 40px)"};
    margin: ${(props) => (props.show ? "20px 20px 20px 320px" : "20px")};
  }
  @media (max-width: 975px) {
    width: calc(100% - 40px);
    margin: 20px auto;
  }
`;
