import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
const HelloScreen = ({navigation}) => {

    const[mobileNo,setMobileNo] = useState('9013442592')
    return (
        <View style={styles.container}>

<Image source={{uri:'https://cdn.pixabay.com/photo/2021/10/29/16/44/coronavirus-6752363_960_720.png'}} style={{width:150,height:150,marginBottom:30,
        }} />
         <FontAwesome name="user" size={30} color="#2F4F4F" />
            <Text style={styles.title}>
                Hello
            </Text>
            <Text style={styles.subTitle}>
                {mobileNo}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate('Sign Up')}
                    >
                        <Text style={styles.txt}>Register Person</Text>

                    </TouchableOpacity>

                    <Text style={styles.bottomTxt}>
                        You can only Register 3 person from one phone number
                    </Text>


                </View>
        </View>
    )
}

export default HelloScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title:{
          marginBottom:10,
          fontSize:24,
          lineHeight:24,
          fontWeight:'700',
          marginTop:10
      },
      subTitle:{
          padding:10,
          fontSize:18
      },
      buttonContainer:{
        width: '60%',
        justifyContent:'center',
        alignItems:'center',
         marginTop: 40,
       },
       button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        
      },
      txt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      bottomTxt:{
          marginTop:5,
          fontSize:12,
          alignSelf:'center'
      },
})
