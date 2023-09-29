import { useState } from "react";
import InputField from "./InputField";

function ListView() {
  const [destinations, setDestinations] = useState([]);

  function addItem(item) {
    setDestinations([...destinations, item]);
  }

  return (
    // specifies the tag to render the ListView component
    <div>
      <InputField id="destinations" type="list" onAddItem={addItem} />
      {destinations.map((destination) => (
        <div class="py-2 pl-2 hover:bg-gray-300">{destination}</div>
      ))}
    </div>
  );
}

export default ListView;
