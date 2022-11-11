import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginButton from "../components/LoginButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <LoginButton />
    </div>
  );
}
