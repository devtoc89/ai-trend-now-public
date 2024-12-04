import { COLUMN_PAGE_URL } from "#consts/global";
import { permanentRedirect } from "next/navigation";

async function page() {
  permanentRedirect(COLUMN_PAGE_URL);
}

export default page;
