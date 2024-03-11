import { StatusBar } from 'expo-status-bar';
import {Button, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {styles} from "./style/styles";

export default function App() {
  return (

      // fragment跟空View不同，它会让它其中的view的属性都显示出来，而如果用View的话，这个View下的属性都将被覆盖
      // 而且fragment中不能添加行注释，只能添加像下边的块注释
      <>
          <StatusBar backgroundColor={'pink'} barStyle={"light-content"}/>
          {/* SafeAreaView只对ios端有映影响 */}
          <SafeAreaView>
              {/* 这里是引用的styles.ts文件中用StyleSheet.create创建的样式 */}
              <Text style={styles.title}> title test……</Text>
          </SafeAreaView>
          {/*justifyContent 是上下对齐。alignItems是左右对齐*/}
          <View style={{flex : 1 ,justifyContent : 'center', alignItems : 'center'}}>
              <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize:68}}>Anly</Text>
                  <Text style={{fontSize:68,color: 'red'}}> Three</Text>
              </View>
              {/*文字组件中可以嵌套，和view内横排是相同的效果，而且样式默认横排*/}
              <Text style={{fontSize:68}}>
                  Anly
                  <Text style={{fontSize:68,color: 'red'}}> Three</Text>
              </Text>
              {/*引入在线图片*/}
              <Image source={{uri:'https://facebook.github.io/react/logo-og.png'}} style={styles.posterImage}/>
              {/*引入本地图片*/}
              <Image source={require("./assets/images/jiantou.png")} style={styles.posterImage}/>

              <Button onPress={()=>{}} title={"press me!"}></Button>

              <View>
                  {/*引用styles.ts文件中的样式*/}
                  <Text style={styles.plainText} >A</Text>
              </View>

              <View>
                  {/*引用styles.ts文件中的样式*/}
                  <Text style={styles.plainText} >B</Text>
              </View>
          </View>
      </>
  );
}

