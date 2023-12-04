import { Button, StyleSheet, Text, View, Modal } from 'react-native';

 const CustomModal = (
    
    {
        animationTypeProp,
        isVisibleProp,
        itemSelectedProp,
        setModalVisibleEvent,
        onDeleteItemHandlerEvent,
    }
) => {
return (
    <Modal animationType={animationTypeProp} visible={isVisibleProp}>
        <View style = {styles.modalMessageContainer}>
          <Text> Se eliminara: </Text>
          <Text>{itemSelectedProp.value}</Text>        
        </View>
        <View style = {styles.modalButtonContainer}>
          <Button title = 'Cancel' color='#E5D9F2' onPress={() => setModalVisibleEvent(!isVisibleProp)}/>
          <Button title = 'Delete' color='#ef233c' onPress={onDeleteItemHandlerEvent}/>
        </View>
    </Modal>
  )
}

export default CustomModal


const styles = StyleSheet.create({
    modalMessageContainer:{
      paddingTop: 50,
      alignItems: 'center',
    },
    modalButtonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingTop: 20, 
    }
  });
  