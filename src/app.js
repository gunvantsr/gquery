import { Gquery } from "./lib/gquery.js";

const $ = new Gquery();



const helloElement = document.getElementById('hello');
const g = document.getElementById('g')

$.click(helloElement);
$.css(helloElement, 'color', 'green')
$.css(g, 'backgroundColor', 'red')
$.css(g, 'fontSize', '100px')
