import { tools } from '../tools.js';
import { findById } from '../utils.js';

const toolName = document.getElementById('tool-name');
const toolImage = document.getElementById('tool-image');
const toolDig = document.getElementById('tool-dig');
const toolDurability = document.getElementById('tool-durability');
const toolPerks = document.getElementById('tool-perks');

const params = new URLSearchParams(window.location.search);
const tool = findById(params.get('id'), tools);
toolName.textContent = tool.name;
toolImage.src = `../assets/${tool.image}.jpg`;
toolDig.textContent = tool.dig;
toolDurability.textContent = tool.durability;
toolPerks.textContent = tool.perks;