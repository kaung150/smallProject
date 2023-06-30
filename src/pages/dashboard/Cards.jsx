import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Loading from '../../components/Loading';
import TableComponent from '../../components/TableComponent';
import { FaRegIdCard } from 'react-icons/fa6';

const url = "http://10.103.0.66:3500";

const Cards = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    const getCards = async () => {
        const res = await axios(`${url}/cards`);
        const data = await res.data.data;
        const columns = await res.data.columns;
        setTimeout(() => {
            setData(data);
            setColumns(columns);
            setIsLoading(false);
        }, 1500)
    }

    useEffect( () => {
        getCards();
    }, [])

    return (
        <>
            { isLoading ? <Loading /> :
            <div>
                <TableComponent data={data}  columns={columns}/>
            </div>}
        </>
    )
}

export default Cards