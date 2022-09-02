import { useState } from 'react';
import { Title, Header, Footer, CreateForm, ReportTable } from '../components'
import { hourly_sales } from '../data/data';
import Head from 'next/head'

export default function CookieStandAdmin() {
    const [stand, setStands] = useState([]);
    function handleStandCreate(e) {
        e.preventDefault();
        const cookieStand = {
            location: e.target.location.value,
            minimum_customers_per_hour: e.target.MinimumCustomersPerHour.value,
            maximum_customers_per_hour: e.target.MaximumCustomersPerHour.value,
            average_cookies_per_sale: e.target.AverageCookiesPerSale.value,
            hourly_sales: hourly_sales,
            owner: null,
            total: 0
        }
        setStands([...stand, cookieStand])
    }

    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
                <meta name="description" content="Cookie Stand Admin" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className='flex flex-col'>
                <div>
                    <CreateForm handleStandCreate={handleStandCreate} />
                </div>
                <div className="flex justify-center mb-5" >
                    {stand.length > 0 && <ReportTable stand={stand} /> || <h2>No Cookie Stands Available</h2>}
                </div>
            </main>
            <Footer stand={stand} />
        </>
    )
}
