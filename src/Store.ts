import { taskReducer } from './reducers/TaskReducer';
import { TaskState } from './reducers/TaskReducer';
import { combineReducers } from 'redux';

export interface AppState {
  readonly tasks: TaskState;
}

export const rootReducer = combineReducers<AppState>({
  tasks: taskReducer,
});
