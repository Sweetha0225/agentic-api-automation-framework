class UsersData {
    /**
     * Returns a known user email for testing.
     * Note: This should be a valid, existing user in the target environment.
     */
    getKnownUserEmail() {
        return 'user@example.com'; // Per spec example, replace if needed for the environment
    }
}

module.exports = new UsersData();
