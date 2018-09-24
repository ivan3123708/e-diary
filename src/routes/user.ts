import { Request, Response, Router } from 'express';
import { User } from '../models/User';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.user) {
    User
      .findById(req.user._id)
      .populate('diary')
      .exec((err, user) => {
        if (err) console.log(err);

        res.send(user);
      });
  } else {
    res.send(null);
  }
});

export default router;