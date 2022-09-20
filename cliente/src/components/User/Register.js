/* import React from "react";
import {Button, Card,Col, Container, Form, Image,Row,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignSchema = Yup.object()
    .shape({
        fname: Yup.string().min(2).required("First Name is required"),
        lname: Yup.string().min(2).required("Last Name is required"),
        email: Yup.string()
            .email("Email must be a valid email address")
            .required("Email is required"),
        password: Yup.string().min(8).max(16).required("Password is required"),
        cpass: Yup.string()
            .oneOf([Yup.ref("password")], "Password does not match")
            .required(),
    })
    .required();

export function SignUP() {
    const {
        register,
        handleSubmit,
    } = useForm({
        resolver: yupResolver(SignSchema),
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        //console.warn(data);
        if (data) {
            axios.post("http://localhost:8888/signup", data).then((res) => {
                //alert(res.data.message);
                if (res.data.flg === 1) {
                    toast.success(`${res.data.message}`, {
                        position: "top-left",
                        autoClose: 5000,
                        theme: "dark",
                    });
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                } else {
                    toast.error(`${res.data.message}`, {
                        position: "top-left",
                        autoClose: 5000,
                        theme: "dark",
                    });
                }
            });
        } else {
            alert("Data is not comming..");
        }
    };

    return (
        <>
    <section className="bg-image">
        <Container className="">
          <Card className="card0 border-0">
            <Row className="d-flex">
              <Col className="">
                 <div className="card1 pb-5">
                       <Row>
                         <Image
                          src=".././images/cc.png"
                          className="logo" />
                        </Row>          
                 </div>
              </Col>
             <Col className="">
              <Card className="">
                 <Row>
               <h5>Registrarse</h5>
                 </Row>
                <hr />
                <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

                                    <Row className="mb-4">
                                        <Col>
                                            <small className="font-weight-bold">
                                                Already have an account?{" "}
                                                <Link
                                                    to="/"
                                                    className="text-warning"
                                                >
                                                    Login
                                                </Link>
                                            </small>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>
            <ToastContainer newestOnTop />
        </>
    );
}

export default SignUP;
 */