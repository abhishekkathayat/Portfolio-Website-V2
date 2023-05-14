export default eventHandler(async () => {
    const config = useRuntimeConfig();
    return await $fetch(
        `${config.public.githubBaseUrl}/users/${config.githubUsername}/repos`, {
            headers: { Authorization: `Bearer ${config.githubPaToken}` }
        }
    )
})