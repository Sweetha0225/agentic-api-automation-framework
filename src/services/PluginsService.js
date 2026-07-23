const BaseService = require('./BaseService');
const client = require('../api/plugins/PluginsClient');
const validator = require('../api/plugins/PluginsValidator');

class PluginsService extends BaseService {
    constructor() {
        super(client);
    }

    async getAll() {
        const response = await this.client.getAll();
        return await validator.validateGetAll(response);
    }

    async downloadVSCode() {
        const response = await this.client.downloadVSCode();
        return await validator.validateDownloadVSCode(response);
    }

    async downloadVisualStudio() {
        const response = await this.client.downloadVisualStudio();
        return await validator.validateDownloadVisualStudio(response);
    }

    async downloadAndroidStudio() {
        const response = await this.client.downloadAndroidStudio();
        return await validator.validateDownloadAndroidStudio(response);
    }

    async downloadEclipse() {
        const response = await this.client.downloadEclipse();
        return await validator.validateDownloadEclipse(response);
    }

    async downloadIntellij() {
        const response = await this.client.downloadIntellij();
        return await validator.validateDownloadIntellij(response);
    }

    async downloadPyCharm() {
        const response = await this.client.downloadPyCharm();
        return await validator.validateDownloadPyCharm(response);
    }
}

module.exports = new PluginsService();
