import { Request, Response, Router } from 'express';
import { User } from '../models/User';
import { Page } from '../models/Page';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  const id = req.body.user._id;

  User.findById(id, (err, user) => {
    if (err) console.log(err);

    const newPage = new Page({
      user: user.username,
      date: req.body.date,
      text: req.body.text,
      isPublic: req.body.isPublic
    });

    newPage.save((err) => {
      if (!err) console.log('PAGE SAVED');
    });

    user.diary.push(newPage);
    user.save((err) => {
      if (!err) console.log('DIARY UPDATED');
    });
  });
});

export default router;