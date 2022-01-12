import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableOpacity,TextInput,Image } from 'react-native'

const MobileScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.main}>

            <Image source={{uri:'https://cdn.pixabay.com/photo/2021/10/29/16/44/coronavirus-6752363_960_720.png'}} style={{width:150,height:150,marginBottom:30,
        left:80}} />

                <TextInput
                placeholder='Enter 10 digit Mobile No..'
                style={styles.input}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate('Verify')}
                    >
                        <Text style={styles.txt}>Get OTP</Text>

                    </TouchableOpacity>

                </View>

                

            </View>

        </KeyboardAvoidingView>
    )
}

export default MobileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      main:{
          width:'80%'
      },
      input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
      buttonContainer: {
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
        left:60
      },
      txt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
})
