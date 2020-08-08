import Head from 'next/head';
import Navbar from './navbar';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ?? 'Yellow Brick Code'}</title>
      </Head>
      <Navbar />
      <main className="container mx-auto grid grid-cols-1 lg:grid-cols-5 pb-10">
        {children}
      </main>
    </>
  );
}
