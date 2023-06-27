import { H1 } from 'app/design/typography';
import { View } from 'react-native';

export function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <H1>
        Login
      </H1>
    </View>
  )
}
