import { Post } from './post';
import 'styles/styles.css'
import 'styles/main.scss'
import json from 'assets/json.json'

class Util {
	static date = Date.now();
}

console.log('date', Util.date)

const post = new Post('Post');
console.log('post', post.toString())
console.log('json', json)
