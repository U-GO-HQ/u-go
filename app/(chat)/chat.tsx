import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Chat = () => {
  return (
    <View className='flex-1 items-center justify-center gap-4'>
      <Text>Chat Page</Text>
      <Link href='/' className='underline'>
        Home
      </Link>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
