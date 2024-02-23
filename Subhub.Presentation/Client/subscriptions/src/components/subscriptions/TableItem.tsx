import { Button } from "react-bootstrap";
import { SubDto } from "../../models/subDto"
import apiConnector from "../../api/apiConnector";
import { Link } from "react-router-dom";

interface Props {
    subscription: SubDto;
}
export default function TableItem({subscription}: Props) {
    return (
        <>
        <tr className="align-center">
            <td id="Id">{subscription.id}</td>
            <td id="Name">{subscription.name}</td>
            <td id="Category">{subscription.category}</td>
            <td id="Type">{subscription.type}</td>
            <td id="Cost">{subscription.cost}</td>
            <td id="Status">{subscription.isActive}</td>
            <td id="Period">{subscription.period}</td>
            <td id="PaymentDate">{subscription.paymentDate}</td>
            <td id="Actions">
                <Link to={`editSubscription/${subscription.id}`}>
                <Button variant="warning" type="submit">Edit</Button>
                </Link>
                <Button variant="danger" onClick={async () => {
                    await apiConnector.deleteSubscription(subscription.id!);
                    window.location.reload();
                }}>Delete</Button>
            </td>
        </tr>
        </>
    )
}

