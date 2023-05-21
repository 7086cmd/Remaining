import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [countdown, setCountdown] = useState("");
  const [chinese, setChinese] = useState("");
  const [english, setEnglish] = useState("");
  const [socialStudies, setSocialStudies] = useState("");
  const [math, setMath] = useState("");
  const [science, setScience] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const june16 = new Date("June 16, 2023 00:00:00");
      const daysUntilJune16 = Math.floor(
        (june16.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );
      setCountdown(`中考剩余：${daysUntilJune16}天`);

      const june16Chinese = new Date("June 16, 2023 08:30:00");
      const timeUntilJune16Chinese = getTimeUntil(june16Chinese, now);
      setChinese(`语文：${timeUntilJune16Chinese}`);

      const june16English = new Date("June 16, 2023 13:30:00");
      const timeUntilJune16English = getTimeUntil(june16English, now);
      setEnglish(`英语：${timeUntilJune16English}`);

      const june16SocialStudies = new Date("June 16, 2023 15:00:00");
      const timeUntilJune16SocialStudies = getTimeUntil(
        june16SocialStudies,
        now
      );
      setSocialStudies(`社会·法治：${timeUntilJune16SocialStudies}`);

      const june17Math = new Date("June 17, 2023 08:30:00");
      const timeUntilJune17Math = getTimeUntil(june17Math, now);
      setMath(`数学：${timeUntilJune17Math}`);

      const june17Science = new Date("June 17, 2023 15:00:00");
      const timeUntilJune17Science = getTimeUntil(june17Science, now);
      setScience(`科学：${timeUntilJune17Science}`);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  function getTimeUntil(date: Date, now: Date) {
    const timeUntil = date.getTime() - now.getTime();
    const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntil % (1000 * 60)) / 1000);
    return `${days}天${hours
      .toString()
      .padStart(2, "0")}小时${minutes
      .toString()
      .padStart(2, "0")}分钟`;
  }

  return (
    <div className="countdown">
      <div style={{ fontSize: "72px", textAlign: "center" }}>
        <div>{countdown}</div>
      </div>
      <div style={{ fontSize: "36px", textAlign: "center" }}>
        <div>{chinese}</div>
        <div>{english}</div>
        <div>{socialStudies}</div>
        <div>{math}</div>
        <div>{science}</div>
      </div>
    </div>
  );
}

export default App;
