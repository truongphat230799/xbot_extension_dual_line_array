from machine import Pin, SoftI2C
from micropython import const
import pcf8574
from setting import PORTS_DIGITAL, device_config
from utility import say

class LineSensorI2C(LineSensor):
    def __init__(self, port, address=0x23):
        self.address = address
        if port < 0 or port > 5:
            print('Port not supported')
        self._reset_port(port)

    def _reset_port(self, port):
        self.port = port
        # Grove port: GND VCC SCL SDA
        scl_pin = machine.Pin(PORTS_DIGITAL[port][0])
        sda_pin = machine.Pin(PORTS_DIGITAL[port][1])
        try:
            self.i2c_stm = machine.I2C(1, scl = scl_pin, sda = sda_pin)
            self.stm = stm32_line.STM32(self.i2c_pcf, self.address)
        except:
            self.stm = None
            say('Line finder array 2 not found')

    def read_ss2(self, port, index=None):
        # Do not switch line array port
        # Use detected port during boot only
        #if port != self.port:
        #    self._reset_port(port)

        # 0 white, 1 black
        if self.stm == None:
            return 0

        if index == None:
            return (self.stm.pin(0), self.stm.pin(1), self.stm.pin(2), self.stm.pin(3))

        return self.pcf.pin(index)

