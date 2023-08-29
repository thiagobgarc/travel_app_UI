import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={tw`flex-1 flex justify-center`}>

            {/* background image */}
            <Image
                source={require("../../assets/images/explore.jpeg")}
                style={tw`w-full h-full absolute`}
            />

            {/* content and gradient */}
            <View style={tw`p-5 pb-10 absolute bottom-10 `}>
            <LinearGradient
                    colors={['transparent', 'rgba(3,105,161,0.2)']}
                    style={{width: wp(100), height: hp(60), position: 'absolute', bottom: 0}}
                    start={{x:0.5, y:1}}
                    end={{x:0.1, y:1}}
                />
                <View style={tw`bottom-0`}>
                <Text style={tw`text-white font-bold text-5xl bottom-3`}>
                    Traveling made easy
                </Text>
                <Text style={tw`text-neutral-200 font-medium font-bold`}>
                    Explore the world with us
                </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={tw`bg-orange-500 mx-auto p-3 px-12 rounded-full top-5`}>
                    <Text style={tw`text-white font-bold`}>
                        Let's go!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default WelcomeScreen;