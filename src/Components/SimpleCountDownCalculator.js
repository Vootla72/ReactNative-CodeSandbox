// The return statement in the if block of the useEffect hook is used to clear the interval when the component is unmounted or when the seconds state variable changes.

// Here's how it works:

// When the component mounts, the useEffect hook runs, and a new interval is created using setInterval.

// If the seconds state variable changes (which happens every second in this case), the useEffect hook runs again.

// If the seconds state variable is still greater than 0, the hook simply returns without doing anything, and the interval continues running.

// However, if the seconds state variable has reached 0, the hook calls the function returned by setInterval to clear the interval.

// The component then unmounts or the seconds state variable changes again (which could happen if the component is re-rendered with a new startingSeconds prop, for example), causing the useEffect hook to run again.

// This time, since the seconds state variable is 0, the hook simply returns without doing anything, and the interval remains cleared.

// So the return statement in the if block of the useEffect hook is used to clean up the interval when it's no longer needed, either because the countdown timer has reached 0 or because the component is being unmounted or re-rendered.

//**********No Need of clearInterval in else block*/

// Yes, that's correct. In the original code I provided, clearInterval is only needed in the if block of the useEffect hook to stop the timer when the countdown reaches zero. Once the return statement is executed, the interval will be cleared, and there is no need to call clearInterval again in the else block.

// So the else block can be removed entirely,

import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const SimpleCountDownTimer = ({ maxValue = 10 }) => {
  const [timerCount, setTimerCount] = useState(maxValue);

  //Need to improve on formatTime
  const FormatTime = (time) => {
    if (time < 10) return `0${time}`;
  };

  useEffect(() => {
    if (timerCount > 0) {
      const timer = setInterval(() => {
        setTimerCount((prev) => prev - 1);
      }, 1000);
      //whenever component unmounts or timerCount value becomes zero, here ntg will happen and it eventually clears the interval
      return () => clearInterval(timer);
    }
    // this else is not required
    // else {
    //   clearInterval(timer);
    // }
  }, [timerCount]);

  return (
    <View style={SimpleCounterStyles.container}>
      <Text style={SimpleCounterStyles.text}>{FormatTime(timerCount)}</Text>
    </View>
  );
};

const SimpleCounterStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 800,
  },
});
export default SimpleCountDownTimer;
