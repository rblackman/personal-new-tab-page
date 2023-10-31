import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BgOptions } from '../../components/bg/bg';
import App from './app';

const element = document.getElementById('app');
const root = createRoot(element!); // createRoot(container!) if you use TypeScript

const bg = BgOptions[Math.floor(Math.random() * BgOptions.length)];

root.render(
	<StrictMode>
		<App bg={bg} />
	</StrictMode>
);
