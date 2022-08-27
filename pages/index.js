import Head from 'next/head'
`// @refresh reset`
import { useState } from 'react';

import styles from '../styles/Home.module.css'

export default function Home() {
  const [stand, setStands] = useState([]);
  function handleStandCreate(e) {
    e.preventDefault();
    const cookieStand = {
      location: e.target.location.value,
      minCustomers: e.target.MinimumCustomersPerHour.value,
      maxCustomers: e.target.MaximumCustomersPerHour.value,
      avgCustomer: e.target.AverageCookiesPerSale.value,
      number: stand.length + 1,
    }

    setStands([...stand, cookieStand])
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="Cookie Stand Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="p-4  shadow md:px-6 md:py-8  bg-emerald-600 " >
        <nav className="text-lg font-semibold		">
          <h1 className="text-lg   text-3xl ">Cookie Stand Admin</h1>
        </nav>
      </header>
      <main className='flex flex-col'>
        <div>
          <form className="mx-auto my-4 flex-col  w-4/5	  bg-emerald-400 p-2  rounded-lg text-align" onSubmit={handleStandCreate}>
            <h1 className="mb-5 flex justify-center p-3  text-2xl ">
              Create a Cookie Stand
            </h1 >
            <div className="mb-5 flex justify-center p-3">
              <label htmlFor='location' className=" mr-1">Location</label>
              <input type="text" className=" w-full  " placeholder="Location" name="location" id="location" required />
            </div >

            <div className="mb-5 flex justify-center p-2">
              <div className=" mr-3">
                <label htmlFor='MinimumCustomersPerHour' className=" mb-2">Minimum Customers Per Hour</label>
                <input type="number" className="text-smfocus:ring-blue-500 focus:border-blue-500 block p-1 mr-1 w-full" placeholder="MinimumCustomersPerHour" name="MinimumCustomersPerHour" id="MinimumCustomersPerHour" required />
              </div>

              <div className="mr-3">
                <label htmlFor='MaximumCustomersPerHour' className=" mb-2" >Maximum Customers Per Hour</label>
                <input type="number" className="text-smfocus:ring-blue-500 focus:border-blue-500 block p-1 mr-1 w-full" placeholder="MaximumCustomersPerHour" name="MaximumCustomersPerHour" id="MaximumCustomersPerHour" required />
              </div>

              <div className=" mr-3">
                <label htmlFor='AverageCookiesPerSale' className=" mb-2">Average Cookies Per Sale</label>
                <input type="float" className="text-smfocus:ring-blue-500 focus:border-blue-500 block p-1 mr-1  w-full " placeholder="AverageCookiesPerSale" name="AverageCookiesPerSale" id="AverageCookiesPerSale" required />

              </div>


              <div className="w-1/4  ">
                <button type="submit" className="block w-full h-full font-bold text-gray-800  bg-emerald-600">
                  Create
                </button>
              </div>
            </div>

          </form >
        </div>

        <div className="mb-5 flex justify-center" >
          <p className='mx-auto'>
            Report table coming soon
          </p>
        </div>
        <div className="mb-5 flex justify-center" >

          <p className='mx-auto'> {`{ Location:${stand?.at(-1)?.location} , minCustomers: ${stand?.at(-1)?.minCustomers}, maxCustomers:${stand?.at(-1)?.maxCustomers},avgCustomer: ${stand?.at(-1)?.avgCustomer}}`}  </p>



        </div>

      </main >

      <footer className="p-4 shadow md:px-6 md:py-8 bg-emerald-600 mt-10">
        <p>@2022</p>
      </footer>
    </div >
  )
}
