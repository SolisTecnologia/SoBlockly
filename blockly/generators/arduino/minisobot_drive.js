/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Time blocks.
 *     Arduino built-in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.minisobot_drive');

goog.require('Blockly.Arduino');


//*************************************************************************
//Drive_forward
//*************************************************************************
Blockly.Arduino['drive_forward'] = function(block) {
  
  var speed_ = block.getFieldValue('speed');

  Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

  var code = 'robot.drive_forward(' + speed_ + ');\n';		
  return code;
};



//*******************************************************
//Drive_backward
//*******************************************************
Blockly.Arduino['drive_backward'] = function(block) {
  
  var speed_ = block.getFieldValue('speed');

  Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

  var code = 'robot.drive_backward(' + speed_ + ');\n';		
  return code;
};



//*******************************************************
//Drive_curve_left
//*******************************************************
Blockly.Arduino['drive_curve_left'] = function(block) {
  
  var speed_ = block.getFieldValue('speed');

  Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

  var code = 'robot.drive_curve_left(' + speed_ + ');\n';		
  return code;
};


//*******************************************************
//Drive_curve_right
//*******************************************************
Blockly.Arduino['drive_curve_right'] = function(block) {
  
  var speed_ = block.getFieldValue('speed');

  Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

  var code = 'robot.drive_curve_right(' + speed_ + ');\n';		
  return code;
};



//*******************************************************
//Drive_curve_differential_left
//*******************************************************
Blockly.Arduino['drive_curve_differential_left'] = function(block) {
  
  var speed_ = block.getFieldValue('speed');
  var percent_ = block.getFieldValue('percent');

  Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

  var code = 'robot.drive_curve_differential_left(' + speed_ + ',' + percent_ + ');\n';		
  return code;
};

//*******************************************************
//Drive_curve_differential_right
//*******************************************************
Blockly.Arduino['drive_curve_differential_right'] = function(block) {
  
  var speed_ = block.getFieldValue('speed');
  var percent_ = block.getFieldValue('percent');

  Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

  var code = 'robot.drive_curve_differential_right(' + speed_ + ',' + percent_ + ');\n';		
  return code;
};

//*******************************************************
//Drive_break
//*******************************************************
Blockly.Arduino['drive_break'] = function(block) {

  Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

  var code = 'robot.drive_break();\n';		
  return code;
};