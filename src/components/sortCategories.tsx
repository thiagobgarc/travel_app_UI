import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { sortCategoryData } from "../constants/seedData";
import tw from "twrnc";
import { theme } from "../themes/theme";

const SortCategories = () => {
    const [activeSort, setActiveSort] = useState('Popular');
    return (
        <View style= {tw`flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 flex gap-3`}>
            {
                sortCategoryData.map((item, index) => {
                    let isActive = item == activeSort;
                    let activeButtonClass = isActive? 'bg-white shadow-2xl': ''
                    let textBlackOpacity = "bg-opacity-60"
                    let textRed = "text-red-600"
                    return (
                        <TouchableOpacity key={index} onPress={() => setActiveSort(item)} style={tw`p-3 px-4 rounded-full flex ${activeButtonClass}`}>
                            <Text style={tw`font-semibold text-3x1 ${isActive? textRed: textBlackOpacity}`}>{item}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}

export default SortCategories;