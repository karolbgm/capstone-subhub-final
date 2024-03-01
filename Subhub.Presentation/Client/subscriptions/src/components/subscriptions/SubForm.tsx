import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SubDto } from "../../models/subDto";
import apiConnector from "../../api/apiConnector";
import { Row, Col } from "react-bootstrap";

export default function SubForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [subscription, setSubscription] = useState<SubDto>({
    id: undefined,
    name: "",
    category: "",
    type: "",
    cost: 0,
    paymentDate: undefined,
    period: 0, 
    isActive: true, 
    createDate: undefined,
  });

  useEffect(() => {
    if (id) {
      apiConnector
        .getSubscriptionById(id)
        .then((subscription) => setSubscription(subscription!));
    }
  }, [id]);

  function handleSubmit() {
    if (window.event) {
        window.event.preventDefault();
      }
    if (!subscription.id) {
      apiConnector.createSubscription(subscription).then(() => navigate("/"));
    } else {
      apiConnector.editSubscription(subscription).then(() => navigate("/"));
    }
  }

//   function handleChange(event: ChangeEvent<HTMLInputElement>) {
//     const { name, value, type } = event.target;
//     const newValue = type === "checkbox" ? checked : value;
//     setSubscription({ ...subscription, [name]: newValue });
//   }

// function handleChange(event: ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target;
//     const parsedValue = value.toLowerCase() === 'true'; // Convert input value to boolean
//     setSubscription({ ...subscription, [name]: parsedValue });
//   }

//   function handleChange(event: ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target;
//     const newValue = name === 'isActive' ? value.toLowerCase() === 'true' : value;
//     setSubscription({ ...subscription, [name]: newValue });
//   }

  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    
    setSubscription({...subscription, [name]: value});
  }

  
  return (
    <>
    <form onSubmit={handleSubmit}>
        <Row>
        <Col className="mb-4">
            <label>Subscription Name</label>
            <input name="name" type="text" className="form-control" id="name" aria-describedby="subscriptionName" onChange={handleChange} value={subscription.name}/>
        </Col>
        <Col className="mb-4">
            <label>Cost</label>
            <input name="cost" type="number" className="form-control" id="cost" aria-describedby="subscriptionCost" onChange={handleChange} value={subscription.cost}/>
        </Col>
        <Col className="mb-4">
            <label>Period (months)</label>
            <input name="period" type="number" className="form-control" id="period" aria-describedby="subscriptionPeriod" onChange={handleChange} value={subscription.period}/>
        </Col>
        </Row>
        <Row>
            <Col className="mb-3">
            <label>Payment Date</label>
            <input name="paymentDate" type="string" className="form-control" id="paymentDate" aria-describedby="subscriptionPaymentDate" onChange={handleChange} value={subscription.paymentDate?.slice(0,10)}/>
            </Col>
            <Col className="mb-3">
            <label>Category</label>
            <input name="category" type="string" className="form-control" id="category" aria-describedby="subscriptionCategory" onChange={handleChange} value={subscription.category}/>
            </Col>
            <Col className="mb-3">
            <label>Type</label>
            <input name="type" type="string" className="form-control" id="type" aria-describedby="subscriptionType" onChange={handleChange} value={subscription.type}/>
            </Col>
            <Col className="mb-3">
            <label>Active</label>
            <input name="isActive" type="string" className="form-control" id="active" aria-describedby="subscriptionActive" onChange={handleChange}  value={subscription.isActive.toString()}/>
            </Col>
            
        </Row>
        <button type="submit" className="btn btn-primary">Submit</button>
        
    </form>
    <Link to="/" >
        <button type="button" className="btn btn-primary" >Cancel</button>
        </Link>
    </>
  );
}


