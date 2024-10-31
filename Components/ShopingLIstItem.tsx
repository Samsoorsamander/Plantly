import { StyleSheet, Text, View, TouchableOpacity,Alert,  } from 'react-native';
import { theme } from '../theme';

type Props = {
  name:String,
  isCompleted?: boolean,
}

export function ShopingListItem({name, isCompleted}:Props) {

    const handleDelete = () => {
        Alert.alert(`Are you sure you want to delete ${name}`,
        "It will be gone for good",
        [
          {
            text:"Yes",
            onPress:() =>console.log("deleting"),
            style:'destructive'
          },
          {
            text:"Cancel",
            style:'cancel'
          }
        ]
        );
      }
    return (
        
      <View style ={[styles.itemContainer, isCompleted ? styles.completedContainer: undefined]}>
      <Text style={[styles.itemText, isCompleted ? styles.completedText: undefined]}> {name} </Text>
      <TouchableOpacity
      style= {[styles.button, isCompleted ? styles.completedButton: undefined]}
       onPress={handleDelete} 
       activeOpacity={0.8}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      </View>

    )
}

const styles = StyleSheet.create({
    completedContainer:{
      backgroundColor:theme.colorLigtGray,
      borderBottomColor:theme.colorLigtGray
    },
    itemContainer: {
      paddingHorizontal:8,
      paddingVertical: 16,
      borderBottomWidth:1,
      borderBottomColor:"#1a759f",
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'space-between',
    },
    completedButton: {
      backgroundColor:theme.colorGray,

    },
    itemText: {
      fontSize: 18,
       fontWeight:"200"
      },
      completedText: {
        textDecorationColor:theme.colorGray,
        textDecorationLine:"line-through",
        color:theme.colorGray
      },
      button: {
        backgroundColor:theme.colorBalck,
        padding:8,
        borderRadius:6,
      },
      buttonText: {
        color:theme.colorWhite,
        fontWeight:'bold',
        textTransform:'uppercase',
        letterSpacing:1,
      }
  });
  