import { PAPER_PAGE_URL } from "#consts/global";
import { permanentRedirect } from "next/navigation";

async function page() {
  permanentRedirect(PAPER_PAGE_URL);
}

export default page;
