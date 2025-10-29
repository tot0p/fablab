---
title: "Arduino Basics"
description: "Getting started with Arduino microcontroller programming"
---

# Arduino Basics

Arduino is a great platform for learning electronics and programming. This tutorial will get you started with your first Arduino project.

## What You'll Need

- Arduino Uno or compatible board
- USB cable (Type A to Type B)
- LED
- 220Ω resistor
- Breadboard
- Jumper wires

## Setting Up Arduino IDE

1. Download Arduino IDE from [arduino.cc](https://www.arduino.cc/en/software)
2. Install the software on your computer
3. Connect your Arduino via USB
4. Select your board type: **Tools > Board > Arduino Uno**
5. Select the correct port: **Tools > Port**

## Your First Sketch: Blink LED

```cpp
// Pin 13 has an LED connected on most Arduino boards
int led = 13;

// The setup function runs once when you press reset
void setup() {
  // Initialize digital pin LED_BUILTIN as an output
  pinMode(led, OUTPUT);
}

// The loop function runs over and over again forever
void loop() {
  digitalWrite(led, HIGH);   // Turn the LED on
  delay(1000);               // Wait for a second
  digitalWrite(led, LOW);    // Turn the LED off
  delay(1000);               // Wait for a second
}
```

## Understanding the Code

### Structure
- `setup()`: Runs once when Arduino starts
- `loop()`: Runs continuously after setup()

### Functions Used
- `pinMode(pin, mode)`: Sets pin as INPUT or OUTPUT
- `digitalWrite(pin, value)`: Sets pin HIGH (5V) or LOW (0V)
- `delay(milliseconds)`: Pauses execution

## Building the Circuit

1. Connect long leg of LED to pin 13
2. Connect short leg of LED to one end of resistor
3. Connect other end of resistor to GND (ground)

## Next Steps

Try these modifications:
- Change the delay values to make it blink faster/slower
- Use different pins
- Add more LEDs
- Try different patterns

## Common Issues

### Upload Problems
- Check USB connection
- Verify correct board and port selection
- Try pressing reset button before upload

### LED Not Working
- Check polarity (long leg = positive)
- Verify resistor connection
- Test LED with multimeter

Ready for more? Check out our [sensor tutorials](/docs/tutorials/sensors/) next!