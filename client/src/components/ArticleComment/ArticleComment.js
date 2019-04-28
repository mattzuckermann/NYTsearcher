import React from 'react';
import moment from 'moment';
import { ListItem } from '../List';

export const ArticleComment = props => (
  <div className="list-group" style={{ margin: '30px 0' }}>
    <a
      href={props.url}
      className="bg-dark list-group-item list-group-item-action flex-column align-items-start active"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.title}</h5>
        <small>{moment(props.date).format('dddd, MMMM Do YYYY, h:mm')}</small>
      </div>
    </a>
    <ListItem className="list-group-item">
      <div className=" w-75" style={{ display: 'inline-block' }}>
        <h5 className="mb-1">{props.summary}</h5>
      </div>
    </ListItem>
  </div>
);
