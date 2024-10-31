import { StyleSheet, Text, View, TouchableOpacity,Alert,  } from 'react-native';
import { theme } from '../theme';

type Props = {
  name:String,
}

export function ShopingListItem({name}:Props) {

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
        <View style={styles.container}>
     
      <View style ={styles.itemContainer}>
      <Text style={styles.itemText}> {name} </Text>
      <TouchableOpacity
      style= {styles.button}
       onPress={handleDelete} 
       activeOpacity={0.8}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>

      </View>
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: 'center',
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
    itemText: {
      fontSize: 18,
       fontWeight:"200"
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
  