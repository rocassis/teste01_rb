import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditUser() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [titulo, setTitle] = useState("")
  const [descricao, setDescricao] = useState("")
  const [criticidade, setCriticidade] = useState("")
  const [tipo, settipo] = useState("")
  const [status, setStatus] = useState("")
  
  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async () => {
    await axios.get(`http://localhost:8186/api/incidentes/${id}`).then(({data})=>{
    //   const { title, description } = data.product
      let { titulo, descricao, criticidade, tipo, status} = data.incidente;
      console.log(data);
      setTitle(titulo)
      setDescricao(descricao)
      setCriticidade(criticidade)
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    // formData.append('_method', 'PATCH');
    formData.append('titulo', titulo)
    formData.append('descricao', descricao)
    formData.append('criticidade', criticidade)


    await axios.patch(`http://localhost:8186/api/incidentes/${id}`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
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
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={updateProduct}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" value={titulo} onChange={(event)=>{
                              setTitle(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value={descricao} onChange={(event)=>{
                              setDescricao(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Criticidade">
                            <Form.Label>Criticidade</Form.Label>
                            {/* <Form.Control> */}
                                <select className="select form-control" onChange={(event) => { setCriticidade(event.target.value) }}>
                                    <option value='1'>Alta</option>
                                    <option value='2'>Média</option>
                                    <option value='3'>Baixa</option>
                                </select>
                            {/* </Form.Control> */}
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