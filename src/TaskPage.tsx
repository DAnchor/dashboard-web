import {
  gray3,
  gray6,
  pixelsToEm,
  red1
} from './Styles';
import {
  gettingTaskAction,
  gotTaskAction,
} from './actions/TaskActions';
import { TaskList } from './TaskList';
import { AppState } from './Store';
import { css } from '@emotion/react';
import { Page } from './Page';
import { getTask } from './TaskData';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

export const TaskPage = () => {
  const dispatch = useDispatch();
  const task = useSelector((state: AppState) => state.tasks.viewing);
  const { id } = useParams();

  React.useEffect(() => {
    const doGetTask = async (id: number) => {
      dispatch(gettingTaskAction());

      const foundTask = await getTask(id);

      dispatch(gotTaskAction(foundTask));
    };

    if (id) {
      doGetTask(Number(id));
    }
  }, [id]);

  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            color: ${red1};
            font-size: 19px;
            font-weight: bold;
            margin: 10px 0 5px;
            text-align: center;
          `}
        >
          {id === null ? '' : task?.name}
        </div>
        {task !== null && (
          <React.Fragment>
            <p
              css={css`
                margin-top: 0px;
                background-color: white;
                white-space: pre-line;
              `}
            >
              {task.description ? `Description: ${task.description}\n`: ""}
              {`Priority: ${task.priority}\n`}
              {`Status: ${task.status}`}
            </p>
            <div
              css={css`
                font-size: 12px;
                font-style: italic;
                color: ${gray3};
                text-align: right;
              `}
            >
              {`Due date: ${task.dueDate}`}
            </div>
          </React.Fragment>
        )}
      </div>
    </Page>
  );
};
