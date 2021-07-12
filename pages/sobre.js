import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = ({author}) => {
	// const {cidade, estado} = props.Localizacao
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Sobre o sistema
				</h1>

                    o sistema foi feito em live para demostração do framework next.js

				<Link href="/busca">Ir para a Busca</Link>
			    <Link href="/sobre">Sobre mim</Link>
			</main>
		</div>
	)
}

export default Home

export async function getStaticProps(){
	return{
		props:{
			author: 'bonieky'
		}
	}
}