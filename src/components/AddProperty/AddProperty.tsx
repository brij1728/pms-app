import { useEffect, useState } from "react";

import { PropertyForm } from "../PropertyForm";

export const AddProperty: React.FC = () => {
  const [value, setValue] = useState('');
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  useEffect(() => {

  },[value])

  return (
    <>
      <div>Add Property</div>

      <PropertyForm
        name={value}
        description={""}
        size={2}
        onSubmit={() => handleSubmit}
        onChange={onChange}
      />
    </>
  );
};
