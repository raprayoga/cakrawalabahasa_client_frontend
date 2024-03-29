import React from 'react'
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function VerticalNewscard(props) {
  return (
    <>
      <Link
        to={`/news/detail/${props.artikelData.id}/${props.artikelData.linkJudul}`}
      >
        <Card.Img
          variant="top"
          src={`http://127.0.0.1:8080/img/artikel/${props.artikelData.image}`}
          />
      </Link>
      <Link
        to={`/news/detail/${props.artikelData.id}/${props.artikelData.linkJudul}`}
        style={{ textDecoration: "none" }}
        className="text-secondary"
      >
        <h5>{props.artikelData.judul}</h5>
      </Link>
      <small className="font-size-sm">
        {props.artikelData.dateUpload} {props.artikelData.timeUpload}
      </small>
      <p>{props.artikelData.text_lead}</p>     
    </>
  )
}
