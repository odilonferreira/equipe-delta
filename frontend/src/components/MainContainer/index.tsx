import { useStyles } from "bold-ui";
import { CSSProperties, ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  const { classes } = useStyles(createStyles);

  return <main className={classes.main}>{children}</main>;
}

export const createStyles = () => ({
  main: {
    marginLeft: "200px",
    padding: "2rem",
  } as CSSProperties,
});
