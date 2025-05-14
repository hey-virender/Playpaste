import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-7bg-gray-900">

            <div>
                <ul className="list-none flex p-8 justify-around md:justify-start md:gap-12">
                    <li><Link href="/privacy-policy"> <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Privacy Policy
                    </p></Link></li>
                    <li><Link href="/terms"><p className="leading-7 [&:not(:first-child)]:mt-6">
                        Terms of Service
                    </p></Link></li>
                    <li><a href="mailto:bikuchauhan786@gmail.com"><p className="leading-7 [&:not(:first-child)]:mt-6">
                        Contact us
                    </p></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
