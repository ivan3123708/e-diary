import * as React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

interface IProps {
  setAction: (action: string) => void;
}

const MyDiarySidebar = (props: IProps) => {
  return (
    <div className="my-diary-sidebar">
      <ul>
        <li id="write">
          <FaPencilAlt className="icon"/>
          <span onClick={() => props.setAction('write')}>Write</span>
        </li>
        <li id="search">
          <FaSearch className="icon"/>
          <span onClick={() => props.setAction('search')}>Search</span>
        </li>
        <li id="delete">
          <FaTrashAlt className="icon"/>
          <span onClick={() => props.setAction('delete')}>Delete</span>
        </li>
      </ul>
    </div>
  );
}

export default MyDiarySidebar;