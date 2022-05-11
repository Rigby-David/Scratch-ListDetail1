import { tools } from '../tools.js';
import { findById } from '../render-data-utils.js';

const imageEl = document.getElementById('image');
const toolName = document.getElementById('toolName');
const toolDig = document.getElementById('dig');
const toolDurability = document.getElementById('durability');

const params = new URLSearchParams(window.location.search);
const tool = findById(params.get('id'), tools);
// toolName.textContent = tool.name;
// toolImage.src = `../assets/${tool.image}.jpg`;
// toolDig.textContent = tool.dig;
// toolDurability.textContent = tool.durability;
// toolPerks.textContent = tool.perks;

imageEl.src = `.${tool.image}`;

toolName.textContent = tool.name;
toolDig.textContent = tool.dig;
toolDurability.textContent = tool.durability;