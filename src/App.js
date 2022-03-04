import React, { useState } from 'react';
import LOGO from './assets/images/code.png';

import Component from './components/Component';
import Nav from './components/Nav';
import Pagination from './components/Pagination';


function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className='w-full h-screen dark:bg-gray-900'>
      <Nav />
      <div className="container mx-auto py-10">
        <div className='w-full flex justify-center items-center flex-col gap-8'>
          <img src={LOGO} />
          <p className='text-8xl font-bold dark:text-white'><span className='text-rose-400'>UI</span> Library</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-12">
          <Component title="Pagination" loading={loading}>
            <Pagination
              onPageChange={() => console.log("on page change")}
              totalCount={100}
              siblingCount={1}
              currentPage={1}
              pageSize={10}
              className
            />
          </Component>
          <Component title="Pagination" loading={loading}>
            <Pagination
              onPageChange={() => console.log("on page change")}
              totalCount={100}
              siblingCount={1}
              currentPage={1}
              pageSize={10}
              className
            />
          </Component>
          <Component title="Pagination" loading={loading}>
            <Pagination
              onPageChange={() => console.log("on page change")}
              totalCount={100}
              siblingCount={1}
              currentPage={1}
              pageSize={10}
              className
            />
          </Component>
          <Component title="Pagination" loading={loading}>
            <Pagination
              onPageChange={() => console.log("on page change")}
              totalCount={100}
              siblingCount={1}
              currentPage={1}
              pageSize={10}
              className
            />
          </Component>
        </div>
      </div>
    </div>
  );
}

export default App;
