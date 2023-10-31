import { useRecoilValue } from 'recoil';
import { ApiDataState, ApiErrorState, LastUpdatedState } from '../../state';

export default function Spurs() {
	const apiData = useRecoilValue(ApiDataState);
	const apiError = useRecoilValue(ApiErrorState);
	const lastUpdated = useRecoilValue(LastUpdatedState);

	return (
		<div>
			<p>Updated: {lastUpdated}</p>
			{apiError && <p>Error: {apiError}</p>}
			{apiData && apiData.form}
		</div>
	);
}
