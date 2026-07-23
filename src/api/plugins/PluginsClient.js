const BaseApiClient = require('../clients/BaseApiClient');
const Endpoints = require('./PluginsEndpoints');

class PluginsClient {
    constructor() {
        this.client = new BaseApiClient();
    }

    async initialize() {
        await this.client.initialize();
    }

    async dispose() {
        await this.client.dispose();
    }

    async getAll() {
        return await this.client.get(Endpoints.GET_ALL);
    }

    async downloadVSCode() {
        return await this.client.get(Endpoints.DOWNLOAD_VSCODE);
    }

    async downloadVisualStudio() {
        return await this.client.get(Endpoints.DOWNLOAD_VISUAL_STUDIO);
    }

    async downloadAndroidStudio() {
        return await this.client.get(Endpoints.DOWNLOAD_ANDROID_STUDIO);
    }

    async downloadEclipse() {
        return await this.client.get(Endpoints.DOWNLOAD_ECLIPSE);
    }

    async downloadIntellij() {
        return await this.client.get(Endpoints.DOWNLOAD_INTELLIJ);
    }

    async downloadPyCharm() {
        return await this.client.get(Endpoints.DOWNLOAD_PYCHARM);
    }
}

module.exports = new PluginsClient();
