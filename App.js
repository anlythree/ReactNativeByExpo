import { StatusBar } from 'expo-status-bar';
import {Button, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {styles} from "./style/styles";

export default function App() {
  return (

      // fragment跟空View不同，它会让它其中的view的属性都显示出来，而如果用View的话，这个View下的属性都将被覆盖
      // flex 是 reactNative的弹性布局属性，设置几他就会占空间的多少
      // flexDirection:'column'是竖向排布，'row'是横向排布
      // justifyContent选择space-evenly就会把中间的元素平均分布，space-between会不考虑两边的空间，直接把其中的元素撑开分布
      //space-around是指的每个元素周围都均匀分布相同的pidding，就是说元素与元素之间是两倍的pidding，元素与边界之间是一倍的pidding
      // alignItems:'stretch' 会把所有没有把没有宽度的元素直接拉伸到最大
      <SafeAreaView style={{backgroundColor:'#DADADA',flex:1,flexDirection:'column',justifyContent:'space-around',alignItems:'stretch'}}>
          <View>
              {/*引用styles.ts文件中的样式*/}
              <Text style={{backgroundColor:'#DC5A6C' , height:100 ,fontSize:50}} > A</Text>
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

