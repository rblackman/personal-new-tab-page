import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import type { MutableSnapshot } from 'recoil';
import { RecoilRoot } from 'recoil';
import { BgOptions } from '../../components/bg/bg';
import { BackgroundState } from '../../state';
import App from './app';

const element = document.getElementById('app');
const root = createRoot(element!); // createRoot(container!) if you use TypeScript

const bg = BgOptions[Math.floor(Math.random() * BgOptions.length)];

function initializeState({ set }: MutableSnapshot) {
	set(BackgroundState, bg);
}

root.render(
	<StrictMode>
		<RecoilRoot initializeState={initializeState}>
			<App bg={bg} />
		</RecoilRoot>
	</StrictMode>
);
