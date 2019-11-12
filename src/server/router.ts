import { Router } from 'express';
import { echo } from '../server/ctrls/sample';

const router = Router();

router.get('/echo', echo);

export default router;
