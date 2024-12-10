import { cn } from "@repo/util/style/tailwind.util";
import { marked } from "marked";
import xss from "xss";

async function Markdown({ children, className }: { children: string; className?: string }) {
  const __html = xss(await marked(children)); // XSS 방지
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <div className={cn("markdown-container", className)} dangerouslySetInnerHTML={{ __html }} />;
}

export default Markdown;
