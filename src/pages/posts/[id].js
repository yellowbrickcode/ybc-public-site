import Layout from '../../components/layout';
import Metadata from '../../components/metadata';
import Content from '../../components/content';
import Date from '../../components/date';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      <Metadata
        title={postData.title}
        description={postData.description}
        image={postData.image}
      ></Metadata>
      <Content>
        <h1>{postData.title}</h1>
        <p>
          Posted on <Date dateString={postData.date}></Date>&nbsp;&nbsp;/
          <span className="ml-2 text-gray-700">{postData.timeToRead.text}</span>
        </p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <hr></hr>
        <p>
          Thanks for taking the time to read this post. If you want to get in
          touch, you can{' '}
          <a href="https://twitter.com/ff0brickcode" target="_blank">
            find me on Twitter
          </a>
          .
        </p>
        <Link href="/">
          <a className="text-lg">&lt; Back to home</a>
        </Link>
      </Content>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
