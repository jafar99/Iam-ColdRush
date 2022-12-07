import React from 'react';
import '../CSS/Data.css'
import EnergyTable from './EnergyTable';
import Table from 'react-bootstrap/Table';
import Data2 from './Data2';







function Data() {
  return (
    <div className='TableData'>

    <Table  bordered  sm className='VoltageTable'>
        <thead>
            <tr>
                <th colspan="3">Voltage</th>
            </tr>
        </thead>
        <tbody>
           
            <tr>
            <td colspan="3">30 V</td>
            </tr>

        </tbody>


    </Table>


    <Table  bordered  sm className='FreqTable'>
        <thead>
            <tr>
                <th colspan="3">Frequency</th>
            </tr>
        </thead>
        <tbody>
          
            <tr>
            <td colspan="3">45 Hz</td>

            </tr>

        </tbody>


    </Table>

    <Table  bordered  sm className='TempTable'>
        <thead>
            <tr>
                <th colspan="3">Temparature</th>
            </tr>
        </thead>
        <tbody>
         
            <tr>
            <td colspan="3">30°C</td>

            </tr>

        </tbody>


    </Table>

    <Table  bordered  sm className='xyzTable'>
        <thead>
            <tr>
                <th colspan="3">Voltage</th>
            </tr>
        </thead>
        <tbody>
           
            <tr>
            <td colspan="3">50 V</td>

            </tr>

        </tbody>


    </Table>


    
     <hr />

     
     <EnergyTable/>   
     {/* <Data2/> */}

   

   

</div>
  )
}

export default Data