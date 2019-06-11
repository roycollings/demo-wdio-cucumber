import home from '../pages/home';

import { Given, When, Then } from 'cucumber';

Given(/^I open the bbc homepage$/,
    () => browser.url('https://www.bbc.co.uk')
);

When(/^I choose to sign in from the home page$/,
    () => home.signInLink.click()
);