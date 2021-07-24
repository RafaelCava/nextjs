/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
// import Image from 'next/image'
// import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = ({ list }) => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Sobre o sistema
      </h1>

      o sistema foi feito em live para demostração do framework next.js
      <hr />

      Autor:
      {' '}
      {list.author[0]}
    </main>
  </div>
);

export default Home;

export async function getStaticProps() {
  return {
    props: {
      list: {
        author: ['rafael', 'joao'],
        dias: ['segunda', 'terça'],
      },
    },
    revalidate: 10,
  };
}
