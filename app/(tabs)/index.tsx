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
} from 'react-native';
import React, { useState } from 'react';
import {
  background_variant_1,
  background_variant_2,
  background_variant_1_light,
  background_variant_3,
  background_variant_4,
  background_variant_6,
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

const Home = () => {
  const [showHeaderSearchTab, setShowHeaderSearchTab] = useState(false);
  const [showHeaderNavMenu, setShowHeaderNavMenu] = useState(false);

  return (
    <SafeAreaView
      className='flex flex-1 justify-center items-center flex-col w-full'
      style={{ backgroundColor: background_variant_1_light }}
    >
      {/* nav-menu-overlay */}
      <Pressable
        onPress={() => {
          setShowHeaderNavMenu(false);
        }}
        className={`nav-menu-overlay flex-1 h-[100%] w-full bg-transparent
      absolute top-0 left-0 z-40 ${showHeaderNavMenu ? 'flex' : 'hidden'}`}
      >
        {/* transparent nav-menu for hiding the nav-menu */}
      </Pressable>
      {/* nav-menu */}
      <View
        className={`nav-menu absolute right-3 top-[120px] z-50 px-4 pb-4 gap-y-4 
          rounded-[10px] ${showHeaderNavMenu ? 'flex' : 'hidden'}`}
        style={{ backgroundColor: background_variant_1_light }}
      >
        <Pressable
          onPress={() => {
            router.replace('/settings');
            setShowHeaderNavMenu(false);
          }}
        >
          <Text
            style={{
              color: text_variant_1,
              fontFamily: 'font_300',
              fontSize: 12,
            }}
          >
            Settings
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.replace('/chat/starred-messages');
            setShowHeaderNavMenu(false);
          }}
          className='border-t border-b border-gray-400 py-4'
        >
          <Text
            style={{
              color: text_variant_1,
              fontFamily: 'font_300',
              fontSize: 12,
            }}
          >
            Starred Messages
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.replace('/profile');
            setShowHeaderNavMenu(false);
          }}
        >
          <Text
            style={{
              color: text_variant_1,
              fontFamily: 'font_300',
              fontSize: 12,
            }}
          >
            Profile
          </Text>
        </Pressable>
      </View>
      <View
        className='flex-1 relative w-full pt-[55px]'
        style={{ backgroundColor: background_variant_1_light }}
      >
        <View
          className='header absolute 
          left-0 px-3 pt-2 pb-2 w-full top-[25px] z-20'
          style={{ backgroundColor: background_variant_1_light }}
        >
          <View
            className={`flex items-center flex-row justify-between pt-3 ${
              showHeaderSearchTab && 'hidden'
            }`}
          >
            <Text
              className='text-[30px]'
              style={{ fontFamily: 'font_700', color: text_variant_1 }}
            >
              u-go
            </Text>
            <View className='flex flex-row items-center gap-[25px]'>
              <Ionicons
                name='camera-outline'
                size={22}
                color={text_variant_1}
              />
              <Pressable onPress={() => setShowHeaderSearchTab(true)}>
                <Ionicons
                  name='search-outline'
                  size={22}
                  color={text_variant_1}
                />
              </Pressable>
              <Pressable
                className='w-[40px] h-[40px] rounded-full flex items-center justify-center'
                style={{ backgroundColor: background_variant_6 }}
                onPress={() => setShowHeaderNavMenu(true)}
              >
                <Ionicons
                  name='grid-outline'
                  size={18}
                  color={text_variant_3}
                />
              </Pressable>
            </View>
          </View>
          <Pressable
            onPress={() => setShowHeaderSearchTab(false)}
            className={`hidden z-20 absolute left-3 top-[32px] ${
              showHeaderSearchTab && 'flex'
            }`}
          >
            <Ionicons
              name='arrow-back-outline'
              size={22}
              color={text_variant_1}
            />
          </Pressable>
          <View
            className='pl-[35px]'
            style={{ backgroundColor: `${background_variant_1_light}` }}
          >
            <TextInput
              className={`hidden z-10 top-0 left-0 mt-[15px] rounded-full w-full ${
                showHeaderSearchTab && 'flex'
              }`}
              placeholder='find a chat'
              style={{
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 7,
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
        </View>

        <ScrollView
          className='flex flex-1 min-h-screen'
          style={{
            backgroundColor: background_variant_1,
            paddingTop: Platform.OS === 'android' ? 65 : 0,
          }}
        >
          {/* <View
          className='flex flex-1'
          style={{ backgroundColor: background_variant_1 }}
        > */}

          <View className='chat-types-rack flex flex-row gap-4 px-3'>
            <Text
              className='text-[12px] rounded-full px-4 py-2'
              style={{
                backgroundColor: background_variant_1_light,
                color: text_variant_1,
                fontFamily: 'font_200',
              }}
            >
              All
            </Text>
            <Text
              className='text-[12px] rounded-full px-4 py-2'
              style={{
                backgroundColor: background_variant_1_light,
                color: text_variant_1,
                fontFamily: 'font_200',
              }}
            >
              Unread
            </Text>
            {/* <Text
            className='text-[12px] rounded-full px-4 py-2'
            style={{
              backgroundColor: background_variant_1_light,
              color: text_variant_1,
              fontFamily: 'font_200',
            }}
          >
            Pinned
          </Text> */}
          </View>
          <View className='chats-wrapper mt-4 w-full pb-[200px]'>
            <Link href='/chat/123' asChild>
              <Pressable className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
                <Image
                  style={{
                    width: 50,
                    objectFit: 'contain',
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={mockAvatar2}
                  // resizeMethod='scale'
                  accessibilityLabel='user avatar'
                />
                <View className='chat-info-wrapper flex justify-between'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Sam Kim
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    Hello sam, how are your doing tod...
                  </Text>
                </View>
                <View
                  className='chat-count-wrapper min-w-[22px] absolute right-[12px] top-[22px] h-[22px] rounded-full 
              px-[3px] py-[3px] text-center'
                  style={{
                    backgroundColor: background_variant_2,
                  }}
                >
                  <Text
                    style={{
                      color: text_variant_2,
                      fontFamily: 'font_700',
                      fontSize: 11,
                    }}
                  >
                    99+
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild>
              <Pressable className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
                <Image
                  style={{
                    width: 50,
                    objectFit: 'contain',
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={mockAvatar1}
                  // resizeMethod='scale'
                  accessibilityLabel='user avatar'
                />
                <View className='chat-info-wrapper flex justify-between'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    jessica Mike
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    Hello sam, how are your doing tod...
                  </Text>
                </View>
                <Text
                  className='chat-count-wrapper min-w-[22px] absolute right-[12px] top-[22px] h-[22px] rounded-full 
              px-[3px] py-[3px] text-center'
                  style={{
                    backgroundColor: background_variant_2,
                  }}
                >
                  <Text
                    style={{
                      color: text_variant_2,
                      fontFamily: 'font_700',
                      fontSize: 11,
                    }}
                  >
                    5
                  </Text>
                </Text>
              </Pressable>
            </Link>
          </View>
          {/* </View> */}
        </ScrollView>
        <Link href='/user-contacts' asChild>
          <Pressable
            className='add-chat-button absolute bottom-[15px] right-[15px] 
        flex items-center justify-center w-[60px] h-[60px] rounded-full'
            style={{ backgroundColor: background_variant_2 }}
          >
            <Ionicons name='chatbubbles' size={25} color={text_variant_2} />
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safePadding: {
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor: background_variant_1,
  },
});
