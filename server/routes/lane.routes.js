import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// add a new lane
router.route('/lanes').post(LaneController.addLane);

// get all lanes
router.route('/lanes').get(LaneController.getLanes);

// delete lane
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

// edit lane name
router.route('/lanes').put(LaneController.editLaneName);

export default router;
