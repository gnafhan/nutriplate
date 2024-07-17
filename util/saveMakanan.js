import { collection, addDoc, query, where, getDocs, doc, getDoc } from "firebase/firestore"; 
import db from "../lib/firebase";

export const saveMakanan = async (dataMakanan) => {
    try {
        const dbCollection = collection(db, 'dataMakan')
        const docRef = await addDoc(dbCollection, dataMakanan);
        console.log("Document written with ID: ", docRef.id);
        return {message: "berhasil", id: docRef.id}
    } catch (error) {
        console.error("Error adding document: ", error);
        return { message: "gagal", error: error}
    }
}


export const getMakananByToken = async (token) => {
    try {
        const dbCollection = collection(db, 'dataMakan');
        const q = query(dbCollection, where("token", "==", token));
        const querySnapshot = await getDocs(q);
        
        const results = [];
        querySnapshot.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
        });
        
        return { message: "berhasil", data: results };
    } catch (error) {
        console.error("Error getting documents: ", error);
        return { message: "gagal", error: error };
    }
}

export const getMakananById = async (id) => {
    try {
        const docRef = doc(db, 'dataMakan', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { message: "berhasil", data: { id: docSnap.id, ...docSnap.data() } };
        } else {
            return { message: "gagal", error: "Document not found" };
        }
    } catch (error) {
        console.error("Error getting document: ", error);
        return { message: "gagal", error: error };
    }
};