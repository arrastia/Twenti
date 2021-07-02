import { isObject, isUndefined } from './CoreUtils';

const parseURL = ({ isRoute = false, url = '', urlParams = {} }) => {
  let cUrl = url;

  if (isObject(urlParams)) {
    Object.keys(urlParams).forEach(key => {
      if (isUndefined(urlParams[key])) {
        let index = cUrl.indexOf(`{:${key}}`);

        while (cUrl.charAt(index) !== '&' && cUrl.charAt(index) !== '?' && index > 0) index--;

        if (index === 0) return;

        let min = index;
        let max = cUrl.indexOf(`{:${key}}`) + `{:${key}}`.length;

        if (cUrl.charAt(min) === '?') {
          min++;
          max++;
        }

        cUrl = cUrl.substr(0, min) + cUrl.substr(max);
      } else {
        cUrl = cUrl.replace(!isRoute ? `{:${key}}` : `:${key}`, urlParams[key]);
      }
    });
  }

  return cUrl;
};

export const HTTPUtils = { parseURL };
