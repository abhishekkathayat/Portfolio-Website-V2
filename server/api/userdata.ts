import { RuntimeConfig } from "nuxt/schema"

export default eventHandler(async () => {
    const config: RuntimeConfig = useRuntimeConfig();
    return await $fetch(
        `${config.public.githubBaseUrl}/repos/${config.githubUsername}/${config.userDataRepo}/contents/${config.userDataFile}`, {
            headers: { Authorization: `Bearer ${config.githubPaToken}` }
        }
    )
})