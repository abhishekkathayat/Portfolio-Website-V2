import { RuntimeConfig } from "nuxt/schema";

export default eventHandler(async () => {
    const config: RuntimeConfig = useRuntimeConfig();
    return await $fetch(
        `${config.public.githubBaseUrl}/users/${config.githubUsername}/repos`, {
            headers: { Authorization: `Bearer ${config.githubPaToken}` }
        }
    )
})