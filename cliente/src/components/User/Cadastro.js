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

const SignSchema = Yup.object()
    .shape({
        nome: Yup.string().min(2).required("O nome é necesario"),
        email: Yup.string()
            .email("O email deve ser valido")
            .required("O email é necesario"),
        senha: Yup.string().min(8).max(16).required("A senha é necesaria"),
    })


export function Cadastro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(SignSchema),
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        //console.warn(data);
        if (data) {
            axios.post("http://localhost:8000/user/cadastro", data).then((res) => {
                if (res.data.flag === 1) {
                    toast.success(`${res.data.message}`, {
                        position: "top-left",
                        autoClose: 5000,
                        theme: "dark",
                    });    
                   navigate("/cardapio")
                } else {
                    toast.error(`${res.data.message}`, {
                        position: "top-left",
                        autoClose: 5000,
                        theme: "dark",
                    });
                }navigate("/")
            });
        } 
    };

    return (
        <>
            <section className="bg-image">
                <Container
                    fluid
                    className="px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"
                >
                    <Card className="card0 border-0">
                        <Row className="d-flex">
                            <Col className="col-lg-6">
                                <div className="card1 pb-5 con" >
                                        <Image
                                            src="/assets/logo2.png"
                                            className="imager"
                                        />
                                </div>
                            </Col>
                            <Col className="col-lg-6">
                                <Card className="card2 border-0 px-3 py-5 formlogin">
                                    <Row>
                                        <h5>Cadastrar</h5>
                                    </Row>
                                    <hr />
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <Row className=" mb-2">
                                            <Col>
                                                <Form.Label className="mb-1">
                                                    <h6 className="mb-1 text-sm">
                                                        Nome
                                                    </h6>
                                                </Form.Label>

                                                <Form.Control
                                                    type="text"
                                                    className=""
                                                    id="exampleInputFname"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Nome"
                                                    {...register("nome")}
                                                    required
                                                />

                                                <small
                                                    id="emailHelp"
                                                    className="form-text text-danger font-italic mb-1"
                                                >
                                                    {errors.fname?.message}
                                                </small>
                                            </Col>
                                        
                                        </Row>

                                        <Row className="mb-2">
                                            <Col>
                                                <Form.Label className="mb-1">
                                                    <h6 className="mb-1 text-sm">
                                                        Email Address
                                                    </h6>
                                                </Form.Label>

                                                <Form.Control
                                                    type="email"
                                                    {...register("email")}
                                                    placeholder="Email"
                                                    required
                                                />

                                                <small
                                                    id="emailHelp"
                                                    className="form-text text-danger font-italic"
                                                >
                                                    {errors.email?.message}
                                                </small>
                                            </Col>
                
                                        </Row>

                                        <Row className="mb-1">
                                            <Col>
                                                <Form.Label className="mb-1">
                                                    <h6 className="mb-1 text-sm">
                                                        Password
                                                    </h6>
                                                </Form.Label>

                                                <Form.Control
                                                    type="password"
                                                    {...register("senha")}
                                                    placeholder="Senha"
                                                    required
                                                />

                                                <small
                                                    id="emailHelp"
                                                    className="form-text text-danger font-italic"
                                                >
                                                    {errors.password?.message}
                                                </small>
                                            </Col>

                                        </Row>

                                        <Row className="mb-3">
                                        
                                        </Row>

                                        <Row className="mb-2">
                                            <Col>
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                    className="btn-blue"
                                                >
                                                    Cadastrar-se
                                                </Button>{" "}
                                                &nbsp;&nbsp;
                                            </Col>
                                        </Row>
                                    </Form>

                                    <Row className="mb-4">
                                        <Col>
                                            <small className="font-weight-bold">
                                                Você já esta cadastrado?{" "}
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

export default Cadastro;