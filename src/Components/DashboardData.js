import React, { useState } from 'react';
import '../CSS/DashboardData.css'

import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Power from './Power';




function DashboardData() {

  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(1);

  const radios = [
    { name: 'OFF', value: '1' },
    { name: 'ON', value: '2' },

  ];



  const navigate = useNavigate();
  return (


    <div >


      <Card  className="controller">

        <Card.Body className='cards' >
          <Card.Title className='title'>Controller 1</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status <span>
            {radioValue === 1 ? <Button className='On' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> :
             <Button className='On' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}


          </span></ListGroup.Item>




          <ListGroup.Item>Temparature<span className='tempvalue'>30°C</span></ListGroup.Item>
          <ListGroup.Item>Voltage<span className='voltvalue'>54 V</span></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" className='button' onClick={() => {
            navigate('data')
          }}  >View Data</Button>{' '}


        </Card.Body>


      </Card>

      {/* second Table */}


      <Card  className="controller">

        <Card.Body className='cards' >
          <Card.Title className='title'>Controller 2</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status <span>

          {radioValue === 1 ? <Button className='On' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> : 
          <Button className='On' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}
          </span></ListGroup.Item>




          <ListGroup.Item>Temparature<span className='tempvalue'>30°C</span></ListGroup.Item>
          <ListGroup.Item>Voltage<span className='voltvalue'>54 V</span></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" className='button' onClick={() => {
            navigate('data')
          }}  >View Data</Button>{' '}


        </Card.Body>


      </Card>

      {/* Third Controller */}



      <Card  className="controller">

        <Card.Body className='cards' >
          <Card.Title className='title'>Controller 3</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status <span>

          {radioValue === 1 ? <Button className='On' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> : 
          <Button className='On' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}
          </span></ListGroup.Item>




          <ListGroup.Item>Temparature<span className='tempvalue'>30°C</span></ListGroup.Item>
          <ListGroup.Item>Voltage<span className='voltvalue'>54 V</span></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" className='button' onClick={() => {
            navigate('data')
          }}  >View Data</Button>{' '}


        </Card.Body>


      </Card>

      {/* Fourth Controller */}


      <Card  className="controller">

        <Card.Body className='cards' >
          <Card.Title className='title'>Controller 4</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status <span>
          {radioValue === 1 ? <Button className='On' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> : 
          <Button className='On' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}
          </span></ListGroup.Item>




          <ListGroup.Item>Temparature<span className='tempvalue'>30°C</span></ListGroup.Item>
          <ListGroup.Item>Voltage<span className='voltvalue'>54 V</span></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" className='button' onClick={() => {
            navigate('data')
          }}  >View Data</Button>{' '}


        </Card.Body>


      </Card>


      {/* Fifth Controller */}

      <Card className="controller">

        <Card.Body className='cards' >
          <Card.Title className='title'>Controller 5</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status <span>

          {radioValue === 1 ? <Button className='On' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> : 
          <Button className='On' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}
          </span></ListGroup.Item>




          <ListGroup.Item>Temparature<span className='tempvalue'>30°C</span></ListGroup.Item>
          <ListGroup.Item>Voltage<span className='voltvalue'>54 V</span></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" className='button' onClick={() => {
            navigate('data')
          }}  >View Data</Button>{' '}


        </Card.Body>


      </Card>


      {/* Sixth controller  */}

      <Card  className="controller ">

        <Card.Body className='cards' >
          <Card.Title className='title'>Controller 6</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status <span>
          {radioValue === 1 ? <Button className='On' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> :
           <Button className='On' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}
          </span></ListGroup.Item>




          <ListGroup.Item>Temparature<span className='tempvalue'>30°C</span></ListGroup.Item>
          <ListGroup.Item>Voltage<span className='voltvalue'>54 V</span></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" className='button' onClick={() => {
            navigate('data')
          }}  >View Data</Button>{' '}


        </Card.Body>


      </Card>


      <Card  className="controller ">

        <Card.Body className='cards' >
          <Card.Title className='title'>Controller 7</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status <span>

          {radioValue === 1 ? <Button className='On' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> :
           <Button className='On' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}
          </span></ListGroup.Item>




          <ListGroup.Item>Temparature<span className='tempvalue'>30°C</span></ListGroup.Item>
          <ListGroup.Item>Voltage<span className='voltvalue'>54 V</span></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" className='button' onClick={() => {
            navigate('data')
          }}  >View Data</Button>{' '}


        </Card.Body>


      </Card>


      <Card className="controller ">

        <Card.Body className='cards' >
          <Card.Title className='title'>Controller 8</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status <span>
          {radioValue === 1 ? <Button className='On' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> : 
          <Button className='On' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}
          </span></ListGroup.Item>




          <ListGroup.Item>Temparature<span className='tempvalue'>30°C</span></ListGroup.Item>
          <ListGroup.Item>Voltage<span className='voltvalue'>54 V</span></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" className='button' onClick={() => {
            navigate('data')
          }}  >View Data</Button>{' '}


        </Card.Body>


      </Card>


      <Card  className="controller ">

        <Card.Body className='cards' >
          <Card.Title className='title'>Controller 9</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status <span>

          {radioValue === 1 ? <Button className='On' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> :
           <Button className='On' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}
          </span></ListGroup.Item>




          <ListGroup.Item>Temparature<span className='tempvalue'>30°C</span></ListGroup.Item>
          <ListGroup.Item>Voltage<span className='voltvalue'>54 V</span></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" className='button' onClick={() => {
            navigate('data')
          }}  >View Data</Button>{' '}


        </Card.Body>


      </Card>


      <Card  className="controller">

        <Card.Body className='cards' >
          <Card.Title className='title'>Controller 10</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status <span>

          {radioValue === 1 ? <Button className='On' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> : 
          <Button className='On' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}

            {/* <ButtonGroup className='On'>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup> */}


          </span></ListGroup.Item>




          <ListGroup.Item>Temparature<span className='tempvalue'>30°C</span></ListGroup.Item>
          <ListGroup.Item>Voltage<span className='voltvalue'>54 V</span></ListGroup.Item>
        </ListGroup>
        <Card.Body className='btn-body'>
          <Button variant="primary" className='button' onClick={() => {
            navigate('data')
          }}  >View Data</Button>{' '}


        </Card.Body>


      </Card>





















            {/* <Power/> */}






    </div>



  )
};
export default DashboardData;