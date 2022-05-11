// export function renderTool(tool) {
//     const div = document.createElement('div');
//     div.classList.add('tool');

//     const a = document.createElement('a');
//     a.href = `./tools/?id=${tool.id}`;

//     const img = document.createElement('img');
//     img.src = tool.image;

//     const h1 = document.createElement('h1');
//     h1.textContent = tool.name;

//     const p = document.createElement('p');
//     p.textContent = `The ${tool.name} has a digging factor of ${tool.dig} and a durability factor of ${tool.durability}`;

//     const h2 = document.createElement('h2');
//     h2.textContent = 'Perks';

//     const ul = document.createElement('ul');
//     for (let perk of tool.perks) {
//         const li = document.createElement('li');
//         li.textContent = perk;
//         ul.append(li);
//     }

//     a.append(img, h1, p, h2, ul);
//     div.append(a);
//     return div;
// }
export function renderTool(tool) {

    const toolDiv = document.createElement('div');
    const newEl = document.createElement('a');
    const imageEl = document.createElement('img');
    const textEl = document.createElement('p');

    newEl.classList.add('tool');

    imageEl.src = tool.image;

    textEl.textContent = `${tool.name} ${tool.dig} ${tool.durability}`;

    newEl.href = `./detail-page/index.html?id=${tool.id}`;

    toolDiv.append(imageEl, textEl);

    newEl.append(toolDiv);

    return newEl;
}

export function findById(id, data) {
    return data.find((item) => item.id === id);
}