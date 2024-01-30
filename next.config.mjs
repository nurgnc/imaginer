/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    env: {
        REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
        REPLICATE_API_URL: process.env.REPLICATE_API_URL
    },
    images: {
        remotePatterns: [
            {
                hostname: "replicate.delivery",
                protocol: "https",
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ["@svgr/webpack"]
        })
        return config
    }
};

export default nextConfig;
