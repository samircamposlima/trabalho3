// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { Menu } from '../classes/componentes/Menu';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main style={styles.main}>
        <h1 style={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};

const styles = {
  main: {
    marginTop: '20px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
};

export default Home;
