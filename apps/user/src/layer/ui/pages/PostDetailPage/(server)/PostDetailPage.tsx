import { getPostItemActionCache } from "#layer/action/post.action";
import NoData from "#layer/ui/components/common/(server)/NoData/NoData";
import PostDetailPageContent from "#layer/ui/pages/PostDetailPage/(server)/PostDetailPageContent";

async function PostDetailPage({ id }: { id: string }) {
  const post = await getPostItemActionCache(id);

  if (!post) return <NoData />;

  return <PostDetailPageContent post={post} />;
}

export default PostDetailPage;
