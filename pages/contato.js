import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const contato = ()=>{
	return (
		<div className={styles.container}>
			<Head>
				<meta charSet={'utf-8'}/>
				<link rel="icon" href="/favicon.ico" />
				<title>Contato</title>
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Fale Conosco</h1>
				<a href="post/777">clique para ir</a>
			</main>
		</div>
	)
}

export default contato