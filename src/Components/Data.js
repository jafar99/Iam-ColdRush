import React from 'react';
import '../CSS/Data.css'
import EnergyTable from './EnergyTable';
import Table from 'react-bootstrap/Table';
import Data2 from './Data2';
import ZoneTable from './ZoneTable';
import Power from './Power';
import ZoneTable2 from './ZoneTable2';




function Data() {
  return (
    <div>

    <Table  bordered   className='TableValue'>
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


    <Table  bordered   className='TableValue'>
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

    <Table  bordered   className='TableValue'>
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

    <Table  bordered  className='TableValue'>
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


 
     <EnergyTable/>  


       <hr style={{marginLeft:'2%', marginRight:'2.5%'}}/> 
       <Power/>
     {/* <Data2/> */}

    <ZoneTable />

 

    <ZoneTable2/>
   

   

</div>
  )
}

export default Data