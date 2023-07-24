import { Container } from "reactstrap";
import { Posts, Users } from "./components";

const App = () => (
  <Container>
    <Users />
    <Posts />
  </Container>
);

export default App;
