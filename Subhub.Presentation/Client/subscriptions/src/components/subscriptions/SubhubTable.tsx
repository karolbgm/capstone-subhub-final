import { useEffect, useState } from "react";
import { SubDto } from "../../models/subDto";
import apiConnector from "../../api/apiConnector";
import Container from "react-bootstrap/Container";
import { Button, Table } from "react-bootstrap";
import TableItem from "./TableItem";
import { Link } from "react-router-dom";

export default function SubhubTable() {
  //import subscriptions from api call
  const [subscriptions, setSubscriptions] = useState<SubDto[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);


  useEffect(() => {
    const fetchData = async () => {
      const fetchedSubscriptions = await apiConnector.getSubscriptions();
      setSubscriptions(fetchedSubscriptions);
      

       // Calculate total cost
       const monthlySubscriptions = fetchedSubscriptions.filter(subscription => subscription.period === 1);
       const total = monthlySubscriptions.reduce((acc, subscription) => acc + subscription.cost, 0);
       setTotalCost(total);
    
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <Container> */}
      <Link to="createSubscription">
        <Button variant="dark" className="mt-5">
          <i className="fa-solid fa-plus me-2"></i>New Subscription
        </Button>
      </Link>
      <div className="album py-5">
        <div className="container ms-5" style={{ maxWidth: "60vw" }}>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {subscriptions.length !== 0 &&
              subscriptions.map((subscription, index) => (
                <TableItem key={index} subscription={subscription} />
              ))}
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card">
            <h5>Recurring expenses</h5>
        <hr />
        <p>$ {totalCost.toFixed(2)} USD Monthly</p>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
}
