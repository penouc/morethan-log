const CONFIG = {
  // profile setting (required)
  profile: {
    name: "penouc",
    image: "/notion-avatar-1691257108216.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "I develop everything using node.",
    email: "penouc@gmail.com",
    linkedin: "",
    github: "penouc",
    instagram: "",
  },
  projects: [
    {
      name: `blog`,
      href: "https://github.com/penouc/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "blog",
    description: "welcome to blog!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log-blond-seven.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
