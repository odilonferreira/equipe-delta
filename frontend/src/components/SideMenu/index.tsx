import { useStyles } from "bold-ui";
import Link from "next/link";
import { CSSProperties } from "react";

export function SideMenu() {
  const { classes } = useStyles(createStyles);
  return (
    <div className={classes.container}>
      <ui className={classes.list}>
        <li className={classes.item}>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li className={classes.item}>
          <Link href={"/dashboard"}>Dados brutos</Link>
        </li>
      </ui>
    </div>
  );
}

export const createStyles = () => ({
  container: {
    position: "fixed",
    paddingTop: "1rem",
    overflow: "auto",
    width: "200px",
    height: "100vh",
    borderRight: "1px solid gray",
    boxShadow: "2px 0 5px 0 gray",
  } as CSSProperties,
  list: {
    listStyle: "none",
    padding: "1rem",
    margin: 0,
  } as CSSProperties,
  item: {
    padding: "1rem 1rem",
  },
});
