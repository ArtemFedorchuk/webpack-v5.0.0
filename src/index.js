import { Post } from './post';
import 'styles/styles.css'
import 'styles/main.scss'
import json from 'assets/json.json'

const post = new Post('Post');
console.log('post', post.toString())
console.log('json', json)
