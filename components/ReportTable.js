import { hours } from '../data/data'

export default function ReportTable({ stand, deleteHandler }) {
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-100 dark:text-gray-400">
                <thead className="text-xs text-gray-100 uppercase bg-emerald-700">
                    <tr>
                        <th scope="col" className="px-2 py-3 ">
                            Location
                        </th>
                        {hours &&
                            hours.map(hour => {
                                return (
                                    <th key={hour} scope="col" className="px-3 py-3">
                                        {hour}
                                    </th>
                                )
                            })
                        }
                        <th scope="col" className="px-6 py-3">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {stand && stand.map(stand => {
                        return (<tr scope="row" key={stand.id} className="border-b even:bg-emerald-700 even:text-gray-50 odd:bg-emerald-500 odd:text-gray-900">
                            {/* <td scope="col" className="px-6 py-4 font-medium whitespace-nowrap "> */}
                            <td scope="col" key={stand.id} className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                {stand.location}

                                <button className="float-right ml-4 rounded-lg" onClick={(e) => {
                                    deleteHandler(stand.id)
                                }}>
                                    <svg className="w-6 h-6 text-lg text-red-500 hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} strokeLidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>

                            </td>
                            {stand.hourly_sales.map(h_sales => { return <td key={h_sales} className="px-6 py-4" >{h_sales}</td> })}
                            <td key={stand.id} className="px-6 py-4">
                                {stand.total}
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>


                <tfoot>
                    <tr className="font-semibold text-gray-900 bg-emerald-400">
                        <th scope="row" className="px-6 py-3 text-base">Totals</th>
                        {hours && hours.map(hs => {
                            return (<td key={hs} className="px-6 py-4">
                                00
                            </td>)
                        })}
                        <td className="px-6 py-3">00</td>
                    </tr>
                </tfoot>
            </table>

        </div >

    )
}