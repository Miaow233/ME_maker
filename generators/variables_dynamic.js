/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Dic for dynamic variable blocks.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';


// Dic is dynamically typed.
Blockly.Dic['variables_get_dynamic'] =
    Blockly.Dic['variables_get'];
Blockly.Dic['variables_set_dynamic'] =
    Blockly.Dic['variables_set'];