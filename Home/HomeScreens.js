import { View, Text, Image, Pressable, SafeAreaView } from 'react-native'
import tailwind from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/HomeSlices'
import { useNavigation } from '@react-navigation/native'



const data = [
    {
        id: 0,
        title: 'Manage your tasks',
        description: 'You can easily manage all of your daily tasks in DoMe for free',
        image: require('../assets/Home-assets/Fig-1.png'),
        now: "next",
        back: " "
    },
    {
        id: 1,
        title: 'Create daily routine',
        description: 'In Uptodo  you can create your personalized routine to stay productive',
        image: require('../assets/Home-assets/Fig-2.png'),
        now: "next",
        back: "back"
    },
    {
        id: 2,
        title: 'Orgonaize your tasks',
        description: 'You can organize your daily tasks by adding your tasks into separate categories',
        image: require('../assets/Home-assets/Fig-3.png'),
        now: "GET STARTED",
        back: "back"
    },
]
const HomeScreens = () => {
    const counter = useSelector((state) => state.Home.counter)
    const dispatch = useDispatch()

    const navigation = useNavigation();
    return (
        <SafeAreaView style={tailwind`w-full h-full flex items-center justify-center bg-black`}>
            <View style={tailwind`flex justify-center items-center relative`}>
                <Pressable
                    style={tailwind`bg-transparent rounded-md px-5 py-2 max-h-14 absolute top-[-105px] left-8 z-1000`}
                    onPress={() => navigation.navigate("Log")}
                >
                    <Text style={tailwind`text-zinc-500 text-center text-xl font-normal`}>Skip</Text>
                </Pressable>

                <Image
                    style={[tailwind`w-50 h-50 flex items-center justify-center`, { resizeMode: 'contain' }]}
                    source={data[counter].image}
                />
                <View style={tailwind` w-full flex-row items-center justify-start gap-2 py-9`}>
                    <View
                        style={tailwind`w-7 h-1 rounded-md bg-zinc-200 ${(data[counter].id == 0) ? "bg-zinc-200" : "bg-zinc-500"} `}
                        onPress={(e) => console.log(e.target)}
                    ></View>
                    <View style={tailwind`w-7 h-1 rounded-md bg-zinc-200 ${(data[counter].id == 1) ? "bg-zinc-200" : "bg-zinc-500"}`} ></View>
                    <View style={tailwind`w-7 h-1 rounded-md bg-zinc-200 ${(data[counter].id == 2) ? "bg-zinc-200" : "bg-zinc-500"}`} ></View>

                </View>
                <Text style={tailwind`text-white text-center pb-5 text-3xl font-semibold`}>{data[counter].title}</Text>
                <Text style={tailwind`text-white text-center p-5 text-xl font-normal`}>{data[counter].description}</Text>
                <View style={[tailwind`flex-row justify-between px-8 items-end`, { width: 400, height: 100 }]}>
                    <Pressable
                        onPress={() => dispatch(decrement())}
                        style={tailwind`bg-transparent rounded-md px-5 py-2 max-h-14`}>
                        <Text style={tailwind`text-zinc-500 text-center text-xl font-normal uppercase`}>{data[counter].back}</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => (counter == 2) ? navigation.navigate("Log") : dispatch(increment())}
                        style={[tailwind`rounded-md px-5 py-2  w-1/2 max-h-14`, { backgroundColor: "#8875ff" }]}>
                        <Text
                            style={tailwind`text-white text-center text-xl font-normal uppercase`}>{data[counter].now}</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreens