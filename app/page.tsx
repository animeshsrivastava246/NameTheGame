"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import styles from "./page.module.css";
import { Typography } from "@mui/material";

const Home = () => {
	const [data, setData] = useState<{ id: string }[]>([]);

	useEffect(() => {
		const q = query(collection(db, "posts"));
		const unsubscricbe = onSnapshot(q, (querySnapshot) => {
			let itemsArr: { id: string }[] = [];
			querySnapshot.forEach((doc) => {
				itemsArr.push({ ...doc.data(), id: doc.id });
			});
			setData(itemsArr);
		});
	}, []);
	useEffect(() => {
		console.log("data :>> ", data);
	}, [data]);

	return (
		<main className={styles.main}>
			<Typography align="center" variant="h1">
				Hello World{" "}
				{data.map((d) => (
					<div key={d.id} className="">
						<p>{d.id}</p>
					</div>
				))}
			</Typography>
		</main>
	);
};

export default Home;
