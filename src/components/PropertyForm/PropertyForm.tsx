import * as Yup from "yup";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { Formik } from "formik";

export interface IPForm {
  name: string;
  description: string;
  size: string;
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
  const yupFields = {
    name: Yup.string().required("required"),
    description: Yup.string(),
    size: Yup.string().required("required"),
  };

  const propertySchema = Yup.object().shape(yupFields);

  return (
    <>
      <Formik
        validationSchema={propertySchema}
        onSubmit={console.log}
        initialValues={{
          name: "",
          description: "",
          size: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => {
          return (
            <Container>
              <Form onSubmit={handleSubmit}>
                {/* <div>
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
                </div> */}
                <div>
                  <Form.Group className="mb-3">
                    <Row>
                      <Form.Label column lg={2} htmlFor="disabledSelect">
                        Name
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          isValid={touched.name && !errors.name}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Row>
                      <Form.Label column lg={2}>
                        Description
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Add description"
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          isValid={touched.description && !errors.description}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Row>
                      <Form.Label column lg={2}>
                        Size
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Size"
                          name="size"
                          value={values.size}
                          onChange={handleChange}
                          isValid={touched.size && !errors.size}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </div>
                <div>
                  <Button type="submit">Add Property</Button>
                </div>
              </Form>
            </Container>
          );
        }}
      </Formik>
    </>
  );
};
