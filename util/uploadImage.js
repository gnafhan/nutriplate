import { ref, uploadString, getDownloadURL } from "firebase/storage"
import { storage } from "../lib/firebase"

function generateRandomString(length = 30) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}

export const uploadImage = async (image) => {
    const storageRef = ref(storage, `images/${generateRandomString()}.png`);
    try {
        const snapshot = await uploadString(storageRef, image, 'data_url');
        const downloadUrl = await getDownloadURL(snapshot.ref);
        return downloadUrl;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error; // Optional: re-throw the error if you want to handle it further up the call stack
    }
};

