"use client";
import styles from "./page.module.css";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography align="center" variant="h1">
        hello world
      </Typography>
    </main>
  );
}
