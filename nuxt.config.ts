// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Abhishek Kathayat',
            script: [
                {
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
                    'data-ad-client': process.env.GOOGLE_ADSENSE_ID,
                    async: true                  
                }
            ]
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        userDataFile: process.env.USERDATA_FILE,
        userDataRepo: process.env.USERDATA_REPO,
        githubUsername: process.env.GITHUB_USERNAME,
        githubPaToken: process.env.GITHUB_PA_TOKEN,
        mediumUsername: process.env.MEDIUM_USERNAME,
        public: {
            githubBaseUrl: process.env.GITHUB_BASE_URL,
            rssToJsonUrl: process.env.RSS_TO_JSON_URL,
            mediumFeedUrl: process.env.MEDIUM_FEED_URL
        }
    }
})
