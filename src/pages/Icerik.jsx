import {Button} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import {Col, Container, Row, Table} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";

function Icerik(){
    {
        const navigate = useNavigate()
        const [veri, setVeri] = useState([]);
        const [referans, setReferans] = useState([]);
        function loadVeri() {
            fetch('/veri/'+localStorage.getItem("id"), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                    setVeri(result);
                })
                .catch(error => {
                    console.log("Bir hata oluştu : ", error);
                    setVeri([]);
                });
        }
        useEffect(() => {
            loadVeri();
        }, []);


        function loadReferans() {
            fetch('/referans?veriId='+localStorage.getItem("id"), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                    setReferans(result);
                })
                .catch(error => {
                    console.log("Bir hata oluştu : ", error);
                    setReferans([]);
                });
        }



        useEffect(() => {
            loadReferans();
        }, []);

        return(
            <Container>
                <Row>
                    <Col sm={7}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>yayın ad</th>
                                <th>yazar isim</th>
                                <th>yayın tür</th>
                                <th>referans</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{veri.id}</td>
                                <td>{veri.yayinAd}</td>
                                <td>{veri.yazarIsim}</td>
                                <td>{veri.yayinTur}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Icerik;