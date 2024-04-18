/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Time blocks.
 *     Arduino built-in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.minisobot_actuator');

goog.require('Blockly.Arduino');


//*************************************************************************
//Led RGB
//*************************************************************************
Blockly.Arduino['led_rgb'] = function(block) {
  
  var color_red = block.getFieldValue('lightRed');
  var color_green = block.getFieldValue('lightGreen');
  var color_blue = block.getFieldValue('lightBlue');
  
  //Define se a cor vai estar acesa ou apagada
  
  switch(color_red) {
      case '#ff0000':
        var val_lightred = '255';
        break;
        case '#ffffff':
        var val_lightred = '0';
        break;
  }
  
  switch(color_green) {
      case '#00ff00':
        var val_lightgreen = '255';
        break;
        case '#ffffff':
        var val_lightgreen = '0';
        break;
  }
  
  switch(color_blue) {
      case '#0000ff':
        var val_lightblue = '255';
        break;
        case '#ffffff':
        var val_lightblue = '0';
        break;
  }

  Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

  var code = 'robot.led_rgb('+val_lightred+','+val_lightgreen+','+val_lightblue+');\n';		
  return code;
};


//*************************************************************************
//Buzzer
//*************************************************************************
Blockly.Arduino['buzzer'] = function(block) {
  
  var buzzer_note = block.getFieldValue('note_buzzer');
  var duration_ = block.getFieldValue('duration');

  Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

  //var code = 'robot.buzzer('+ buzzer_note +','+ duration_+');\n';		
  var code = 'robot.buzzer('+ buzzer_note +');\n';	
  return code;
};

//*************************************************************************
//Stop Buzzer
//*************************************************************************
Blockly.Arduino['stop_buzzer'] = function(block) {
  
  Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

  var code = 'robot.stop_buzzer();\n';		
  return code;
};

