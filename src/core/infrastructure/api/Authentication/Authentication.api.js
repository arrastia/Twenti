import { authenticationWebConfig } from '@configuration/www/Authentication';

import { HTTPRequester } from '@core/infrastructure/_tools/HTTPRequester';
import { HTTPUtils } from '@core/infrastructure/_tools/Utils/HTTPUtils';

const { isAuthorized } = authenticationWebConfig;
const { parseURL } = HTTPUtils;

const checkAuthorization = async email => await HTTPRequester.post({ url: parseURL({ url: isAuthorized }), data: { email } });

export const apiAuthentication = { checkAuthorization };
