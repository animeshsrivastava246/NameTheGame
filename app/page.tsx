"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import PostCard from "./components/PostCard";
import { PostType } from "./types/postType";

const Home = () => {
  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscricbe = onSnapshot(q, (querySnapshot) => {
      let itemsArr: PostType[] = [];
      querySnapshot.forEach((doc) => {
        const da = doc.data() as PostType;
        itemsArr.push({ ...da, id: doc.id });
      });
      setData(itemsArr);
    });
  }, []);
  useEffect(() => {
    console.log("data :>> ", data);
  }, [data]);

  return (
    <main className={styles.main}>
      <h1>Name The Game</h1>
      <div className={styles.posts_container}>
        {data.map((d) => (
          <PostCard key={d.id} post={d} />
        ))}
      </div>
    </main>
  );
};

export default Home;
