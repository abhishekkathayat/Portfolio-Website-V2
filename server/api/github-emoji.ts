export default eventHandler(async () => {
    const config = useRuntimeConfig();
    return await $fetch(
        `${config.public.githubBaseUrl}/emojis`, {
            headers: { Authorization: `Bearer ${config.githubPaToken}` }
        }
    )
})