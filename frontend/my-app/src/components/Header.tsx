import { useStyles, Icon, Button } from "bold-ui";
import React from "react";
import { CSSProperties } from "react";

export default function Header() {
  const { classes } = useStyles(createStyles);

  return (
    <header className={classes.headerContainer}>
      <div className={classes.headerContent}>
        {/* <Icon icon="openDoor"></Icon> */}
      </div>
    </header>
  );
}

export const createStyles = () => ({
  headerContainer: {
    height: "5rem",
    borderBottom: "1px solid gray",
    boxShadow: "0 4px 10px -2px gray",
  } as CSSProperties,
  headerContent: {
    maxWidth: "1120px",
    height: "5rem",
    margin: "0 auto",
    padding: "0 2rem",
    justifyContent: "flex-end",
    display: "flex",
    alignItems: "center",
  },
});
