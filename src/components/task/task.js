import React from 'react';
import './task.css';
import PropTypes from 'prop-types';
import Timer from '../timer';

function Task({
  done,
  editing,
  onChangeHandler,
  stateTask,
  date,
  onToggleDone,
  onSubmit,
  changeItem,
  onDeleted,
  isChecked,
}) {
  let classNames = 'description ';
  let classNameLabel = 'label';
  if (done) {
    classNames += ' completed-task';
  }
  let editingElem;
  if (editing) {
    classNameLabel += ' label-padding';
    editingElem = (
      <label className={classNameLabel}>
        <input className="description form-control" onChange={onChangeHandler} defaultValue={stateTask} />{' '}
      </label>
    );
  } else {
    editingElem = (
      <>
        <div className={classNameLabel}>
          <a href="#id" className={classNames}>
            {stateTask}
          </a>{' '}
          <Timer />
          <span className="created">{date} created ago</span>
          <button aria-label="Delete" type="button" className="icon icon-destroy" onClick={onDeleted} />
          <button aria-label="Edit" type="button" className="icon icon-edit" onClick={changeItem} />
        </div>
      </>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="view">
        <input className="toggle" checked={isChecked} onInput={onToggleDone} onChange={() => {}} type="checkbox" />
        {editingElem}
      </div>
    </form>
  );
}

Task.defaultProps = {
  done: false,
  onToggleDone: () => {},
  stateTask: '',
  date: '',
  onDeleted: () => {},
  onChangeHandler: () => {},
  onSubmit: () => {},
  changeItem: () => {},
  editing: false,
  isChecked: false,
};
Task.propTypes = {
  done: PropTypes.bool,
  onToggleDone: PropTypes.func,
  stateTask: PropTypes.string,
  date: PropTypes.string,
  onDeleted: PropTypes.func,
  onChangeHandler: PropTypes.func,
  onSubmit: PropTypes.func,
  changeItem: PropTypes.func,
  editing: PropTypes.bool,
  isChecked: PropTypes.bool,
};
export default Task;
