import { View, Text } from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import { Icon, Input } from '@rneui/base'
import { useDispatch } from 'react-redux'
import { CheckPassword } from '../features/RegisterSlices'


export default MyInput = ({ lablel, leftIcon, rightIcon = [], placeHolder, Catcher, value }) => {

    const dispatch = useDispatch()
    const [isempty, setEmpty] = useState(true)
    const [data, setData] = useState("")
    const handleData = (e) => {
        setData(e)
        if (e == "") {
            setEmpty(true)
        } else {
            setEmpty(false)
        }
    }


    return (
        <View>
            <Input
                disabledInputStyle={{ background: "#ddd" }}
                inputContainerStyle={tailwind`border-2 border-zinc-500 rounded-md w-80 h-14 px-5`}
                inputStyle={tailwind`text-white text-lg font-normal`}
                label={lablel}
                labelStyle={tailwind`text-white text-lg font-normal my-3`}
                leftIcon={<Icon name={leftIcon} size={20} color={"white"} type='font-awesome' />}
                leftIconContainerStyle={tailwind`mr-2`}
                rightIcon={
                    <Icon
                        name={(isempty == false) ? rightIcon[0] : (rightIcon.length > 2) ? "" : rightIcon[1]}
                        color={"white"}
                        onPress={() => {
                            setData("")
                            setEmpty(true)
                        }}
                        type='font-awesome'
                    />
                }
                placeholder={placeHolder}
                onChangeText={(lablel === "Confirm Password") ? (e) => {
                    dispatch(Catcher(e))
                    dispatch(CheckPassword())
                } : (e) => dispatch(Catcher(e))}
                value={value}
            />
        </View>
    )
}
