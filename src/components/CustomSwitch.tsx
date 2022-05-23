import React, { useState } from 'react'
import { Platform, Switch } from 'react-native'

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [isEnable, setIsEnable] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnable(!isEnable);
        onChange(!isEnable);
    };

    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: "#5856D6" }}// color de fondo desactivado o activado
            thumbColor={(Platform.OS === 'android') ? '#fff' : ''}// color de la bolita, en IOS por defecto es blanco
            //ios_backgroundColor="#3e3e3e" //fondo en ios desactivado
            onValueChange={toggleSwitch}
            value={isEnable}
        />
    )
}
