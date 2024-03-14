import { Container, Navbar, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return <>
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='/'> Makale Arama Motoru </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href='/anasayfa' >Anasayfa</Nav.Link>
                        <Nav.Link href='/icerik' >Içerik</Nav.Link>
                        <Nav.Link href='/liste' >Listele</Nav.Link>
                        <Nav.Link href='/table' >Table</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </>;
}