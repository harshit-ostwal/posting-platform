# Reactors — Posting Platform

A social posting platform built with **React 19** and **Vite** as part of the Sheryians Coding School (KODEX) Peer Code Review program. Users can create, edit, and delete posts with optional image attachments, and browse a feed showing likes, comments, and bookmark counts.

> **Note:** This is a frontend-only project. All data is in-memory and seeded from static constant files — there is no backend or database.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Components](#components)
- [Data Layer](#data-layer)
- [Design System](#design-system)
- [Peer Code Review](#peer-code-review)

---

## Features

- **Create Posts** — Open a modal, write a description (required), and optionally attach an image file
- **Edit Posts** — Update the description or image of any existing post via a three-dot dropdown menu
- **Delete Posts** — Remove a post with a confirmation dialog
- **Post Feed** — Browse all posts with author avatar, username, description, image, timestamp, and engagement counts (likes, comments, bookmarks, shares)
- **Show More / Show Less** — Long post descriptions collapse by default and can be expanded inline
- **XSS Protection** — Post descriptions support basic HTML (e.g. `<b>`) and are sanitized with DOMPurify before rendering
- **Loading States** — Async create/edit operations show a spinner inside the submit button

---

## Tech Stack

| Category             | Technology                                      |
| -------------------- | ----------------------------------------------- |
| Framework            | React 19                                        |
| Build Tool           | Vite 8                                          |
| Styling              | Tailwind CSS v4 (Vite plugin)                   |
| Component Primitives | shadcn/ui + Radix UI                            |
| Variant API          | class-variance-authority (CVA)                  |
| Class Merging        | clsx + tailwind-merge                           |
| Icons                | lucide-react                                    |
| Forms                | react-hook-form v7                              |
| XSS Sanitization     | DOMPurify v3                                    |
| Font                 | Geist Variable (@fontsource-variable/geist)     |
| Animations           | tw-animate-css                                  |
| Linting              | ESLint with react-hooks + react-refresh plugins |

---

## Project Structure

```
posting-platform/
├── index.html
├── vite.config.js          # Vite config — React plugin, Tailwind plugin, @ alias
├── components.json         # shadcn/ui config (style: radix-nova, icons: lucide)
├── jsconfig.json           # JS IntelliSense — mirrors the @ path alias
├── eslint.config.js
├── package.json
└── src/
    ├── main.jsx            # Entry point — ReactDOM.createRoot + StrictMode
    ├── App.jsx             # Root layout — composes all sections top to bottom
    ├── globals.css         # Tailwind imports, CSS custom properties (light + dark)
    ├── components/
    │   ├── common/
    │   │   ├── navbar.jsx          # Top bar: "Reactors" brand + Bell/Search icons
    │   │   └── footer.jsx          # Copyright footer with dynamic year
    │   ├── posts/
    │   │   ├── create-post-btn.jsx # "What's on your mind?" bar — opens create modal
    │   │   ├── post-modal.jsx      # Create / Edit modal form (react-hook-form)
    │   │   └── post.jsx            # Full post feed — renders every post card
    │   └── ui/
    │       ├── button.jsx          # CVA Button with variants + isLoading support
    │       ├── headings.jsx        # Polymorphic heading/text (h1–h6, p, ul, li)
    │       ├── image.jsx           # <img> wrapper with cover fit + fetchPriority
    │       ├── input.jsx           # Styled input with dark mode + invalid state
    │       ├── textarea.jsx        # Styled textarea (6 rows, non-resizable)
    │       └── spinner.jsx         # Lucide Loader2 animated spinner
    ├── constants/
    │   ├── posts.js        # 10 seed posts (id, userId, description, img, createdAt)
    │   ├── users.js        # 7 seed users (id, name, username, email, avatar)
    │   ├── likes.js        # 40 like records (id, userId, postId)
    │   ├── comments.js     # 29 comment records (id, userId, postId, content)
    │   └── bookmarks.js    # 9 bookmark records (id, userId, postId)
    ├── hooks/
    │   └── usePosts.js     # Core data hook — CRUD operations + relational joins
    └── lib/
        └── utils.js        # cn() utility — clsx + tailwind-merge
```

---

## Getting Started

### Prerequisites

- Node.js v18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/harshit-ostwal/posting-platform.git
cd posting-platform

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Components

### `App.jsx`

The root component. Renders a narrow centered column (`w-11/12 lg:w-1/4`) and composes:

1. `<Navbar />` — Top navigation
2. `<CreatePostBtn />` — Triggers the create modal
3. `<PostModal />` — Create post form (mounted at root level, toggled by `showModal` state)
4. `<Post />` — The full post feed
5. `<Footer />` — Bottom copyright bar

Data is fetched from the `usePosts()` hook and passed down as props.

### `post.jsx`

The most complex component. For each post it:

- Joins the post with the matching user from seed data
- Renders avatar, display name, username, relative timestamp
- Renders a sanitized description (supports inline HTML via DOMPurify)
- Shows an image if present
- Displays like, comment, bookmark, and share counts from the aggregated constants
- Provides a three-dot (`MoreHorizontal`) dropdown with **Edit** and **Delete** options
- Manages its own `showEditModal` state per post

### `post-modal.jsx`

A `<dialog>`-based modal used for **both** creating and editing posts. Accepts:

| Prop            | Type       | Description                            |
| --------------- | ---------- | -------------------------------------- |
| `show`          | `boolean`  | Controls modal visibility              |
| `setShow`       | `function` | Closes the modal                       |
| `onSubmit`      | `function` | Called with `(description, imageFile)` |
| `defaultValues` | `object`   | Pre-fills form fields when editing     |
| `isEditing`     | `boolean`  | Changes button label to "Update"       |

Uses `react-hook-form` for validation (description is required). Shows a loading spinner on the submit button during async submission.

---

## Data Layer

### `usePosts.js`

The single custom hook that acts as the entire data layer.

**State:**

- `posts` — Array of raw post objects (initialized from `POSTS` constant)
- `loading` — Boolean that starts `true` and resolves to `false` after a 1-second simulated fetch

**Derived data — `filteredPosts`:**
Each post is enriched with:

- `user` — Matched user object from `USERS`
- `likes` — Array of like objects for this post + `likesCount`
- `bookmarks` — Array of bookmark objects + `bookmarksCount`
- `comments` — Array of comment objects + `commentsCount`

**Methods:**

| Method       | Signature                                 | Behavior                                                                        |
| ------------ | ----------------------------------------- | ------------------------------------------------------------------------------- |
| `createPost` | `(description, image) => Promise`         | Waits 800 ms, prepends a new post; uses `URL.createObjectURL` for image preview |
| `editPost`   | `(postId, description, image) => Promise` | Waits 800 ms, updates the matching post in place                                |
| `deletePost` | `(postId) => void`                        | Synchronously removes the post by ID                                            |

### Constants

All seed data lives in `src/constants/`. The relational model:

```
USERS (id)
  └── POSTS (id, userId)
        ├── LIKES    (id, postId, userId)
        ├── COMMENTS (id, postId, userId, content, createdAt)
        └── BOOKMARKS (id, postId, userId)
```

---

## Design System

UI primitives in `src/components/ui/` are built on **CVA (class-variance-authority)** and **Tailwind CSS v4**.

### Button variants

| Variant       | Use case                                          |
| ------------- | ------------------------------------------------- |
| `default`     | Primary actions                                   |
| `destructive` | Dangerous actions (delete)                        |
| `outline`     | Secondary bordered actions                        |
| `secondary`   | Low-emphasis actions                              |
| `ghost`       | Icon buttons, toolbar actions                     |
| `link`        | Inline text links                                 |
| `none`        | Unstyled — use when full custom styling is needed |

The `isLoading` prop replaces the button content with a `<Spinner />` and disables interaction.

### Headings

The `<Heading>` component is polymorphic — it renders as the correct HTML tag based on the `size` prop (`h1`–`h6`, `p`, `ul`, `li`) without needing to specify `as`.

### CSS Custom Properties

`globals.css` defines a full design token set using `oklch` color space:

- `--background`, `--foreground`
- `--primary`, `--secondary`, `--muted`, `--accent`
- `--destructive`, `--border`, `--input`, `--ring`
- `--radius` (border radius scale)
- Chart colors (`--chart-1` through `--chart-5`)
- Sidebar-specific tokens

Both light and `.dark` variants are defined.

---

## Peer Code Review

This project was built as part of the **Sheryians Coding School KODEX** Peer Code Review program.

### Review Format

Each reviewer provides feedback in three sections:

1. **What is Good** — Highlight strengths in the code
2. **Improvements** — Point out issues with explanation and suggested fix
3. **Suggestions** — Optional enhancements that are not strictly necessary

### Review Rules

- Comment only on code — no personal remarks
- Always pair an improvement with a reason and a suggestion
- Be constructive and respectful

See [peer_code_review_task.md](peer_code_review_task.md) for the full task description and review guidelines.

---

## License

This project is for educational purposes as part of the Sheryians Coding School curriculum.
