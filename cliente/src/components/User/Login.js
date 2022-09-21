import React from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Image,
    Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../User/User.css"

const LoginSchema = Yup.object()
    .shape({
        email: Yup.string()
            .email("O email deve ser valido")
            .required("O email é necesario"),
        password: Yup.string().min(8).max(16).required("A senha é necesaria"),
    })
    .required();

function LogIN() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        //console.warn(data);
        if (data) {
            axios.post("http://localhost:3000/login", data).then((res) => {
                //alert(res.data.message);
                console.log(res.data.token);
                if (res.data.userDet) {
                    localStorage.setItem(
                        "user",
                        JSON.stringify(res.data.userDet)
                    );
                    toast.success(`${res.data.message}`, {
                        position: "top-left",
                        autoClose: 5000,
                        theme: "dark",
                    });
                
                navigate("/cardapio");
                    
                } else {
                    toast.error(`${res.data.message}`, {
                        position: "top-left",
                        autoClose: 5000,
                        theme: "dark",
                    });
                }
            });
        } else {
            toast.error("Data is not comming !", {
                position: "top-left",
                autoClose: 5000,
                theme: "dark",
            });
        }
    };

    return (
        <>
            <section className="bg-image">
                <Container
                    fluid
                    className="px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                    <Card className="card0 border-0">
                        <Row className="d-flex">
                            <Col className="col-lg-6">
                                <div className="card1 pb-5">
                                    <Row>
                                        <Image
                                            src=".././images/cc.png"
                                            className="logo"/>
                                    </Row>
                                    <Row className="px-3 justify-content-center mt-4 mb-5 border-line">
                                        <Image
                                            src=".././images/cc.png"
                                            className="image"/>
                                    </Row>
                                </div>
                            </Col>
                            <Col className="col-lg-6">
                                <Card className="card2 border-0 px-4 py-5 formlogin">
                                    <Form   onSubmit={handleSubmit(onSubmit)}>
                                        <Row className="px-3">
                                            <Form.Label className="mb-1">
                                                <h6 className="mb-1 text-sm">
                                                    Email ou Username
                                                </h6>
                                            </Form.Label>
                                            <Form.Control
                                                className="mb-1"
                                                type="text"
                                                {...register("email")}
                                                placeholder="Enter a valid email id or user name"
                                                required />
                                            <Col>
                                                <small className="form-text text-right text-danger font-italic mb-1">
                                                    {errors.email?.message}
                                                </small>
                                            </Col>
                                        </Row>
                                        <Row className="px-3">
                                            <Form.Label className="mb-1">
                                                <h6 className="mb-1 text-sm">
                                                    Senha
                                                </h6>
                                            </Form.Label>
                                            <Form.Control
                                                className="mb-2"
                                                type="password"
                                                {...register("password")}
                                                placeholder="Enter password"
                                                required/>
                                            <small className="form-text text-danger font-italic mb-1">
                                                {errors.password?.message}
                                            </small>
                                        </Row>
                                        <Row className="px-3 mb-4">
                                            <a
                                                href="/#"
                                                className="ml-auto mb-0 text-sm">
                                                Esqueceu sua senha?
                                            </a>
                                        </Row>
                                        <Row className="mb-3 px-3">
                                            <Button
                                                variant="primary"
                                                type="submit"
                                                className="btn-blue">
                                                Login
                                            </Button>{" "}
                                            &nbsp;&nbsp;
                                        </Row>
                                    </Form>

                                    <Row className="mb-4 px-3">
                                        <small className="font-weight-bold">
                                            Não tem conta?{" "}
                                            <Link
                                                to="/signup"
                                                className="text-warning">
                                                Cadastro
                                            </Link>
                                        </small>
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

export default LogIN;
