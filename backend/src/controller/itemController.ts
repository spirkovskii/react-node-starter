import { Request, Response } from 'express';
import { Item } from '../model/itemModel';

const getItems = async (request: Request, response: Response) => {
  try {
    const docs = await Item.find().lean().exec();
    return response.status(200).json({ data: docs });
  } catch (e) {
    response.status(400).end();
  }
};

const createItem = async (request: Request, response: Response) => {
  try {
    const doc = await Item.create(request.body);
    return response.status(200).json({ data: doc });
  } catch (e) {
    response.status(400).end();
  }
};

export const ItemController = {
  getItems,
  createItem,
};
