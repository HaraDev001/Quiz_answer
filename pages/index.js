import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer.js';
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Link href="/quiz/start">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">start</div> 
        </Link>
      </main>
      <Footer></Footer>
    </div>
  )
}
