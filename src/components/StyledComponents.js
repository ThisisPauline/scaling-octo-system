import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;

  color: #444;

  margin-left: 35%;
  margin-top: 5%;
  height: 500px;
  background: url(https://images.unsplash.com/photo-1668407024372-cdf840d396e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80);
  background-size: cover;
  background-repeat: no-repeat;
`;

const SmallerContainer = styled.div`
  height: 50%;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-size: 50px;
  font-weight: 900;
  padding-right: 40px;
  padding-left: 40px;
  color: white;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-weight: 900;
  color: white;
  margin-right: 10%;
  margin-left: 10%;
`;

const Button = styled.button`
  margin-top: 4%;
  font-weight: bold;
  width: 180px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: transparent;
  border: 3px solid white;
  font-size: 16px;
  color: white;
  &:hover {
    background-color: white;
    color: purple;
    transition: background-color 1s ease 0s;
  }
`;

const StyledComponents = () => (
  <Container>
    <Title>Think outside the box</Title>
    <SmallerContainer>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Proin hendrerit.
      </Text>
      <Button>Start now</Button>
    </SmallerContainer>
  </Container>
);

export default StyledComponents;
