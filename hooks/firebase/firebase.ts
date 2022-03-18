import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";

console.log(process.env.API_KEY);

const firebaseApp = initializeApp({
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
});

type IdsType = [{ params: { id: string } }];

const db = getFirestore(firebaseApp);

async function getAllProductIds() {
	const docs = await getDocs(collection(db, "produtos"));
	let ids: IdsType = [{ params: { id: "" } }];
	docs.docs.map((doc) => {
		console.log("id ", doc.id);
		ids.push({ params: { id: doc.id } });
	});
	ids.splice(0, 1);
	console.log(ids);
	return ids;
}

async function getProductData(id: string) {
	const ref = doc(db, "produtos", id);
	const product = await getDoc(ref);
	if (product) {
		console.log("Documento encontrado: ", product.data());
	} else {
		console.log(`Documento de id = ${id} não encontrado`);
	}
	return product.data();
}

export { db, getAllProductIds, getProductData };
