import {FlatList } from 'react-native';

const CustomItemList = (

    {
        data,
        renderItemEvent,
        keyExtractor,
    }

) => {
return(
    
    <FlatList data={data} renderItem={renderItemEvent} keyExtractor={keyExtractor}/>
    
    )   
}

export default CustomItemList

