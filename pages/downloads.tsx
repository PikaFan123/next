import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import DownloadGroup from '../components/downloads/downloadGroup';
import Content from '../components/content';

import backgroundImage1 from '../public/backgrounds/1.png';
import Logo from '../public/logos/downloads.png';
import { versions } from '../components/downloads/config/versions';

const Downloads: React.FC = () => (
  <>
    <Navbar />
    <Sidebar>
      <Image src={Logo} height={200} objectFit="contain" />
    </Sidebar>
    <Content backgroundImage={backgroundImage1.src}>
      <div className="p-24">
        <div className="relative">
          {/* TODO fallback for firefox */}
          <DownloadGroup name="Overheated" version="v1.5" variants={{ fl: '', ov: '' }} disabled />
          <div className="flex flex-col bg-[repeating-linear-gradient(45deg,#ffaa007f,#ffaa007f_10px,#ffffff00_10px,#ffffff00_20px)] w-full h-full absolute top-0 bg-opacity-20 rounded-md backdrop-brightness-50">
            <h2 className="text-4xl font-bold text-gold-400 [text-shadow:4px_4px_0_#441a08] text-center">
              Pack Progress
            </h2>
            <div className="flex items-center justify-center w-full grow">
              <div className="h-12 bg-pale-600 w-96 shadow-[inset_-0.4rem_-0.4rem_0px_#1c1d30,inset_0.4rem_0.4rem_0px_#444a71]">
                <div className="bg-gold-400 shadow-[inset_-0.4rem_-0.4rem_0px_#441a08,inset_0.4rem_0.4rem_0px_#ffaa00] w-[calc(24rem*0.48)] h-full" />
              </div>
            </div>
          </div>
        </div>
        {versions.map(version => (
          <DownloadGroup {...version} />
        ))}
      </div>
    </Content>
  </>
);

export default Downloads;
