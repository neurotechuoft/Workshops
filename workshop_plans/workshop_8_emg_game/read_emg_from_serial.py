import serial
import time

# Replace /dev/ttyACM0 with the serial port that your Arduino is connected to.
# You should be able to view this at the bottom right corner of the Arduino IDE 
# window as "Arduino Uno on <port name>"
serialArduino = serial.Serial('/dev/ttyACM0', 115200)
print("serialArduino.isOpen() = " + str(serialArduino.isOpen()))

def get_emg_sample():
    # Send a request to the Arduino for a sample
    serialArduino.write('?')
    
    # inWaiting() returns the number of bytes available to read from
    # the serial port. If there is nothing for us to read, we keep
    # waiting
    while (serialArduino.inWaiting()==0):
         pass
    data = int(serialArduino.readline().strip());

    return data

while True:
 	sample = get_emg_sample()
 	if (sample == 1):
 		print "Received data: ", sample, "-----------------"
 	else:
 		print "Received data: ", sample

 	# Wait 33 ms to imitate a 30 fps drawing loop
 	time.sleep(0.033)
