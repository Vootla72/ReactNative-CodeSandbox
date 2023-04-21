import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const CustomCalculator = () => {
  const [operator, setOperator] = useState("");
  const [firstValue, setFirstValue] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  const Calculate = (value) => {
    switch (value) {
      case "+":
        setFirstValue(
          firstValue === 0
            ? parseFloat(displayValue)
            : firstValue + parseFloat(displayValue)
        );
        setDisplayValue(0);
        break;
      case "-":
        setFirstValue(
          firstValue === 0
            ? parseFloat(displayValue)
            : firstValue - parseFloat(displayValue)
        );
        setDisplayValue(0);
        break;

      case "*":
        setFirstValue(
          firstValue === 0
            ? parseFloat(displayValue)
            : firstValue * parseFloat(displayValue)
        );
        setDisplayValue(0);
        break;
      case "/":
        setFirstValue(
          firstValue === 0
            ? parseFloat(displayValue)
            : firstValue / parseFloat(displayValue)
        );
        setDisplayValue(0);
        break;

      default:
        break;
    }
  };

  const handleButtonPress = (value) => {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOperator(value);
      Calculate(value);
    } else if (value === "=") {
      const secondValue = parseFloat(displayValue);
      if (operator === "+") {
        setDisplayValue((firstValue + secondValue).toString());
      } else if (operator === "-") {
        setDisplayValue((firstValue - secondValue).toString());
      } else if (operator === "*") {
        setDisplayValue((firstValue * secondValue).toString());
      } else if (operator === "/") {
        setDisplayValue((firstValue / secondValue).toString());
      }
      setOperator(null); // to reset the operator
      setFirstValue(0);
    } else if (value == "c") {
      setOperator(null);
      setDisplayValue(0);
      setFirstValue(0);
    } else {
      if (displayValue == "0") {
        setDisplayValue(value.toString());
      } else {
        setDisplayValue(displayValue + value.toString());
      }
    }
  };

  const buttons = [
    ["C", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <View style={CustomCalculatorStyles.container}>
      <View style={CustomCalculatorStyles.displayView}>
        <Text style={CustomCalculatorStyles.displayTextStyle}>
          {displayValue}
        </Text>
      </View>
      <View style={CustomCalculatorStyles.buttonsStyles}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={CustomCalculatorStyles.row}>
            {row.map((buttonValue) => (
              <TouchableOpacity
                key={buttonValue}
                style={CustomCalculatorStyles.button}
                onPress={() => handleButtonPress(buttonValue)}
              >
                <Text style={CustomCalculatorStyles.buttonText}>
                  {buttonValue}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const CustomCalculatorStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  displayView: {
    // backgroundColor: 'green',
    // flex: 1,
    justifyContent: "center",
    alignItems: "flex-end", // needs to start the display value from the right end
    paddingVertical: 20,
    borderWidth: 1,
    width: "90%",
  },
  displayTextStyle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
  },
  buttonsStyles: {
    paddingBottom: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1, // this specifies how much the element grow relative to the rest of the flex items, one rep it takes equal spaces
  },
  button: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    margin: 3,
    width: 100,
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default CustomCalculator;

//**********NOTES****//
// basic styling
// 1. total component need to be wrapped in a container -- justifyContent,alignItems,padding and backgroundColor
// 2. two children under container -- one is for display value and another is for calculator buttons component
// 3. For display component-- view -justifyContent,alignItems,padding and backgroundColor && Text-- remember for any text style textAlign,fontSize,color of the text should be defined
// 4. 2nd children for the buttons component- map for the whole matrix m*m - in which first map selects for the row component and second map selects each element (button value) in that respective row
// 5.The row component style should be flexDirection:row and  justifyContent,alignItems,padding,flexGrow
// 6.2nd map style consists of a TouchableOpacity-- in which styling shld be padding   flex: 1, if req and onPressHandler needs to be written and as button value is unique, u can use that itself as a key to the 2nd map fn and text shld be used to display the button value and the styles for it same as text Styles
