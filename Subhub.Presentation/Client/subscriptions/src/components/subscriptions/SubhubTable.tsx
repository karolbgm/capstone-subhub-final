import { useEffect, useState } from "react"
import { SubDto } from "../../models/subDto"
import apiConnector from "../../api/apiConnector";
import Container from 'react-bootstrap/Container';
import { Button, Table } from "react-bootstrap";
import TableItem from "./TableItem";
import { Link } from "react-router-dom";

export default function SubhubTable() {

    //import subscriptions from api call
    const [subscriptions, setSubscriptions] = useState<SubDto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedSubscriptions = await apiConnector.getSubscriptions();
            setSubscriptions(fetchedSubscriptions);
        }

        fetchData();
    }, []);

    return (
        <>
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>Period (Monthly)</th>
                        <th>Payment Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.length !== 0 && (
                        subscriptions.map((subscription, index) => (
                            <TableItem key={index} subscription={subscription}/>
                        ))
                    )}
                </tbody>
            </Table>
            <Link to="createSubscription">
            <Button variant="primary">Add Subscription</Button>
            </Link>

        </Container>
        </>
    )
}