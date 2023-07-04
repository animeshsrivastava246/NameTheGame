"use client";
import { db } from "@/firebase";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import { onValue, ref } from "firebase/database";

const getData = () => {
	const starCountRef = ref(db);
	let response;
	onValue(starCountRef, (snapshot) => {
		const data = snapshot.val();
		console.log("data", data);
		response = data;
	});
	return response;
};

export default function Home() {
	const data = getData();
	return (
		<main className={styles.main}>
			<Typography align="center" variant="h1">
				hello world
				{`${data}`}
			</Typography>
		</main>
	);
}
