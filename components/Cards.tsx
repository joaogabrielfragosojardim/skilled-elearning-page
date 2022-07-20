import axios from "axios";
import { useEffect, useState } from "react";
import { constants } from "../constants/constants";
import { Card } from "./Card";

import styles from "../styles/Cards.module.css";

interface IRequest {
  title: string;
  paragraph: string;
  icon: string;
}

export const Cards = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const dataFromApi = await axios.get(
        "https://selp-jgfj.herokuapp.com/api/v1/courses"
      );
      setData(dataFromApi.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 490px))",
          gap: "80px 30px",
          justifyContent: "center",
          marginBottom: "100px",
        }}
      >
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 490px))",
        gap: "80px 30px",
        justifyContent: "center",
        marginBottom: "100px",
      }}
    >
      <Card background={constants.pinkGradient}>
        <h3>Check out our most popular courses!</h3>
      </Card>
      {data.map((item: IRequest) => (
        <Card
          key={item.title}
          background="white"
          icon={item.icon}
          loading={loading}
        >
          <span>{item.title}</span>
          <p>{item.paragraph}</p>
          <a href="#">Get Started</a>
        </Card>
      ))}
    </div>
  );
};
