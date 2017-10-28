
int switchPin = 9;
int ledPin = 8;
int currentState, prevState, ledState;

void setup() {
  // put your setup code here, to run once:
  pinMode(switchPin, INPUT);
  pinMode(ledPin, OUTPUT);
  
  prevState = digitalRead(switchPin);
  ledState = prevState;
}

void loop() {
  // put your main code here, to run repeatedly:
  
  currentState = digitalRead(switchPin);
  
  if (currentState != prevState) {
    digitalWrite(ledPin, HIGH);
    delay(100);
  } else {
    digitalWrite(ledPin, LOW);
  }
  prevState = currentState;
}
