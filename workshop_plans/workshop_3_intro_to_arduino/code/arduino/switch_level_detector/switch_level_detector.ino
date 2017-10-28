
int switchPin = 9;
int ledPin = 8;

int switchState;
void setup() {
  // put your setup code here, to run once:
  pinMode(switchPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  switchState = digitalRead(switchPin);
  
  if (switchState)
    digitalWrite(ledPin, HIGH);
  else {
    digitalWrite(ledPin, LOW);
  }
}
