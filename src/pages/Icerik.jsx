import {Button, TextField} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import {Col, Container, Row, Table} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";
import {Label} from "@mui/icons-material";

function Icerik(){
    {
        const navigate = useNavigate()
        const [veri, setVeri] = useState([]);
        const [referans, setReferans] = useState([]);
        const referansString = useState();
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

                    console.log(referansString);
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
                    <Col sm={15}>
                        <Table striped bordered hover>
                            <thead>
                            <tr >
                                <th>id</th>
                                <th >yayın ad</th>
                                <th>yazar isim</th>
                                <th>yayın tür</th>
                                <th>yayin tarih</th>
                                <th>yayinci Adi</th>
                                <th>arama anahtar kelime</th>
                                <th>makale anahtar kelime</th>
                                <th>ozet</th>
                                <th>alintiSayisi</th>
                                <th>doiNumarasi</th>
                                <th>urlAdresi</th>
                                <th>urlLink</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>{veri.id}</td>
                                <td>{veri.yayinAd}</td>
                                <td>{veri.yazarIsim}</td>
                                <td>{veri.yayinTur}</td>
                                <td>{veri.yayinTarih}</td>
                                <td>{veri.yayinciAdi}</td>
                                <td>{veri.aramaAnahtarKelime}</td>
                                <td>{veri.makaleAnahtarKelime}</td>
                                <td>{veri.ozet}</td>
                                <td>{veri.alintiSayisi}</td>
                                <td>{veri.doiNumarasi}</td>
                                <td>{veri.urlAdresi}</td>
                                <td>{veri.urlLink}</td>
                            </tr>
                            </tbody>

                        </Table>
                    </Col>

                    <Col sm={1}>
                        <thead>
                        <tr>
                            <th>
                                referansasşildpkf
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        {referans.map((v) => (

                            <tr key={v.id} onClick={() => {

                            }}>
                                <td>{v.id}</td>
                                <td>{v.referans}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Col>


                </Row>


            </Container>
        )
    }
}

export default Icerik;