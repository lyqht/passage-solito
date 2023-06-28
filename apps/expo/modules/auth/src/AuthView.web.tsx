import * as React from 'react';

import { AuthViewProps } from './Auth.types';

export default function AuthView(props: AuthViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
