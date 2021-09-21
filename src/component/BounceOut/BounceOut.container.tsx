/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {
  IBounceOutContainerProps,
  BounceOutPresentation,
  Constant,
  BouncPreset,
} from '.';

export const BounceOut: React.FC<IBounceOutContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  type = 'less',
}) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(Constant.MAX_SCALE);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        transform: [{ scale: scale.value }],
      };
    },
  );

  useEffect(() => {
    onAnimateScale();
    onAnimateOpacity();
  }, []);

  const onAnimateScale = () => {
    scale.value = withDelay(
      delayInMS,
      withSequence(
        withSpring(0.9, BouncPreset[type]),
        withTiming(
          Constant.MIN_SCALE,
          {
            duration: Constant.DEFAULT_DURATION_IN_MS,
          },
          onFinishAnimatedScale,
        ),
      ),
    );
  };

  const onAnimateOpacity = () =>
    (opacity.value = interpolate(
      scale.value,
      [0.8, Constant.MAX_OPACITY],
      [Constant.MIN_SCALE, Constant.MAX_SCALE],
      Extrapolate.CLAMP,
    ));

  const onFinishAnimatedScale = (isFinished: boolean) => {
    'worklet';
    if (isFinished) {
      scale.value = Constant.MAX_SCALE;
      opacity.value = Constant.MAX_OPACITY;
    }
  };

  return (
    <BounceOutPresentation containerStyle={animatedStyle}>
      {children}
    </BounceOutPresentation>
  );
};
