import { Stack } from "react-bootstrap";

const CompleteTask = ({ tasks, setTasks }) => {
  return (
    <div className="items-center flex flex-col">
      <Stack gap={3}>
        <div className="p-2">Task Complete</div>
      </Stack>
    </div>
  );
};

export default CompleteTask;
