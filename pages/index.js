import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quote to Notion Landing Page</title>
        <meta name="description" content="Landing page for Quote to Notion extension." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Quote to Notion Landing Page</h1>
        <p>Welcome to the landing page for Quote to Notion extension. This extension helps you save your favorite quotes to your Notion account.</p>
        <p>To use the extension, please visit the Chrome Web Store to download and install it.</p>
        <Link href="https://chrome.google.com/webstore/detail/your-extension-id">
          <span>Go to Chrome Web Store</span>
        </Link>
      </main>
    </div>
  );
}
