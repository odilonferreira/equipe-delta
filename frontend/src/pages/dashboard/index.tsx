import { Heading, useStyles } from "bold-ui";
import Header from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { CSSProperties } from "react";

export default function Dashboard() {
  const { classes } = useStyles(createStyles);

  return (
    <>
      <Header />
      <div>
        <SideMenu />
        <Heading level={1}>Dashboard</Heading>
      </div>
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
