import React from 'react';
import './task.css';
import PropTypes from 'prop-types';

function Task({done,editing,onChangeHandler,stateTask,date,onToggleDone,onSubmit,changeItem,onDeleted}) {


 
    let classNames = 'description';
    if (done) {
      classNames += ' completed-task';
    }

    let editingElem;
    if (editing) {
      editingElem = (
        <label><input className={classNames} onChange={onChangeHandler} defaultValue={stateTask} />{' '}
          <span className='created'>{date} created ago</span>
        </label>
      )
    } else {
      editingElem = (
        <label>
          <a href='#' className={classNames} onClick={onToggleDone} onKeyDown={onToggleDone}>{stateTask}</a>{' '}
          <span className='created'>{date} created ago</span>
        </label>
      )
    }
    return (
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <form onSubmit={onSubmit}>
          {editingElem}
        </form>
        <button type='button' className='icon icon-edit' onClick={changeItem}  />
        <button type='button' className='icon icon-destroy' onClick={onDeleted} />
      </div>
    )
  

}

Task.defaultProps = {
  done: false,
  onToggleDone: () => { },
  stateTask: '',
  date: '',
  onDeleted: () => { },
  onChangeHandler: () => { },
  onSubmit: () => { },
  changeItem: () => { },
  editing: false
}
Task.propTypes = {
  done: PropTypes.bool,
  onToggleDone: PropTypes.func,
  stateTask: PropTypes.string,
  date: PropTypes.string,
  onDeleted: PropTypes.func,
  onChangeHandler: PropTypes.func,
  onSubmit: PropTypes.func,
  changeItem: PropTypes.func,
  editing: PropTypes.bool
}
export default Task;