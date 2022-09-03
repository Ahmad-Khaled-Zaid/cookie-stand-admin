
import axios from "axios";
import useSWR from "swr";
const URL = process.env.NEXT_PUBLIC_BACKEND_API

import { AuthContext } from '../contexts/auth-context';
import { useContext } from 'react';

export function useHttpStand() {
    const { tokens } = useContext(AuthContext)

    const { data, mutate } = useSWR([URL, tokens], fetchStands)

    async function fetchStands() {
        if (!tokens) {
            return
        }
        try {
            const response = await axios.get(URL + '/api/v1/marshmello/', config())
            return response.data
        }
        catch (error) {
            console.log('error', error)
        }
    }

    async function createStand(info) {
        try {
            await axios.post(URL + '/api/v1/marshmello/', info, config())
            mutate()
        }
        catch (error) {
            console.log('error', error)
        }
    }
    async function deleteStand(id) {
        try {

            await axios.delete(URL + '/api/v1/marshmello/' + id, config())
            mutate()

        }
        catch (error) {
            console.log('error', error)
        }
    }


    function config() {
        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }
    return {
        data_stand: data,
        createStand,
        fetchStands,
        deleteStand
    }
}