import { ApiAuthenticationRepository } from '@core/infrastructure/repositories/Authentication/Authentication.api.repository';

import { CheckAuthorization } from './CheckAuthorization';

export const AuthenticationService = {
  checkAuthorization: CheckAuthorization({ ApiAuthenticationRepository })
};
