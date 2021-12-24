import { Router } from 'express';
import { ItemController } from '../controller/itemController';

export const itemRouter = Router();

itemRouter.route('/item').get(ItemController.getItems).post(ItemController.createItem);
