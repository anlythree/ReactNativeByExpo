import {StyleSheet} from "react-native";

/**
 * 这种定义style的方式和直接从组件上定义style对比：
 * 从性能上貌似不会有什么区别，可能只会快一点点吧🤏更多的是这样代码规范上比较好，不会有什么重复的代码
 */
export const styles = StyleSheet.create({
    title:{fontSize:32,fontWeight:'bold'},
    plainText:{fontSize:16,color:'gray'},
    posterImage:{width:100,height:180,backgroundColor:'gray'}
})