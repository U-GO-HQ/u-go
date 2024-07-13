import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Settings = () => {
  return (
    <View className='flex-1 justify-center items-center gap-4'>
      <Text>Settings Page</Text>
      <Link href='/' className='underline'>
        Home
      </Link>
      <Link href='/chat' className='underline'>
        Chat
      </Link>
      <Link href='/sign-up' className='underline'>
        Sign Up
      </Link>
      <Link href='/log-in' className='underline'>
        Log In
      </Link>
    </View>
  );
};

export default Settings;
