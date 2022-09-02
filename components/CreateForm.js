export default function CreateForm({ handleStandCreate }) {
    return (
        <form className="flex-col w-4/5 p-2 mx-auto my-4 rounded-lg bg-emerald-400 text-align" onSubmit={handleStandCreate}>
            <h1 className="flex justify-center p-3 mb-5 text-2xl ">
                Create a Cookie Stand
            </h1 >
            <div className="flex justify-center p-3 mb-5">
                <label htmlFor='location' className="mr-1 ">Location</label>
                <input type="text" className="w-full " placeholder="Location" name="location" id="location" required />
            </div >

            <div className="flex justify-center p-2 mb-5">
                <div className="mr-3 ">
                    <label htmlFor='MinimumCustomersPerHour' className="mb-2 ">Minimum Customers Per Hour</label>
                    <input type="number" className="block w-full p-1 mr-1 text-smfocus:ring-blue-500 focus:border-blue-500" placeholder="MinimumCustomersPerHour" name="MinimumCustomersPerHour" id="MinimumCustomersPerHour" required />
                </div>

                <div className="mr-3">
                    <label htmlFor='MaximumCustomersPerHour' className="mb-2 " >Maximum Customers Per Hour</label>
                    <input type="number" className="block w-full p-1 mr-1 text-smfocus:ring-blue-500 focus:border-blue-500" placeholder="MaximumCustomersPerHour" name="MaximumCustomersPerHour" id="MaximumCustomersPerHour" required />
                </div>

                <div className="mr-3 ">
                    <label htmlFor='AverageCookiesPerSale' className="mb-2 ">Average Cookies Per Sale</label>
                    <input type="float" className="block w-full p-1 mr-1 text-smfocus:ring-blue-500 focus:border-blue-500 " placeholder="AverageCookiesPerSale" name="AverageCookiesPerSale" id="AverageCookiesPerSale" required />

                </div>


                <div className="w-1/4 ">
                    <button type="submit" className="block w-full h-full font-bold text-gray-800 bg-emerald-600">
                        Create
                    </button>
                </div>
            </div>

        </form >
    )
}