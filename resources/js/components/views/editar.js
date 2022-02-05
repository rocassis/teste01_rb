import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditIncidente() {
  var navigate = useNavigate();

  var { id } = useParams()

  var [titulo, setTitle] = useState("")
  var [descricao, setDescricao] = useState("")
  var [criticidade, setCriticidade] = useState("")
  var [tipo, setTipo] = useState("")
  var [status, setStatus] = useState("")

  var [validationError, setValidationError] = useState({})

  useEffect(() => {
    fetchIncidente()
  }, [])

  const fetchIncidente = async () => {
    await axios.get(`http://localhost:8186/api/incidente/${id}`).then(({ data }) => {
      let { titulo, descricao, criticidade, tipo, status } = data.incidente;
      console.log(data);
      setTitle(titulo)
      setDescricao(descricao)
      setCriticidade(criticidade)
      setTipo(tipo)
      setStatus(status)
    }).catch(({ response: { data } }) => {
      Swal.fire({
        text: data.message,
        icon: "error"
      })
    })
  }

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  const updateIncidente = async (e) => {
    e.preventDefault();
    let formData = {
      'titulo': titulo,
      'descricao': descricao,
      'criticidade': criticidade,
      'status': status,
      'tipo': tipo
    };

    await axios.put(`http://localhost:8186/api/incidente/${id}`, formData).then(({ data }) => {
      Swal.fire({
        icon: "success",
        text: data.message
      })
      navigate("/")
    }).catch(({ response }) => {
      if (response.status === 422) {
        setValidationError(response.data.errors)
      } else {
        Swal.fire({
          text: response.data.message,
          icon: "error"
        })
      }
    })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Atualizar Incidente</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value]) => (
                                <li key={key}>{value}</li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={updateIncidente}>
                  <Row>
                    <Col>
                      <Form.Group controlId="Titulo">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" value={titulo} onChange={(event) => {
                          setTitle(event.target.value)
                        }} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-3">
                    <Col>
                      <Form.Group controlId="Descricao">
                        <Form.Label>Descricao</Form.Label>
                        <Form.Control as="textarea" rows={3} value={descricao} onChange={(event) => {
                          setDescricao(event.target.value)
                        }} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Criticidade">
                        <Form.Label>Criticidade</Form.Label>
                        <select className="select form-control" onChange={(event) => { setCriticidade(event.target.value) }}>
                          <option value='1'>Alta</option>
                          <option value='2'>Média</option>
                          <option value='3'>Baixa</option>
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Tipo">
                        <Form.Label>Tipo</Form.Label>
                        <select className="select form-control" onChange={(event) => { setTipo(event.target.value) }}>
                          <option value='1'>Alarme</option>
                          <option value='2'>Incidente</option>
                          <option value='3'>Outros</option>
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Status">
                        <Form.Label>Status</Form.Label>
                        <select className="select form-control" onChange={(event) => { setStatus(event.target.value) }}>
                          <option value='1'>Inativo</option>
                          <option value='2'>Ativo</option>
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Atualizar
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}