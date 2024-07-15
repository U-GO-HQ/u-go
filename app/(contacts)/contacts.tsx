import {
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
// import { Image } from 'expo-image';
import {
  background_variant_1,
  background_variant_2,
  background_variant_3,
  background_variant_4,
  background_variant_1_light,
  text_variant_1,
  text_variant_2,
  text_variant_3,
} from '@/constants/colors';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const mockAvatar1 = require('../../assets/images/img-8.jpg');
const mockAvatar2 = require('../../assets/images/img-10.png');
const mockAvatar3 = require('../../assets/images/img-11.png');
const mockAvatar4 = require('../../assets/images/img-12.png');

const Contacts = () => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [showAboutInput, setShowAboutInput] = useState(false);

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <SafeAreaView
      className='flex flex-1 justify-center items-center flex-col w-full min-h-screen'
      style={{ backgroundColor: background_variant_1_light }}
    >
      <View
        className='relative w-full flex-1 mt-[10px] pt-[60px] pb-[60px]'
        style={{ backgroundColor: background_variant_1_light }}
      >
        <View
          className='header flex items-center flex-row absolute 
          left-0 mb-[20px] px-2 pt-2 pb-2 w-full top-[40px] z-20'
          style={{ backgroundColor: background_variant_1_light }}
        >
          <Pressable onPress={() => router.back()}>
            <Ionicons
              name='arrow-back-outline'
              size={22}
              color={text_variant_1}
            />
          </Pressable>
          <View className='flex flex-row items-center gap-x-3 ml-2'>
            <Image
              style={{
                width: 40,
                objectFit: 'contain',
                height: 40,
                borderRadius: 50,
              }}
              source={mockAvatar1}
              // resizeMethod='scale'
              accessibilityLabel='user avatar'
            />
            {/* <Image
                style={styles.image}
                source={mockAvatar4}
                // source='https://picsum.photos/seed/696/3000/2000'
                placeholder={{ blurhash }}
                contentFit='cover'
                transition={1000}
              /> */}
            <View className='chat-info-wrapper flex justify-between'>
              <Text
                className='text-[16px]'
                style={{ color: text_variant_1, fontFamily: 'font_600' }}
              >
                Judith Ham
              </Text>
              <Text
                className='text-[11px] text-green-400 hidden'
                style={{ fontFamily: 'font_500' }}
              >
                online
              </Text>
              <Text
                className='text-[11px] text-red-500 hidden'
                style={{ fontFamily: 'font_500' }}
              >
                offline
              </Text>
              <Text
                className='text-[11px]'
                style={{ color: text_variant_3, fontFamily: 'font_500' }}
              >
                typing...
              </Text>
            </View>
          </View>
        </View>
        <ScrollView
          className='flex-1 w-full mt-[40px] pt-[20px] relative z-10'
          style={{ backgroundColor: background_variant_1 }}
        >
          <View className='contacts-area px-3 flex flex-col gap-y-6 mb-16 relative z-10'></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  safePadding: {
    paddingTop: Platform.OS === 'android' ? 60 : 0,
    backgroundColor: background_variant_1,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
