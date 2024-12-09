"use client";

import { timeAgoFromStr } from "@repo/util/date/date.util";
import { useEffect, useState } from "react";

function TimeAgo({ children }: { children: string }) {
  const [time, setTime] = useState<string>();
  useEffect(() => {
    setTime(timeAgoFromStr(children));
  }, [children]);
  return <p>{time}</p>;
}

export default TimeAgo;
