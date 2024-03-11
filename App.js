import { StatusBar } from 'expo-status-bar';
import {Button, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {styles} from "./style/styles";

export default function App() {
  return (

      // fragment跟空View不同，它会让它其中的view的属性都显示出来，而如果用View的话，这个View下的属性都将被覆盖
      <SafeAreaView style={{backgroundColor:'#DADADA',flex:1,flexDirection:'column'}}>
          <View>
              {/*引用styles.ts文件中的样式*/}
              <Text style={{backgroundColor:'#DC5A6C' , height:100 , width:100,fontSize:50}} > A</Text>
          </View>

          <View>
              {/*引用styles.ts文件中的样式*/}
              <Text style={{backgroundColor:'#164E7C' , height:100 , width:100,fontSize:50}} > B</Text>
          </View>

          <View>
              {/*引用styles.ts文件中的样式*/}
              <Text style={{backgroundColor:'#7D96F5' , height:100 , width:100,fontSize:50}} > C</Text>
          </View>
      </SafeAreaView>
  );
}

