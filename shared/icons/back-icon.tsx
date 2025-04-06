import { FC } from "react";
import Svg, { Path } from "react-native-svg";

const BackIcon: FC<IconProps> = ({ width=8, height=13, color="#E95322" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 8 13" fill="none">
      <Path d="M5.77989 2L3.05906 4.13579C2.72964 4.39518 2.46281 4.72872 2.27918 5.11069C2.09555 5.49266 2 5.91284 2 6.33868C2 6.76452 2.09555 7.18463 2.27918 7.5666C2.46281 7.94857 2.72964 8.28211 3.05906 8.5415L5.77989 10.6744" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>

  )
};

export default BackIcon;