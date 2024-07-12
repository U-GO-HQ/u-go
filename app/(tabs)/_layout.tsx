import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcons } from '@/constants/Icons';
import {
  background_variant_1,
  background_variant_2,
  text_variant_1,
} from '@/constants/colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: `${background_variant_2}`,
        tabBarInactiveTintColor: `${text_variant_1}`,
        // tabBarShowLabel: false,
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {
          paddingTop: 5,
          paddingBottom: 7,
          // fontFamily: 'Nunito_600SemiBold',
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarStyle: {
          backgroundColor: `${background_variant_1}`,
          borderTopWidth: 1,
          borderTopColor: '#232533',
          minHeight: 55,
          // paddingVertical: 10,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcons
              name={
                focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'
              }
              color={color}
              size={23}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcons
              name={focused ? 'cog' : 'cog-outline'}
              color={color}
              size={27}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'You',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              color={color}
              size={27}
            />
          ),
        }}
      />
    </Tabs>
  );
}
