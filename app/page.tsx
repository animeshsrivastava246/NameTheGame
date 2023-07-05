"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { onValue, ref } from "firebase/database";
import styles from "./page.module.css";
import { Typography } from "@mui/material";

const Home = () => {
	const [data, setData] = useState("");

	useEffect(() => {
		const getData = async () => {
			const starCountRef = ref(db);
			onValue(starCountRef, (snapshot) => {
				const data = snapshot.val();
				setData(data);
			});
		};

		getData();
	}, []);
	return (
		<main className={styles.main}>
			<Typography align="center" variant="h1">
				Hello World {data}
			</Typography>
		</main>
	);
};

export default Home;
