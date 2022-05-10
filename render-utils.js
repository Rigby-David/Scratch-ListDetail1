export function renderTool(tool) {
    const div = document.createElement('div');
    div.classList.add('tool');

    const img = document.createElement('img');
    img.src = tool.image;

    const h1 = document.createElement('h1');
    h1.textContent = tool.name;

    const p = document.createElement('p');
    p.textContent = `The ${tool.name} has a digging factor of ${tool.dig} and a durability factor of ${tool.durability}`;

    const h2 = document.createElement('h2');
    h2.textContent = 'Perks';

    const ul = document.createElement('ul');
    for (let perk of tool.perks) {
        const li = document.createElement('li');
        li.textContent = perk;
        ul.append(li);
    }

    div.append(img, h1, p, h2, ul);
    return div;
}