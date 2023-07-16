import React, { useState } from 'react'
import tailwind from 'twrnc'
import { Link, useNavigation } from '@react-navigation/native'
import { Pressable, SafeAreaView, View, Text, ScrollView, Dimensions } from 'react-native'
import { Button, Icon } from '@rneui/base'
import { Divider } from "@react-native-material/core";
import MyInput from "../Components/MyInput"
import { setConfirmPassword, setEmail, setPassword, setUsername, CheckPassword } from '../features/RegisterSlices'
import { useSelector } from 'react-redux'


const Registration = () => {
    const naviagation = useNavigation()
    const username = useSelector(state => state.register.username)
    const email = useSelector(state => state.register.email)
    const password = useSelector(state => state.register.password)
    const cofirmPassword = useSelector(state => state.register.confirmPassword)
    const CheckPassword = useSelector(state => state.register.isConfirmPasswordError)



    return (
        <SafeAreaView style={tailwind` w-full h-full`}>
            <Pressable
                style={tailwind`flex justify-center items-start bg-black absolute top-0 left-5 z-50 w-full h-35`}
                onPress={() => naviagation.navigate("Log")}
            >
                <Icon
                    color="white"
                    name="angle-left"
                    size={40}
                    type="font-awesome"
                    brand={false}
                />
            </Pressable>

            <ScrollView
                style={tailwind`w-full h-full py-35 flex  bg-black`}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: Dimensions.get('window').height / 4 }}
                showsVerticalScrollIndicator={false}
            >

                <View style={tailwind`flex justify-center items-center w-80`}>

                    {/* Title */}
                    <Text style={tailwind`text-white self-start  pb-5 text-4xl font-bold`}>Register</Text>

                    {/* Username input */}
                    <MyInput
                        lablel={"Username"}
                        leftIcon={"user"}
                        rightIcon={["close"]}
                        placeHolder={"Please entere username"}
                        Catcher={setUsername}
                        value={username}
                    />


                    {/* Input email */}
                    <MyInput
                        lablel={"Email"}
                        leftIcon={"at"}
                        rightIcon={["close"]}
                        placeHolder={"Please entere email"}
                        Catcher={setEmail}
                        value={email}
                    />
                    {/* password input  */}
                    <MyInput
                        lablel={"Password"}
                        leftIcon={"lock"}
                        rightIcon={["eye", "eye-slash"]}
                        placeHolder={"Please entere password"}
                        Catcher={setPassword}
                        value={password}
                    />

                    {/* confirm password input  */}
                    <MyInput
                        lablel={"Confirm Password"}
                        leftIcon={"lock"}
                        rightIcon={["eye", "eye-slash"]}
                        placeHolder={"Please entere password"}
                        Catcher={setConfirmPassword}
                        value={cofirmPassword}
                    />

                    {/* Register button */}
                    <Button
                        buttonStyle={tailwind`border-2 border-[#8687e7] bg-[#8687e7] rounded-md w-80 h-14 px-5 `}
                        containerStyle={{ margin: 5 }}
                        disabled={CheckPassword}
                        disabledStyle={{
                            backgroundColor: "#4c4c7c",
                            borderColor: "#4c4c7c"
                        }}
                        disabledTitleStyle={tailwind`text-zinc-400 text-center text-xl font-normal`}
                        loadingProps={{ animating: true }}
                        loadingStyle={{}}
                        title="Register"
                        titleProps={{}}
                        titleStyle={[tailwind`text-white text-center text-xl font-normal`, { marginHorizontal: 5 }]}
                    />

                    {/* OR */}
                    <View style={tailwind`flex-row justify-center gap-3 items-center w-80 mt-5`}>
                        <Divider style={tailwind`w-1/2 bg-zinc-500 `} />
                        <Text style={tailwind`text-zinc-500 text-center text-lg font-normal`}>OR</Text>
                        <Divider style={tailwind`w-1/2 bg-zinc-500`} />
                    </View>

                    {/* Login with Google */}
                    <Button
                        buttonStyle={tailwind`border-1 border-[#8687e7]  rounded-md w-80 h-14 px-5 `}
                        containerStyle={[tailwind`py-5`, { margin: 5 }]}
                        disabledStyle={{
                            backgroundColor: "#4c4c7c",
                            borderColor: "#4c4c7c"
                        }}
                        icon={<Icon
                            name="google"
                            size={20}
                            color={"white"}
                            type='font-awesome'
                        />}
                        title="Login with Google"
                        titleStyle={[tailwind`text-white text-center text-xl font-normal`, { marginHorizontal: 10 }]}
                        type="outline"
                    />

                </View>

                {/* Already have an account? */}
                <View style={tailwind`flex justify-center items-center w-80 my-8`}>
                    <Text style={tailwind`text-zinc-500 self-center text-md font-bold`}>
                        Already have an account? <Link style={tailwind`text-white underline`} to={"/Login"}>Log in</Link> now
                    </Text>
                </View>

            </ScrollView>

        </SafeAreaView >
    )
}

export default Registration