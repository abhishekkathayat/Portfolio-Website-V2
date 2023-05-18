export async function retrieveAndDecodeUserData() {

    const userData: any = await useFetch('/api/userdata')
        .then(response => response.data.value);
    
    return window.atob(userData.content);
}