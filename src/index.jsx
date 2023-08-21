import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"

import { Post } from './post';
import 'styles/styles.css'
import 'styles/main.scss'
import json from 'assets/json.json'

import { App } from "src/App.jsx";

class Util {
	static date = Date.now();
}

console.log('date', Util.date)

const post = new Post('Post');
console.log('post', post.toString())
console.log('json', json)

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
