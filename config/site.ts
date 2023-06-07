export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "CodeShot",
  description:
    "An open source application built using the new router, server components and everything new in Next.js 13.",
  url: "https://codeshot.vercel.com",
  ogImage: "https://codeshot.vercel.com/og.jpg",
  links: {
    twitter: "https://twitter.com/twit4kazim",
    github: "https://github.com/kazim-kayhan/codeshot",
  },
}
