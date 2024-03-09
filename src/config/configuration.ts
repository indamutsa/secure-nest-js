interface Configuration {
  DATABASE_URL: string;
  JWTSECRET: string;
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
}

export default (): Configuration => ({
  DATABASE_URL: process.env.DATABASE_URL,
  JWTSECRET: process.env.JWTSECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
});
