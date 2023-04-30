export const jwtConfig = {
  global: true,
  secret: 'secret',
  signOptions: { expiresIn: `60s` },
};
