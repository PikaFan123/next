import React from 'react';

type ContentProps = {
  children: React.ReactNode;
  backgroundImage: string;
  className?: string;
};

const Content = ({ children, className, backgroundImage }: ContentProps) => (
  <main
    className="min-h-screen bg-fixed bg-center bg-cover bg-slate-100"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="flex flex-row w-full min-h-screen backdrop-blur-sm backdrop-brightness-75">
      <div className={`justify-center items-center pl-[40%] grow ${className}`}>{children}</div>
    </div>
  </main>
);

Content.defaultProps = {
  className: '',
};

export default Content;