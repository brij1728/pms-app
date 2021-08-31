import * as Yup from "yup";

import { Button, Container, Form } from "react-bootstrap";

import { useHistory } from "react-router-dom";

export interface IPForm {
  name: string;
  description: string;
  size: number;
  onSubmit: () => void;
  onChange: (text: string) => void;
}
export const PropertyForm: React.FC<IPForm> = ({
  name,
  description,
  size,
  onChange,
  onSubmit,
}) => {
  const history = useHistory();

  const yupFields = {
    name: Yup.string().required("required"),
  };

  return (
    <>
      <Button onClick={() => history.goBack()}>Back</Button>
      <Container>
        <Form>
          <div>
            <Form.Label>
              Name
              <input
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(event) => {
                  onChange(event.target.value);
                }}
              />
            </Form.Label>
          </div>
          <div>
            <Form.Label>
              Description
              <input
                type="text"
                value={description}
                placeholder="Add description"
                onChange={(event) => {
                  onChange(event.target.value);
                }}
              />
            </Form.Label>
          </div>
          <div>
            <Form.Label>
              Size
              <input
                type="text"
                value={size}
                placeholder="Add property size"
                onChange={(event) => {
                  onChange(event.target.value);
                }}
              />
            </Form.Label>
          </div>
          <div>
            <Button type="submit" onClick={onSubmit}>
              Add Property
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};
