import { Table } from "reactstrap";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <Table bordered hover striped responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{/* TODO: Retrieve all users and list them here */}</tbody>
      </Table>
    </div>
  );
};

export default Users;
