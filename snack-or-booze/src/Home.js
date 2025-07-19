import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8 d-flex justify-content-center">
      <Card style={{ width: "90%", maxWidth: "900px" }}>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>

          <CardText>
          We have <strong>{snacks?.length ?? 0}</strong> snack{snacks?.length !== 1 && "s"} and{" "}
          <strong>{drinks?.length ?? 0}</strong> drink{drinks?.length !== 1 && "s"} on the menu!
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
