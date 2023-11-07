import { css } from '@emotion/react';
import { gray2, gray3 } from './Styles';
import { Link } from 'react-router-dom';
import { TaskData } from './TaskData';
import React from 'react';

interface Props {
  data: TaskData;
  showContent?: boolean;
}

export const Task = ({ data, showContent = true }: Props) => (
  <div
    css={css`
      padding: 10px 0px;
    `}
  >
    <div
      css={css`
        padding: 10px 0px;
        font-size: 19px;
      `}
    >
      <Link to={`/tasks/${data.id}`}>{data.name}</Link>
    </div>
    {showContent && (
      <div
        css={css`
          padding-bottom: 10px;
          font-size: 15px;
          color: ${gray2};
        `}
      >
        {data.description ? data.description.length > 50
          ? `${data.description.substring(0, 50)}...`
          : data.description 
          : ""}
      </div>
    )}
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Task >>> ${data.name} is due: ${data.dueDate}`}
    </div>
  </div>
);
