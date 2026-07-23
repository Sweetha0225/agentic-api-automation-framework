const PLUGINS_ENDPOINTS = {
    GET_ALL: '/search/unified/search/entity?types=plugins&pageNumber=0&pageSize=15',
    DOWNLOAD_VSCODE: '/admin/component?componentName=VsCode&email=sweetha.s@ascendion.com',
    DOWNLOAD_VISUAL_STUDIO: '/admin/component?componentName=Visual%20Studio&email=sweetha.s@ascendion.com',
    DOWNLOAD_ANDROID_STUDIO: '/admin/component?componentName=Android%20Studio&email=sweetha.s@ascendion.com',
    DOWNLOAD_ECLIPSE: '/admin/component?componentName=Eclipse&email=sweetha.s@ascendion.com',
    DOWNLOAD_INTELLIJ: '/admin/component?componentName=Intellij&email=sweetha.s@ascendion.com',
    DOWNLOAD_PYCHARM: '/admin/component?componentName=PyCharm&email=sweetha.s@ascendion.com'
};

module.exports = PLUGINS_ENDPOINTS;
