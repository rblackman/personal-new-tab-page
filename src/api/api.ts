import ApiError from '../../types/api/apiError';
import ApiResponse from '../../types/api/apiResponse';

const url = 'https://tottenham-api.vercel.app/api/fixtures';
const apiKey =
	'Lantern-Kiln-Headroom-Trading-Dork-Bonfire-Flying-Gout-Activity4-Diabolic-Wanting-Playing-Trombone-Undaunted-Truffle-Uncut-Gloss-Yin-Bazooka-Pushchair';

function isErrorResponse(data: ApiResponse | ApiError): data is ApiError {
	return (data as ApiError).code !== undefined;
}

async function fetchData(): Promise<ApiResponse | ApiError> {
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
