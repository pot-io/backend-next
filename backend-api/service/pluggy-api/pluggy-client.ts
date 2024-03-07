import options from './pluggy-options';
import { PluggyAuth } from './types/pugglyAuth';
import { PluggyClient } from 'pluggy-sdk';

let client = new PluggyClient({
	clientId: process.env.PLUGGY_CLIENT_ID || '',
	clientSecret: process.env.PLUGGY_CLIENT_SECRET || '',
});

const test = () => {
	return "Testing";
}

const auth = async (): Promise<PluggyAuth> => {
	const response = await fetch(process.env.PLUGGY_API_URL + '/auth', options);
	return response.json();
}

const listConnectors = async (): Promise<any> => {
	return client.fetchConnectors()
}

const getAccountById = async (id: string): Promise<any> =>{
	const apiKeyPromise: Promise<PluggyAuth> = auth();
	const apiKey: string = (await apiKeyPromise).apiKey;
	const response = await fetch(`https://api.pluggy.ai/accounts/${id}`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			'content-type': 'application/json',
			'X-API-KEY': apiKey,
		},
	});
	return response.json();
}

export default { test, auth, listConnectors, getAccountById };