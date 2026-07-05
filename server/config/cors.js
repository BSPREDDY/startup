const corsConfig = {
    development: {
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    },
    production: {
        origin: [
            'https://btss-admin.vercel.app',
            'https://bhavanatss.vercel.app',
            'https://bhavanatss-server.vercel.app'
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    },
};

const env = process.env.NODE_ENV || 'development';
const config = corsConfig[env] || corsConfig.development;

console.log('[v0] CORS Configuration loaded for:', env);
console.log('[v0] Allowed origins:', config.origin);

module.exports = config;