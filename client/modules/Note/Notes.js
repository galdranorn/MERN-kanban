import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import Edit from '../../components/Edit';

const Notes = ({ notes, laneId, editNote, deleteNote, updateNote, moveWithinLane }) => {
  return (<ul className="notes">{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
      editing={note.editing}
      moveWithinLane={moveWithinLane}
      laneId={laneId}
      _id={note._id}
    >
      <Edit
        editing={note.editing}
        value={note.task}
        onValueClick={() => editNote(note.id)}
        onDelete={() => deleteNote(note.id, laneId)}
        onUpdate={(task) => updateNote({
          ...note,
          task,
          editing: false,
        }
      )}
      />
    </Note>
  )}</ul>);
};

Notes.propTypes = {
  notes: PropTypes.array,
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  onUpdate: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  moveWithinLane: PropTypes.func,
};

export default Notes;
