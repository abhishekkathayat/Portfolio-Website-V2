import { Buffer } from "buffer";

export async function retrieveAndDecodeUserData() {

    const userData: any = await useFetch('/api/userdata', {
        deep: true
    })
        .then(response => response.data.value);
    
    return Buffer.from(userData.content, 'base64').toString('ascii');
}