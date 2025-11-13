import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AlignmentMap, VStackProps} from './StacksUtils';

export const VStack = ({
  spacing,
  alignment = 'center',
  style,
  children,
}: VStackProps) => {
  return (
    <View style={[styles.vStack, AlignmentMap.vstack[alignment], style]}>
      {spacing && spacing !== 0
        ? React.Children.map(children, child => (
            <>
              <View style={{height: spacing}} />
              {child}
              <View style={{height: spacing}} />
            </>
          ))
        : children}
    </View>
  );
};

const styles = StyleSheet.create({
  vStack: {
    flexDirection: 'column',
  },
});
