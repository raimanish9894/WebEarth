import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const PersonScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerbox}>
            
            <Text style={styles.headerboxTitle}>Select Person for Test</Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.title}>Registered Persons</Text>
                <Text style={styles.subtitle}>Please Select Person before proceeding for testing</Text>

                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    
                    >
                        <Text style={styles.txt}>Person 1</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button}
                   
                    >
                        <Text style={styles.txt}>Person 2</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button}
                    >
                        <Text style={styles.txt}>Person 3</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button2}
                    >
                        <Text style={styles.txt}>Next</Text>

                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

export default PersonScreen

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
           width:'80%',
           marginTop:10,
           marginHorizontal:20,
       },
       title:{
           fontSize:18,
           fontWeight:'700',
           padding:10,
       },
       subtitle:{
           fontSize:14,
           padding:10,
           color:'grey'
       },
       buttonContainer:{
        width: '60%',
        justifyContent:'center',
        alignItems:'center',
         marginTop: 40,
       },
       button: {
        backgroundColor: 'grey',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft:10,
        marginTop:10

        
      },
      txt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      button2:{
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft:10,
        marginTop:80 ,
        left:70
      },
})
