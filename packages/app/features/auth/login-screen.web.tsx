import { useEffect } from 'react';
import { View } from 'react-native';

export function LoginScreen() {
  useEffect(()=>{
    require('@passageidentity/passage-elements/passage-auth');
}, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <passage-auth
        app-id={process.env.NEXT_PUBLIC_PASSAGE_APP_ID}
      ></passage-auth>
    </View>
  )
}
