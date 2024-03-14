import {Button} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import {Col, Container, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";

function Liste() {
    {
        const navigate = useNavigate()
        const [veris, setVeris] = useState([]);
        const [selectedVeri, setSelectedVeri] = useState({
            id: ''
        });

        function loadVeri() {
            fetch('/veri', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                    setVeris(result);
                })
                .catch(error => {
                    console.log("Bir hata oluştu : ", error);
                    setVeris([]);
                });
        }
        useEffect(() => {
            loadVeri();
        }, []);


        function deleteReferans() {
            fetch("/referans", {
            method: "DELETE",
        })
            .then((res) => {
                if (res.ok) {
                    console.log(` deleted successfully.`)
                } else {
                    console.log(`Error deleting `)
                }
            })
                .catch(error => {
                    console.log("Bir hata oluştu : ", error);
                });
        }

        function showVeri(){
            localStorage.setItem('id', selectedVeri.id);
            console.log("sssd "+localStorage.getItem("id"))
            navigate("/icerik")
        }

        function handleInputChange(e) {
            const { name, value } = e.target;
            setSelectedVeri({ ...selectedVeri, [name]: value });
        }



    return (

        <Container>

            <Row>
                <Col sm={7}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>id {veris.length}</th>
                            <th>yayın ad</th>
                            <th>yazar isim</th>
                            <th>yayın tür</th>
                        </tr>
                        </thead>
                        <tbody>
                        {veris.map((v) => (

                            <tr key={v.id} onClick={() => {
                                setSelectedVeri(v)
                            }}>
                                <td>{v.id}</td>
                                <td>{v.yayinAd}</td>
                                <td>{v.yazarIsim}</td>
                                <td>{v.yayinTur}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            <Col sm={2}>
                <Form>
                    <Form.Group className="mb-3" controlId="identityNo">
                        <Form.Label>Selected Veri</Form.Label>
                        <Form.Control
                            type='text'
                            autoComplete='off'
                            placeholder='Selected Veri'
                            name='id'
                            maxLength={'11'}
                            value={selectedVeri.id}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </Form.Group>
                    <Button variant="outline-primary" type="button" onClick={showVeri}>
                        SHOW
                    </Button>
            </Form>
        </Col>
            </Row>
        </Container>
    )
    }
}

export default Liste;