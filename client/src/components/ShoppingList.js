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
              setItems(prevState => [...prevState, {items: {id: uuid(), name}}]);
            }
            // if(name) {
            //   setItems((prev) => {
            //     items: [...prev.items, {id: uuid(), name}]
            //   })
            // }
          }}
        >
          Add Item
        </Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {
              items.map(({id, name}) => {
                return (
                  <CSSTransition key={id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      <Button 
                        className="remove-btn" 
                        color="danger" 
                        size="sm" 
                        onClick={() => {
                        }}
                      >
                        
                      </Button>
                      {name}
                    </ListGroupItem>
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ListGroup>
      </Container>    
    </div>
  )
}

export default ShoppingList;
