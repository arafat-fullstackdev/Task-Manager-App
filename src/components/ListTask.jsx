import { Stack } from "react-bootstrap";

const ListTask = ({ tasks, setTasks }) => {
  return (
    <div>
      <Stack gap={3}>
        <div className="p-2">First item</div>
      </Stack>
    </div>
  );
};

export default ListTask;
