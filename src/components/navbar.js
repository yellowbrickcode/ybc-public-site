import Navlink from './navlink';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const routes = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/about',
      text: 'About',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
  ];

  const router = useRouter();
  const isPost = router.pathname.indexOf('/posts/') !== -1;

  return (
    <nav className="w-full py-4 text-right font-bold grid grid-cols-1 lg:grid-cols-5">
      <div className="container mx-auto h-12 lg:col-start-2 lg:col-span-3">
        {isPost ? (
          <Link href="/">
            <img
              src="/images/YBC_LOGO.svg"
              alt="Yellow Brick Code logo, a dog lying down wearing a cape with Yellow Brick Code written underneath"
              className="h-12 float-left ml-1 cursor-pointer"
            />
          </Link>
        ) : (
          <></>
        )}
        {routes.map((route, index) => {
          return <Navlink href={route.href} text={route.text} key={index} />;
        })}
      </div>
    </nav>
  );
}
