import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function DateField({ asSingle, handleStartDate, handleEndDate }) {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newDate) => {
    console.log("newValue:", newDate);
    setDates(newDate);
    console.log(newDate["startDate"]);
    handleStartDate(newDate["startDate"]);
    handleEndDate(newDate["endDate"]);
  };
  return (
    <div>
      <Datepicker
        value={dates}
        onChange={handleValueChange}
        asSingle={asSingle}
        useRange={!asSingle}
      />
    </div>
  );
}

export default DateField;
