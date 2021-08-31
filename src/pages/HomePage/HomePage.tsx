import { useHistory } from "react-router-dom";

export const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <div>Property Management system</div>
      <button onClick={() => history.push("/add")}>Add</button>
    </>
  );
};
