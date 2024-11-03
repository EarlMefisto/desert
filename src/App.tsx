import React from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Container>
        <Card>
          <StylesImage src={"/image.png"} />
          <CardTitle>Headline</CardTitle>
          <CardText>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </CardText>
          <BtnBox>
            <StyledBtn1>See more</StyledBtn1>
            <StyledBtn2>Save</StyledBtn2>
          </BtnBox>
        </Card>
      </Container>
    </div>
  );
}

export default App;

const Card = styled.div`
  display: "flex";
  flex-wrap: wrap;
  height: fit-content;
  width: 300px;

  padding: 10px;
  border: 1px solid #fff;
  border-radius: 15px;

  box-shadow: 0 4px 20px 5px #00000019;
  background: #fff;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;

  padding: 20px;
`;

const StylesImage = styled.img`
  background-size: cover;
  min-width: 100%;
`;

const CardTitle = styled.div`
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-weight: 750;
  font-style: normal;
  font-size: 16px;
  color: #000;

  padding: 20px 200px 0px 10px;
`;

const CardText = styled.div`
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  line-height: 1.66667;
  color: #abb3ba;

  padding: 20px 20px 0px 10px;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 12px;

  padding: 19px 0px 10px 10px;
`;

const StyledBtn1 = styled.button`
  border: 2.5px solid #4e71fe;
  border-radius: 5px;
  width: 86px;

  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  padding: 3px 0 3px 0;
  line-height: 2;
  font-size: 10px;
  color: #fff;
  background-color: #4e71fe;
`;

const StyledBtn2 = styled(StyledBtn1)`
  background-color: #f5f5f5;

  line-height: 2;
  color: #4e71fe;
`;
