import React, { useEffect, useState } from "react";
import Map from "./Map";
import TicketBooking from "./TicketBooking";

const Theater = () => {
  const [occupancyPercentage, setOccupancyPercentage] = useState(0);
  const [numberOfReserve, setNumberOfReserve] = useState();
  const [submitted, setSubmitted] = useState(false);




  return (
    <div>
      <TicketBooking
        setOccupancyPercentage={setOccupancyPercentage}
        setNumberOfReserve={setNumberOfReserve}
        setSubmitted={setSubmitted}
      />
      {submitted &&<Map
        numberOfReserve={numberOfReserve}
        occupancyPercentage={occupancyPercentage}
      />}
    </div>
  );
};

export default Theater;
