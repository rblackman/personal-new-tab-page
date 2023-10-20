import Bg, { BgOptionsType } from './components/bg/bg';
import Link from './components/link/link';
import CurrentTime from './currentTime';
import './global.css';

interface Props {
	bg: BgOptionsType;
}

export default function App({ bg }: Props) {
	return (
		<Bg bg={bg}>
			<h1>Hello World</h1>
			<CurrentTime />
			<ul>
				<Link
					href="https://reddit.com/"
					text="Reddit"
					icon="reddit"
					subMenu={[
						{ href: 'https://www.reddit.com/r/politics/', name: 'Politics' },
						{ href: 'https://reddit.com/r/coys/', name: 'COYS' }
					]}
				/>
			</ul>
		</Bg>
	);
}
