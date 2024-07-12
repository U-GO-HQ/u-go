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
    </View>
  );
};

export default Settings;
