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
  background_variant_5,
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

const SavedMessages = () => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [showAboutInput, setShowAboutInput] = useState(false);
  const [showMessageActionMenu, setShowMessageActionMenu] = useState(false);
  const [isOverlayPairActive, setIsOverlayPairActive] = useState(false);
    const [showHeaderSearchTab, setShowHeaderSearchTab] = useState(false);

    const messageIndex = 1;
    const messages = 1;

    const blurhash =
      '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    // function showMessageActionMenu(messageCardIndex) {
    //   return st;
    // }

    // function OverlayCard(): any  {
    //  const id_1 = {
    //   color: isActive ? 'blue' : 'black',
    //   fontWeight: isActive ? 'bold' : 'normal',
    // };
    // }

    return (
      <KeyboardAvoidingView
        className='flex flex-1 justify-center items-center flex-col w-full min-h-screen'
        style={{ backgroundColor: background_variant_1_light }}
        behavior='padding'
        keyboardVerticalOffset={Platform.OS === 'ios' ? 45 : 0}
      >
        <View
          className='relative w-full flex-1 mt-[10px] pt-[60px]'
          style={{ backgroundColor: background_variant_1_light }}
        >
          <View
            className='header flex flex-1 items-center flex-row absolute 
          left-0 px-2 pb-2 w-full top-[35px] z-20'
            style={{ backgroundColor: background_variant_1_light }}
          >
            <View
              className={`main-header-menu pt-[20px] flex flex-1 flex-row justify-between w-full items-center ${
                (showMessageActionMenu || showHeaderSearchTab) && 'hidden'
              }`}
            >
              <View className='gap-8 flex-row items-center'>
                <Pressable onPress={() => router.push('/')}>
                  <Ionicons
                    name='arrow-back-outline'
                    size={22}
                    color={text_variant_1}
                  />
                </Pressable>
                <Text
                  className='text-[16px]'
                  style={{ color: text_variant_1, fontFamily: 'font_600' }}
                >
                  Starred Messages
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
            <View
              className={`message-action-menu pt-[17.5px] flex-1 flex-row items-center ${
                showMessageActionMenu ? 'flex' : 'hidden'
              }`}
            >
              <Pressable
                onPress={() => {
                  setShowMessageActionMenu(false);
                }}
                // className={`hidden z-20 ${
                //   showMessageActionMenu && 'flex'
                // }`}
              >
                <Ionicons
                  name='close-outline'
                  size={30}
                  color={text_variant_1}
                />
              </Pressable>
              <View
                className={`flex-1 flex-row gap-8 items-center justify-end`}
                // style={{ backgroundColor: `${background_variant_1_light}` }}
              >
                <Pressable
                // onPress={() => setShowMessageActionMenu(false)}
                // className={`z-20`}
                >
                  <Ionicons
                    name='copy-outline'
                    size={22}
                    color={text_variant_1}
                  />
                </Pressable>
                <Pressable
                // onPress={() => setShowMessageActionMenu(false)}
                // className={`z-20`}
                >
                  <Ionicons
                    name='trash-outline'
                    size={22}
                    color={text_variant_1}
                  />
                </Pressable>
              </View>
            </View>
            <View
              className={`search-tab-menu w-full pt-[10px] flex-1 flex-row items-center 
                justify-between ${showHeaderSearchTab ? 'flex' : 'hidden'}`}
            >
              <Pressable
                onPress={() => {
                  setShowHeaderSearchTab(false);
                }}
                className='w-[10%]'
                // className={`hidden z-20 ${
                //   showMessageActionMenu && 'flex'
                // }`}
              >
                <Ionicons
                  name='close-outline'
                  size={30}
                  color={text_variant_1}
                />
              </Pressable>
              <View
                className='w-[85%]'
                // style={{ backgroundColor: `${background_variant_1_light}` }}
              >
                <TextInput
                  className={`rounded-full flex`}
                  placeholder='find a chat'
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
          </View>
          <ScrollView
            className='flex-1 w-full mt-[40px] pt-[20px] relative z-10'
            style={{ backgroundColor: background_variant_1 }}
          >
            <View className='messages-area flex mb-16 relative z-10'>
              <View
                className={`no-messages notification-section w-[80%] mx-auto mt-[50px] ${
                  messages > 0 ? 'hidden' : 'flex'
                }`}
              >
                <Text className='text-center' style={{ color: text_variant_1 }}>
                  You do not have any messages in the chat. Send a message to
                  start a conversation.
                </Text>
              </View>
              <View
                className={`${
                  messages < 1 ? 'hidden' : 'flex'
                } flex-col gap-y-8`}
              >
                <View className='message-group relative'>
                  {/* overlay to show when message is long-pressed for deleting */}
                  <View
                    className={`message-card-overlay_${messageIndex} hidden w-full absolute z-20 
                  h-full py-3`}
                    style={{ backgroundColor: background_variant_5 }}
                  >
                    {/* overlay to show when message is long-pressed for deleting */}
                  </View>
                  <View className='flex items-center flex-row w-full gap-x-4 px-3 mb-2'>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                      className='text-[12px]'
                    >
                      Sam Callum
                    </Text>
                    <Pressable onPress={() => router.push('/')}>
                      <Ionicons
                        name='arrow-forward-outline'
                        size={13}
                        color={text_variant_1}
                      />
                    </Pressable>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                      className='text-[12px]'
                    >
                      You
                    </Text>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                    >
                      {' '}
                      |{' '}
                    </Text>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                      className='text-[12px]'
                    >
                      25/12/2002
                    </Text>
                  </View>
                  <Pressable
                    className='message-card mx-3 px-3 py-3 max-w-[80%] flex rounded-[15px] 
                rounded-tl-none relative right-0 z-10'
                    onLongPress={() => {
                      setShowMessageActionMenu(true);
                      setIsOverlayPairActive(true);
                    }}
                    style={{ backgroundColor: background_variant_1_light }}
                  >
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_300' }}
                    >
                      Hello Judith, Hope you're doing fine?
                    </Text>
                    <View className='mt-4 flex flex-row justify-end gap-x-2 items-center'>
                      <Ionicons name='star' size={12} color={text_variant_1} />
                      <Text
                        className='text-[12px]'
                        style={{ color: text_variant_1 }}
                      >
                        1:02 PM
                      </Text>
                    </View>
                  </Pressable>
                </View>
                <View className='message-group relative'>
                  {/* overlay to show when message is long-pressed for deleting */}
                  <View
                    className={`message-card-overlay_${messageIndex} hidden w-full absolute z-20 
                  h-full py-3`}
                    style={{ backgroundColor: background_variant_5 }}
                  >
                    {/* overlay to show when message is long-pressed for deleting */}
                  </View>
                  <View className='flex items-center flex-row w-full gap-x-4 px-3 mb-2'>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                      className='text-[12px]'
                    >
                      You
                    </Text>
                    <Pressable onPress={() => router.push('/')}>
                      <Ionicons
                        name='arrow-forward-outline'
                        size={13}
                        color={text_variant_1}
                      />
                    </Pressable>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                      className='text-[12px]'
                    >
                      +51 3456 7865
                    </Text>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                    >
                      {' '}
                      |{' '}
                    </Text>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                      className='text-[12px]'
                    >
                      25/12/2002
                    </Text>
                  </View>
                  <Pressable
                    className='message-card mx-3 px-3 py-3 max-w-[80%] flex rounded-[15px] 
                rounded-tl-none relative right-0 z-10'
                    onLongPress={() => setShowMessageActionMenu(true)}
                    style={{ backgroundColor: background_variant_4 }}
                  >
                    <Text
                      style={{ color: text_variant_2, fontFamily: 'font_300' }}
                    >
                      Yes I am Andrew, How you doing? Lorem ipsum dolor sit
                      amet.
                    </Text>
                    <View className='mt-4 flex flex-row justify-end gap-x-2 items-center'>
                      <Ionicons name='star' size={12} color={text_variant_2} />
                      <Text
                        className='text-[12px]'
                        style={{ color: text_variant_2 }}
                      >
                        1:02 PM
                      </Text>
                    </View>
                  </Pressable>
                </View>
                <View className='message-group relative'>
                  {/* overlay to show when message is long-pressed for deleting */}
                  <View
                    className={`message-card-overlay_${messageIndex} hidden w-full absolute z-20 
                  h-full py-3`}
                    style={{ backgroundColor: background_variant_5 }}
                  >
                    {/* overlay to show when message is long-pressed for deleting */}
                  </View>
                  <View className='flex items-center flex-row w-full gap-x-4 px-3 mb-2'>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                      className='text-[12px]'
                    >
                      You
                    </Text>
                    <Pressable onPress={() => router.push('/')}>
                      <Ionicons
                        name='arrow-forward-outline'
                        size={13}
                        color={text_variant_1}
                      />
                    </Pressable>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                      className='text-[12px]'
                    >
                      Sami Karbala
                    </Text>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                    >
                      {' '}
                      |{' '}
                    </Text>
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_400' }}
                      className='text-[12px]'
                    >
                      25/12/2002
                    </Text>
                  </View>
                  <Pressable
                    className='message-card mx-3 px-3 py-3 max-w-[80%] flex rounded-[15px] 
                rounded-tl-none relative right-0 z-10'
                    onLongPress={() => setShowMessageActionMenu(true)}
                    style={{ backgroundColor: background_variant_1_light }}
                  >
                    <Text
                      style={{ color: text_variant_1, fontFamily: 'font_300' }}
                    >
                      Yes I am Andrew, How you doing? Lorem ipsum dolor sit
                      amet. Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Suscipit, maxime voluptatum?
                    </Text>
                    <View className='mt-4 flex flex-row justify-end gap-x-2 items-center'>
                      <Ionicons name='star' size={12} color={text_variant_1} />
                      <Text
                        className='text-[12px]'
                        style={{ color: text_variant_1 }}
                      >
                        1:02 PM
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
};

export default SavedMessages;

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
