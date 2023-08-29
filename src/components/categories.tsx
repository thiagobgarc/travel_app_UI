import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { theme } from "../themes/theme";
import { categoriesData } from "../constants/seedData";

const Categories = () => {
    return (
        <View style={tw`mt-10`}>
            <View style={tw`mx-5 flex-row justify-between items-center`}>
                <Text style={tw`font-semibold text-neutral-700`}>
                    Categories
                </Text>
                <TouchableOpacity>
                    <Text style={{fontSize: wp(4), color: theme.text}}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal: 15}}
                style={tw`mt-4`}
                showsHorizontalScrollIndicator={false}
            >
               {
                categoriesData.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={tw`flex items-center mx-2`}>
                            <Image
                                source={item.image}
                                style={tw`rounded-3x1 w-20 h-20`}
                            />
                            <Text style={tw`text-neutral-700 font-medium mt-2`}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })
               }
            </ScrollView>
        </View>
    );
}

export default Categories;