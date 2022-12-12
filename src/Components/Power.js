import React, { useState } from 'react';
import '../CSS/Power.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Power() {

    const [radioValue, setRadioValue] = useState(11);

    const radios = [
        { name: 'OFF', value: '1' },
        { name: 'ON', value: '2' },

    ];

    return (
        <div className='head'>

            <Card  className="controller1 ">


                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Power <span>
                        {radioValue === 1 ? <Button className='power' style={{ backgroundColor: "rgb(7, 143, 14)" }}>ON</Button> :
                            <Button className='power' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}


                    </span></ListGroup.Item>

                </ListGroup>


            </Card>

            <Card  className="controller2 ">


                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Defreeze <span>
                        {radioValue === 1 ? <Button className='defreeze' style={{ backgroundColor: "rgb(7, 143, 14)," }}>ON</Button> :
                            <Button className='defreeze' style={{ backgroundColor: "rgb(143, 7, 7)" }}>OFF</Button>}


                    </span></ListGroup.Item>

                </ListGroup>


            </Card>



        </div>
    )
}

export default Power