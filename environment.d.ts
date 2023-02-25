interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'ci' | 'production'
  readonly PORT: string
}

declare namespace NodeJS {
  type ProcessEnv = EnvironmentVariables
}
