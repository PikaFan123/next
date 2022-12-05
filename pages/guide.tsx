import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/button';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Content from '../components/content';
import Subtitle from '../components/subtitle';


import Logo from '../public/logos/credits.png';
import { PageProps } from './_app';

// TODO use https://nextjs.org/docs/basic-features/layouts
// TODO this side bar is *slightly* larger than other pages and i can't figure out why (maybe fixed sidebar width instead of percentage)
const Guide: NextPage<PageProps> = ({ background }) => (
  <>
    <Head>
      <title>FurfSky Reborn - Home</title>
    </Head>
    <Navbar />
    <Content className="flex flex-col w-2/3" backgroundImage={background}>
	stuff here
    </Content>
  </>
);

export default Guide
