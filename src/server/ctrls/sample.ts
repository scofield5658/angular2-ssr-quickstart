import { Request, Response, NextFunction } from 'express';

export const echo = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'GET') {
    const { term = '' } = req.query || {};
    res.send({ err_code: 0, err_msg: '', data: { payload: term } })
    return;
  }

  next();
}
