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
  const [showHeaderSearchTab, setShowHeaderSearchTab] = useState(false);

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <SafeAreaView
      className='flex flex-1 justify-center items-center flex-col w-full'
      style={{ backgroundColor: background_variant_1_light }}
    >
      <View
        className='relative w-full flex-1 pt-[50px]'
        style={{ backgroundColor: background_variant_1_light }}
      >
        <View
          className='header absolute 
          left-0 px-3 pt-2 pb-2 w-full top-[40px] z-20'
          style={{ backgroundColor: background_variant_1_light }}
        >
          <View
            className={`items-center flex-row pt-[6px] ${
              showHeaderSearchTab && 'hidden'
            }`}
          >
            <Pressable onPress={() => router.back()}>
              <Ionicons
                name='arrow-back-outline'
                size={22}
                color={text_variant_1}
              />
            </Pressable>
            <View className='flex justify-center mr-auto ml-4'>
              <Text
                className='text-[14px]'
                style={{ color: text_variant_1, fontFamily: 'font_400' }}
              >
                Select a contact to start a conversation
              </Text>

              <Text
                className='text-[10px]'
                style={{ color: text_variant_3, fontFamily: 'font_500' }}
              >
                230 contacts
              </Text>
            </View>
            <Pressable onPress={() => setShowHeaderSearchTab(true)}>
              <Ionicons
                name='search-outline'
                size={22}
                color={text_variant_1}
              />
            </Pressable>
          </View>
          <Pressable
            onPress={() => setShowHeaderSearchTab(false)}
            className={`hidden z-20 absolute left-3 top-[20px] ${
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
              className={`hidden z-10 top-[2px] left-0 rounded-full w-full ${
                showHeaderSearchTab && 'flex'
              }`}
              placeholder='search a contact'
              style={{
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 6,
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
          className='flex-1 w-full mt-[35px] pt-[20px] relative z-10'
          style={{ backgroundColor: background_variant_1 }}
        >
          <Text
            className='text-[14px] mb-3 px-3 mt-2'
            style={{ color: text_variant_1, fontFamily: 'font_400' }}
          >
            These contacts are on u-go.
          </Text>
          <View className='contacts-area flex-col mb-16 gap-y-5 w-full'>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
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
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Eslo Berkerly
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here. The status can span multiple
                    line until the ...
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
                <Image
                  style={{
                    width: 50,
                    objectFit: 'contain',
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={mockAvatar3}
                  // resizeMethod='scale'
                  accessibilityLabel='user avatar'
                />
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Sam Kim
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here. The status...
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
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
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Andrew James Okpainmo
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here.
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
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
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Eslo Berkerly
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here. The status can span multiple
                    line until the ...
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
                <Image
                  style={{
                    width: 50,
                    objectFit: 'contain',
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={mockAvatar3}
                  // resizeMethod='scale'
                  accessibilityLabel='user avatar'
                />
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Sam Kim
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here. The status...
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
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
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Andrew James Okpainmo
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here.
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
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
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Eslo Berkerly
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here. The status can span multiple
                    line until the ...
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
                <Image
                  style={{
                    width: 50,
                    objectFit: 'contain',
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={mockAvatar3}
                  // resizeMethod='scale'
                  accessibilityLabel='user avatar'
                />
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Sam Kim
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here. The status...
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
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
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Andrew James Okpainmo
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here.
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
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
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Eslo Berkerly
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here. The status can span multiple
                    line until the ...
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
                <Image
                  style={{
                    width: 50,
                    objectFit: 'contain',
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={mockAvatar3}
                  // resizeMethod='scale'
                  accessibilityLabel='user avatar'
                />
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Sam Kim
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here. The status...
                  </Text>
                </View>
              </Pressable>
            </Link>
            <Link href='/chat/123' asChild className='flex-1 w-full'>
              <Pressable className='chat-card px-3 flex-row items-center gap-x-4'>
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
                <View className='chat-info-wrapper'>
                  <Text
                    className='text-[14px]'
                    style={{ color: text_variant_1, fontFamily: 'font_600' }}
                  >
                    Andrew James Okpainmo
                  </Text>
                  <Text
                    className='text-[11px] mt-[3px] w-[80%]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    The user status will go here.
                  </Text>
                </View>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
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
