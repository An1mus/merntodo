import mongodb from 'mongodb';

const mongoUrl = 'mongodb+srv://todouser:todopassword@todo-fspu9.mongodb.net/test?retryWrites=true&w=majority';

const dbInterface = {
	checkIfUserExists,
	addTodo,
	getTodos,
	removeTodo,
};

const MongoClient = mongodb.MongoClient;

async function checkIfUserExists(user) {
	const db = await MongoClient.connect(
		mongoUrl,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	const dbo = await db.db("todo");
	const result = await dbo.collection("users").findOne(user);

	db.close();

	return result;
}

async function addTodo(todo) {
	const db = await MongoClient.connect(
		mongoUrl,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	const dbo = await db.db("todo");
	const result = await dbo.collection("todos").insertOne(todo);

	db.close();

	return result;
}

async function removeTodo(todo){
	const db = await MongoClient.connect(
		mongoUrl,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	const dbo = await db.db("todo");

	const result = await dbo.collection("todos").deleteOne({
		_id: new mongodb.ObjectID(todo.todoId),
		owner: todo.owner
	});

	db.close();

	return result;
}

async function getTodos(id){
	const db = await MongoClient.connect(
		mongoUrl,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	const dbo = await db.db("todo");
	const result = await dbo.collection("todos").find({owner: id}).toArray();

	db.close();

	return result;
}

export default dbInterface;
