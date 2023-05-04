import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Modal,
  Share,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {
  buyProModelAction,
  categoryAction,
  menuModalAction,
  resetcategoryWiseDataAction,
} from '../Redux/Action/HomeAction';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import MenuModal from '../Components/Modal/MenuModal';
import {categoryWiseDataAction} from '../Redux/Action/HomeAction';
import BuyProModelScreen from '../Components/Modal/BuyProModelScreen';
import FastImage from 'react-native-fast-image';

const HomeScreen = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {category, menuModal, buypromodel} = useSelector(
    state => state.homeState,
  );

  useEffect(() => {
    dispatch(categoryAction());
  }, [isFocused]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Complte action using',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: '#0099ff'}}>
    <View style={{flex: 1, backgroundColor: '#0099ff'}}>
      <View>
        <View
          style={{
            marginLeft: scale(10),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: scale(23),
              width: scale(115),
              fontFamily: 'ShantellSans-Bold',
              color: '#FFFFFF',
            }}>
            ABCD for Kids
          </Text>
          <View>
            <Pressable
              onLongPress={() => dispatch(buyProModelAction())}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(false);
                }}>
                <View
                  style={{
                    flex: 1,

                    backgroundColor: 'rgba(0,0,0,0.7)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      padding: scale(10),

                      height: verticalScale(130),
                      width: scale(280),
                      backgroundColor: 'white',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: scale(2),
                      },
                      shadowOpacity: scale(0.25),
                      shadowRadius: scale(4),
                      elevation: scale(5),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(15),
                        color: '#000000',
                        fontWeight: '500',
                      }}>
                      Child Lock
                    </Text>

                    <Text
                      style={{
                        marginTop: verticalScale(10),
                        fontSize: scale(14),
                        color: '#000000',
                      }}>
                      Long press to see the BUY PRO screen
                    </Text>

                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={{
                        marginTop: verticalScale(14),
                        alignItems: 'flex-end',
                        marginRight: scale(20),
                      }}>
                      <Text style={{color: '#0099ff', fontSize: scale(13)}}>
                        OK
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <Modal
                animationType="slide"
                transparent={true}
                visible={buypromodel}>
                <BuyProModelScreen />
              </Modal>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  height: verticalScale(50),
                  width: scale(50),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: verticalScale(-26),
                  marginLeft: scale(-15),
                }}>
                <Text
                  style={{
                    color: '#05538c',
                    fontSize: scale(15),
                    fontWeight: '600',
                  }}>
                  BUY PRO
                </Text>
              </View>
            </Pressable>
            <View
              style={{
                marginLeft: scale(-15),
                borderBottomWidth: scale(4),
                borderBottomColor: '#05538c',
              }}></View>
          </View>

          <View style={{flexDirection: 'row', marginRight: scale(20)}}>
            <TouchableOpacity onPress={onShare}>
              <Entypo
                name="share"
                size={scale(25)}
                color="white"
                style={{marginHorizontal: scale(20)}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(menuModalAction())}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={menuModal}
                onRequestClose={() => dispatch(menuModalAction())}>
                <MenuModal />
              </Modal>
              <Entypo
                name="dots-three-vertical"
                size={scale(25)}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          marginBottom: verticalScale(10),
        }}>
        <FlatList
          data={category}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginHorizontal: scale(10),
                  marginTop: verticalScale(8),
                }}>
                <Pressable
                  onPress={() => {
                    dispatch(resetcategoryWiseDataAction());
                    dispatch(categoryWiseDataAction(item?.id));
                    navigation.navigate('CategoryInfo', {
                      name: item?.name,
                    });
                  }}>
                  <View
                    style={{
                      height: verticalScale(130),
                      backgroundColor: '#FFFFFF',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: verticalScale(2),
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: scale(4),
                      elevation: scale(5),
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <FastImage
                      source={{
                        uri: item.image,
                      }}
                      style={{width: scale(100), height: scale(130)}}
                      resizeMode="center"
                    />
                    <Text
                      style={{
                        color: '#05538c',
                        width: scale(165),
                        fontSize: scale(25),
                        marginRight: scale(10),
                        fontFamily: 'ShantellSans-Bold',
                        marginLeft: scale(15),
                      }}>
                      {item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: scale(4),
                      borderBottomColor: '#05538c',
                    }}></View>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
