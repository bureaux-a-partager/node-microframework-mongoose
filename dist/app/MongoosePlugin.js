"use strict";
var Mongoose = require('mongoose');
var core_1 = require('bap-node-microframework/core');
var MongoosePlugin = (function () {
    function MongoosePlugin(container, options) {
        this.name = 'mongoose';
        this.instance = Mongoose.connect(options.dsn);
        core_1.Container.setApplicationInstance(container);
        core_1.Container.registerService(this.name, this.instance);
    }
    MongoosePlugin.prototype.getInstance = function () {
        return this.instance;
    };
    MongoosePlugin.prototype.getName = function () {
        return this.name;
    };
    return MongoosePlugin;
}());
exports.MongoosePlugin = MongoosePlugin;
//# sourceMappingURL=MongoosePlugin.js.map