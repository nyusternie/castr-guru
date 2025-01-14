'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BoltIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'
import Link from 'next/link'

const navigation = [
    { name: 'Kits', href: '/kits' },
    { name: 'Studio', href: '/studio' },
    { name: 'Cloud', href: '/cloud' },
    { name: 'Guides', href: '/guides' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-gradient-to-b from-fuchsia-900 to-fuchsia-700 border-b-2 border-fuchsia-500">
            <nav aria-label="Global" className="mx-auto flex w-full items-center justify-between py-3 lg:px-8">
                <div className="hidden lg:flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Castr Guru</span>

                        <Image
                            alt=""
                            width={0}
                            height={0}
                            src="/icon.svg"
                            className="size-14"
                        />
                    </Link>
                </div>

                <div className="px-3 flex w-full justify-between lg:hidden">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Castr Guru</span>

                        <Image
                            alt=""
                            width={0}
                            height={0}
                            src="/icon.svg"
                            className="size-14"
                        />
                    </Link>

                    <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="pr-2 size-14 text-slate-100" />
                    </button>
                </div>

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                    <Link href="/kits" className="text-2xl/6 font-semibold text-slate-200 tracking-wide hover:text-amber-200">
                        Kits
                    </Link>

                    <Link href="/studio" className="text-2xl/6 font-semibold text-slate-200 tracking-wide hover:text-amber-200">
                        Studio
                    </Link>

                    <Link href="/cloud" className="text-2xl/6 font-semibold text-slate-200 tracking-wide hover:text-amber-200">
                        Cloud Manager
                    </Link>

                    <Link href="/guides" className="text-2xl/6 font-semibold text-slate-200 tracking-wide hover:text-amber-200">
                        Guides
                    </Link>

                </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/profile"
                        className="group flex flex-row items-center gap-1 text-2xl/6 font-semibold text-slate-200 hover:text-amber-200"
                    >
                        Connect
                        <BoltIcon className="pl-1 size-9 text-amber-500 group-hover:text-amber-300" />
                    </Link>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>

                            <Image
                                alt=""
                                width={0}
                                height={0}
                                src="/icon.svg"
                                className="size-14"
                            />
                        </a>

                        <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-400">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-10" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="space-y-4 py-6">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-3xl/7 font-semibold text-white hover:bg-gray-800">
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <div className="py-6">
                                <Link href="/profile" className="-mx-3 block group flex flex-row items-center gap-1 rounded-lg px-3 py-2.5 text-3xl/7 font-semibold text-white hover:bg-gray-800">
                                    Connect
                                    <BoltIcon className="pl-1 size-10 text-amber-500 group-hover:text-amber-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
