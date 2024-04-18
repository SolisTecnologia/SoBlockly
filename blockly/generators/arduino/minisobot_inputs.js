/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Time blocks.
 *     Arduino built-in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.minisobot_inputs');

goog.require('Blockly.Arduino');

//*************************************************************************
//Read_button
//*************************************************************************

Blockly.Arduino['read_button'] = function(block) {
    Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');
    var status = block.getFieldValue('status_pressed');

    var code = '('+status+'robot.read_button())';
    return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
  
  
//*************************************************************************
//Read Ultrassonic 
//*************************************************************************

Blockly.Arduino['read_ultrassonic'] = function(block) {
  
    Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');
    
    var OPERATORS = {
        'EQ': '==',
        'NEQ': '!=',
        'GT': '>',
        'GTE': '>=',
        'LT': '<',
        'LTE': '<=',
    };
    
    var distance_ = block.getFieldValue('distance');
    var symbol_type = OPERATORS[block.getFieldValue('symbol')];
    
    var code = '( robot.read_ultrasonic() ' +  symbol_type + ' ' + distance_ +' )';
    return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};

  
//*************************************************************************
//Read Line
//*************************************************************************

Blockly.Arduino['read_line'] = function(block) {
    
    Blockly.Arduino.addInclude('library', '#include "MiniSobot.h" \nMiniSobot robot;');

    var sensor_ = block.getFieldValue('sensor');
    var detected_ = block.getFieldValue('detected');
    
    var code = '( ' + detected_ + 'robot.read_line(' + sensor_ +') )';
    return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};