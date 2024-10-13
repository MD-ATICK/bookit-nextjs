import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_URL}/`,
            lastModified: new Date().toISOString(), // Current date for last modified
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/login`,
            lastModified: new Date().toISOString(), // Current date for last modified
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/contact`,
            lastModified: new Date().toISOString(), // Current date for last modified
            priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/about-us`,
            lastModified: new Date().toISOString(), // Current date for last modified
            priority: 0.5, // Updated from 0 to 0.5
        },
    ];
}
