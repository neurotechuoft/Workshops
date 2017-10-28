// Declare any variables that are global to the whole program here:

// Pin that LED is connected to 
int ledPin = 8;

// Stores the current LED state: HIGH or LOW
int ledState;

void setup() {
  // put your setup code here, to run once:

  // Set the LED Pin to be an output
  pinMode(ledPin, OUTPUT);

  // Initialize the LED State to LOW
  ledState = LOW;
}

void loop() {
  // put your main code here, to run repeatedly:

  // Invert the LED State: 
  //  If ON:  Set to OFF
  //  If OFF: Set to ON
  ledState = !ledState;

  // Write the value of LED state to the pin to turn the
  // LED on or off
  digitalWrite(ledPin, ledState);

  // Put in a delay of 500 milliseconds before switching
  // the state so we can actually see the LED light up.
  //
  // Try increasing or decreasing this, see what happens!
  delay(500);
}
