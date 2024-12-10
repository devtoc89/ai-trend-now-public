import { COLUMN_PAGE_URL } from "#consts/global";
import { permanentRedirect } from "next/navigation";

export const runtime = "edge";

async function page() {
  permanentRedirect(COLUMN_PAGE_URL);
}

export default page;
