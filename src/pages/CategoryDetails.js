import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default function CategoryDetails() {
  const params = useParams();
  const [details, setDetails] = useState({});
  
  useEffect(() => {
    axios
      .get(`/http://127.0.0.1:8000/api/category/<int:id>/${params.id}`)
      .then((res) => setDetails(res.data))
    
  }, []);
  return (
<div className="container">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{details.book.Title}</Card.Title>
    <Card.Text>
    {details.book.description}
    {details.book.date_creation}
    </Card.Text>
    <Button variant="primary">subscribe</Button>
  </Card.Body>
</Card>

</div>

  );
}
