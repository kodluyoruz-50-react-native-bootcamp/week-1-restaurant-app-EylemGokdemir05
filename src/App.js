/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import data from'./components/data/data.json'
// import ListItem from './components/ListItem';

class App extends Component {
	render() {
		return (
      <View style={styles.container}>
        <ScrollView>
        {
          data.map((item) => {
            return (
              <View style={styles.itemStyle}>
                <Image
                  style={styles.logo}
                  source={{
                  uri:item.image,}}/>
                  <View style={styles.textStyle}>
                    <Text >{item.name}</Text>
                    <Text style={{marginLeft:240}} >{item.likes}</Text>      
                  </View>
                  <View style={{flexDirection:'row',backgroundColor:'#dfe6e9'}}>
                    <Text style={{fontSize: 12}}>{item.location}</Text>
                  </View>
              </View>
            );
          })
        } 
        </ScrollView>
      </View>
    );
  }
}  


// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={{flex:1}}>
//         <ScrollView>
//           <View style={{flex:1}}>
//             <FlatList
//             keyExtractor={item=>item.id}
//             data={data}
//             renderItem={({item})=><ListItem myData={item.name}></ListItem>}>
//             </FlatList>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    flex: 1
  },
  itemStyle:{
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height/2.5,
    resizeMode: "cover",
    justifyContent:'flex-start',
    padding:10,

  },
  textStyle:{
    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor:'#dfe6e9'
  }
});

export default App;
// export default Example3;
