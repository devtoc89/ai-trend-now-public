"use client";

import { useEffect, useState } from "react";
// import { dateFormat } from "@repo/util/date/date.util";

function Time({ children }: { children: string }) {
  const [time, setTime] = useState<string>();
  useEffect(() => {
    setTime(new Date(children).toLocaleString());
  }, [children]);
  return <span>{time}</span>;
}

export default Time;
