import { Heading, useStyles } from "bold-ui";
import { CSSProperties, useEffect } from "react";
import React from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import { SideMenu } from "../components/SideMenu";
import api from "../api/axios";
import RespostaVersao from "../components/RespostaVersao";

export default function Dashboard() {
  const { classes } = useStyles(createStyles);

  const data = 
    {
      "cidade": "",
      "texto": "",
      "versao": ""
  }
  

  useEffect(() => {
    fetch("http://localhost:5000/satifacao", {body: JSON.stringify(data)}).
      then((response) => response.json())
  .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Header />
      <SideMenu />
      <MainContainer>
        <Heading level={1}>Dashboard</Heading>
        <RespostaVersao />
      </MainContainer>
    </>
  );
}

export const createStyles = () => ({
  container: {
    // position: "fixed",
    paddingTop: "1rem",
    overflow: "auto",
    width: "200px",
    height: "100vh",
    borderRight: "1px solid gray",
    boxShadow: "2px 0 5px 0 gray",
  } as CSSProperties,
});
