import colors from "@/styles/colors";
import { FC } from "react";
import Svg, { Path } from "react-native-svg";

const PersonIcon: FC<IconProps> = ({ size, width = 14, height = 20, color = colors.orangeBase }) => {
  return (
    <Svg width={size || width} height={size || height} viewBox="0 0 14 20" fill="none">
      <Path d="M7.01879 7.0893C8.68583 7.0893 10.0372 5.72617 10.0372 4.04465C10.0372 2.36314 8.68583 1 7.01879 1C5.35174 1 4.00033 2.36314 4.00033 4.04465C4.00033 5.72617 5.35174 7.0893 7.01879 7.0893Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12.5754 15.9824C11.1265 19.2652 7.00003 18.9946 7.00003 18.9946C7.00003 18.9946 2.87078 19.2544 1.4246 15.9824C1.14471 15.3529 1 14.6709 1 13.981C1 13.2912 1.14471 12.6092 1.4246 11.9797C2.87078 8.69691 7.00003 8.96751 7.00003 8.96751C7.00003 8.96751 11.1265 8.70774 12.5754 11.9797C12.8553 12.6092 13 13.2912 13 13.981C13 14.6709 12.8553 15.3529 12.5754 15.9824Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
};

export default PersonIcon;