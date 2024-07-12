import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const LogIn = () => {
  return (
    <View className='flex-1 items-center justify-center gap-4'>
      <Text>LogIn Page</Text>
      <Link href='/' className='underline'>
        Home
      </Link>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({});
