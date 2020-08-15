import React, {useState} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {v1 as uuid} from 'uuid'


const ShoppingList = () => {
  const [items, setItems] = useState([
    {id: uuid(), name: "Pencil"},
    {id: uuid(), name: "Laptop"},
    {id: uuid(), name: "Water"},
    {id: uuid(), name: "Cleats"}
  ])
  return (
    <div>
      <Container>
        <Button
          color="dark"
          style={{marginBottom: "2rem"}}
          onClick={() => {
            const name = prompt("Enter Item")
            if(name) {
              setItems((prev) => {
                items: [...prev.items, {id: uuid(), name}]
              })
            }
          }}
        >
          Add Item
        </Button>
      </Container>    
    </div>
  )
}

export default ShoppingList;
