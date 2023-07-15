import { View, Text, SafeAreaView, Pressable } from 'react-native'
import tailwind from 'twrnc'
import { Icon, Button } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';

const LogChoices = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tailwind`w-full h-full py-35 flex items-center justify-between bg-black relative`}>
            <Pressable
                style={tailwind`flex justify-center items-center absolute top-15 left-5`}
                onPress={() => navigation.navigate("Home")}
            >
                <Icon
                    color="white"
                    name="angle-left"
                    size={40}
                    type="font-awesome"
                    brand={false}
                />
            </Pressable>
            <View style={tailwind`flex justify-center items-center`}>
                <Text style={tailwind`text-white text-center pb-5 text-3xl font-semibold`}>Welcome to UpTodo</Text>
                <Text style={tailwind`text-white text-center mx-w-90 p-5 text-lg font-normal`}>
                    Please login to your account or create new account to continue
                </Text>
            </View>
            <View style={tailwind`flex justify-center items-center gap-5 mt-10`}>
                <Button
                    buttonStyle={tailwind`bg-[#8875ff] rounded-md w-60 h-14 uppercase`}
                    containerStyle={{ margin: 5 }}
                    loadingProps={{ animating: true }}
                    onPress={() => navigation.navigate("Login")}
                    title="Login"
                    titleStyle={[tailwind`uppercase`, { marginHorizontal: 10 }]}
                />
                <Button
                    buttonStyle={[tailwind`bg-transparent rounded-md w-60 h-14 uppercase`, {
                        borderWidth: 2,
                        borderColor: "#8875ff"
                    }]}
                    containerStyle={{ margin: 5 }}
                    loadingProps={{ animating: true }}
                    onPress={() => navigation.navigate("Registration")}
                    title="Create account"
                    titleStyle={[tailwind`uppercase`, { marginHorizontal: 10 }]}
                />



            </View>

        </SafeAreaView>
    )
}

export default LogChoices









