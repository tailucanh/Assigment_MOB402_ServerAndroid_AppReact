import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../Components/Styles/ManagerStyle";
import Home from "../Screens/Home";
import Users from "../Screens/Users";
import Products from "../Screens/Products";
import Settings from "../Screens/Setting";

const Tab = createBottomTabNavigator();

export default function BottomNav(props) {
  const navigation = props.navigation;
  const user = props.route.params?.user;

  const getTabBarVisible = (route) => {
    const params = route.params;
    if (params) {
      if (params.tabBarVisible === false) {
        return false;
      }
    }
    return true;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#ffffff",
          height: 60,
          borderTopWidth: 0,
          borderTopColor: "transparent",
          elevation: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ user: user }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/images/ic_home.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#4870FF" : "#8E8E93",
                }}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: focused ? "#4870FF" : "#8E8E93",
                }}
              >
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Users}
        initialParams={{ user: user }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/ic_information.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#4870FF" : "#8E8E93",
                }}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: focused ? "#4870FF" : "#8E8E93",
                }}
              >
                Người dùng
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        initialParams={{ user: user }}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/ic_product.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#4870FF" : "#8E8E93",
                }}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: focused ? "#4870FF" : "#8E8E93",
                }}
              >
                Sản phẩm
              </Text>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Setting"
        component={Settings}
        initialParams={{ user: user }}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/ic_setting.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#4870FF" : "#8E8E93",
                }}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: focused ? "#4870FF" : "#8E8E93",
                }}
              >
                Cài đặt
              </Text>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
}
