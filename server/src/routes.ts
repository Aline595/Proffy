import express from 'express';
import Classescontorller from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new Classescontorller();
const connectionsControlers = new ConnectionController();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionsControlers.create);
routes.get('/connections', connectionsControlers.index);


export default routes;
