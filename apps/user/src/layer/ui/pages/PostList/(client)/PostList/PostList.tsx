// type PageProps = {
//     items:[]
//     handleOnPage: () => void
// }
// // items={items} options={gridOptions} nextPage={handleOnPage} hasNext={hasNext}

// function List({}) {

// }

function PostList({ initalList }) {
  return (
    <div className="h-full w-full flex gap-5 flex-col">
      {list.map((post) => (
        <div key={post.id} className="border border-gray-300 rounded-md p-6 whitespace-pre-wrap">
          <ReactMarkdown>{post.title}</ReactMarkdown>
          <div>{post.createdAt}</div>
          <ReactMarkdown>{post.content.replace(post.title, "")}</ReactMarkdown>
          <div className="whitespace-pre-wrap">
            참고: {`\n${Array.from(post.metadata.references ?? []).join("\n")}`}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
