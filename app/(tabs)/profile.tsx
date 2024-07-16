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
import {
  background_variant_1,
  background_variant_2,
  background_variant_3,
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

  return (
    <KeyboardAvoidingView
      className='flex flex-1 justify-center items-center flex-col w-full'
      style={{ backgroundColor: background_variant_1 }}
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 45 : 0}
    >
      <ScrollView
        className='flex flex-1 w-full min-h-screen'
        style={styles.safePadding}
      >
        {/* <View
          className='flex flex-1 px-3'
          style={{ backgroundColor: background_variant_1 }}
        > */}
        <View
          className='header flex flex-row justify-between items-center w-full 
        px-3 py-3 mb-[20px]'
          style={{ backgroundColor: background_variant_1_light }}
        >
          <View className='flex flex-row gap-x-8 items-center'>
            <Pressable onPress={() => router.back()}>
              <Ionicons
                name='arrow-back-outline'
                size={22}
                color={text_variant_1}
              />
            </Pressable>
            <Text
              className='text-[18px]'
              style={{ fontFamily: 'font_500', color: text_variant_1 }}
            >
              Profile
            </Text>
          </View>
          {/* <Ionicons name='grid-outline' size={22} color={text_variant_1} /> */}
        </View>
        <View className='user-avatar-wrapper relative flex flex-row justify-center w-full mb-10 mt-6'>
          <View>
            <Image
              style={{
                width: 100,
                objectFit: 'contain',
                height: 100,
                borderRadius: 50,
              }}
              source={mockAvatar1}
              // resizeMethod='scale'
              accessibilityLabel='user avatar'
            />
            <View
              className='absolute bottom-[5px] right-0 w-[30px] h-[30px] rounded-full flex flex-row 
            items-center justify-center'
              style={{ backgroundColor: background_variant_2 }}
            >
              <Ionicons
                name='camera-outline'
                size={22}
                color={text_variant_2}
              />
            </View>
          </View>
        </View>
        <View className='other-updates-section flex gap-y-4 px-3 mb-[100px]'>
          <View className='username flex relative flex-row gap-4'>
            <Ionicons name='person-outline' size={22} color={text_variant_1} />
            <View className='user-details-wrapper flex justify-between w-full'>
              <Text
                className='user-name text-[12px] mb-3'
                style={{ color: text_variant_1, fontFamily: 'font_500' }}
              >
                Name
              </Text>
              <View
                className={`${showNameInput ? 'flex' : 'hidden'} mb-[15px]`}
              >
                <TextInput
                  className='px-[15px]'
                  placeholder='add your new user name'
                  style={{
                    width: '80%',
                    paddingHorizontal: 15,
                    paddingVertical: 12,
                    backgroundColor: `${background_variant_3}`,
                    borderRadius: 7,
                    color: `${text_variant_1}`,
                    fontSize: 12,
                    fontFamily: 'font_400',
                  }}
                  multiline={true}
                  placeholderTextColor={text_variant_1} // Set the placeholder color here
                  // value='Andrew James Okpainmo'
                  // value={loginForm.password}
                  // onChangeText={(text) => {
                  //   // console.log('password input in progress...');

                  //   setLoginForm({
                  //     ...loginForm,
                  //     password: text,
                  //   });
                  // }}
                />
                <TouchableOpacity
                  onPress={() => setShowNameInput(false)}
                  className='px-4 py-2 text-[12px] mt-3 w-[100px] rounded-[10px]'
                  style={{
                    backgroundColor: background_variant_2,
                  }}
                >
                  <Text
                    className='text-center'
                    style={{ fontFamily: 'font_500' }}
                  >
                    Update
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                className={`user-name text-[16px] ${
                  showNameInput ? 'hidden' : 'flex'
                } mb-[15px]`}
                style={{ color: text_variant_1, fontFamily: 'font_600' }}
              >
                Sam Kim
              </Text>
              <Text
                className='user-status text-[11px] mt-[3px] w-[80%] flex flex-wrap'
                style={{ color: text_variant_1, fontFamily: 'font_200' }}
              >
                This is your u-go username, and will be visible to your u-go
                contacts.
              </Text>
            </View>
            <Pressable
              onPress={() => setShowNameInput(true)}
              className='absolute right-3 z-20'
              // style={{ backgroundColor: background_variant_2 }}
            >
              <Ionicons
                className='relative z-10'
                name='create-outline'
                size={22}
                color={text_variant_3}
              />
            </Pressable>
          </View>
          <View className='about-section relative flex flex-row gap-4'>
            <Ionicons
              name='alert-circle-outline'
              size={22}
              color={text_variant_1}
            />

            <View className='user-details-wrapper flex justify-between w-full'>
              <Text
                className='user-name text-[12px] mb-3'
                style={{ color: text_variant_1, fontFamily: 'font_500' }}
              >
                About
              </Text>
              <Text
                className={`user-status mb-[15px] text-[12px] w-[80%] ${
                  showAboutInput ? 'hidden' : 'flex'
                }`}
                style={{ color: text_variant_1, fontFamily: 'font_200' }}
              >
                This is your u-go username, and will be visible to your u-go
                contacts, this is your u-go username, and will be visible to
                your u-go contacts.
              </Text>
              <View
                className={`about-update-section ${
                  showAboutInput ? 'flex' : 'hidden'
                } mb-[15px]`}
              >
                <TextInput
                  placeholder='write something about yourself'
                  style={{
                    width: '80%',
                    height: 100,
                    paddingHorizontal: 15,
                    paddingVertical: 12,
                    backgroundColor: `${background_variant_3}`,
                    borderRadius: 7,
                    color: `${text_variant_1}`,
                    fontSize: 12,
                    fontFamily: 'font_400',
                  }}
                  multiline={true}
                  placeholderTextColor={text_variant_1} // Set the placeholder color here
                  // value='This is your u-go username, and will be visible to your u-go
                  // contacts, this is your u-go username, and will be visible to
                  // your u-gor contacts.'
                  // value={loginForm.password}
                  // onChangeText={(text) => {
                  //   // console.log('password input in progress...');

                  //   setLoginForm({
                  //     ...loginForm,
                  //     password: text,
                  //   });
                  // }}
                />
                <Pressable
                  onPress={() => setShowAboutInput(false)}
                  className='px-4 py-2 text-[12px] mt-3 w-[100px] rounded-[10px]'
                  style={{
                    backgroundColor: background_variant_2,
                  }}
                >
                  <Text
                    className='text-center'
                    style={{ fontFamily: 'font_500' }}
                  >
                    Update
                  </Text>
                </Pressable>
              </View>
            </View>
            <Pressable
              onPress={() => setShowAboutInput(true)}
              className='absolute right-3 z-20'
            >
              <Ionicons
                className='relative z-10'
                name='create-outline'
                size={22}
                color={text_variant_3}
              />
            </Pressable>
          </View>
          <View className='phone flex flex-row gap-4'>
            <Ionicons name='call-outline' size={22} color={text_variant_1} />
            <View className='user-details-wrapper flex justify-between w-full'>
              <Text
                className='user-name text-[12px] mb-3'
                style={{ color: text_variant_1, fontFamily: 'font_500' }}
              >
                Phone
              </Text>
              <Text
                className='user-name text-[12px]'
                style={{ color: text_variant_1, fontFamily: 'font_600' }}
              >
                +234 90 5373 9194
              </Text>
            </View>
          </View>
          <View className='phone flex flex-row gap-4'>
            <Ionicons name='mail-outline' size={22} color={text_variant_1} />
            <View className='user-details-wrapper flex justify-between w-full'>
              <Text
                className='user-name text-[12px] mb-3'
                style={{ color: text_variant_1, fontFamily: 'font_500' }}
              >
                Email
              </Text>
              <Text
                className='user-name text-[12px]'
                style={{ color: text_variant_1, fontFamily: 'font_600' }}
              >
                okpainmoandrew@gmail.com
              </Text>
            </View>
          </View>
        </View>

        {/* </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safePadding: {
    paddingTop: Platform.OS === 'android' ? 45 : 0,
    backgroundColor: background_variant_1,
  },
});
