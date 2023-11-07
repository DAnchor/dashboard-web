import {
  GETTINGTASK,
  gettingTaskAction,
  GOTTASK,
  gotTaskAction,
  GETTINGTASKS,
  gettingTasksAction,
  GOTTASKS,
  gotTasksAction
} from '../actions/TaskActions';
import { TaskData } from '../TaskData';

// state object with properties
export interface TaskState {
  readonly loading: boolean;
  readonly tasks: TaskData[];
  readonly viewing: TaskData | null;
}

// app inital state
const initialTaskState: TaskState = {
  loading: false,
  tasks: [],
  viewing: null
};

type TaskActions =
  | ReturnType<typeof gettingTaskAction>
  | ReturnType<typeof gotTaskAction>
  | ReturnType<typeof gettingTasksAction>
  | ReturnType<typeof gotTasksAction>;

export const taskReducer = (
  state = initialTaskState,
  action: TaskActions,
) => {
  switch (action.type) {
    case GETTINGTASKS: {
      return {
        ...state,
        loading: true,
      };
    }
    case GOTTASKS: {
      return {
        ...state,
        tasks: action.tasks,
        loading: false,
      };
    }
    case GETTINGTASK: {
      return {
        ...state,
        viewing: null,
        loading: true,
      };
    }
    case GOTTASK: {
      return {
        ...state,
        viewing: action.task,
        loading: false,
      };
    }
    default:
      return state;
  }

  return state;
};
