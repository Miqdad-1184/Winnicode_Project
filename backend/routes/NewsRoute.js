import express from 'express';
import {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
} from '../controllers/NewsController.js';

const newsRouter = express.Router();

router.get('/news', getAllNews);
router.get('/news/:id', getNewsById);
router.post('/news', createNews);
router.put('/news/:id', updateNews);
router.delete('/news/:id', deleteNews);

export default newsRouter;
