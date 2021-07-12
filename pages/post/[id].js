import Head from 'next/head'
// import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const PostItem = ()=>{
	const router = useRouter()
	const {id} = router.query
	if(id === '777'){
		return (
			<div className={styles.container}>
				<Head>
					<meta charSet={'utf-8'}/>
					<link rel="icon" href="/favicon.ico" />
					<title>{id}</title>
				</Head>
				<main className={styles.main}>
					<h1 className={styles.title}>
                        Post acessado: {id} <br />
                        Clique para voltar <a href="../">voltar</a>
					</h1>
				</main>
			</div>
		)  
	}else{
		return (
			<div className={styles.container}>
				<Head>
					<meta charSet={'utf-8'}/>
					<link rel="icon" href="/favicon.ico" />
					<title>{id}</title>
				</Head>
				<main className={styles.main}>
					<h1 className={styles.title}>
                    Post acessado: {id}
					</h1>
				</main>
			</div>
		)
	}
}

export default PostItem