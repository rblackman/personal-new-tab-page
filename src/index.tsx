import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const element = document.querySelector('body');
const root = createRoot(element!); // createRoot(container!) if you use TypeScript
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
