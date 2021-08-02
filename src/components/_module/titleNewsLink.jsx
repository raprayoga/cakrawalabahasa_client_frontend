import React from 'react'

import { Link } from "react-router-dom";

export default function TitleNewsLink(props) {
  return (
    <>
      <div className="mb-4" key={props.artikelData.id}>
        <Link
          to={`/news-detail/${props.artikelData.id}/${props.artikelData.linkJudul}`}
          style={{ textDecoration: "none" }}
          className="text-secondary"
        >
          <h5>{props.artikelData.judul}</h5>
        </Link>
        <small className="font-size-sm">
          {props.artikelData.dateUpload} {props.artikelData.timeUpload}
        </small>
      </div>     
    </>
  )
}
