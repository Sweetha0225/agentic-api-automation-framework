const base = require('@playwright/test');
const usersService = require('../../src/services/users/UsersService');

exports.test = base.test.extend({
    usersService: async ({}, use) => {
        await usersService.initialize();
        await use(usersService);
        await usersService.dispose();
    }
});

exports.expect = base.expect;
