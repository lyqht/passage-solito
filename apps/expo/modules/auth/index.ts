// Import the native module. On web, it will be resolved to Auth.web.ts
// and on native platforms to Auth.ts
import AuthModule from './src/AuthModule';

export function hello(): string {
  return AuthModule.hello();
}
