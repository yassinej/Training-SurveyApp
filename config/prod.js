//prod.js do commit

module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleSecret: process.env.GOOGLE_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
	stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
