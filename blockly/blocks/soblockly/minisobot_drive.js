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

goog.provide('Blockly.Blocks.minisobot_drive');


var color_drive_blocks='#4C97FF';

//*************************************************************************
//Drive_forward
//*************************************************************************
Blockly.Blocks['drive_forward'] = {
  init: function() {
    this.setHelpUrl('https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary');
    this.setColour(color_drive_blocks);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/mover_carrinho_para_frente.png", 40, 40, "*"))
        .appendField("Move Forward")
        .appendField("|  Speed:")
        .appendField(new Blockly.FieldDropdown([["Fast","200"], ["Medium","150"], ["Slow","100"]]), "speed")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Drive MiniSobot in forward');
  }
};


//*******************************************************
//Drive_backward
//*******************************************************
Blockly.Blocks['drive_backward'] = {
  init: function() {
    this.setHelpUrl('https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary');
    this.setColour(color_drive_blocks);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/mover_carrinho_para_tras.png", 40, 40, "*"))
        .appendField("Move Backward")
        .appendField("|  Speed:")
        .appendField(new Blockly.FieldDropdown([["Fast","200"], ["Medium","150"], ["Slow","100"]]), "speed")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Drive MiniSobot in backward');
  }
};


//*******************************************************
//Drive_curve_left
//*******************************************************
Blockly.Blocks['drive_curve_left'] = {
  init: function() {
    this.setHelpUrl('https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary');
    this.setColour(color_drive_blocks);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/virar_carrinho_para_esquerda.png", 40, 40, "*"))
        .appendField("Turn Left")
        .appendField("|  Speed:")
        .appendField(new Blockly.FieldDropdown([["Fast","200"], ["Medium","150"], ["Slow","100"]]), "speed")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turn MiniSobot in left');
  }
};


//*******************************************************
//Drive_curve_right
//*******************************************************
Blockly.Blocks['drive_curve_right'] = {
  init: function() {
    this.setHelpUrl('https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary');
    this.setColour(color_drive_blocks);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/virar_carrinho_para_direita.png", 40, 40, "*"))
        .appendField("Turn Right")
        .appendField("|  Speed:")
        .appendField(new Blockly.FieldDropdown([["Fast","200"], ["Medium","150"], ["Slow","100"]]), "speed")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turn MiniSobot in right');
  }
};


//*******************************************************
//Drive_curve_differential_left
//*******************************************************
Blockly.Blocks['drive_curve_differential_left'] = {
  init: function() {
    this.setHelpUrl('https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary');
    this.setColour(color_drive_blocks);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/virar_carrinho_para_esquerda.png", 40, 40, "*"))
        .appendField("Turn Left Differential")
        .appendField("|  Speed:")
        .appendField(new Blockly.FieldDropdown([["Fast","200"], ["Medium","150"], ["Slow","100"]]), "speed")
        .appendField("Percent:")
        .appendField(new Blockly.FieldDropdown([["30%","30"], ["50%","50"], ["80%","80"]]), "percent")  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turn Left in Differential Mode');
  }
};


//*******************************************************
//Drive_curve_differential_right
//*******************************************************
Blockly.Blocks['drive_curve_differential_right'] = {
  init: function() {
    this.setHelpUrl('https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary');
    this.setColour(color_drive_blocks);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/virar_carrinho_para_direita.png", 40, 40, "*"))
        .appendField("Turn Right Differential")
        .appendField("|  Speed:")
        .appendField(new Blockly.FieldDropdown([["Fast","200"], ["Medium","150"], ["Slow","100"]]), "speed")
        .appendField("Percent:")
        .appendField(new Blockly.FieldDropdown([["30%","30"], ["50%","50"], ["80%","80"]]), "percent")  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turn Right in Differential Mode"');
  }
};

//*******************************************************
//Drive_break
//*******************************************************
Blockly.Blocks['drive_break'] = {
  init: function() {
    this.setHelpUrl('https://github.com/SolisTecnologia/MiniSobot-ArduinoLibrary');
    this.setColour(color_drive_blocks);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/soblockly/icons/parar_carrinho.png", 40, 40, "*"))
        .appendField("Stop drive")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Stops motors');
  }
};