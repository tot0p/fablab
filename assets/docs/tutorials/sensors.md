---
title: "Sensor Integration"
description: "Learn to use various sensors with Arduino"
---

# Sensor Integration with Arduino

Sensors allow your Arduino to interact with the physical world. This guide covers common sensors and how to use them.

## Temperature Sensor (DHT22)

The DHT22 measures temperature and humidity with good accuracy.

### Wiring
- VCC → 5V
- GND → GND  
- DATA → Pin 2

### Code
```cpp
#include "DHT.h"

#define DHTPIN 2
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print("% Temperature: ");
  Serial.print(temperature);
  Serial.println("°C");
  
  delay(2000);
}
```

## Ultrasonic Distance Sensor (HC-SR04)

Measures distance using ultrasonic waves, perfect for obstacle detection.

### Wiring
- VCC → 5V
- GND → GND
- Trig → Pin 9
- Echo → Pin 10

### Code
```cpp
const int trigPin = 9;
const int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  long duration, distance;
  
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;
  
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  delay(500);
}
```

## Light Sensor (Photoresistor)

Detects light levels for automatic lighting or day/night detection.

### Wiring
- One leg to A0 through voltage divider
- Other leg to 5V
- 10kΩ resistor from A0 to GND

### Code
```cpp
const int lightPin = A0;
const int ledPin = 13;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int lightLevel = analogRead(lightPin);
  
  Serial.print("Light level: ");
  Serial.println(lightLevel);
  
  // Turn on LED when dark
  if (lightLevel < 200) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
  
  delay(500);
}
```

## Motion Sensor (PIR)

Detects movement for security systems or automatic lighting.

### Wiring
- VCC → 5V
- GND → GND
- OUT → Pin 2

### Code
```cpp
const int pirPin = 2;
const int ledPin = 13;

void setup() {
  Serial.begin(9600);
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int motionState = digitalRead(pirPin);
  
  if (motionState == HIGH) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Motion detected!");
  } else {
    digitalWrite(ledPin, LOW);
  }
  
  delay(100);
}
```

## Combining Sensors

Create more complex projects by combining multiple sensors:

```cpp
// Multi-sensor environmental monitor
void loop() {
  // Read all sensors
  float temp = dht.readTemperature();
  int light = analogRead(lightPin);
  int motion = digitalRead(pirPin);
  
  // Log data
  Serial.print("Temp: "); Serial.print(temp);
  Serial.print("°C, Light: "); Serial.print(light);
  Serial.print(", Motion: "); Serial.println(motion);
  
  // Respond to conditions
  if (temp > 25 && light < 200 && motion == HIGH) {
    // Hot, dark, and motion detected
    // Turn on fan and lights
  }
  
  delay(1000);
}
```

## Tips for Success

- **Calibrate sensors** in your environment
- **Use appropriate delays** to avoid overwhelming Serial output
- **Add filtering** for noisy sensors
- **Plan your wiring** to avoid interference
- **Test sensors individually** before combining

Next: [Motor Control Tutorial](/docs/tutorials/motor-control/)