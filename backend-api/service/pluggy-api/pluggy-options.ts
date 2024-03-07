const options = {
	method: 'POST',
	headers: { accept: 'application/json', 'content-type': 'application/json' },
	body: JSON.stringify({
		clientId: process.env.PLUGGY_CLIENT_ID,
		clientSecret: process.env.PLUGGY_CLIENT_SECRET,
	}),
};

export default options;