import { Button, StyleSheet, Text, View} from 'react-native';
import { useState } from 'react'
import CustomModal from './components/CustomModal'
import CustomInput from './components/CustomInput'
import CustomItemList from './components/CustomItemList'

export default function App() {

  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToListHandler = () => {
    setItemList(prevState => [...prevState,{id: Math.random().toString(),value:textItem}])
    setTextItem('')
  }

  const onSelectHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelectedToDelete(itemList.find(item => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id!==itemSelectedToDelete.id))
    setItemSelectedToDelete('')
    setModalVisible(!modalVisible)
  } 

  const renderListItem = ({item}) =>(
      <View style = {styles.itemList}>
        <Text>
          {item.value}
        </Text>
        <Button title= 'X' onPress={() => onSelectHandler(item.id)} color='#A594F9'/>
      </View>
  )
  

  return (
    <>
    <View style={styles.container}>
      <CustomInput
        textItemProp={textItem}
        onChangeTextHandlerEvent={onChangeTextHandler}
        addItemToListHandlerEvent={addItemToListHandler}
      />
      <CustomItemList
        data={itemList}
        renderItemEvent={renderListItem}
        keyExtractor={item=>item.id}
      />
    </View>
    <CustomModal 
      animationTypeProp ='slide' 
      isVisibleProp = {modalVisible}
      itemSelectedProp = {itemSelectedToDelete}
      setModalVisibleEvent = {setModalVisible}
      onDeleteItemHandlerEvent ={onDeleteItemHandler}
    />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#CDC1FF',
    borderRadius: 10,
  },
});
