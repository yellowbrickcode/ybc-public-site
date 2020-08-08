import Link from 'next/link';

export default function Navlink({ href, text }) {
  return (
    <Link href={href}>
      <a className="text-gray-600 hover:underline cursor-pointer mr-4">
        {text}
      </a>
    </Link>
  );
}
