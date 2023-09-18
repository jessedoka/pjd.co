"use client"

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiTwitter, SiInstagram } from "react-icons/si";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ModeToggle } from './ModeToggle';


const Navbar = () => {


    const menu = [
        {
            image: <SiTwitter className="w-6 h-6 cursor-pointer dark:hover:fill-white hover:fill-black fill-gray-400 transition-colors" />,
            title: "Twitter",
            path: "https://twitter.com/___doka",
            isInternal: false
        },
        {
            image: <SiInstagram className="w-6 h-6 cursor-pointer dark:hover:fill-white hover:fill-black fill-gray-400 transition-colors" />,
            title: "Instagram",
            path: "https://instagram.com/visuals.doka",
            isInternal: false
        },
    ]

    return (
        <main>
            <title>
                {/* {pageTitle} | {data.site.siteMetadata.title} */}
            </title>
            <Disclosure as="nav">
                {({ open }) => (
                    <>
                        <div>
                            <div className="animate-loading bg-orange-500 h-1.5 rounded-full fixed top-0 left-0"></div>
                            
                            <div className="mx-auto">
                                <div className="relative flex items-center justify-between">
                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                        {/* Mobile menu button*/}
                                        <Disclosure.Button className="inline-flex items-center justify-center px-12 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="flex-1 flex justify-end sm:mx-auto  sm:flex sm:items-center sm:justify-between sm:max-w-2xl rounded-md dark:sm:bg-[#161616]/60 sm:border border-gray-600/50 sm:backdrop-blur-lg p-6 mx-8 md:my-6">
                                        <div className="flex-shrink-0 flex items-center space-x-4">
                                            <Link href="/">
                                                <Image src='/logo.svg' width={1} height={1} alt="" className='w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 
                        hover:animate-wiggle transition-all duration-500 ease-in-out' />
                                            </Link>
                                            <ModeToggle />
                                        </div>
                                        <div className="hidden sm:block sm:ml-6">
                                            <div className="flex space-x-4">
                                                {menu.map((item) => (
                                                    <li key={item.title} className="list-none">
                                                        {item.isInternal ? (
                                                            <Link
                                                                href={item.path}
                                                            >
                                                                {item.image}
                                                            </Link>
                                                        ) : (
                                                            <a
                                                                href={item.path}
                                                            >
                                                                {item.image}
                                                            </a>
                                                        )}
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {menu.map((item) => (
                                    <Disclosure.Button
                                        key={item.title}
                                        as="a"
                                        href={item.path}
                                        className={
                                            "block px-3 py-2 rounded-md text-base font-medium"
                                        }
                                    >
                                        {item.title}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </main>
    );
}



export default Navbar;