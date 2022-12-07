import React from 'react'
import Table from 'react-bootstrap/Table';
import '../CSS/EnergyTable.css'

function EnergyTable() {
    return (
        <div className='TableData'>

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


            <Table  bordered  lg className='Table2'>
                <thead>
                    <tr>
                        <th colspan="3">Frequency</th>
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

            <Table  bordered  lg className='Table3'>
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

            <Table  bordered  lg className='Table4'>
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