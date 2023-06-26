import { H1, P } from 'app/design/typography'
import { View } from 'app/design/view'
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import { MotiPressable } from 'moti/interactions'
import { PassageUser } from '@passageidentity/passage-elements/passage-user';

async function logoutUser() {
  const user = new PassageUser()
  const signedOut = await user.signOut()
  if (signedOut) {
    window.location.href = '/'
  }
}

export function DashboardScreen() {
  const { username } = useCurrentUser()
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Dashboard</H1>
      <View className="max-w-xl">
        <P className="text-center">
          Hello there {username}, have a good day ahead!
        </P>
        <MotiPressable
          onPress={() => {}}
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <P className="text-center">Logout</P>
        </MotiPressable>
      </View>
    </View>
  )
}
