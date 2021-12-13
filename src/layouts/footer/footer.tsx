import Link from 'next/link';

const Footer = () => (
    <p className="text-center text-sm text-gray-500 my-10">
        &copy; 2021 <Link href="/"><a className="hover:underline">Simba Money Transfer</a></Link>. All rights reserved.
    </p>
)

export default Footer;