import Fixture from './fixture';
import Score from './score';

type Result = Fixture & {
	score: Score;
};

export default Result;
