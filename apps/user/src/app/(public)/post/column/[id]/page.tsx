import { getPostItemActionCache } from "#layer/domain/post/post.action";
import PostDetailPage from "#layer/ui/pages/PostDetailPage/(server)/PostDetailPage";
import { generatePagePostMetadata } from "#lib/helper/metadata/metadata.helper";
import type { Metadata } from "next";

export const revalidate = 3600;
export const dynamicParams = true;

async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PostDetailPage id={id} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return await generatePagePostMetadata({ postFetcher: () => getPostItemActionCache(id) });
}
export default page;
