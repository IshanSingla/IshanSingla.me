import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import { db } from "../firebase.util";

export const fetchData = async () => {
  const docRef = doc(db, "data", "MYDzppEIUYQkPafd7uFa");
  try {
    const dataDoc = await getDoc(docRef);
    if (dataDoc.exists()) {
      return dataDoc.data();
    } else {
      return {
        data: [],
      };
    }
  } catch (e) {
    console.log("Error fetching data", e.message);
    return {
      data: [],
    };
  }
};
