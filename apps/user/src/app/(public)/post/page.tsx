import { permanentRedirect } from "next/navigation";

async function page() {
  permanentRedirect("/post/page/1");
}

export default page;
