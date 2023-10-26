import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './options/app';

const element = document.getElementById('app');
const root = createRoot(element!); // createRoot(container!) if you use TypeScript

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
