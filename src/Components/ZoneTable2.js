import React from 'react';
import axios from "axios";
import { Space, Table, Tag } from 'antd';
import '../CSS/EnergyTable.css';
import { useEffect, useState } from 'react';



function ZoneTable2() {


    const [users, setUser] = useState([]);
    const [columns1, Setcolumns] = useState([]);
    const [Comment, setComment] = useState([]);

    const columns = [
        {
            title: 'address',
            dataIndex: 'address',
            key: 'address',

        },
        {
            title: 'company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',

        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'phone',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'website',
            dataIndex: 'website',
            key: 'website',
        }
    ]

    useEffect(() => {


        let one = "https://jsonplaceholder.typicode.com/users";
        let two = "https://jsonplaceholder.typicode.com/todos";
        let three = "https://jsonplaceholder.typicode.com/comments";


        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);
        const requestThree = axios.get(three);

        axios.all([requestOne, requestTwo, requestThree])
            .then(
                axios.spread((...responses) => {
                    const b = responses[0].data;
                    

                    Setcolumns(columns)


                    // const b = responses[0].data[0].username;
                    // const c = responses[1].data[0].title;
                    // const d = responses[2].data[0].email;

                    // use/access the results
                    setUser(b);

                    // setTodos(c);
                    // setComment(d)
                    // console.log(responseOne, responseTwo, responesThree);
                    console.log(responses);
                })
            )
            .catch(errors => {
                // react on errors.
                console.error(errors);
            });



    }, [])


    return (
        <div>


            <Table columns={columns1} dataSource={users} />;



        </div>
    )
}

export default ZoneTable2