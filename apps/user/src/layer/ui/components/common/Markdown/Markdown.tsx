import { cn } from "@repo/util/style/tailwind.util.ts";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
function Markdown({ children, className }: { children: string; className?: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      remarkRehypeOptions={{ passThrough: ["link"] }}
      className={cn("markdown-container", className)}
    >
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;
