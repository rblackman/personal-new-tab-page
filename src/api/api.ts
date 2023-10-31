import ApiError from '../../types/api/apiError';
import ApiResponse from '../../types/api/apiResponse';

const endpoint = 'https://tottenham-api-git-development-rblackman.vercel.app';
const apiKey = 'test';

function isErrorResponse(data: ApiResponse | ApiError): data is ApiError {
	return (data as ApiError).code !== undefined;
}

async function fetchData(): Promise<ApiResponse | ApiError> {
	const url = `${endpoint}/api/fixtures`;

	const options: RequestInit = {
		headers: {
			'X-ApiKey': apiKey,
			'Accept': 'application/json'
		},
		method: 'GET',
		cache: 'no-cache'
	};

	let response: Response | null = null;
	try {
		response = await fetch(url, options);
	} catch (error) {
		console.error(error);
		return { code: 500, message: 'Failed to fetch upstream data' };
	}

	if (!response.ok) {
		return { code: response.status, message: response.statusText };
	}

	let data: ApiResponse | null = null;
	try {
		data = (await response.json()) as ApiResponse;
	} catch (error) {
		console.error(error);
		return { code: 500, message: 'Failed to parse upstream data' };
	}
	return data;
}

const api = { fetchData, isErrorResponse };
export default api;
