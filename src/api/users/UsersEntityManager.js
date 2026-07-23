const BaseEntityManager = require('../../core/entity/BaseEntityManager');
const client = require('./UsersClient');

class UsersEntityManager extends BaseEntityManager {
    constructor() {
        super(client);
    }

    // No entity management (create/delete) is needed for the getByEmail action.
    // This file is created to maintain module structure and for future actions.
}

module.exports = new UsersEntityManager();
