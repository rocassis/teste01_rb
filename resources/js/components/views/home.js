import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function List() {

    const [incidentes, setIncidente] = useState([])

    useEffect(()=>{
        fetchIncidente() 
    },[])

    const fetchIncidente = async () => {
        await axios.get(`http://localhost:8186/api/incidentes`).then(({data})=>{
            setIncidente(data)
        })
    }

    const deletIncidente = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Você tem certeza?',
            text: "Essa operação não pode ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim, excluir!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`http://localhost:8186/api/incidente/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchIncidente()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }

    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-success mb-2 float-end' to={"/cadastro"}>
                    <i className=''></i>
                    Novo Incicente
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Criticidade</th>
                                    <th>Tipo</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    incidentes.length > 0 && (
                                        incidentes.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.titulo}</td>
                                                <td>{row.criticidade}</td>
                                                <td>{row.tipo}</td>
                                                <td>{row.status}</td>
                                                
                                                <td>
                                                    <Link to={`/editar/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deletIncidente(row.id)}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}