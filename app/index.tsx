import Activityinvicatosr from "@/components/handling/Activityinvicator";
import { App, FlatListExample } from "@/components/handling/FlatsListBasic";
import { Text, View } from "react-native";

export default function Home() {
    return (
        <View style={{flex: 1}}>
            <Text>Hello anh emr</Text>
            {/* <FlatsListBasic /> */}
            <App />
            <Activityinvicatosr />
            <FlatListExample />
        </View>
    )
}