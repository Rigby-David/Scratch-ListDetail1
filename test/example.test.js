// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderTool } from '../render-utils';

const test = QUnit.test;

test('renderTool renders a div with tool details', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="tool"><img src="./assets/shovel.jpg"><h1>Spade</h1><p>The Spade has a digging factor of 7 and a durability factor of 9</p><h2>Perks</h2><ul><li>Easy to use</li><li>Versatile</li><li>Decent at killing zombies</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const Spade = {
        id: '1',
        name: 'Spade',
        dig: 7, 
        durability: 9, 
        image: './assets/shovel.jpg'
    };
    const actual = renderTool(Spade);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
