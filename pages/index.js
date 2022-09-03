import { AuthContext } from '../contexts/auth-context';
import { useContext } from 'react'
import { CookieStandAdmin, Login } from '../components'

export default function Home() {
    const { tokens } = useContext(AuthContext);

    return (
        <>
            {
                tokens ? <CookieStandAdmin /> : <Login />
            }
        </>
    )
}