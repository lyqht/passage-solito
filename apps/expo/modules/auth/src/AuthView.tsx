import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { AuthViewProps } from './Auth.types';

const NativeView: React.ComponentType<AuthViewProps> =
  requireNativeViewManager('Auth');

export default function AuthView(props: AuthViewProps) {
  return <NativeView {...props} />;
}
