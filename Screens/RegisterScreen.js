import React,{useState} from 'react'
import { KeyboardAvoidingView, Text, View,StyleSheet,Image,TextInput,TouchableOpacity,Alert} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome } from '@expo/vector-icons';

const RegisterScreen = ({navigation}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [pinCode, setPinCode] = useState('');

    var name = firstName;
    var birth = dob;
    var cityCode = pinCode;
    var endName = lastName;

    const register = async(firstName,lastName,dob,pinCode) => {

        if(firstName!='' && lastName!='' && dob!='' && pinCode!=''){
          await fetch('http://dummy.restapiexample.com/api/v1/create',{
              method:'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
              body: JSON.stringify({
                  'first Name': name,
                  'last name':endName,
                  'date of Birth':birth,
                  'area code':cityCode,
                  
                  

              })
          }
          ).then(res => res.json())
          .then(result => {
           console.log(result);
           alert(result.message);
           
        //    alert(result.title);
        //    alert(result.birth);
            // console.log(result.title);
            // console.log(result.body);
            
          }).catch(err=>console.log(err))
        }
      }

    // let items=[
    //     {label: 'Adhar Card', value: 'en'},
    //     {label: 'Pan Card', value: 'de'},
    //     {label: 'Voter ID', value: 'fr'},
    // ];

    // let data=[
    //     {label: 'Female', value: 'en'},
    //     {label: 'Male', value: 'de'},
        
    // ];
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.headerbox}>
            
            <Text style={styles.headerboxTitle}>Sign Up</Text>
            </View>
            <View style={styles.main}>
            <FontAwesome name="user" size={30} color="#2F4F4F" />
                <Text style={styles.first}>
                    First Name
                </Text>
                <TextInput
                placeholder='first name'
                style={styles.input}
                onChangeText={(firstName) => setFirstName(firstName)}
                value={firstName}
                />
                
                <Text style={styles.first}>
                    Last Name
                </Text>
                <TextInput
                placeholder='Last name'
                style={styles.input}
                onChangeText={(lastName) => setLastName(lastName)}
                value={lastName}
                />

                {/* <Text style={styles.first}>
                   Choose ID 
                </Text>
                <DropDownPicker
                
                label='User ID'
                data={items}
                containerStyle={{height: 20}}
                onChangeItem={item => item.label}
                /> */}

                <Text style={styles.first}>
                    Date of Birth
                </Text>
                <TextInput
                    onChangeText={(dob) => setDob(dob)}
                    value={dob}
                    keyboardType='numeric'
                    style={styles.input}
                    />
                {/* <Text style={styles.first}>
                   Gender 
                </Text>
                <DropDownPicker
                 label='Gender'
                 data={data}
                
                containerStyle={{height: 20}}
                onChangeItem={data => data.label}
                /> */}

                    <Text style={styles.first}>
                        Pin Code
                    </Text>
                    <TextInput
                    placeholder='Pin code'
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={(pinCode) => setPinCode(pinCode)}
                    value={pinCode}
                    />

                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={register}
                    >
                        <Text style={styles.txt}>Confirm</Text>

                    </TouchableOpacity>


                </View>

            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    main:{
        justifyContent: 'center',
        
        marginTop:20,
        marginLeft:20,
        width:'80%'
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
       first:{
           fontSize:18,
           fontWeight:'700',
           marginBottom:5,
           marginTop:5
       },
       input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
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
        left:60
        
      },
      txt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },

       
})

