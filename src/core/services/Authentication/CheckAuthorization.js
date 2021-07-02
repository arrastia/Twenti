export const CheckAuthorization =
  ({ ApiAuthenticationRepository }) =>
  async email =>
    ApiAuthenticationRepository.checkAuthorization(email);
