import url from 'url';

/**
 * middleware for parsing request Body fo POSTs
 * @param res
 * @param req
 * @param next
 */
function bodyParser(req, res, next) {
	const urlParts = url.parse(req.url, true);
	const request = urlParts.query;

	req.body = request;
	next();
}

export default bodyParser;
