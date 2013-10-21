/*
  #!/usr/local/bin/node
  -*- coding:utf-8 -*-
 
  Copyright 2013 yanghua Inc. All Rights Reserved.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  ---
  Created with Sublime Text 2.
  User: yanghua
  Date: 12/10/13
  Time: 10:00 PM
  Desc: define config info
 */

/**
 * init config info
 * @return {object} config-info object
 */
function initConfig () {
    var _configInfo = {

      //mysql max connections
      default_max_conns : 150,

      mysqlConfig       : {
          "host"      : "172.16.206.16",
          "user"      : "root",
          "password"  : "123456",
          "database"  : "fixedAsset"
      },

      statusCode        : {
          SATUS_OK        : 0,
          STATUS_NOTFOUND : 1,
          //....
      },

      faType            : {
          ENUM_HC         : "HOSTCOMPUTER",
          ENUM_MOB        : "MOBILE",
          ENUM_MON        : "MONITOR",
          ENUM_NOT        : "NOTEBOOK",
          ENUM_OE         : "OFFICEEQUIPMENT",
          ENUM_OF         : "OFFICEFURNITURE",
          ENUM_OTE        : "OTHEREQUIPMENT",
          ENUM_SERVER     : "SERVER",
          ENUM_VE         : "VIRTUALEQUIPMENT"
      }

    }

    return _configInfo;
}
  

//exports
exports.initConfig=initConfig;