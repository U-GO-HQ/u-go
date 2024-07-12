import React from 'react';
import { Stack } from 'expo-router';

function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='chat'
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
    </Stack>
  );
}

export default ChatLayout;
