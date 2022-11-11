import { Heading, useStyles } from "bold-ui";
import Header from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { CSSProperties } from "react";
import MainContainer from "../../components/MainContainer";

export default function Dashboard() {
  const { classes } = useStyles(createStyles);

  return (
    <>
      <Header />
      <SideMenu />
      <MainContainer>
        <Heading level={1}>Dashboard</Heading>
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
