const Posts = [
  {
    id: 1,
    userId: 1,
    description: `Just shipped a major feature for our peer code review platform! 🚀`,
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    alt: "Code on a screen",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 2,
    userId: 2,
    description: `Spent the weekend hiking in the Western Ghats and completely unplugged from tech. 🏔️

Sometimes the best debugging happens when you step away from the screen.

Came back with a <b class="text-blue-500">fresh perspective</b> and fixed a bug I'd been stuck on for two days — in 10 minutes. Nature really is the best IDE.`,
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    alt: "Mountain landscape",
    createdAt: new Date(Date.now() - 3600000).toLocaleString(),
  },
  {
    id: 3,
    userId: 3,
    description: `Hot take: <b class="text-blue-500">code reviews are underrated.</b>

Most teams treat them as a formality — a checkbox before merging. But done right, they're one of the best learning tools available.

I've learned more from thoughtful review comments than from most tutorials. What's your experience with code reviews?`,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Team working together",
    createdAt: new Date(Date.now() - 7200000).toLocaleString(),
  },
  {
    id: 4,
    userId: 4,
    description: `Finally got my <b class="text-blue-500">React portfolio</b> live after weeks of procrastinating! 😅

Built with Vite + Tailwind + Framer Motion. Went from "I'll just do a quick refresh" to a full redesign at 2am.

Linkage in bio. Drop your portfolios below — I'd love to give feedback! 👇`,
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
    alt: "Portfolio website on laptop",
    createdAt: new Date(Date.now() - 86400000).toLocaleString(),
  },
  {
    id: 5,
    userId: 1,
    description: `CSS tip that saved me hours this week:

Instead of fighting with <b class="text-blue-500">z-index</b> wars, use CSS stacking contexts intentionally.

Creating a new stacking context with <b class="text-blue-500">isolation: isolate</b> on a parent keeps children scoped — no more random elements bleeding through modals. Game changer! 🎨`,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    alt: "CSS code",
    createdAt: new Date(Date.now() - 172800000).toLocaleString(),
  },
  {
    id: 6,
    userId: 5,
    description: `Just finished building my first <b class="text-blue-500">full-stack app</b> with Next.js + Prisma + PostgreSQL. 🎉

The developer experience is incredible — schema migrations, type-safe queries, and server actions all in one place.

If you haven't tried this stack yet, I highly recommend it. Happy to answer questions!`,
    img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    alt: "Full stack development",
    createdAt: new Date(Date.now() - 259200000).toLocaleString(),
  },
  {
    id: 7,
    userId: 6,
    description: `Reminder: <b class="text-blue-500">accessibility is not optional.</b>

Semantic HTML, ARIA labels, and keyboard navigation aren't extras — they're part of writing good code.

I did an a11y audit on our app last week and found 30+ issues hiding in plain sight. Start early, not after launch. ♿`,
    img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6",
    alt: "Accessibility in web design",
    createdAt: new Date(Date.now() - 345600000).toLocaleString(),
  },
  {
    id: 8,
    userId: 7,
    description: `TypeScript tip of the day: use <b class="text-blue-500">satisfies</b> instead of type casting.

Instead of \`as MyType\`, \`satisfies MyType\` validates the shape without losing inferred literal types.

Small change, huge win for type safety. Your future self will thank you. 🦺`,
    img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    alt: "TypeScript code",
    createdAt: new Date(Date.now() - 432000000).toLocaleString(),
  },
  {
    id: 9,
    userId: 8,
    description: `Open source contribution milestone: my <b class="text-blue-500">first PR got merged</b> into a major library today! 🎊

It was just a docs fix, but it taught me how large codebases are structured, how maintainers communicate, and how to write a good PR description.

Start small. Every contribution counts. 💪`,
    img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
    alt: "Open source contribution",
    createdAt: new Date(Date.now() - 518400000).toLocaleString(),
  },
  {
    id: 10,
    userId: 3,
    description: `Performance tip: stop over-fetching data. 🚫

Using <b class="text-blue-500">React Query</b> with smart cache invalidation cut our API calls by 60%.

Stale-while-revalidate, background refetching, and optimistic updates — it handles it all. If you're still doing manual fetch in useEffect, it's time to upgrade your data-fetching game.`,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    alt: "Performance metrics dashboard",
    createdAt: new Date(Date.now() - 604800000).toLocaleString(),
  },
];

export default Posts;
