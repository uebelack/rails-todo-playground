/* eslint-disable import/prefer-default-export */
import React from 'react';
import htm from 'htm';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const html = htm.bind(React.createElement);

const root = createRoot(document.getElementById('root'));
root.render(html`<${App}/>`);
