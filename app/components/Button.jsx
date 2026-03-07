import { Pressable, StyleSheet } from "react-native";

interface IButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: IButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#F05221",
    alignItems: "center",
    width: "60%",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});