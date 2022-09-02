export default function Footer({ stand }) {
    return (
        <footer className="p-4 mt-10 shadow md:px-6 md:py-8 bg-emerald-600">
            <h1 className="text-xl">{stand.length} Locations Word Wide</h1>
        </footer>
    )
}