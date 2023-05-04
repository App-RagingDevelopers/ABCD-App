import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {buyProModelAction} from '../../Redux/Action/HomeAction';
import {GooglePay} from 'react-native-google-pay';

const BuyProModelScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const payment = () => {
    const allowedCardNetworks = ['VISA', 'MASTERCARD'];
    const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];

    const requestData = {
      cardPaymentMethod: {
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          // stripe (see Example):
          gateway: 'stripe',
          gatewayMerchantId: '',
          stripe: {
            publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
            version: '2018-11-08',
          },
          // other:
          gateway: 'example',
          gatewayMerchantId: 'exampleGatewayMerchantId',
        },
        allowedCardNetworks,
        allowedCardAuthMethods,
      },
      transaction: {
        totalPrice: '10',
        totalPriceStatus: 'FINAL',
        currencyCode: 'USD',
      },
      merchantName: 'Example Merchant',
    };

    // Set the environment before the payment request
    GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST);

    // Check if Google Pay is available
    GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods).then(
      ready => {
        if (ready) {
          // Request payment token
          GooglePay.requestPayment(requestData)
            .then(token => {
              // Send a token to your payment gateway
            })
            .catch(error => console.log(error.code, error.message));
        }
      },
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => dispatch(buyProModelAction())}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            height: verticalScale(360),
            width: scale(257),
            shadowOffset: {
              width: 0,
              height: verticalScale(2),
            },
            shadowOpacity: 0.25,
            shadowRadius: scale(4),
            elevation: scale(3),
          }}>
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={() => dispatch(buyProModelAction())}>
            <Entypo
              name="cross"
              size={scale(25)}
              color="#FFFFFF"
              style={{
                backgroundColor: '#006db7',
                textAlign: 'center',
                padding: scale(7),
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              marginTop: verticalScale(30),
              marginLeft: scale(15),
              flexDirection: 'row',
              marginBottom: verticalScale(15),
            }}>
            <Text
              style={{
                color: '#006db7',
                fontSize: scale(15),
                fontWeight: '600',
              }}>
              -
            </Text>
            <Text
              style={{
                color: '#006db7',
                fontSize: scale(17),
                fontWeight: '600',
                marginLeft: scale(10),
              }}>
              No Advertisements
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: scale(15),
              marginBottom: verticalScale(15),
            }}>
            <Text
              style={{
                color: '#006db7',
                fontSize: scale(15),
                fontWeight: '600',
              }}>
              -
            </Text>
            <Text
              style={{
                color: '#006db7',
                fontSize: scale(17),
                fontWeight: '600',
                marginLeft: scale(10),
                width: scale(200),
              }}>
              All sections will be unlocked.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: scale(15)}}>
            <Text
              style={{
                color: '#006db7',
                fontSize: scale(15),
                fontWeight: '600',
              }}>
              -
            </Text>
            <Text
              style={{
                color: '#006db7',
                fontSize: scale(16),
                fontWeight: '600',
                marginLeft: scale(10),
                width: scale(220),
              }}>
              Support us to create quality content for your kids. It will be
              free updates for you!
            </Text>
          </View>

          <View style={{alignItems: 'center', marginTop: verticalScale(35)}}>
            <Pressable
              onPress={() => payment()}
              style={{
                backgroundColor: '#006db7',
                padding: scale(5),
                width: scale(130),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: scale(18),
                  fontWeight: '700',
                }}>
                BUY NOW
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BuyProModelScreen;
