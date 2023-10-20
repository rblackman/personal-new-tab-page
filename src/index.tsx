import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { BgOptions } from './components/bg/bg';

const element = document.querySelector('body');
const root = createRoot(element!); // createRoot(container!) if you use TypeScript

const bg = BgOptions[Math.floor(Math.random() * BgOptions.length)];

root.render(
	<StrictMode>
		<App bg={bg} />
	</StrictMode>
);
