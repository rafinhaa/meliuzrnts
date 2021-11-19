import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const Hello: React.FC = () => {
    const [person, setPerson] = React.useState({
        name: "",
        age: ""
    });

    const [showPerson, setShowPerson] = React.useState(false);

    return (
        <View>
            <Text testID="hello" >Hello</Text>
            <TextInput 
                placeholder="Informe seu nome" 
                onChangeText={ text => setPerson({...person, name: text})} 
                value={person.name} 
            />
            <TextInput 
                placeholder="Digite algo..." 
                onChangeText={ text => setPerson({...person, age: text})} 
                value={person.age} 
            />
            <Button 
                title="Clique aqui" 
                onPress={() => setShowPerson(true)} 
                testID="button"
            />
            {
                showPerson && (
                    <View>
                        <Text testID="name">{person.name}</Text>
                        <Text testID="age">{person.age}</Text>
                    </View>
                )
            }
        </View>
    )
}

export default Hello;