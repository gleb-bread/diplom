import * as URLHelperTypes from './types';

export const addParamsInURL = function (param: URLHelperTypes.PatloadParams) {
    const url = getUrlWithParams(param);
    setUrl(url);
};

const getUrlWithParams = function (param: URLHelperTypes.PatloadParams) {
    const URLParams = new URLSearchParams(window.location.search);

    Object.keys(param).forEach((key) => {
        URLParams.set(key, String(param[key]));
    });

    return (
        window.location.origin +
        window.location.pathname +
        '?' +
        URLParams.toString()
    );
};

const setUrl = function (url: string) {
    window.history.pushState(null, '', url);
};
