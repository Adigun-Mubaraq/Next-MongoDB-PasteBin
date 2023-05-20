import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Paste Bucket</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Button href="/create-snippet" variant="outline-info">
            Create a Snippet
          </Button>
        </Nav>
      </Navbar>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
