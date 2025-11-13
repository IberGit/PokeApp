import {View, StyleSheet} from 'react-native';
import React from 'react';
import {AlignmentMap, HStackProps} from './StacksUtils';

export const HStack = ({
  spacing,
  alignment = 'center',
  style,
  children,
}: HStackProps) => {
  return (
    <View style={[styles.hStack, AlignmentMap.hstack[alignment], style]}>
      {spacing && spacing !== 0
        ? React.Children.map(children, child => (
            <>
              <View style={{width: spacing}} />
              {child}
              <View style={{width: spacing}} />
            </>
          ))
        : children}
    </View>
  );
};

const styles = StyleSheet.create({
  hStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
