import React from 'react';
import { assets } from '../assets/assets'

const Footer = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
        },
        {
            title: "Need Help?",
            links: ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
        },
        {
            title: "Follow Us",
            links: ["Instagram", "Twitter", "Facebook", "YouTube"]
        }
    ];

    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img
                                        src={assets.logo}
                                        alt="logo"
                                        className="w-40 sm:w-44 cursor-pointer"
                                        onClick={() => navigate('/')}
                                    />
                    <p className="max-w-[410px] mt-6">
                        FreshCart is your go-to online grocery store, offering fresh produce, daily essentials, and top-quality household items — all delivered straight to your doorstep. We’re committed to freshness, affordability, and convenience, making your shopping experience easier than ever.
                    </p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                                {section.title}
                            </h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:text-green-500 transition">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
  “It does not matter how slowly you go as long as you do not stop.” — Confucius
  <br />
  Made with <span className="text-red-500">♥</span> and passion by{" "}
  <a
    href="https://www.linkedin.com/in/mohamedemary" // or any relevant link
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-700 transition"
  >
    Mohamed Emary
  </a>
</p>

        </footer>
    );
};

export default Footer;
