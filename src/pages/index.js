import Link from 'next/link';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import { useState } from 'react';

export default function Home({ allPostsData }) {
  const pageSize = 5;
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([...allPostsData.slice(page, pageSize)]);
  const [endOfPosts, setEndOfPosts] = useState(allPostsData.length <= pageSize);

  async function loadMore() {
    const start = (page + 1) * pageSize;
    const end = start + pageSize;
    const nextPosts = [...allPostsData.slice(start, end)];
    setPage(page + 1);
    setPosts([...posts, ...nextPosts]);

    if (allPostsData.length <= end) {
      setEndOfPosts(true);
    }
  }

  return (
    <Layout>
      <Metadata></Metadata>
      <div className="p-4 lg:col-start-2 lg:col-span-3">
        <img
          src="./images/YBC_LOGO.svg"
          alt="Yellow Brick Code logo, a dog lying down wearing a cape with Yellow Brick Code written underneath"
          className="h-32 mx-auto mb-16"
        />
        {posts.map(({ id, date, title, description, timeToRead }) => {
          return (
            <div key={id} className="pb-8">
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className="font-bold text-yellow-600 hover:text-yellow-700 text-2xl hover:underline">
                  {title}
                </a>
              </Link>
              <p className="text-sm text-gray-600">
                Posted on <Date dateString={date}></Date>&nbsp;&nbsp;/
                <span className="ml-2 text-gray-700">{timeToRead.text}</span>
              </p>
              <p className="text-gray-600">{description}</p>
            </div>
          );
        })}
        <div className="min-w-full text-center">
          <button
            className={
              'py-2 px-4 bg-yellow-600 text-white rounded-full mx-auto' +
              (endOfPosts
                ? ' cursor-not-allowed opacity-50'
                : ' hover:bg-yellow-700')
            }
            onClick={loadMore}
          >
            Load more
          </button>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
