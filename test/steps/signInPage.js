import { Then } from 'cucumber';

Then(/^I am taken to the sign in page$/,
    () => expect(browser.getUrl()).to.match(/\/signin$/)
);