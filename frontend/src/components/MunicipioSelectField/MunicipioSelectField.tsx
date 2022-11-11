import { Select, Text, VFlow } from "bold-ui";
import React, { useEffect, useState } from "react";

const items = [
  "Carbonara",
  "Gnocchi",
  "Lasagna",
  "Macaroni and Cheese",
  "Pesto",
  "Pizza",
];

function MunicipioSelectField() {
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/municipio")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const handleChange = (item: string) => setValue(item);

  const itemToString = (item: any) => item || "";

  return (
    <VFlow>
      <Text>Selected item: {value || "[none]"}</Text>
      <Select<string>
        label="Favorite pasta"
        items={items}
        value={value}
        onChange={handleChange}
        itemToString={itemToString}
        name="favorite pasta"
        required
      />
    </VFlow>
  );
}

export default MunicipioSelectField;
