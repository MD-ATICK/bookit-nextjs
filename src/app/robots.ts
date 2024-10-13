import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: '/',
                disallow: ["/api/*", '/admin', '/my-rooms', '/bookings', '/add-room'],
            }
        ],
        sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`
    }
}