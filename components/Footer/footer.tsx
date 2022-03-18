import styles from "./footer.module.scss";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className={styles.container}>
			<h4>Todos os direitos reservados</h4>
			<h2>Juliana Gallo Atelie</h2>
		</footer>
	);
}
