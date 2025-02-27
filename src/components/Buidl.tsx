// 'use client'

// import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
    `Earn Residual Income`,
    `Work Comfortably @ Home`,
    `30 days of paid vacation`,
    `Annual team retreats`,
    `Benefits for you and your family`,
    `A great work environment`
]

export default function Buidl() {
    return (
        <div className="bg-gray-900 mt-24 sm:mt-32 py-24 sm:py-32">
            <div className="relative isolate">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                        <Image
                            alt=""
                            width={0}
                            height={0}
                            src="https://i.ibb.co/WpS82kj/ready-to-buidl.jpg"
                            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                        />

                        <div className="w-full flex-auto">
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Ready to #BUIDL?
                            </h2>

                            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                                    Getting started could’t possibly be any easier.
                                So what are you waiting for??
                                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                            </p>

                            <ul role="list" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex gap-x-3">
                                        <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 flex">
                                <Link href="/build" className="text-3xl/6 font-semibold text-rose-300 tracking-widest hover:text-rose-400">
                                    Get Started NOW!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div aria-hidden="true" className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
                    <div
                        style={{
                            clipPath:
                                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                        }}
                        className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                    />
                </div>
            </div>
        </div>
    )
}
