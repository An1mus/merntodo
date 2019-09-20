import express from 'express';
import Ajv from 'ajv';
import jwt from 'jsonwebtoken';
import authSchema from '../config/authSchema';
import SECRET_KEY from '../config/secret';
import responses from '../helpers/responseTemplates';
import db from '../db';

const authRouter = express.Router();

const ajv = Ajv({ allErrors: true });
ajv.addSchema(authSchema, 'user-login');

async function getUserCredentialsIfexists(user) {
	return await db.checkIfUserExists(user);
}

authRouter.use('/', async (req, res, next) => {
	const isLoginValid = ajv.validate('user-login', req.body);

	const user = await getUserCredentialsIfexists(req.body);

	if (isLoginValid) {
		if (user) {
			const token = jwt.sign(req.body, SECRET_KEY);

			res.json(responses.getPositiveAuthenticationResponse(
				{id: user._id},
				token,
			));

			next();
		} else {
			res.json(responses.getNegativeAuthenticationResponse(
				'User not found or invalid credentials',
			));
		}
	} else {
		res.json(responses.getNegativeAuthenticationResponse(
			ajv.errors,
		));
	}
});

export default authRouter;
