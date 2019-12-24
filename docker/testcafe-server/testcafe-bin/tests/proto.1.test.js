import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:3000/`;

var secs_to_delay = 1;
var timeout_max = 100000;

const resultLabel = Selector('#result_lbl').withText((secs_to_delay * 1000).toString()).with({ visibilityCheck: true });

test('N sec delay', async t => {
    await t
        .typeText('#num_of_years', secs_to_delay.toString())
        .click('#search_btn');
    await t
        .expect(resultLabel.exists, '', { timeout: timeout_max })
        .ok({ timeout: timeout_max });
});