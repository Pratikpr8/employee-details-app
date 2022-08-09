import React from "react";

export default function Experience(props) {
    const { position, duration,companyName} = props

  return(
    <div>
        <span>{position}</span>
        <span>{companyName}</span>
        <span>{duration}</span>
    </div>
  )
}
