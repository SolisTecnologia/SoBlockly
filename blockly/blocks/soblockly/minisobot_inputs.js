/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview dbkBlocks On Blockly.
 * @author Rubens Queiroz
 */
'use strict';

goog.require('Blockly.Blocks');

goog.provide('Blockly.Blocks.minisobot_inputs');


var color_input_blocks='#CF63CF';

//*************************************************************************
//Read_button
//*************************************************************************

Blockly.Blocks['read_button'] = {
    /**
     * Block for reading an angle value of a servo pin.
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl('http://https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary.cc/en/Referencehttps://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary/ServoRead');
      this.setColour(color_input_blocks);
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/pressione.png", 40, 40, "*"))
          .appendField("Button is")
          .appendField(new Blockly.FieldDropdown([["Pressed", ""],["not Pressed", "!"]]), "status_pressed")
      this.setOutput(true);
      this.setTooltip('Read data from push-button');
    },
  };


//*************************************************************************
//Read Ultrassonic 
//*************************************************************************

Blockly.Blocks['read_ultrassonic'] = {
    init: function() {
      this.setHelpUrl('http://https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary.cc/en/Referencehttps://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary/ServoRead');
      this.setColour(color_input_blocks);
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/sensor_distancia.png", 40, 40, "*"))
          .appendField("Distance is")
          .appendField(new Blockly.FieldDropdown(
            [
              ['=', 'EQ'],
              ['\u2260', 'NEQ'],
              ['>', 'GT'],
              ['\u2265', 'GTE'],
              ['<', 'LT'],
              ['\u2264', 'LTE']
            ]), "symbol")
          .appendField(new Blockly.FieldTextInput("10", Blockly.FieldTextInput.numberValidator), "distance")	
          .appendField("cm");
      this.setInputsInline(true);
      this.setOutput(true);
      this.setTooltip('Read data from sensor ultrasonic');
    }
};

//*************************************************************************
//Read Ultrassonic 
//*************************************************************************

Blockly.Blocks['read_line'] = {
    init: function() {
      this.setHelpUrl('http://https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary.cc/en/Referencehttps://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary/ServoRead');
      this.setColour(color_input_blocks);
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/sensor_refletancia.png", 40, 40, "*"))
          .appendField("Line in")
          .appendField(new Blockly.FieldDropdown([["Left", "1"],["Rigth", "2"]]), "sensor")
          .appendField(new Blockly.FieldDropdown([["is Detected", ""],["is not Detected", "!"]]), "detected")
      this.setInputsInline(true);
      this.setOutput(true);
      this.setTooltip('Read data from sensor photoelectric');
    }
};