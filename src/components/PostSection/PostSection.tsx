import { useEffect, useState } from 'react';

export const PostSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      'https://docs.google.com/document/d/1pRDZyR09xRMZe1vkSuednzuUKJLNeuotmlEL1wTcd6I/export?format=txt'
    )
      .then((response) => response.text())
      .then((data) => {
        const jsonData = JSON.parse(data);
        setPosts(jsonData);
        console.log(posts);
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  }, []);

  return (
    <section>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id} className="flex flex-row w-2/5 h-40 bg-gray-200 m-4">
          <div className="w-1/4 h-40%">
            <img
              src={post.url}
              alt={post.caption}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-col flex justify-center h-full w-3/4">
            <p className="text-gray-800 font-medium">{post.caption}</p>
            <p className="text-gray-500">{post.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
