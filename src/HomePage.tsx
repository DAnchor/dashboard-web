import { AppState } from './Store';
import { css } from '@emotion/react';
import { getTasks } from './TaskData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { TaskList } from './TaskList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BarChart from './BarChart';
import {
  gettingTasksAction,
  gotTasksAction,
} from './actions/TaskActions';

export const HomePage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(
    (state: AppState) => state.tasks.tasks,
  );
  const tasksLoading = useSelector(
    (state: AppState) => state.tasks.loading,
  );

  React.useEffect(() => {
    const doGetTasks = async () => {
      dispatch(gettingTasksAction());

      const loadedTasks = await getTasks();

      dispatch(gotTasksAction(loadedTasks));
    };
    
    doGetTasks();
    // setInterval(()=>{
    //   doGetTasks();
    // }, 10000);

  }, []);

  return (
    <Page>
      <PageTitle>Tasks</PageTitle>
      <BarChart data={tasks} />
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
      </div>
      {tasksLoading ? (
        <div>Loading...</div>
      ) : (
        <TaskList data={tasks} />
      )}
    </Page>
  );
};
