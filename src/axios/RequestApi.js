import axios from 'axios';

/*const RequestApi = (baseURL) => {
	const result = axios.create({
		baseURL: baseURL || 'http://localhost:3003',
		timeout: 1000,
	});
	return result;
}

export { RequestApi };
export default RequestApi();*/

const userRequest = axios.create({
	baseURL: "https://api.github.com/users/"
});
export const apiUserProfile = (username) =>
	userRequest.get(username);