import express from 'express';
import renderHTML from './renderHTML';
import App from './components/App';

const router = express.Router();

router.get('/', renderHTML(App));

export default router;
