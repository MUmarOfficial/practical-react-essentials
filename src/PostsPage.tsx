import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    setPosts(jsonData);
  };

  useEffect(() => {
    // Run on Component mount
    getPosts();
  }, []);

  return (
    <section className="flex flex-col gap-5 m-7 p-7 justify-center  border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg max-w-7xl min-w-xs mx-auto">
      <h1 className="text-3xl text-center">PostsPage</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
        {posts.map((postItem) => {
          return (
            <div
              key={postItem.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 relative"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {postItem.title}
              </h3>
              <p className="m-1 p-1 text-center">{postItem.body}</p>
              <p className="text-gray-600 text-sm absolute bottom-2 left-3">
                Published by: {postItem.userId}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PostsPage;
