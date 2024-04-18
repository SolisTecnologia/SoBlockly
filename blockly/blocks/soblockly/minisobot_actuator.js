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

goog.provide('Blockly.Blocks.minisobot_actuator');


var color_actuator_blocks='#9966FF';

//*************************************************************************
//LED RGB
//*************************************************************************
Blockly.Blocks['led_rgb'] = {
    init: function() {
  var colourRed = new Blockly.FieldColour('#ffffff');
  colourRed.setColours(['#f00','#fff']).setColumns(2);
  var colourGreen = new Blockly.FieldColour('#ffffff');
  colourGreen.setColours(['#0f0','#fff']).setColumns(2);
  var colourBlue = new Blockly.FieldColour('#ffffff');
  colourBlue.setColours(['#00f','#fff']).setColumns(2); 
      this.setHelpUrl('https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary');
      this.setColour(color_actuator_blocks);
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/led_RGB.png", 40, 40, "*"))
          .appendField("turn")
          .appendField(colourRed, "lightRed")
          .appendField(colourGreen, "lightGreen")
          .appendField(colourBlue, "lightBlue")
          .appendField("in LED RGB");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('Control the color of led rgb');
    }
  }; 

//*************************************************************************
//Buzzer
//*************************************************************************
Blockly.Blocks['buzzer'] = {
    init: function() {
      this.setHelpUrl('https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary');
      this.setColour(color_actuator_blocks);
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/buzzer_notas.png", 40, 40, "*"))
          .appendField("Play note")
          .appendField(new Blockly.FieldDropdown([["C", "262"], ["D", "294"], ["E", "329"],
                                                  ["F", "349"], ["G", "392"], ["A", "440"],
                                                  ["B", "494"]]), "note_buzzer")											
           .appendField("on the Buzzer")
          // .appendField(new Blockly.FieldNumber(1000, 0), "duration")							
          // .appendField("ms")
          .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/invisible.png", 26, 40, "*"));		
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('Play a specific tone in buzzer');
    }
  };

  //*******************************************************
//Drive_break
//*******************************************************
Blockly.Blocks['stop_buzzer'] = {
  init: function() {
    this.setHelpUrl('https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary');
    this.setColour(color_actuator_blocks);
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/sem-som.png", 40, 40, "*"))
    .appendField("Stop Buzzer")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Stop Buzzer');
  }
};