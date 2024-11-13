import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreatorTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });
  console.log(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.length < 3) {
      return toast.error("A task must have more than 3 character");
    }
    if (task.name.length > 100) {
      return toast.error("A task must have more than 100 character");
    }
    const newTask = { ...task, id: uuidv4() };
    setTask((prev) => {
      const list = [...prev, newTask];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    //! clear the input field //
    setTask({ id: "", name: "", status: "todo" });
    toast.success("Task created successfully!");

    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6} sm={4}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Create Task"
              className="me-2"
              value={task.name}
              onChange={(e) =>
                setTask({ ...task, id: uuidv4(), name: e.target.value })
              }
            />
            <Button type="submit" className="bg-primary text-white">
              Create
            </Button>
          </form>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default CreatorTask;
