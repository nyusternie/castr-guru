'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, TransitionChild } from "@headlessui/react";
import { Bars3Icon, BellIcon, CalendarIcon, ChartPieIcon, Cog6ToothIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import FooterMin from '../../components/FooterMin'

const navigation = [
    { name: "Dashboard", href: "manager", icon: HomeIcon, current: true },
    { name: "Team", href: "manager", icon: UsersIcon, current: false },
    { name: "Projects", href: "manager", icon: FolderIcon, current: false },
    { name: "Calendar", href: "manager", icon: CalendarIcon, current: false },
    { name: "Documents", href: "manager", icon: DocumentDuplicateIcon, current: false },
    { name: "Reports", href: "manager", icon: ChartPieIcon, current: false },
];
const frames = [
    { id: 1, name: "Awesome Frame", href: "manager", initial: "AF", current: false },
    { id: 2, name: "Uber Frame", href: "manager", initial: "UF", current: false },
    { id: 3, name: "Birthday Frame", href: "manager", initial: "BF", current: false },
];
const userNavigation = [
    { name: "Your profile", href: "manager" },
    { name: "Sign out", href: "manager" },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div>
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop transition className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />

                    <div className="fixed inset-0 flex">
                        <DialogPanel transition className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full">
                            <TransitionChild>
                                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                                <Link href="/" className="flex h-16 shrink-0 items-center">
                                    <Image
                                        alt="Castr Guru logo"
                                        width={0}
                                        height={0}
                                        src="/icon.svg"
                                        className="size-8"
                                    />
                                </Link>

                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(item.current ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white", "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold")}
                                                        >
                                                            <item.icon aria-hidden="true" className="size-6 shrink-0" />
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="text-xs/6 font-semibold text-gray-400">Your frames</div>
                                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                {frames.map((team) => (
                                                    <li key={team.name}>
                                                        <a
                                                            href={team.href}
                                                            className={classNames(team.current ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white", "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold")}
                                                        >
                                                            <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                                {team.initial}
                                                            </span>
                                                            <span className="truncate">{team.name}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="mt-auto">
                                            <a href="manager" className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
                                                <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                                                Settings
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                        <Link href="/" className="flex h-16 shrink-0 items-center">
                            <Image
                                alt="Castr Guru logo"
                                width={0}
                                height={0}
                                src="/icon.svg"
                                className="size-10"
                            />
                        </Link>

                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(item.current ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white", "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold")}
                                                >
                                                    <item.icon aria-hidden="true" className="size-6 shrink-0" />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                <li>
                                    <div className="text-xs/6 font-semibold text-gray-400">
                                        Your frames
                                    </div>

                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                        {frames.map((team) => (
                                            <li key={team.name}>
                                                <a
                                                    href={team.href}
                                                    className={classNames(team.current ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white", "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold")}
                                                >
                                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                        {team.initial}
                                                    </span>
                                                    <span className="truncate">{team.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                <li className="mt-auto">
                                    <a href="manager" className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
                                        <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>

                        {/* Separator */}
                        <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form action="manager" method="GET" className="grid flex-1 grid-cols-1">
                                <input
                                    name="search"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6"
                                />
                                <MagnifyingGlassIcon aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400" />
                            </form>

                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="size-6" />
                                </button>

                                {/* Separator */}
                                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <Image
                                            alt=""
                                            width={0}
                                            height={0}
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            className="size-8 rounded-full bg-gray-50"
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                                            <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-gray-900">
                                                Tom Cook
                                            </span>
                                            <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400" />
                                        </span>
                                    </MenuButton>

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        {userNavigation.map((item) => (
                                            <MenuItem key={item.name}>
                                                <a href={item.href} className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none">
                                                    {item.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="-mt-16 pt-16 min-h-screen flex flex-col justify-between">
                        <div className="py-5 px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
                            <h1 className="text-5xl font-medium text-amber-200 tracking-wider">
                                Castr Manager
                            </h1>

                            <p className="leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, ab, in, iusto facere atque deserunt fuga minima deleniti earum nesciunt placeat ratione quos minus! Nam quod perferendis sequi ducimus repudiandae?
                            </p>
                        </div>

                        <FooterMin />
                    </main>
                </div>
            </div>
        </>
    )
}
