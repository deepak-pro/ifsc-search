import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";

export default function DetailScreen({ route, navigation }) {
  const [data, setData] = useState(route.params.data);

  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView style={styles.srollView}>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>Bank Name</Text>
          <Text style={{ fontSize: 20 }}>{data.BANK ?? "--"} </Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>IFSC</Text>
          <Text style={{ fontSize: 20 }}>{data.IFSC ?? "--"} </Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>Branch</Text>
          <Text style={{ fontSize: 20 }}>{data.BRANCH ?? "--"} </Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>Address</Text>
          <Text style={{ fontSize: 20 }}> {data.ADDRESS ?? "--"} </Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>City</Text>
          <Text style={{ fontSize: 20 }}>{data.CITY ?? "--"} </Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>State</Text>
          <Text style={{ fontSize: 20 }}>{data.STATE ?? "--"} </Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>UPI</Text>
          <Text style={{ fontSize: 20 }}>
            {data.UPI ? "Accepted" : "Not Accepted"}{" "}
          </Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>MICR</Text>
          <Text style={{ fontSize: 20 }}>{data.MICR ?? "---"}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>Bankcode</Text>
          <Text style={{ fontSize: 20 }}>{data.BANKCODE ?? "--"} </Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>NEFT</Text>
          <Text style={{ fontSize: 20 }}>
            {data.NEFT ? "Accepted" : "Not Accepted"}{" "}
          </Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>RTGS</Text>
          <Text style={{ fontSize: 20 }}>
            {data.RTGS ? "Accepted" : "Not Accepted"}{" "}
          </Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={{ fontSize: 15 }}>IMPS</Text>
          <Text style={{ fontSize: 20 }}>
            {data.IMPS ? "Accepted" : "Not Accepted"}{" "}
          </Text>
        </View>
        <Button
          title="Search Another"
          color="green"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },

  srollView: {},

  dataRow: {
    flexDirection: "column",
    justifyContent: "space-around",
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },
});
