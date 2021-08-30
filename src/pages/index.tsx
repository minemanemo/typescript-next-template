import * as React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <button>
          <Link href="/about">
            <a>About</a>
          </Link>
        </button>
      </nav>
    </div>
  );
};

export default Home;
