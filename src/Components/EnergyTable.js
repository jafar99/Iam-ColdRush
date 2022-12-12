// import axios from 'axios';
// import { useEffect, useState } from 'react';    
import Table from 'react-bootstrap/Table';
import '../CSS/EnergyTable.css'


function EnergyTable() {

    // const [users,setUser] = useState([]);

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setUser(data);
    //         console.log(data)
    //     })
    // },  [setUser]);

    // useEffect(()=>
    // {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>
    //     {
    //         setUser(res.data);
    //         console.log("svsss",users)

    //     })
    //     .catch((err)=>
    //     {
    //         console.log(err)
    //     })

    // },[])

    return (
        <div >

            <Table  bordered  lg className='Table1'>
                <thead>
                    <tr>
                        <th colspan="3">Voltage</th>
                    </tr>
                </thead>
                <tbody>

                <tr>
                        <td>V1</td>
                        <td>V2</td>
                        <td>V3</td>

                    </tr>
                    <tr>
                        <td>50 V</td>
                        <td>50 V</td>
                        <td>50 V</td>

                    </tr>

                </tbody>


            </Table>


            <Table  bordered  lg className='Table1'>
                <thead>
                    <tr>
                        <th colspan="3">Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>F1</td>
                        <td>F2</td>
                        <td>F3</td>

                    </tr>
                    <tr>
                        <td>56 Hz</td>
                        <td>61 Hz</td>
                        <td>24 Hz</td>

                    </tr>

                </tbody>


            </Table>

            <Table  bordered  lg className='Table1'>
                <thead>
                    <tr>
                        <th colspan="3">Voltage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>I1</td>
                        <td>I2</td>
                        <td>I3</td>

                    </tr>
                    <tr>
                        <td>50 V</td>
                        <td>50 V</td>
                        <td>50 V</td>

                    </tr>

                </tbody>


            </Table>

            <Table  bordered  lg className='Table1'>
                <thead>
                    <tr>
                        <th colspan="3">Voltage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>V1</td>
                        <td>V2</td>
                        <td>V3</td>

                    </tr>
                    <tr>
                        <td>50 V</td>
                        <td>50 V</td>
                        <td>50 V</td>

                    </tr>

                </tbody>


            </Table>

            


        
        </div>
    )
}

export default EnergyTable