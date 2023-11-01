import Fixture from './fixture';
import Score from './score';

export function isResult(item: Fixture | Result): item is Result {
	return (item as Result).score !== undefined;
}

type Result = Fixture & {
	score: Score;
};

export default Result;
