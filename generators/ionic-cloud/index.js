'use strict';
var Generator = require('yeoman-generator');
var utils = require('../../utils/utils.js');

module.exports = Generator.extend({

  initializing: function () {
    this.argument('module', { type: String, required: false });
    this.moduleName = utils.checkModule(this.module);
    this.moduleFolder = utils.moduleFolder(this.moduleName);
  },

  writing: function () {
    this.copy('ionic.config.json', 'ionic.config.json');
    this.copy('user.html', 'app/' + this.moduleFolder + '/templates/user.html');
    this.copy('user-ctrl.js', 'app/' + this.moduleFolder + '/controllers/user-ctrl.js');
    this.copy('user-ctrl.spec.js', 'test/karma/' + this.moduleFolder + '/user-ctrl.spec.js');
  }
});
