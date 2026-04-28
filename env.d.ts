interface EnvironmentVariables {
  readonly PORT: string
  readonly NODE_ENV: 'development' | 'test' | 'production'
}

declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {}
}
