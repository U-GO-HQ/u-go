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

const Profile = () => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [showAboutInput, setShowAboutInput] = useState(false);

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <KeyboardAvoidingView
      className='flex flex-1 justify-center items-center flex-col w-full min-h-screen'
      style={{ backgroundColor: background_variant_1_light }}
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 45 : 0}
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
              style={{fontFamily: 'font_500' }}
            >
              online
            </Text>
            <Text
              className='text-[11px] text-red-500 hidden'
              style={{fontFamily: 'font_500' }}
            >
              offline
            </Text>
            <Text
              className='text-[11px]'
              style={{color: text_variant_3, fontFamily: 'font_500' }}
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
          <View className='messages-area px-3 flex flex-col gap-y-6 mb-16 relative z-10'>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
              style={{ backgroundColor: background_variant_1_light }}
            >
              <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
                Hello Judith, How you're doing fine?
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
              style={{ backgroundColor: background_variant_4 }}
            >
              <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
                Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
              style={{ backgroundColor: background_variant_1_light }}
            >
              <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
                Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, maxime voluptatum?
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
              style={{ backgroundColor: background_variant_4 }}
            >
              <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
                I'm doing well, thanks. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla aperiam eveniet eos.
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
              style={{ backgroundColor: background_variant_1_light }}
            >
              <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
                Hello Judith, How you're doing fine?
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
              style={{ backgroundColor: background_variant_4 }}
            >
              <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
                Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
              style={{ backgroundColor: background_variant_1_light }}
            >
              <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
                Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, maxime voluptatum?
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
              style={{ backgroundColor: background_variant_4 }}
            >
              <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
                I'm doing well, thanks. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla aperiam eveniet eos.
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
              style={{ backgroundColor: background_variant_1_light }}
            >
              <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
                Hello Judith, How you're doing fine?
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
              style={{ backgroundColor: background_variant_4 }}
            >
              <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
                Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
              style={{ backgroundColor: background_variant_1_light }}
            >
              <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
                Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, maxime voluptatum?
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
              style={{ backgroundColor: background_variant_4 }}
            >
              <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
                I'm doing well, thanks. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla aperiam eveniet eos.
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
              style={{ backgroundColor: background_variant_1_light }}
            >
              <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
                Hello Judith, How you're doing fine?
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
              style={{ backgroundColor: background_variant_4 }}
            >
              <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
                Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
              style={{ backgroundColor: background_variant_1_light }}
            >
              <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
                Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, maxime voluptatum?
              </Text>
            </View>
            <View
              className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
              style={{ backgroundColor: background_variant_4 }}
            >
              <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
                I'm doing well, thanks. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla aperiam eveniet eos.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          className='px-3 py-2 absolute bottom-0 left-0 flex-row 
      z-20 w-full'
          style={{ backgroundColor: background_variant_1 }}
        >
          <View className='w-[80%] mr-auto'>
            <TextInput
              className='rounded-full'
              placeholder='type your message'
              style={{
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 12,
                backgroundColor: `${background_variant_3}`,
                borderRadius: 7,
                color: `${text_variant_1}`,
                fontSize: 14,
                fontFamily: 'font_400',
              }}
              placeholderTextColor={text_variant_1} // Set the placeholder color here
              // value={loginForm.email}
              onChangeText={(text) => {
                // console.log('email input in progress...');
                // setLoginForm({
                //   ...loginForm,
                //   email: text,
                // });
              }}
            />
          </View>
          <View className='w-[10%] mr-3'>
            <Pressable
              className='w-[50px] h-[50px] flex flex-row items-center justify-center rounded-full mr-4'
              style={{ backgroundColor: background_variant_2 }}
              onPress={() => router.back()}
            >
              <Ionicons name='send-outline' size={22} color={text_variant_2} />
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Profile;

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
