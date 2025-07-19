import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu ({ items = [], type = "" }) {
  console.log("Menu items:", items);
  console.log("Menu type:", type);
  if (!items.length || !type) return <p>loading menu...</p>;
  console.log("Menu props check:", { items, type });
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center"><strong>
            {type[0].toUpperCase() + type.slice(1) + " "}
             Menu
             </strong>
          </CardTitle>
          <CardText>
            Enjoy our refreshments 7 days a week!
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${type}/${item.id}`} key={item.id}>
              
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
