import Image from 'next/image'
// import Link from 'next/link'

const guides = [
    {
        id: 'my-1st-frame',
        title: "My 1st Frame",
        href: "/guide/my-1st-frame",
        description:
            `It's time to make it happen and #BUIDL your first Farcaster frame. Don't worry, we will guide you through the entire process each step of the way...`,
        imageUrl: "https://i.ibb.co/nzLRzVc/my-1st-frame.jpg",
        date: "Jan 10, 2025",
        datetime: "2025-01-10",
        category: { title: "For Newbies", href: "/guides/newbie" },
        author: {
            name: "@shomari",
            role: "Farcaster Master Builder",
            href: "/about/shomari",
            imageUrl: "/img/portrait.jpg",
        },
    },
    {
        id: 'builder-101',
        title: "Builder 101: Setting Up Your Workspace",
        href: "/guide/builder-101",
        description:
            `Creating a proper work environment is the first step on the road to "building" your first project. We'll guide you step-by-step through the entire process from start to finish.`,
        imageUrl: "https://i.ibb.co/XxsKGpk/building-101.png",
        date: "Jan 10, 2025",
        datetime: "2025-01-10",
        category: { title: "For Newbies", href: "/guides/newbie" },
        author: {
            name: "@shomari",
            role: "Farcaster Master Builder",
            href: "/about/shomari",
            imageUrl: "/img/portrait.jpg",
        },
    },
    {
        id: 'why-frames',
        title: "Why Frames?",
        href: "/guide/why-frames",
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
        imageUrl: "https://i.ibb.co/hVsG4vt/frames.png",
        date: "Jan 6, 2025",
        datetime: "2025-01-06",
        category: { title: "For Newbies", href: "/guides/newbie" },
        author: {
            name: "@shomari",
            role: "Farcaster Master Builder",
            href: "/about/shomari",
            imageUrl: "/img/portrait.jpg",
        },
    },
    {
        id: 'welcome',
        title: "Welcome",
        href: "/guide/welcome",
        description:
            `Introducing a new platform for Founders and Teams to be able to effortlessly leverage the power & reach of Farcaster's v2 Frames.`,
        imageUrl: "https://i.ibb.co/GFkwWR0/welcome.png",
        date: "Jan 1, 2025",
        datetime: "2025-01-01",
        category: { title: "For Newbies", href: "/guides/newbie" },
        author: {
            name: "@shomari",
            role: "Farcaster Master Builder",
            href: "/about/shomari",
            imageUrl: "/img/portrait.jpg",
        },
    },
]

export default function Example() {
    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Castr Guides
                    </h2>

                    <p className="w-full sm:w-2/3 mt-2 text-lg/8 text-gray-600">
                        Browse our collection of interactive smart guides, built by our in-house GÜRŲs, covering ALL aspects on how to leverage FRAMES to grow your REACH within the Farcaster ecosystem.
                    </p>

                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        {guides.map((post) => (
                            <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <Image
                                        alt=""
                                        width={0}
                                        height={0}
                                        src={post.imageUrl} className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>

                                <div>
                                    <div className="flex items-center gap-x-4 text-sm">
                                        <time dateTime={post.datetime} className="text-gray-500">
                                            {post.date}
                                        </time>

                                        <a href={post.category.href} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                            {post.category.title}
                                        </a>
                                    </div>

                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-2xl/8 font-semibold text-gray-900 group-hover:text-gray-600 tracking-wider">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>

                                        <p className="mt-2 text-base/7 text-gray-600">
                                            {post.description}
                                        </p>
                                    </div>

                                    <div className="mt-3 flex border-t border-gray-900/5 pt-3">
                                        <div className="relative flex items-center gap-x-4">
                                            <Image
                                                alt=""
                                                width={0}
                                                height={0}
                                                src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50"
                                            />

                                            <div className="text-sm/6">
                                                <p className="font-semibold text-gray-900 tracking-wider">
                                                    <a href={post.author.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.author.name}
                                                    </a>
                                                </p>

                                                <p className="text-gray-600 text-xs">
                                                    {post.author.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
