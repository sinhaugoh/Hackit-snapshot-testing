import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export function CustomButton({title}) {
    return (
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>  
    );
}

const styles = StyleSheet.create({
   button: {
       borderWidth: 3,
       borderColor: "purple",
       paddingVertical: 10,
       paddingHorizontal: 20,
       borderRadius: 20
   },
   buttonText: {
       color: "purple",
   }
});