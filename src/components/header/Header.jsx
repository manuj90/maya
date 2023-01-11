import React from 'react'

const Header = ({children}) => {
  return (
    <div className="bg-about bg-cover bg-center h-[35rem] text-white font-libre">
      <div className="uppercase flex flex-col justify-end items-end h-full mx-2 md:container md:m-auto">
        <h1 className="text-4xl md:text-8xl font-bold tracking-wide text-left">{children}</h1>
      </div>
    </div>
  );
}

export default Header