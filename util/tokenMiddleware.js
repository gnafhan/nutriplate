import { collection, getDocs } from "firebase/firestore";
import db from "../lib/firebase";

export const tokenMiddleware = async (req, res) => {
    const token = req.headers.cookie?.split('=')[1] ?? null;
    const originalUrl = req.url; // Capture the original URL
    if(!token) {
        res.writeHead(302, { location: `/premium?from=${encodeURIComponent(originalUrl.slice(1,999))}` });
        res.end();
        return {props: {}};
    }
    try {
        const tokenCollection = collection(db, 'tokens');
        const tokenSnapshot = await getDocs(tokenCollection);
        const tokens = tokenSnapshot.docs.map(doc => doc.data().token);
        if (tokens.includes(token)) {
            return {props: {}};
        } else {
            res.writeHead(302, { location: `/premium?from=${encodeURIComponent(originalUrl)}` });
            res.end();
            return {props: {}};
        }
    } catch (error) {
        console.log(error)
        res.writeHead(302, { location: `/premium?from=${encodeURIComponent(originalUrl)}` });
        res.end();
        return {props: {}};
    }
};
