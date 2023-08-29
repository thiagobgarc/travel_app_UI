import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { destinationData } from "../constants/seedData";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Destinations = () => {
    const navigation = useNavigation();
    return (
        <View style={tw` flex-row justify-between flex-wrap mt-4`}>
            {
                destinationData.map((item, index) => {
                    return (
                        <DestinationCard navigation={navigation} key={index} item={item} />
                    )
                })
            }
        </View>
    );
}

const DestinationCard = ({ item, navigation }) => {

    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Destination', { ...item })} style={tw` w-42 h-69 flex justify-end relative p-4 py-6 mb-6 mt-2`}>
            <Image
                source={item.image}
                style={tw`w-44 h-65 rounded-12 absolute`}
            />
            {/* LinearGradient */}
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={{ width: wp(44), height: hp(15), position: 'absolute', bottom: 0, borderBottomLeftRadius: 44, borderBottomRightRadius: 44 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
            {/* favorites */}
            <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)} style={tw`absolute top-6 right-2 rounded-full p-3 bg-white opacity-40`}>
                <HeartIcon
                    size={20}
                    color={isFavourite? 'red': 'grey'}
                />
            </TouchableOpacity>
            {/* title */}
            <Text style={tw`text-white font-semibold text-3}}`}>
                {item.title}
            </Text>
            <Text style={tw`text-2x1 text-white`}>
                {item.shortDescription}
            </Text>
        </TouchableOpacity>
    )
}

export default Destinations;
