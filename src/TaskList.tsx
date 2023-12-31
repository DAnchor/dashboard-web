import { accent2, gray5 } from './Styles';
import { css } from '@emotion/react';
import { Task } from './Task';
import { TaskData } from './TaskData';
import React from 'react';

interface Props {
  data: TaskData[];
  renderItem?: (item: TaskData) => JSX.Element;
}

export const TaskList = ({ data, renderItem }: Props) => (
  <ul
    css={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0px 20px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 3px solid ${accent2};
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
    `}
  >
    {data.map((task) => (
      <li
        key={task.id}
        css={css`
          border-top: 1px solid ${gray5};
          :first-of-type {
            border-top: none;
          }
        `}
      >
        {renderItem ? renderItem(task) : <Task data={task} />}
      </li>
    ))}
  </ul>
);
