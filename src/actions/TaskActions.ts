import { TaskData } from '../TaskData';

// action functions
// tasks
export const GETTINGTASK = 'GettingTask';
export const gettingTaskAction = () =>
  ({
    type: GETTINGTASK,
  } as const);

export const GOTTASK = 'GotTask';
export const gotTaskAction = (task: TaskData | null) =>
  ({
    type: GOTTASK,
    task: task,
  } as const);

export const GETTINGTASKS = 'GettingTasks';
export const gettingTasksAction = () =>
  ({
    type: GETTINGTASKS,
  } as const);

export const GOTTASKS = 'GotTasks';
export const gotTasksAction = (tasks: TaskData[]) =>
  ({
    type: GOTTASKS,
    tasks: tasks,
  } as const);
