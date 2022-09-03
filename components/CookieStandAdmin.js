import { useState, useContext, useEffect } from 'react';
import Head from 'next/head'
import useSWR from 'swr'
import axios from 'axios';
import { AuthContext } from '../contexts/auth-context';
import { useHttpStand } from '../hooks/http'
import { Header, Footer, CreateForm, ReportTable } from '../components'
import { hourly_sales } from '../data/data';

const url = process.env.NEXT_PUBLIC_BACKEND_API + '/api/v1/marshmello/'

export default function CookieStandAdmin() {
    const { tokens, userData, logout } = useContext(AuthContext)
    const { createStand, fetchStands, deleteStand, data_stand } = useHttpStand()

    const [stand, setStands] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const config = {
        headers: {
            'Authorization': `Bearer ${tokens.access}`
        }
    }

    const fetcher = url => axios.get(url, config).then(res => res.data)
    const { data } = useSWR(url, fetcher)


    useEffect(() => {

        async function getStands() {
            const data = await fetchStands()
            if (data) {
                data.map(stand => {
                    stand.hourly_sales = hourly_sales
                    stand.total = 0

                })
                setIsLoading(false)
            }
            setStands(data)
        }
        getStands()
    }, [])

    async function handleStandCreate(e) {
        e.preventDefault();
        const cookieStand = {
            location: e.target.location.value,
            minimum_customers_per_hour: e.target.MinimumCustomersPerHour.value,
            maximum_customers_per_hour: e.target.MaximumCustomersPerHour.value,
            average_cookies_per_sale: e.target.AverageCookiesPerSale.value,
            hourly_sales: hourly_sales,
            owner: null,
        }
        setIsLoading(true)
        await createStand(cookieStand)
        const data = await fetchStands()
        if (data) {
            data.map(stand => {
                stand.hourly_sales = cookieStand.hourly_sales
                stand.total = 0

            })
            setIsLoading(false)
            setStands(data)
        }
    }


    async function deleteHandler(id) {
        setIsLoading(true)

        await deleteStand(id)
        const data = await fetchStands()
        if (data) {
            data.map(stand => {
                stand.hourly_sales = hourly_sales
                stand.total = 0

            })
            setIsLoading(false)
        }
        setStands(data)
    }

    if (tokens && !data) return <div>loading...</div>

    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
                <meta name="description" content="Cookie Stand Admin" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header onLogout={logout} username={userData.username} />
            <main className='flex flex-col'>
                <div>
                    <CreateForm handleStandCreate={handleStandCreate} />
                </div>
                <div className="flex justify-center mb-5" >
                    {!isLoading && stand.length > 0 && <ReportTable stand={stand} deleteHandler={deleteHandler} /> || !isLoading && <h2>No Cookie Stands Available</h2>}
                    {isLoading && <div className="w-64 h-64 ease-linear border-8 border-t-8 border-gray-200 rounded-full loader"></div>
                    }
                </div>
            </main>
            <Footer stand={stand} />
        </>
    )
}
