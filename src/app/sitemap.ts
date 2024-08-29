import type { MetadataRoute } from 'next'

const URL = 'https://www.angel.ovh';

const PAGES: MetadataRoute.Sitemap = [
    {
        url: "",
        changeFrequency: 'weekly',
        priority: 1,
    },
    {
        url: "/about-me",
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: "/projects",
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: "/education",
        changeFrequency: 'monthly',
        priority: 0.8,
    },
]

export default function sitemap(): MetadataRoute.Sitemap {
    return PAGES.map((page) => ({
        url: `${URL}${page.url}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }))

}