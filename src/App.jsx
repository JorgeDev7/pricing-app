import { useState } from 'react';
// Images
import bgTop from './assets/bg-top.svg';

function App() {

  const [monthly, setMonthly] = useState(false);

  const handleClick = () => {

    setMonthly(!monthly);
  }

  return (
    <div className="container mx-auto px-5 ">

      <div className='bg-[url(./assets/bg-top.svg)] bg-cover w-0 h-0 md:w-96 md:h-full absolute md:-top-40 md:right-0 -z-10'></div>
      <div className='bg-[url(./assets/bg-bottom.svg)] bg-cover w-0 h-0 md:w-96 md:h-72 absolute md:bottom-0 md:left-0 -z-10'></div>

      <img
        className='absolute h-96 w-72 -right-28 top-0 md:hidden -z-10'
        src={bgTop}
        alt=""
      />

      <h1 className="text-3xl text-center mt-20 text-grayish-blue">Our Pricing</h1>
      <div className='mt-8 flex justify-center items-center gap-6'>
        <p className=' text-light-grayish-blue'>Annually</p>
        <div
          className={`h-8 w-14 bg-gradient-to-br from-gradient-1 to-gradient-2 rounded-full flex items-center ${!monthly ? 'justify-start' : 'justify-end'} pl-1 pr-2 cursor-pointer`}
          onClick={handleClick}
        >
          <div className={`bg-white h-6 w-6 rounded-full ${!monthly ? 'translate-x-0' : 'translate-x-1'} transition-transform`}></div>
        </div>
        <p className=' text-light-grayish-blue'>Monthly</p>
      </div>

      {/* cards */}
      <div className='mt-20 md:mt-32 grid items-center md:grid-cols-3 gap-y-7 mb-10'>
        <div className='bg-white flex flex-col text-center gap-5 py-7 px-5 rounded-lg shadow-lg md:-mr-1'>
          <h2 className='text-grayish-blue'>Basic</h2>
          <p className='text-6xl text-dark-grayish-blue flex justify-center items-center gap-2'><span className='text-3xl'>$</span> {!monthly ? '199.99' : '19.99'}</p>

          <ul>
            <li className='py-3 border-t-[1px] text-grayish-blue'>500 GB Storage</li>
            <li className='py-3 border-y-[1px] text-grayish-blue' >2 Users Allowed</li>
            <li className='py-3 border-b-[1px] text-grayish-blue'>Send up to 3 GB</li>
          </ul>

          <button className=' bg-gradient-to-br from-gradient-1 to-gradient-2 py-2.5 text-very-light-grayish-blue rounded-md mt-4' type='button'>Learn More</button>
        </div>
        <div className=' bg-gradient-to-br from-gradient-1 to-gradient-2 flex flex-col text-center gap-5 py-7 px-5 rounded-lg shadow-lg md:pt-14 md:pb-14 z-10'>
          <h2 className='text-very-light-grayish-blue'>Professional</h2>
          <p className='text-6xl text-very-light-grayish-blue flex justify-center items-center gap-2'><span className='text-3xl'>$</span> {!monthly ? '249.99' : '24.99'}</p>

          <ul className='text-very-light-grayish-blue'>
            <li className='py-3 border-t-[1px]'>1 TB Storage</li>
            <li className='py-3 border-y-[1px]'>5 Users Allowed</li>
            <li className='py-3 border-b-[1px]'>Send up to 10 GB</li>
          </ul>

          <button className=' bg-very-light-grayish-blue py-2.5 rounded-md text-gradient-2 mt-4' type='button'>Learn More</button>
        </div>
        <div className='bg-white flex flex-col text-center gap-5 py-7 px-5 rounded-lg shadow-lg md:-ml-1 -z-10'>
          <h2 className='text-grayish-blue'>Master</h2>
          <p className='text-6xl text-dark-grayish-blue flex justify-center items-center gap-2'><span className='text-3xl'>$</span> {!monthly ? '399.99 ' : '39.99'}</p>

          <ul>
            <li className='py-3 border-t-[1px] text-grayish-blue' >2 TB Storage</li>
            <li className='py-3 border-y-[1px] text-grayish-blue' >10 Users Allowed</li>
            <li className='py-3 border-b-[1px] text-grayish-blue' >Send up to 20 GB</li>
          </ul>

          <button className=' bg-gradient-to-br from-gradient-1 to-gradient-2 py-2.5 text-very-light-grayish-blue rounded-md mt-4' type='button'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default App
