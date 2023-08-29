import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Image, Platform, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from "../components/categories";
import SortCategories from "../components/sortCategories";
import Destinations from "../components/destinations";

const ios = Platform.OS === "ios";
const topMargin = ios ? 'mt-3' : 'mt-10';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`bottom-0 ${topMargin}`}>
                {/* avatar */}
                <View style={tw`mx-5 flex-row justify-between items-center mb-10`}>
                    <Text style={tw`font-bold text-6x2 text-neutral-700`}>
                        Let's Discover
                    </Text>
                    <TouchableOpacity>
                        <Image
                            source={require("../../assets/images/shibaicon.avif")}
                            style={tw`w-12 h-12 rounded-full`}
                        />
                    </TouchableOpacity>
                </View>
                {/* search bar */}
                <View style={tw`mx-5 mb-4`}>
                    <View style={tw`flex-row items-center bg-neutral-100 rounded-full p-4 ml-2 pl-6`}>
                        <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
                        <TextInput
                            placeholder="Search destination"
                            placeholderTextColor="gray"
                            style={tw`flex-1 text-base mb-1 pl-1 tracking-wider`}
                        />
                    </View>
                    {/* catergories */}
                    <View style={tw`mb-4`}>
                        <Categories />
                    </View>
                    {/* sort categories */}
                    <View style={tw`mb-4`}>
                        <SortCategories/>
                    </View>
                    {/* destination */}
                    <View>
                        <Destinations />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;