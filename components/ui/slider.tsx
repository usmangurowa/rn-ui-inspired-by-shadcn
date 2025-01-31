import RNCSlider from '@react-native-community/slider';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { NAV_THEME } from '~/lib/constants';
/**
 * @docs https://github.com/callstack/react-native-slider?tab=readme-ov-file#-react-native-communityslider-
 */

function Slider(props: React.ComponentProps<typeof RNCSlider>) {
  const { colorScheme } = useColorScheme();
  const {
    minimumValue = 0,
    maximumValue = 1,
    minimumTrackTintColor = NAV_THEME[colorScheme].text,
    maximumTrackTintColor = NAV_THEME[colorScheme].border,
  } = props;
  return (
    <RNCSlider
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor={minimumTrackTintColor}
      maximumTrackTintColor={maximumTrackTintColor}
      {...props}
    />
  );
}

export { Slider };
