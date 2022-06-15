import { collection, query, where, getDocs } from "firebase/firestore"; 
import { db } from "../firebase";

const redirectsRef = collection(db, "redirects");

export default async function TryRedirect(url)
{
  const subdomain = url.split('.')[0].slice(4)
  console.log(subdomain)

  const q = query(redirectsRef, where("emojis", "==", subdomain))

  const snap = await getDocs(q)

  if (snap.size > 0)
    //console.log(snap.docs[0].data().redirect)
    window.location.replace(snap.docs[0].data().redirect)
}
