const Posts = [
  {
    id: 1,
    userId: 1,
    description: `Just shipped a major feature for our peer code review platform! 🚀

The new <b class="text-blue-500">real-time collaboration</b> mode lets you comment directly on specific lines of code.

Big shoutout to everyone who gave feedback during beta. This one's for you. 🙌`,
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
];

export default Posts;
