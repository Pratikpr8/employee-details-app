import React from "react";

export default function Experience(props) {
  const { position, duration, companyName } = props;

  return (
    <>
        <span className="bold-font">{position}</span>
        <span>{companyName}</span>
        <span className="experience__last-grid-data">{duration}</span>
    </>
  );
}
