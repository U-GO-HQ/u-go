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
} from 'react-native';
import React from 'react';
import {
  background_variant_1,
  background_variant_2,
  background_variant_1_light,
  text_variant_1,
  text_variant_2,
  text_variant_3,
} from '@/constants/colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const mockAvatar1 = require('../../assets/images/img-8.jpg');
const mockAvatar2 = require('../../assets/images/img-10.png');
const mockAvatar3 = require('../../assets/images/img-11.png');
const mockAvatar4 = require('../../assets/images/img-12.png');

const Home = () => {
  return (
    <SafeAreaView
      className='flex-1 justify-center items-center flex-col gap-y-4'
      style={{ backgroundColor: background_variant_1_light }}
    >
      {/* <StatusBar
        backgroundColor={background_variant_1_light}
        barStyle={'light-content'}
      /> */}
      <View className='flex-1 relative'>
        <ScrollView
          className='flex flex-1 min-h-screen'
          style={styles.safePadding}
        >
          {/* <View
          className='flex flex-1'
          style={{ backgroundColor: background_variant_1 }}
        > */}
          <View
            className='header flex flex-1 flex-row justify-between items-center w-full 
        px-3 py-3 mb-[20px]'
            style={{ backgroundColor: background_variant_1_light }}
          >
            <Text
              className='text-2xl'
              style={{ fontFamily: 'font_600', color: text_variant_1 }}
            >
              u-go
            </Text>
            <View className='flex flex-row gap-[25px]'>
              <Ionicons
                name='camera-outline'
                size={22}
                color={text_variant_1}
              />
              <Ionicons
                name='search-outline'
                size={22}
                color={text_variant_1}
              />
              <Ionicons name='grid-outline' size={22} color={text_variant_1} />
            </View>
          </View>
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
          <View className='chats-wrapper mt-4 w-full pb-[100px]'>
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
                <Text
                  className='chat-count-wrapper min-w-[22px] absolute right-[12px] top-[22px] h-[22px] rounded-full 
              px-[3px] py-[3px] text-center'
                  style={{
                    backgroundColor: background_variant_2,
                    color: text_variant_2,
                    fontFamily: 'font_700',
                    fontSize: 11,
                  }}
                >
                  99+
                </Text>
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
                    color: text_variant_2,
                    fontFamily: 'font_700',
                    fontSize: 11,
                  }}
                >
                  5
                </Text>
              </Pressable>
            </Link>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
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
              <View className='chat-info-wrapper flex justify-between'>
                <Text
                  className='text-[14px]'
                  style={{ color: text_variant_1, fontFamily: 'font_600' }}
                >
                  Judith Ham
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
              <Image
                style={{
                  width: 50,
                  objectFit: 'contain',
                  height: 50,
                  borderRadius: 50,
                }}
                source={mockAvatar4}
                // resizeMethod='scale'
                accessibilityLabel='user avatar'
              />
              <View className='chat-info-wrapper flex justify-between'>
                <Text
                  className='text-[14px]'
                  style={{ color: text_variant_1, fontFamily: 'font_600' }}
                >
                  Victor Brass
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                30
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
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
              <Text
                className='chat-count-wrapper min-w-[22px] absolute right-[12px] top-[22px] h-[22px] rounded-full 
              px-[3px] py-[3px] text-center'
                style={{
                  backgroundColor: background_variant_2,
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
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
              <View className='chat-info-wrapper flex justify-between'>
                <Text
                  className='text-[14px]'
                  style={{ color: text_variant_1, fontFamily: 'font_600' }}
                >
                  Judith Ham
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
              <Image
                style={{
                  width: 50,
                  objectFit: 'contain',
                  height: 50,
                  borderRadius: 50,
                }}
                source={mockAvatar4}
                // resizeMethod='scale'
                accessibilityLabel='user avatar'
              />
              <View className='chat-info-wrapper flex justify-between'>
                <Text
                  className='text-[14px]'
                  style={{ color: text_variant_1, fontFamily: 'font_600' }}
                >
                  Victor Brass
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
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
              <Text
                className='chat-count-wrapper min-w-[22px] absolute right-[12px] top-[22px] h-[22px] rounded-full 
              px-[3px] py-[3px] text-center'
                style={{
                  backgroundColor: background_variant_2,
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
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
              <View className='chat-info-wrapper flex justify-between'>
                <Text
                  className='text-[14px]'
                  style={{ color: text_variant_1, fontFamily: 'font_600' }}
                >
                  Judith Ham
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
              <Image
                style={{
                  width: 50,
                  objectFit: 'contain',
                  height: 50,
                  borderRadius: 50,
                }}
                source={mockAvatar4}
                // resizeMethod='scale'
                accessibilityLabel='user avatar'
              />
              <View className='chat-info-wrapper flex justify-between'>
                <Text
                  className='text-[14px]'
                  style={{ color: text_variant_1, fontFamily: 'font_600' }}
                >
                  Victor Brass
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
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
              <Text
                className='chat-count-wrapper min-w-[22px] absolute right-[12px] top-[22px] h-[22px] rounded-full 
              px-[3px] py-[3px] text-center'
                style={{
                  backgroundColor: background_variant_2,
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
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
              <View className='chat-info-wrapper flex justify-between'>
                <Text
                  className='text-[14px]'
                  style={{ color: text_variant_1, fontFamily: 'font_600' }}
                >
                  Judith Ham
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
            <View className='chat-card px-3 py-3 flex flex-row items-center gap-4'>
              <Image
                style={{
                  width: 50,
                  objectFit: 'contain',
                  height: 50,
                  borderRadius: 50,
                }}
                source={mockAvatar4}
                // resizeMethod='scale'
                accessibilityLabel='user avatar'
              />
              <View className='chat-info-wrapper flex justify-between'>
                <Text
                  className='text-[14px]'
                  style={{ color: text_variant_1, fontFamily: 'font_600' }}
                >
                  Victor Brass
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
                  color: text_variant_2,
                  fontFamily: 'font_700',
                  fontSize: 11,
                }}
              >
                99+
              </Text>
            </View>
          </View>
          {/* </View> */}
        </ScrollView>
        <Link href='/contacts' asChild>
          <Pressable
            className='add-chat-button absolute bottom-[30px] right-4 
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
