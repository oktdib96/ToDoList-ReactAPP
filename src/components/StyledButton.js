import styled from "styled-components";
export const StyledButton = styled.button`
  position: absolute;
  bottom: 5%;
  ${(props) => (props.primary ? "right: 10%" : "left: 10%")};
  font-size: 30px;
  background-color: rgba(254, 255, 255, 0.1);
  border: ${(props) =>
    props.primary ? "2px solid red" : "2px solid rgba(105, 235, 142, 0.9)"};
  border-radius: 25px;
  padding: 5px 20px;
  cursor: pointer;
  transition: 0.2s;
  color: ${(props) => (props.primary ? "red" : "rgba(105, 235, 142, 0.9)")};
  &:hover {
    padding: 5px 30px;
    background-color: rgba(254, 255, 255, 0);
  }
  @media (max-width: 600px) {
    left: 50%;
    ${(props) => (props.primary ? "bottom: 2%" : "bottom: 15%")};
    transform: translate(-50%, -50%);
    font-size: 14px;
    padding: 10px 30px;
    &:hover {
      padding: 10px 40px;
    }
  }
`;
