import React, { useState } from 'react'
import tailwind from 'twrnc'
import { Link, useNavigation } from '@react-navigation/native'
import { Pressable, SafeAreaView, View, Text } from 'react-native'
import { Button, Icon } from '@rneui/base'
import { Input } from "@rneui/base";
import { Divider } from "@react-native-material/core";




const Connection = () => {
    const naviagation = useNavigation()

    const [isempty, setEmpty] = useState(true)
    const [isShow, setShow] = useState(true)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (e) => {
        setUsername(e)
        if (e == "") {
            setEmpty(true)
        } else {
            setEmpty(false)
        }
    }
    const handlePassword = (e) => {
        setPassword(e)
    }
    return (
        <SafeAreaView style={tailwind`w-full h-full py-35 flex items-center justify-between bg-black relative`}>
            <Pressable
                style={tailwind`flex justify-center items-center absolute top-15 left-5`}
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
            <View style={tailwind`flex justify-center items-center w-80`}>
                <Text style={tailwind`text-white self-start  pb-15 text-4xl font-bold`}>Login</Text>
                <Input
                    disabledInputStyle={{ background: "#ddd" }}
                    inputContainerStyle={tailwind`border-2 border-zinc-500 rounded-md w-80 h-14 px-5`}
                    inputStyle={tailwind`text-white text-lg font-normal`}
                    label="Username"
                    labelStyle={tailwind`text-white text-lg font-normal my-3`}
                    leftIcon={<Icon name="user" size={20} color={"white"} type='font-awesome' />}
                    leftIconContainerStyle={tailwind`mr-5`}
                    rightIcon={
                        <Icon
                            name={(isempty == false) ? "close" : ""}
                            size={20}
                            color={"white"}
                            onPress={() => {
                                setUsername("")
                                setEmpty(true)
                            }}
                        />
                    }
                    placeholder="Enter your username"
                    onChangeText={(e) => handleUsername(e)}
                    value={username}
                />
                <Input
                    disabledInputStyle={{ background: "#ddd" }}
                    inputContainerStyle={tailwind`border-2 border-zinc-500 rounded-md w-80 h-14 px-5`}
                    inputStyle={tailwind`text-white text-lg font-normal`}
                    label="Password"
                    labelStyle={tailwind`text-white text-lg font-normal my-3`}
                    leftIcon={<Icon name="lock" size={20} color={"white"} type='font-awesome' />}
                    leftIconContainerStyle={tailwind`mr-5`}
                    rightIcon={
                        <Icon
                            name={(isShow == false) ? "eye" : "eye-slash"}
                            size={20}
                            color={"white"}
                            onPress={() => {
                                setShow(prev => !prev)
                                setEmpty(true)
                            }}
                            type='font-awesome'
                        />
                    }
                    placeholder="Enter your password"
                    onChangeText={(e) => handlePassword(e)}
                    value={password}
                    secureTextEntry={isShow}
                />

                <Button
                    buttonStyle={tailwind`border-2 border-[#8687e7] bg-[#8687e7] rounded-md w-80 h-14 px-5 `}
                    containerStyle={{ margin: 5 }}
                    disabled={(password == "" || username == "") ? true : false}
                    disabledStyle={{
                        backgroundColor: "#4c4c7c",
                        borderColor: "#4c4c7c"
                    }}
                    disabledTitleStyle={tailwind`text-zinc-400 text-center text-xl font-normal`}
                    loadingProps={{ animating: true }}
                    loadingStyle={{}}
                    title="Login"
                    titleProps={{}}
                    titleStyle={[tailwind`text-white text-center text-xl font-normal`, { marginHorizontal: 5 }]}
                />
                <View style={tailwind`flex-row justify-center gap-3 items-center w-80 mt-5`}>
                    <Divider style={tailwind`w-1/2 bg-zinc-500 `} />
                    <Text style={tailwind`text-zinc-500 text-center text-lg font-normal`}>OR</Text>
                    <Divider style={tailwind`w-1/2 bg-zinc-500`} />
                </View>
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
                    titleProps={{}}
                    titleStyle={[tailwind`text-white text-center text-xl font-normal`, { marginHorizontal: 5 }]}
                    type="outline"
                />
            </View>
            <View style={tailwind`flex justify-center items-center w-80`}>
                <Text style={tailwind`text-zinc-500 self-center text-md font-bold`}>
                    Don’t have an account? <Link style={tailwind`text-white underline`} to={"/Registration"}>Register</Link>
                </Text>
            </View>


        </SafeAreaView>
    )
}

export default Connection