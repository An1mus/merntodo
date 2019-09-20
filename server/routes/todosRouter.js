import express from 'express';
import Ajv from 'ajv';
import dbInterface from '../db';
import responses from '../helpers/responseTemplates';
import todoSchema from '../config/todoSchema';

/**
 * products router instance
 * @type {Router}
 */

const todosRouter = express.Router();

const ajv = Ajv({ allErrors: true });
ajv.addSchema(todoSchema, 'todo-item');

// TODO: check the token later
todosRouter.post('/', async (req, res, next) => {
	const isTodoValid = ajv.validate('todo-item', req.body);

	if (isTodoValid) {
		const result = await dbInterface.addTodo(req.body);

		res.json(responses.getPositiveAdditionResponse(
			result
		));

		next();
	} else {
		res.json(responses.getNegativeAdditionResponse(
			ajv.errors,
		));
	}
});


todosRouter.get('/:id', async (req, res, next) => {
	const id = req.params.id;

	if (id) {
		const result = await dbInterface.getTodos(id);

		res.json(responses.getPositiveGenericResponse(
			result
		));

		next();
	} else {
		res.json(responses.getNegativeGenericResponse(
			ajv.errors,
		));
	}
});

todosRouter.post('/remove', async (req, res, next) => {

	try {
		const result = await dbInterface.removeTodo(req.body);

		res.json(responses.getPositiveAdditionResponse(
			result
		));

		next();
	} catch(e) {
		res.json(responses.getNegativeAdditionResponse(
			e
		));
	}
});


export default todosRouter;
