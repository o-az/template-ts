interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'test' | 'production'
  readonly PORT: string
}

declare module NodeJS {
  type ProcessEnv = EnvironmentVariables
}
