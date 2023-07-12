import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Achievements');
  const Tabs = ["Achievements", "Chest"]
  const [clickId, setClickId] = useState(0);

  const handleTabPress = (tab, index) => {
    setClickId(index);
    

  };
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.currentBalance}>Current Balance : 100</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ask Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
       
        {Tabs.map((tab, index)=>{

          return(
            <TouchableOpacity key={index} style={index === clickId ? styles.activeTab : styles.tab} onPress={(item)=>{handleTabPress(item, index)}}><Text style={styles.tabText}>{tab}</Text></TouchableOpacity>
          )

        })}
      </View>
<View>{
(clickId === 1)? 
      
        <View style={styles.chestLogoContainer}>
          <Image
            source={require('./images/chest-image.png')}
            style={styles.chestLogo}
          />
          <Text style={styles.amount}>Amount: 560</Text>
        </View>:
      <Text style={styles.logo}>Achievements Logo</Text>
      
    }
</View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  currentBalance: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    display:"flex",
    alignItems: 'center',
    justifyContent: 'center',
   marginTop: 100
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: 300
  },
  tab: {
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
    width:150,
    height:55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: 'blue',
    width:150,
    height:55,
    alignItems: 'center',
    justifyContent: 'center',

  },
  tabText: {
    color: 'white',
    fontSize: 16,
    textAlign:"center",
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chestLogoContainer: {
   
  },
  chestLogo: {
    marginTop:20,
    width:200,
    height:200
  },
  amount: {
    fontSize: 16,
  },
});

export default HomeScreen;