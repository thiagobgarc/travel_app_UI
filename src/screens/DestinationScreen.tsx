import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {ClockIcon, MapPinIcon, SunIcon} from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const DestinationScreen = (props) => {
    const item = props.route.params;
    const navigation = useNavigation();
    const [isFavourite, setIsFavourite] = useState(false);
    return (
        <View style={tw`bg-white flex-1`}>
            <Image
                source={item.image}
                style={tw`w-100 h-100`}
            />
            <StatusBar style={'light'}/>
            {/* back button */}
            <SafeAreaView style={tw`flex-row justify-between items-center w-full absolute`}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw`p-2 rounded-full ml-4 bg-white opacity-50`}>
                    <ChevronLeftIcon size={30} color="grey" 
                    strokeWidth={4}
                    />
                </TouchableOpacity>
                {/* favorite button */}
                <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)} style={tw`p-2 rounded-full mr-4 bg-white opacity-50`}>
                    <HeartIcon size={30} color={isFavourite? 'red': 'grey'} strokeWidth={4}/>
                </TouchableOpacity>
            </SafeAreaView>
            {/* title */}
            <View style={tw`px-5 flex flex-1 justify-between bg-white pt-8 rounded-tl-15 rounded-tr-15 -mt-14`}>
                <ScrollView showsVerticalScrollIndicator=  {false} style={tw`mt-5`}>
                    <View style={tw`flex-row justify-between items-start`}>
                        <Text style={tw`font-bold flex-1 text-7x1 text-neutral-700`}>
                            {item?.title}
                        </Text>
                        <Text style={tw`font-bold text-7x1 text-orange-500 font-semibold`}>
                            ${item?.price}
                        </Text>
                    </View>
                    <Text style={tw`text-neutral-700 font-semibold text-4x1 tracking-wide mt-4`}>
                        {item?.longDescription}
                    </Text>
                    <View style={tw`flex-row justify-between mx-1`}>
                        {/* one duartion */}
                        <View style={tw`flex-row mt-4 items-start`}>
                            <ClockIcon size={22} color="skyblue" />
                            <View style={tw`flex ml-2 mt-0`}>
                                <Text style={tw`text-neutral-700 font-bold text-4x1`}>
                                    {item.duration}
                                </Text>
                                <Text style={tw`text-neutral-600 font-bold`}>
                                    Duration
                                </Text>
                            </View>
                        </View>
                            {/* two duartion */}
                            <View style={tw`flex-row mt-4 items-start`}>
                            <MapPinIcon size={22} color="red" />
                            <View style={tw`flex ml-2 mt-0`}>
                                <Text style={tw`text-neutral-700 font-bold text-4x1`}>
                                    {item.distance}
                                </Text>
                                <Text style={tw`text-neutral-600 font-bold`}>
                                    Distance
                                </Text>
                            </View>
                        </View>
                            {/* three duartion */}
                            <View style={tw`flex-row mt-4 items-start`}>
                            <SunIcon size={22} color="orange" />
                            <View style={tw`flex ml-2 mt-0`}>
                                <Text style={tw`text-neutral-700 font-bold text-4x1`}>
                                    {item.weather}
                                </Text>
                                <Text style={tw`text-neutral-600 font-bold`}>
                                    Sunny
                                </Text>
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>
                <TouchableOpacity style={tw`mb-6 mx-auto flex justify-center items-center rounded-full w-50 h-15 bg-orange-500`}>
                    <Text style={tw`text-white font-bold text-5x1`}>
                        Book Now
                    </Text>
                </TouchableOpacity>
        </View>
        </View>
    );
}

export default DestinationScreen;

const styles = StyleSheet.create({
    element: {
        paddingLeft: 5,
        paddingRight: 5,
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingTop: 8,
        marginTop: -14,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
      },
})