import { getAllProductIds, getProductData } from "../../hooks/firebase/firebase";

interface ParamsType {
	params: {
		id: string;
	};
}

interface IProductData {
	productData: {
		name: string;
		desc: string;
	};
}

export async function getStaticProps({ params }: ParamsType) {
	const productData = await getProductData(params.id);
	return {
		props: {
			productData,
		},
	};
}

export async function getStaticPaths() {
	const paths = await getAllProductIds();
	console.log("path original", paths);
	return {
		paths: paths,
		fallback: true,
	};
}

export default function Produto({ productData }: IProductData) {
	return (
		<div>
			<h1>{productData.name}</h1>
			<h1>{productData.desc}</h1>
		</div>
	);
}
