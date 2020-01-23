import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "typeface-open-sans";

import "./styles.css";

const { useState } = React;

const App = () => {
  const [select, setSelect] = useState("optionA");

  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
  };
  return (
    <Wrapper>
      <Item active={select === "optionA"}>
        <RadioButton
          type="radio"
          name="radio"
          value="optionA"
          checked={select === "optionA"}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <Container>
          <Tag>Recommended</Tag>
          <Title>SBA 7(a) Loan</Title>
          <Details>Goverment loan option lowest interest rate</Details>
        </Container>
      </Item>
      <Item active={select === "optionB"}>
        <RadioButton
          type="radio"
          name="radio"
          value="optionB"
          checked={select === "optionB"}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <Container>
          <Title>SBA CDC/504 Loan</Title>
          <Details>Goverment loan option lowest interest rate.</Details>
        </Container>
      </Item>

      <Item active={select === "optionC"}>
        <RadioButton
          type="radio"
          name="radio"
          value="optionC"
          checked={select === "optionC"}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <Container>
          <Title>Medium Term Loan</Title>
          <Details>Goverment loan option lowest interest rate.</Details>
        </Container>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: block;
  padding: 18px 65px;
  height: auto;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  max-height: 150px;
  max-width: 540px;
  position: relative;
  transition: all 150ms;
  border: 1px solid #e2e5e7;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 15px;
  ${props =>
    props.active &&
    `
  border: 1px solid #006C67;
  background-color: #E4F0F0;
  // border: 1px solid #E4E4E4;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
  `}
`;

const Tag = styled.div`
  background: #e5fcf3;
  border-radius: 3px;
  color: #006c67;
  text-align: center;
  width: 100px;
  padding: 5px;
  margin: 0px;
  text-transform: uppercase;
  font-style: normal;
  font-family: "TT Norms";
  font-weight: 600;
  font-size: 10px;
  /* line-height: 24px; */
`;

const Details = styled.h2`
  font-style: normal;
  font-family: "TT Norms";
  font-weight: normal;
  font-size: 14px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;

  font-family: "TT Norms";
  font-size: 17px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 40px;
  left: 24px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  border: 1px solid #dbdbdb;
`;
const RadioButton = styled.input`
  opacity: 0;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin-right: 0px;
  &:hover ~ ${RadioButtonLabel} {
    background: #dbdbdb;
    &::after {
      content: "\f00c";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 6px;
      height: 6px;
      margin: 1px;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #006c67;
    border: 1px solid #1d2434;
    &::after {
      content: "\f00c";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 6px;
      height: 6px;
      margin: 2px;
      font-size: 14px;
    }
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
