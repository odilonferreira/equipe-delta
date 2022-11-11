import { useStyles } from "bold-ui";
import React from "react";
import { CSSProperties } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import DadosBrutos from "../view/DadosBrutos";
import Dashboard from "../view/Dashboard";

export function SideMenu() {
  const { classes } = useStyles(createStyles);
  return (
    <div className={classes.container}>
      {/* <Router>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/dados-brutos">
            <DadosBrutos />
          </Route>
        </Router> */}
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link to={"/"}>Dashboard</Link>
        </li>
        <li className={classes.item}>
          <Link to={"/dados-brutos"}>Dados brutos</Link>
        </li>
      </ul>
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
