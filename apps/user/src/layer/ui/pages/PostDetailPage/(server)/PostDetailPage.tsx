import { getPostItemActionCache } from "#layer/domain/post/post.action";
import PostDetailPageContent from "#layer/ui/pages/PostDetailPage/(server)/PostDetailPageContent";
import NoData from "@repo/ui/components/ui/NoData";

async function PostDetailPage({ id }: { id: string }) {
  const post = await getPostItemActionCache(id);

  if (!post) return <NoData />;

  return <PostDetailPageContent post={post} />;
}

export default PostDetailPage;
