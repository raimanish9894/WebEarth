import React from 'react'
import { KeyboardAvoidingView, Text, View,StyleSheet,Image,TextInput,TouchableOpacity,Alert } from 'react-native';

const OtpScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.headerbox}>
            
            <Text style={styles.headerboxTitle}>Veify Phone</Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.titleTxt}>
                    We sent you a code to verify  your number
                </Text>
                <Text style={styles.phoneTxt}>
                    Sent to 99*** *****
                </Text>

                <TextInput
                placeholder='Enter OTP here...'
                style={styles.input}
                keyboardType='numeric'
                />

                <TouchableOpacity style={styles.otp}>
                    <Text>Didn't get it? send a new code</Text>
                </TouchableOpacity>

                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate('Welcome')}
                    >
                        <Text style={styles.txt}>Next</Text>

                    </TouchableOpacity>


                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    container:{
        
        flex:1
      },
      headerbox:{
        width:450,
        height:91,
        backgroundColor:'#4185F4',
        
        alignItems:'center'
      },
      headerboxTitle:{
        fontSize:24,
        fontWeight:'700',
        lineHeight:24,
        color:'#FFFFFF',
        top:50,
        position:'absolute',
      
       },
       main:{
           justifyContent:'center',
           alignItems:'center',
           marginTop:10,
           padding:16,
           
       },
       titleTxt:{
           marginBottom:10,
           letterSpacing:1,
           fontSize:18,
           fontWeight:'500',
       },
       phoneTxt:{
           marginTop:10,
           fontSize:16,
           color:'grey'
       },
       input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 30,
       },
       otp:{
           margin:30,
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
})
