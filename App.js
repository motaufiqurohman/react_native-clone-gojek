import React, {Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const GopayMenu = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 14}}>
      <Image source={props.image}/>
      <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{props.name}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* Content */}
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* Search bar */}
        <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput placeholder='What do you wan to eat' style={{borderWidth: 1, borderColor: 'lightgrey', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}}/>
            <Image source={require('./src/assets/icon/search.png')} style={{position: 'absolute', top: 6, left: 12}}/>
          </View>
          <View style={{width: 35 , alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./src/assets/icon/promo.png')}/>
          </View>
        </View>
        {/* Gopay */}
        <View style={{marginHorizontal: 17, marginTop: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'blue', borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 15}}>
            <Image source={require('./src/assets/icon/gopay.png')}/>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>Rp. 50.000</Text>
          </View>
          <View style={{flexDirection: 'row', backgroundColor: 'blue', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
            <GopayMenu name='Pay' image={require('./src/assets/icon/pay.png')}/>
            <GopayMenu name='Nearby' image={require('./src/assets/icon/nearby.png')}/>
            <GopayMenu name='Top Up' image={require('./src/assets/icon/topup.png')}/>
            <GopayMenu name='More' image={require('./src/assets/icon/more.png')}/>
          </View>
        </View>
        {/* Main feature */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 18}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 18}}>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}> 
              <View style={{height: 58, width: 58, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 18, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-ride.png')}/>
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6}}>GO-RIDE</Text>
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}> 
              <View style={{height: 58, width: 58, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 18, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-car.png')}/>
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6}}>GO-CAR</Text>
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}> 
              <View style={{height: 58, width: 58, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 18, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-bluebird.png')}/>
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6}}>GO-BLUEBIRD</Text>
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}> 
              <View style={{height: 58, width: 58, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 18, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-send.png')}/>
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6}}>GO-SEND</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}> 
              <View style={{height: 58, width: 58, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 18, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-deals.png')}/>
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6}}>GO-DEALS</Text>
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}> 
              <View style={{height: 58, width: 58, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 18, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-pulsa.png')}/>
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6}}>GO-PULSA</Text>
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}> 
              <View style={{height: 58, width: 58, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 18, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-food.png')}/>
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6}}>GO-FOOD</Text>
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}> 
              <View style={{height: 58, width: 58, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 18, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/more.png')}/>
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6}}>MORE</Text>
            </View>
          </View>

        </View>
        {/* Divider */}
        <View style={{height: 17, backgroundColor: 'lightgrey', marginTop: 20}}></View>
        {/* News Section*/}
        <View style={{paddingTop: 16, paddingHorizontal: 16}}>
          <View style={{position: 'relative'}}>
            <Image source={require('./src/assets/dummy/sepak-bola.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
            <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
            <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
              <Image source={require('./src/assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
            </View>
          </View>
          <View style={{paddingTop: 16, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#E8E9ED'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
            <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Dimas Drajat selamatkan pinalti, Timnas U-23 kalahkan Brunei</Text>
            <TouchableOpacity style={{backgroundColor: '#61A756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 4}}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Internal Information Section*/}
        <View style={{padding: 16}}>
          <View style={{height: 15, width: 60, marginLeft: -4}}>
            <Image source={require('./src/assets/logo/gojek.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
          </View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 15, marginBottom: 20}}>Complete your profile</Text>
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <View>
              <Image source={require('./src/assets/dummy/facebook-connect.png')}/>
            </View>
            <View style={{marginLeft: 16, flex: 1}}>
              <Text style={{fontSize: 15, color: '#4a4a4a', fontWeight: 'bold'}}>Connect with Facebook</Text>
              <Text style={{fontSize: 15, fontWeight: 'normal', color: '#4a4a4a', width: '70%'}}>Login faster without verification code</Text>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor: '#61A756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 4}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16}}></View>
        </View>
        {/* Gofood Banner Section */}
        <View style={{padding: 16, paddingTop: 0}}>
          <View style={{position: 'relative'}}>
            <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
            <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6}}></View>
            <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
              <Image source={require('./src/assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
            </View>
            <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}>Free GO-FOOD vouchers</Text>
                <Text style={{fontSize: 12, fontWeight: '500', color: 'white'}}>Quick, before they run!</Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity style={{backgroundColor: '#61A756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'stretch', borderRadius: 4}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 20}}></View>
        </View>
        {/* Nearby Go-food */}
        <View>
          <View style={{height: 15, width: 60, marginLeft: 16}}>
            <Image source={require('./src/assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>Nearby Restaurant</Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
          </View>
          <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 8, overflow: 'hidden'}}>
                <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>KFC Aeon Mall</Text>
            </View>

            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 8, overflow: 'hidden'}}>
                <Image source={require('./src/assets/dummy/go-food-gm.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Bakmi GM Aeon Mall</Text>
            </View>

            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 8, overflow: 'hidden'}}>
                <Image source={require('./src/assets/dummy/go-food-orins.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Martabak Orins</Text>
            </View>

            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 8, overflow: 'hidden'}}>
                <Image source={require('./src/assets/dummy/go-food-banka.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Martabak Banka</Text>
            </View>

            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 8, overflow: 'hidden'}}>
                <Image source={require('./src/assets/dummy/go-food-pak-boss.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Ayam Bakar Pak Boss</Text>
            </View>
          </ScrollView>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16, marginHorizontal: 16}}></View>
        </View>
      </ScrollView>
      {/* End content */}
      {/* Navigation */}
      <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/home-active.png')}/>
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: 'green'}}>Home</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/order.png')}/>
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Orders</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/help.png')}/>
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/inbox.png')}/>
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/account.png')}/>
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
