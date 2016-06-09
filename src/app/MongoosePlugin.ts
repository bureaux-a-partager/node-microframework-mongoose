import * as Mongoose from 'mongoose';
import { Container } from 'bap-node-microframework/core';

export class MongoosePlugin {
    private instance: any;
    private name: String = 'mongoose';

    constructor(container, options) {
        this.instance = Mongoose.connect(options.dsn);
        Container.setApplicationInstance(container);
        Container.registerService(this.name, this.instance);
    }

    getInstance() {
        return this.instance;
    }

    getName() {
        return this.name;
    }
}
