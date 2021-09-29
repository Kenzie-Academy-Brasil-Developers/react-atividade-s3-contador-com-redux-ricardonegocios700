import styled from "styled-components";

export const Container = styled.div`
  background-color: #dbdbdb;
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    padding: 10px;
  }
  button {
    background-color: #6ac46a;
    width: 35px;
    height: 26px;
    margin: 3px;
    cursor: pointer;
    border-radius: 6px;
    font-size: large;
  }
  button:hover {
    background-color: green;
  }
`;
