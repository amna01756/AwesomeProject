import React, { useState } from "react";
import { Text } from "react-native";

export default function grade() {
    const Score = 78;
    if(Score >= 80) {
        return (<Text>A</Text>);
    } else if(Score >= 50) {
        return (<Text>B</Text>);
    } else {
        return (<Text>C</Text>);
    }
}
export function greaterThanTen(num) {
    const number=[3,8,12,5,20];
    return ( <Text>{number.filter(n => n > 10)}</Text> );

}
export function fullName() {
    const firstName = "Amna";
    const lastName = "Mushtaq";
    return (<Text>{firstName} {lastName}</Text>);
}
export function names_length() {
    const names=["Ali", "Sara", "Omar", "Hina"];
    return ( <Text>{names.filter(name => name.length > 4)}</Text> );
}

export function canEdit(){
    const users = [
        { name: "Ali", isActive: true , role: "intern" },
        { name: "Sara", isActive: false, role: "user" },
        { name: "Omar", isActive: true, role: "intern" },
        { name: "Hina", isActive: false, role: "user" }
    ];
    return (<Text>{users.filter(user => user.isActive && user.role === "intern")}</Text>);
}

