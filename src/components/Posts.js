import { Table } from "reactstrap";

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      {/* TODO: Create actions (View Post, Update Post, Create Post, Delete Post) */}
      <Table bordered hover striped responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Author Name</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{/* TODO: Retrieve all posts and list here */}</tbody>
      </Table>
    </div>
  );
};

export default Posts;
