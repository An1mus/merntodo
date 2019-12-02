export const serverUrl = 'http://localhost:8081/';

export const accessEndpoint = serverUrl + 'auth';
export const authEndpoint = accessEndpoint + '/auth';
export const registerEndpoint = accessEndpoint + '/register';

export const todoAdditionUrl = serverUrl + 'todos';
export const todoRemovalUrl = serverUrl + 'todos/remove'; //TODO: review this endpoint
