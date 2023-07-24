import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { UserContext } from "../context/UserContext";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../config/Firebase.Config";

const Profile = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);
  const [profile, setProfile] = useState();
  const handleLogout = async () => {
    try {
      setUser(null);
      navigation.navigate("Login");
    } catch (error) {
      alert("Error " + error);
    }
  };
  useEffect(() => {
    const fetchProfile = async () => {
      const q = query(
        collection(db, "children"),
        where("uid", "==", user.user.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setProfile(doc.data());
      });
    };
    fetchProfile();
  }, [user]);
  console.log("user", profile);

  return (
    profile && (
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>

        <Image
          source={{uri: profile.profile}}
          style={styles.image}
        />

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{profile.name}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Date of Birth:</Text>
            <Text style={styles.value}>20.12.2012</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>123 ABC Road, SE, Calgary, AB</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>School:</Text>
            <Text style={styles.value}>{profile.school}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Current Level:</Text>
            <Text style={styles.value}>-</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Total Savings:</Text>
            <Text style={styles.value}>$560.89</Text>
          </View>
          <View style={styles.logoutButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLogout()}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  content: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    marginBottom: 16,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    width: "50%",
    height: 40,
    backgroundColor: "#5CD306",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;

// const Profile = () => {
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//   const [gender, setGender] = useState('');
//   const [address, setAddress] = useState('');
//   const [school, setSchool] = useState('');
//   const [currentLevel, setCurrentLevel] = useState('');

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.profileText}>Profile</Text>
//         {/* <Image
//           source={require('./images.jpeg')}
//           style={styles.profileImage}
//         /> */}
//       </View>
//       <Text style={styles.label}>Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//         placeholder="Enter your full name"
//       />
//       <Text style={styles.label}>DoB:</Text>
//       <TextInput
//         style={styles.input}
//         value={dob}
//         onChangeText={setDob}
//         placeholder="Enter your date of birth"
//       />

//       <Text style={styles.label}>Gender:</Text>
//       <TextInput
//         style={styles.input}
//         value={gender}
//         onChangeText={setGender}
//         placeholder="Enter your gender"
//       />

//       <Text style={styles.label}>Address:</Text>
//       <TextInput
//         style={styles.input}
//         value={address}
//         onChangeText={setAddress}
//         placeholder="Enter your address"
//       />

//       <Text style={styles.label}>School:</Text>
//       <TextInput
//         style={styles.input}
//         value={school}
//         onChangeText={setSchool}
//         placeholder="Enter your school"
//       />

//       <Text style={styles.label}>Current Level:</Text>
//       <TextInput
//         style={styles.input}
//         value={currentLevel}
//         onChangeText={setCurrentLevel}
//         placeholder="Enter your current level"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });
