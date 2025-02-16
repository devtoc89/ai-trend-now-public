import { ROOT_URL } from "#consts/global";
import { permanentRedirect } from "next/navigation";

async function page() {
  permanentRedirect(ROOT_URL);
}

export default page;
