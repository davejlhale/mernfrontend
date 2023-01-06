
import { Link } from "react-router-dom";
import "../css/listStyles"
import { Container } from "../css/listStyles"
const PageNotFound = () => {


    return (<div id="page-not-found">
        <h3>Sorry about this but we cant find the page you were looking for</h3>

        <h4> why not try one of these links</h4>
        <Container>
            <Link to="/">HomePage</Link>
            <Link to="/searchPupils">Search Pupils</Link>
            
            <Link to="/searchTeachers">Search Teachers</Link>
            <Link to="/Searchclasses">Search Classes</Link>
        </Container>
    </div>
    );
};
export default PageNotFound;