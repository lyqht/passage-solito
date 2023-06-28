import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Auth.web.ts
// and on native platforms to Auth.ts
import AuthModule from './src/AuthModule';
import AuthView from './src/AuthView';
import { ChangeEventPayload, AuthViewProps } from './src/Auth.types';

// Get the native constant value.
export const PI = AuthModule.PI;

export function hello(): string {
  return AuthModule.hello();
}

export async function setValueAsync(value: string) {
  return await AuthModule.setValueAsync(value);
}

const emitter = new EventEmitter(AuthModule ?? NativeModulesProxy.Auth);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { AuthView, AuthViewProps, ChangeEventPayload };
