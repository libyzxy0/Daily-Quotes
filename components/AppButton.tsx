import { Pressable, StyleSheet, Text } from "react-native";
import React from 'react'

type AppButtonProps = {
  disabled: boolean;
  buttonStyles: string;
  textStyles: string;
  color: string;
  onPress: () => {};
  accessibilityLabel: string;
  children: React.ReactNode;
}

export const AppButton = ({
  disabled,
  buttonStyles,
  textStyles,
  color,
  onPress,
  accessibilityLabel,
  children
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: disabled
            ? "#ccc"
            : "#0af2a7",
        },
        styles.container,
        buttonStyles,
      ]}
      disabled={disabled}
      onPress={onPress}
      accessible
      accessibilityLabel={accessibilityLabel || "A Button"}
    >
      <Text style={[styles.text, textStyles]}>
        {children || "Press Me"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: "center",
    borderRadius: 6,
  },
  text: { 
    color: "white",
    fontWeight: '500'
  },
});