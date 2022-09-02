export default function Header() {
    return (
        <header className="p-4 shadow md:px-6 md:py-8 bg-emerald-600 " >
            <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <h1 className="text-3xl" >Cookie Stand Admin</h1>
                    <div className="flex md:order-2">
                        <button type="button" className="hover:bg-green-800 focus:ring-4  rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-gray-50 text-gray-900">Overview</button>

                    </div>
                </div>
            </nav>

        </header >
    )
}