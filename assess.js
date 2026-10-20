import React, { useState } from "react";
import { Text } from "react-native";
export default function Assessment() {
    const [score, setScore] = useState(78);
    const grade = () => {
        if(score >= 80) {
            return (<Text>A</Text>);
        } else if(score >= 50) {
            return (<Text>B</Text>);
        } else {
            return (<Text>C</Text>);
        }
    }
    const greaterThanTen = (num) => {
        const number=[3,8,12,5,20];
        return ( <Text>{number.filter(n => n > 10)}</Text> );
    
    }
    const fullName = () => {
        const firstName = "Amna";
        const lastName = "Mushtaq";
        return (<Text>{firstName} {lastName}</Text>);
    }
    const names_length = () => {
        const names=["Ali", "Sara", "Omar", "Hina"];
        return ( <Text>{names.filter(name => name.length > 4)}</Text> );
    }
    
    const canEdit=()=>{
        const users = [
            { name: "Ali", isActive: true , role: "intern" },
            { name: "Sara", isActive: false, role: "user" },
            { name: "Omar", isActive: true, role: "intern" },
            { name: "Hina", isActive: false, role: "user" }
        ];
        return (<Text>{users.filter(user => user.isActive && user.role === "intern")}</Text>);
    }
    return (
        <Text>
            Grade: {grade()} <br />
            Greater than 10: {greaterThanTen()} <br />
            Full Name: {fullName()} <br />
            Names with length less Then 4: {names_length()} <br />
            Can Edit Users: {canEdit()}
        </Text>
    );
}
