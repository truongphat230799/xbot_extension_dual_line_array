const ColorBlock = '#cb2026';
const ColorBlock2 = '#44cbc6';
const ImgUrl = 'https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_rover/images/';

// Line Array

Blockly.Blocks['line_sensor_read_all'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "line_sensor_read_all",
        "message0": "%1 cảm biến line cổng %6 phát hiện S1 %2 S2 %3 S3 %4 S4 %5",
        "args0": [
          {
            "type": "field_image",
            "src": ImgUrl + 'line.svg',
            "width": 15,
            "height": 15,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "S1",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S2",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S3",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S4",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },  
          
        ],
        "colour": ColorBlock,
        "output": "Boolean",
        "tooltip": Blockly.Msg.ROVER_LINE_READ_ALL_TOOLTIP,
        "helpUrl": Blockly.Msg.ROVER_LINE_READ_ALL_HELPURL
      }
    );
  }
};

Blockly.Python["line_sensor_read_all"] = function (block) {
  
  var S1 = block.getFieldValue("S1");
  var S2 = block.getFieldValue("S2");
  var S3 = block.getFieldValue("S3");
  var S4 = block.getFieldValue("S4");
  var port = block.getFieldValue('port');
  Blockly.Python.definitions_['import_line_sensor1'] = 'from xbot_line_sensor import *';
  Blockly.Python.definitions_['create_line_sensor1'] = 'line_sensor1 = LineSensorI2C('+port+')';
  // TODO: Assemble Python into code variable.
  var code = "line_sensor1.read("+ port+") == (" + S1 + ", " + S2 + ", " + S3 + ", " + S4 + ")";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['line_sensor_read_single'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "line_sensor_read_single",
        "message0": "%1 cảm biến line cổng %3 đọc giá trị %2",
        "args0": [
          {
            "type": "field_image",
            "src": ImgUrl + 'line.svg',
            "width": 15,
            "height": 15,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "pin",
            "options": [
              ["S1", "1"],
              ["S2", "2"],
              ["S3", "3"],
              ["S4", "4"],
            ],
          },
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          }, 
        ],
        "colour": ColorBlock,
        "output": "",
        "tooltip": Blockly.Msg.ROVER_LINE_READ_SINGLE_TOOLTIP,
        "helpUrl": Blockly.Msg.ROVER_LINE_READ_SINGLE_HELPURL
      }
    );
  }
};

Blockly.Python["line_sensor_read_single"] = function (block) {
  var port = block.getFieldValue('port');
  var pin = block.getFieldValue("pin");
  Blockly.Python.definitions_['import_line_sensor1'] = 'from xbot_line_sensor import *';
  Blockly.Python.definitions_['create_line_sensor1'] = 'line_sensor1 = LineSensorI2C('+port+')';
  // TODO: Assemble Python into code variable.
  var code = "line_sensor1.read("+port+", " + pin + ")";
  return [code, Blockly.Python.ORDER_NONE];
};

// Line Array 2



Blockly.Blocks['line_sensor2_read_all'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "line_sensor_read_all",
        "message0": "%1 cảm biến line cổng %6 phát hiện S1 %2 S2 %3 S3 %4 S4 %5",
        "args0": [
          {
            "type": "field_image",
            "src": ImgUrl + 'line.svg',
            "width": 15,
            "height": 15,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "S1",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S2",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S3",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S4",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },  
          
        ],
        "colour": ColorBlock2,
        "output": "Boolean",
        "tooltip": Blockly.Msg.ROVER_LINE_READ_ALL_TOOLTIP,
        "helpUrl": Blockly.Msg.ROVER_LINE_READ_ALL_HELPURL
      }
    );
  }
};

Blockly.Python["line_sensor2_read_all"] = function (block) {
  var S1 = block.getFieldValue("S1");
  var S2 = block.getFieldValue("S2");
  var S3 = block.getFieldValue("S3");
  var S4 = block.getFieldValue("S4");
  var port = block.getFieldValue('port');
  Blockly.Python.definitions_['import_line_sensor2'] = 'from xbot_line_sensor_stm import *';
  Blockly.Python.definitions_['create_line_sensor2'] = 'line_sensor2 = LineSensor2('+port+')';
  // TODO: Assemble Python into code variable.
  var code = "line_sensor1.read("+ port+") == (" + S1 + ", " + S2 + ", " + S3 + ", " + S4 + ")";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['line_sensor2_read_single'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "line_sensor_read_single",
        "message0": "%1 cảm biến line cổng %3 đọc giá trị %2",
        "args0": [
          {
            "type": "field_image",
            "src": ImgUrl + 'line.svg',
            "width": 15,
            "height": 15,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "pin",
            "options": [
              ["S1", "1"],
              ["S2", "2"],
              ["S3", "3"],
              ["S4", "4"],
            ],
          },
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          }, 
        ],
        "colour": ColorBlock2,
        "output": "",
        "tooltip": Blockly.Msg.ROVER_LINE_READ_SINGLE_TOOLTIP,
        "helpUrl": Blockly.Msg.ROVER_LINE_READ_SINGLE_HELPURL
      }
    );
  }
};

Blockly.Python["line_sensor2_read_single"] = function (block) {
  var port = block.getFieldValue('port');
  var pin = block.getFieldValue("pin");
  Blockly.Python.definitions_['import_line_sensor2'] = 'from xbot_line_sensor_stm import *';
  Blockly.Python.definitions_['create_line_sensor2'] = 'line_sensor2 = LineSensor2('+port+')';
  // TODO: Assemble Python into code variable.
  var code = "line_sensor2.read("+port+", " + pin + ")";
  return [code, Blockly.Python.ORDER_NONE];
};
