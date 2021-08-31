import { useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import { PropertyForm } from "../PropertyForm";
import { useHistory } from "react-router-dom";

export const AddProperty: React.FC = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  const history = useHistory();

  useEffect(() => {}, [value]);

  return (
    <>
      <div style={{ float: "left" }}>
        <Button onClick={() => history.goBack()}>Back</Button>
      </div>
      <div>
        <PropertyForm
          name={value}
          description={""}
          size={""}
          onSubmit={() => handleSubmit}
          onChange={onChange}
        />
      </div>
    </>
  );
};
