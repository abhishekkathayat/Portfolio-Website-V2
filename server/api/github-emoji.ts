import type { RuntimeConfig } from 'nuxt/schema';

export default eventHandler(async () => {
    const config: RuntimeConfig = useRuntimeConfig();
    return await $fetch(
        `${config.public.githubBaseUrl}/emojis`, {
            headers: { Authorization: `Bearer ${config.githubPaToken}` }
        }
    )
})