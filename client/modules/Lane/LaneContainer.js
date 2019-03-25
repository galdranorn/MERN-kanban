import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../Kanban/itemTypes';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => {
      return { ...state.notes[noteId] };
    }),
  };
};

const mapDispatchToProps = {
  ...laneActions,
  updateLane: laneActions.updateLaneRequest,
  deleteLane: laneActions.deleteLaneRequest,
  addNote: laneActions.createNoteRequest,
  moveBetweenLanes: laneActions.moveBetweenLanes,
  removeFromLane: laneActions.removeFromLane,
  changeLanesRequest: laneActions.changeLanesRequest,
  pushToLane: laneActions.pushToLane,
};

const noteTarget = {
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const { id: noteId, laneId: sourceLaneId } = sourceProps;
    if (targetProps.lane.id !== sourceLaneId) {
      targetProps.changeLanesRequest(sourceLaneId, targetProps.lane.id, noteId);
    }
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(ItemTypes.NOTE, noteTarget, (dragConnect) => ({
    connectDropTarget: dragConnect.dropTarget(),
  }))
)(Lane);
