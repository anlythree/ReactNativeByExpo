import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      // fragment跟空View不同，它会让它其中的view的属性都显示出来，而如果用View的话，这个View下的属性都将被覆盖
      <>
          // justifyContent 是上下对齐。alignItems是左右对齐
          <View style={{flex : 1 ,justifyContent : 'center', alignItems : 'center'}}>
              <View>
                  <Text style={{fontSize:68}}>AnlyThree</Text>
              </View>
              <View>
                  <Text style={{backgroundColor: 'pink'}} >A</Text>
              </View>

              <View>
                  <Text style={{backgroundColor: 'gray'}} >B</Text>
              </View>

          </View>
      </>
  );
}

