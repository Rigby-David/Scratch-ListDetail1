// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { tools } from '../tools.js';
import { renderTool } from '../render-data-utils.js';

const test = QUnit.test;

test('renderTool for home page items', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a class="tool" href="./detail-page/index.html?id=1"><div><img src="./assets/shovel.jpg"><p>Spade 7 9</p></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = renderTool(tools[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
