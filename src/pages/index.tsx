import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LocaleLinkProps {
  locale?: string;
}

function LocaleLink({ locale }: LocaleLinkProps) {
  const router = useRouter();

  if (router.locale === locale) {
    return <a className="text-black font-bold">{locale}</a>;
  }

  return (
    <Link href="/" locale={locale} className="text-brand-purple underline">
      {locale}
    </Link>
  );
}

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="space-y-4">
          <div>
            <LocaleLink locale="en" /> | <LocaleLink locale="fr" /> | <LocaleLink locale="id" />
          </div>
          <ul>
            <li>
              <Link href="/scenes/welcome-screen" className="text-brand-purple underline">
                Welcome Screen
              </Link>
            </li>
            <li>
              <Link href="/scenes/intermission" className="text-brand-purple underline">
                Intermission
              </Link>
            </li>
            <li>
              <Link href="/scenes/end-screen" className="text-brand-purple underline">
                End Screen
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/scenes/empty" className="text-brand-purple underline">
                Empty
              </Link>
            </li>
            <li>
              <Link href="/scenes/empty-bg" className="text-brand-purple underline">
                Empty (with background)
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/scenes/in-game" className="text-brand-purple underline">
                In Game
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/scenes/commentary-booth/single" className="text-brand-purple underline">
                Commentary Booth (Single)
              </Link>
            </li>
            <li>
              <Link href="/scenes/commentary-booth/double" className="text-brand-purple underline">
                Commentary Booth (Double)
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
