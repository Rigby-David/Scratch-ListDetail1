// import functions and grab DOM elements
import { tools } from './tools.js';
import { renderTool } from './render-data-utils.js';
// let state
const toolListEl = document.getElementById('tools');

function displayTools() {
    for (let tool of tools) {
        const toolDiv = renderTool(tool);
        toolListEl.append(toolDiv);
    }
}  

displayTools();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
