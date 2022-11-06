interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'ci' | 'production';
}

declare namespace NodeJS {
  type ProcessEnv = EnvironmentVariables;
}
