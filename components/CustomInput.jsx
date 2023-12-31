import { Button, StyleSheet, TextInput, View, } from 'react-native';

const CustomInput = (

    {
        textItemProp,
        onChangeTextHandlerEvent,
        addItemToListHandlerEvent,

    }

) =>{return(
    <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder = "Insert task..." onChangeText = { onChangeTextHandlerEvent} value = {textItemProp}/>
        <Button title = 'Add' onPress = {addItemToListHandlerEvent} color='#7371FC'/>
    </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({

    inputContainer:{
        flexDirection: 'row',
        marginTop:40,
        justifyContent: 'space-evenly',
      },
    textInput:{
        width: 200,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },  
});






