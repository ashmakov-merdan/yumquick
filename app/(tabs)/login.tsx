import { Login, Register } from '@/components/auth';
import Forget from '@/components/auth/forget';
import { Paragraph } from '@/shared';
import colors from '@/styles/colors';
import { AuthLayout } from '@/templates';
import { Image } from 'expo-image';
import { router, Stack } from 'expo-router';
import React, { FC, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen: FC = () => {
  const insets = useSafeAreaInsets();
  const [active, setActive] = useState<number>(0);

  return (
    <View style={{ flex: 1, backgroundColor: colors.yellowBase }}>
      <Stack.Screen
        options={{
          header: () => {
            return (
              <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <Image
                    source={require("@/assets/images/yumquick.png")}
                    style={{
                      width: 140,
                      height: 20
                    }}
                    contentFit="contain"
                  />
                  <TouchableOpacity onPress={() => router.replace("/")} style={[styles.headerButton]} hitSlop={20} activeOpacity={0.7}>
                    <Paragraph value='Skip' size={16} color={colors.orangeBase} />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }
        }}
      />
      <AuthLayout activeIndex={active}>
        <Login onActive={setActive} />
        <Register onActive={setActive} />
        <Forget onActive={setActive} />
      </AuthLayout>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.yellowBase,
    paddingBottom: 30,
    paddingHorizontal: 24,
    alignItems: "center"
  },
  headerButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: "center"
  }
})


export default LoginScreen;