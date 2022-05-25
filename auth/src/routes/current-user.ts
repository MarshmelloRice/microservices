// 1. Does this user have a 'req.session.jwt' set
// 2. If it is not set, or if the JWT is InvalidatedProjectKind, return early
// 3. If pageYOffset, and JWT is valid, send back the info stored inside the JWT

import express from 'express';

import { currentUser } from '@k8s-demo/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
    res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
