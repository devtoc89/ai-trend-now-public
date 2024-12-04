"use client";

import { timeAgoFromStr } from "@repo/util/date/date.util";

function TimeAgo({ children }: { children: string }) {
  return <p>{timeAgoFromStr(children)}</p>;
}

export default TimeAgo;
