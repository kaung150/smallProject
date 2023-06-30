import axios from 'axios';
import {useState, useEffect, useMemo} from 'react';
import Loading from '../../components/Loading';
import TableComponent from '../../components/TableComponent';

const url = "http://10.103.0.66:3500";

const Users = () => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    const getUsers = async () => {
        const res = await axios(`${url}/users`);
        const data = await res.data.data;
        const columns = await res.data.columns;
        setTimeout(() => {
            setData(data);
            setColumns(columns);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getUsers();
    }, [])
    
    return (
        <div>
            { isLoading ? <Loading /> :
            <div>
                <TableComponent data={data}  columns={columns}/>
            </div>}
        </div>
    )
}

export default Users