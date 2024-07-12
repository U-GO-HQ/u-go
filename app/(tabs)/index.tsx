import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View className='flex-1 justify-center items-center flex-col gap-4'>
      <Text>Home Page</Text>
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

export default Home;
