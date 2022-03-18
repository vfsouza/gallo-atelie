import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import logo from "../../public/images/logo.png";

export default function Header() {
	return (
		<header className={styles.container}>
			<h1>Juliana Gallo Atelie</h1>
			<nav className={styles.nav}>
				<ul>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/produtos">
							<a>Produtos</a>
						</Link>
					</li>
					<li>
						<Link href="/sobre">
							<a>Sobre nós</a>
						</Link>
					</li>
					<li>
						<Link href="/contato">
							<a>Contato</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
