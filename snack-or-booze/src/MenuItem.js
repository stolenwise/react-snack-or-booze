import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function MenuItem({ items, cantFind }) {
  const { id } = useParams();

  let item = items.find(item => item.id === id);
  if (!item) return <Navigate to={cantFind} />;

  return (
    <section >
      <Card>
        <CardBody className="text-center">
          <CardTitle tag="h2" className="font-weight-bold">
            {item.name}
          </CardTitle>

          <CardText>{item.description}</CardText>

          <CardText>
            <strong>Recipe:</strong> {item.recipe}
          </CardText>

          <CardText>
            <small><strong>Serve:</strong> {item.serve}</small>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuItem;
