import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim temporibus eveniet praesentium commodi
					illo eligendi expedita vitae perspiciatis aperiam, illum repellat, dicta harum itaque sequi mollitia labore
					iusto aliquid.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim temporibus eveniet praesentium commodi
					illo eligendi expedita vitae perspiciatis aperiam, illum repellat, dicta harum itaque sequi mollitia labore
					iusto aliquid.
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
