"use strict";
class MyError extends Error {
    constructor(message) {
        super(message);
        this.description = 'this is a description';
    }
}
exports.MyError = MyError;
//# sourceMappingURL=errors.js.map