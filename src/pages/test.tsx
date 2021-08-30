/** @jsxImportSource @emotion/react */
import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import style from '@common/styles/Home';
import Button from '@common/components/Button';

const Test: NextPage = () => {
  const handleClickButton = () => {
    // eslint-disable-next-line
    alert('test1');
  };

  return (
    <div css={style.container}>
      <Head>
        <title>Component import Test Page</title>
        <meta name="description" content="component import test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div css={style.main}>
        <Button label="test1" onClick={handleClickButton} />
      </div>
    </div>
  );
};

export default Test;
