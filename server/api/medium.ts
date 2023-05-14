import { RuntimeConfig } from "nuxt/schema"

export default eventHandler(async () => {
    const config: RuntimeConfig = useRuntimeConfig();
    return await $fetch(
        `${config.public.rssToJsonUrl}${config.public.mediumFeedUrl}/${config.mediumUsername}`
    )
})