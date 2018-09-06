import { Request, Response, Router } from 'express';
import passport from 'passport';
import { User } from '../models/User';

const router = Router();

router.post('/register', (req: Request, res: Response) => {
  req.check('username', 'Username is required').notEmpty();
  req.check('email', 'Email is required').notEmpty();
  req.check('password', 'Password is required').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    res.send(errors);
  } else if (req.body.password !== req.body.passwordRepeat) {
    res.send([{ msg: 'Passwords don\'t match' }]);
  } else {
    const newUser = {
      username: req.body.username,
      email: req.body.email
    };

    User.register(newUser, req.body.password, () => {
      passport.authenticate('local')(req, res, () => res.send('OK'));
    });
  }
});

router.post('/login', passport.authenticate('local'), (req: Request, res: Response) => {
  res.send('OK');
});

router.get('/logout', (req: Request, res: Response) => {
  req.logout();
  res.redirect('/');
});

export default router;