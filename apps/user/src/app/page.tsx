import { ROOT_URL } from "#consts/global";
import { permanentRedirect } from "next/navigation";

export default function Home() {
  permanentRedirect(ROOT_URL);
}
