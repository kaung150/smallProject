import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Loading from '../../components/Loading';
import TableComponent from '../../components/TableComponent';
import { FaRegIdCard } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:3500";

const Cards = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    const anotherColumns = {
        Header: 'Detail',
        Cell: (row) => (
            <button 
                className='hover:scale-110 transition ease-in-out delay-150 align-middle'
                onClick={() => navigate(`/cards/${row.row.original._id}`)}
            >
                <FaRegIdCard className='w-8 h-8 ml-3' />
            </button>
        )
    };

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
                <TableComponent data={data}  columns={[...columns, anotherColumns]} />
            </div>}
        </>
    )
}

export default Cards