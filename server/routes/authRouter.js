import express from 'express';
import Ajv from 'ajv';
import jwt from 'jsonwebtoken';
import authSchema from '../config/authSchema';
import credentials from '../helpers/fakeCredentials';
import SECRET_KEY from '../config/secret';
import responses from '../helpers/responseTemplates';

const authRouter = express.Router();

const ajv = Ajv({ allErrors: true });
ajv.addSchema(authSchema, 'user-login');

function isUserExists(login) {
	//TODO: change for DB call
	return credentials.username === login;
}

authRouter.use('/', (req, res, next) => {
	const isLoginValid = ajv.validate('user-login', req.body);
	console.log(req.body);

	if (isLoginValid) {
		if (isUserExists(req.body.username) && req.body.password === credentials.password) {
			const token = jwt.sign(req.body, SECRET_KEY);

			res.json(responses.getPositiveAuthenticationResponse(
				req.body.username,
				credentials.email,
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
