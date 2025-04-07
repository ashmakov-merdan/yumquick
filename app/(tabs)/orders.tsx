import { Badge } from "@/shared";
import colors from "@/styles/colors";
import { CommonLayout } from "@/templates";
import { FC } from "react"
import { View } from "react-native"

const Checkout: FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.yellowBase }}>
      <CommonLayout>
        <View style={{ paddingHorizontal: 36 }}>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Badge value={"Active"} isActive={true} wrapperStyle={{ flex: 1 }} />
            <Badge value={"Completed"} isActive={false} wrapperStyle={{ flex: 1 }} />
            <Badge value={"Cancelled"} isActive={false} wrapperStyle={{ flex: 1 }} />
          </View>
        </View>
      </CommonLayout>
    </View>
  )
};

export default Checkout;