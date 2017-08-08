module.exports = (req, res, next) => {
	if (!req.user) {
		res.status(401).error('You must Log in!');
	}
	next();
};
