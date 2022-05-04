import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <ul>
          <li>
            <Link href="/scenes/intermission">
              <a className="text-brand-purple underline">Intermission</a>
            </Link>
          </li>
          <li>
            <Link href="/scenes/next-match-warmup">
              <a className="text-brand-purple underline">Next Match (Warmup)</a>
            </Link>
          </li>
          <li>
            <Link href="/scenes/in-game">
              <a className="text-brand-purple underline">In Game</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default IndexPage;
