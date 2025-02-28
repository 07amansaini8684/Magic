import React from "react";
import { RxDiscordLogo } from "react-icons/rx";
import { CiTwitter } from "react-icons/ci";

const Footer: React.FC = () => {
    const links = [
        {
            title: "Product",
            items: ["Email Collection", "Pricing", "FAQ"],
        },
        {
            title: "Community",
            items: ["Discord", "Twitter", "Email"],
        },
        {
            title: "Legal",
            items: ["Terms", "Privacy"],
        },
    ];

    return (
        <footer className="bg-black text-white w-full max-w-7xl relative z-10 p-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    {/* Logo and tagline section */}
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 mr-2">
                                <img src="/icon.png" alt="Logo" className="w-full h-full object-center" />
                            </div>
                            <span className="text-xl font-bold">Magic UI</span>
                        </div>
                        <p className="text-md text-gray-200">UI Library for Design Engineers</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {links.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-sm font-bold mb-4 uppercase">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.items.map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm text-gray-400 hover:text-white transition">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer bottom with copyright and icons */}
                <div className="flex flex-col md:flex-row-reverse justify-between items-center pt-4 border-t border-gray-800">
                    <p className="text-sm text-gray-400 mb-4 md:mb-0">
                        Copyright © 2024 Magic UI. All Rights Reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-500 hover:text-white transition text-lg">
                            <RxDiscordLogo />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition text-lg">
                            <CiTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
