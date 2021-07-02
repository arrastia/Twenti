import { apiAuthentication } from '@core/infrastructure/api/Authentication/Authentication.api';

const checkAuthorization = async email => await apiAuthentication.checkAuthorization(email);

export const ApiAuthenticationRepository = { checkAuthorization };
