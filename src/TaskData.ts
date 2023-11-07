export interface TaskData {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
  priority: number;
  status: number;
}

// const tasks: TaskData[] = [
//   {
//     id: 1,
//     name: 'Task 1',
//     description: 'Task with warning',
//     dueDate: new Date(),
//     priority: 1,
//     status: 2
//   },
//   {
//     id: 2,
//     name: 'Task 2',
//     description: 'Task with warning',
//     dueDate: new Date(),
//     priority: 1,
//     status: 3
//   },
// ];

export const getTasks = async (): Promise<TaskData[]> => {
  await wait(500);

  let tasks: TaskData[] = [];

  tasks = await fetchTasks();

  return tasks.map((task) => ({
    ...task
  }));
};

export const getTask = async (
  id: number,
): Promise<TaskData | null> => {
  await wait(500);

  const results = await fetchTasks().then(t => t.filter((t) => t.id === id));

  return results.length === 0 ? null : results[0];
};

const wait = async (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchTasks = async (): Promise<TaskData[]> => {
  const response = await fetch("https://localhost:7108/api/v1/Task/GetAllTasks", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const tasks = await response.json();
  
  return tasks;
}
