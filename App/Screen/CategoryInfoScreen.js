import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {useEffect} from 'react';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import Tts from 'react-native-tts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';

const CategoryInfoScreen = () => {
  const isFocused = useIsFocused();
  const [autoplay, setAutoplay] = useState(false);
  const [sound, setSound] = useState(true);
  const [pageIndex, setPageIndex] = useState('');
  console.log('pageIndex',pageIndex)
  const navigation = useNavigation();
  const route = useRoute();
  const {categoryInfo, ShowWord} = useSelector(state => state.homeState);
  console.log('categoryInfo', categoryInfo);
  const swiperRef = useRef(null);

  const next = () => {
    if (!!swiperRef) {
      swiperRef.current.scrollBy(1, 0);
    }
  };

  const prev = () => {
    if (!!swiperRef) {
      swiperRef.current.scrollBy(-1, 0);
    }
  };

  useEffect(() => {
    Tts.speak(`lets learn  ${route.params.name}`, {
      androidParams: {
        KEY_PARAM_PAN: +1,
        KEY_PARAM_VOLUME: 1,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0099ff',
      }}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          marginHorizontal: scale(6),
          marginTop: verticalScale(6),
        }}>
        <Swiper
          ref={swiperRef}
          autoplay={autoplay}
          autoplayTimeout={2}
          dotColor="#0099ff"
          loop={true}
          index={1}
          onIndexChanged={indexs => {
            // setPageIndex(indexs);
            {
              categoryInfo.map((item, index) => {
                sound == true
                  ? indexs === index
                    ? Tts.speak(`${item.name}`, {
                        androidParams: {
                          KEY_PARAM_PAN: +1,
                          KEY_PARAM_VOLUME: 1,
                          KEY_PARAM_STREAM: 'STREAM_MUSIC',
                        },
                      })
                    : ''
                  : '';
              });
            }
          }}>
          {categoryInfo.map((item, index) => {
            // sound == true
            //   ? pageIndex === index
            //   // ? console.log('item.name',item.name)
            //     ? Tts.speak(`${item.name}`, {
            //         androidParams: {
            //           KEY_PARAM_PAN: +1,
            //           KEY_PARAM_VOLUME: 1,
            //           KEY_PARAM_STREAM: 'STREAM_MUSIC',
            //         },
            //       })
            //     : ''
            //   : '';

            return (
              <View style={{justifyContent: 'center'}}>
                <View
                  style={{
                    position: 'absolute',
                    bottom: verticalScale(-50),
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: scale(25),
                      textAlign: 'center',
                      fontFamily: 'ShantellSans-Bold',
                    }}>
                    {ShowWord ? item.name : ''}
                  </Text>
                </View>
                <FastImage
                  source={{uri: item.image}}
                  style={{
                    height: '70%',
                    marginTop: ShowWord ? verticalScale(30) : verticalScale(80),
                  }}
                  resizeMode="center"
                />
              </View>
            );
          })}
        </Swiper>

        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#0099ff',
            position: 'absolute',
            bottom: verticalScale(0),
            width: '100%',
            height: verticalScale(70),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => prev()}>
            <AntDesign name="caretleft" size={scale(30)} color={'#FFFFFF'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAutoplay(!autoplay);
              next();
            }}>
            <MaterialCommunityIcons
              name={
                autoplay == true ? 'arrow-right-drop-circle-outline' : 'cancel'
              }
              size={scale(35)}
              color={'#FFFFFF'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="home" size={scale(40)} color={'#FFFFFF'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSound(!sound);
              next();
            }}>
            {sound == true ? (
              <FastImage
                source={require('../Assets/Img/volume.png')}
                style={{
                  width: scale(37),
                  height: scale(37),
                  color: '#FFFFFF',
                }}
              />
            ) : (
              <FastImage
                source={require('../Assets/Img/closesound.png')}
                style={{width: scale(37), height: scale(37), color: '#FFFFFF'}}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => next()}>
            <AntDesign name="caretright" size={scale(30)} color={'#FFFFFF'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CategoryInfoScreen;
