"use strict";
exports.__esModule = true;
exports.HttpExceptionFilter = void 0;
var HttpExceptionFilter = /** @class */ (function () {
    function HttpExceptionFilter() {
    }
    HttpExceptionFilter.prototype["catch"] = function (exception, host) {
        var context = host.switchToHttp();
        var response = context.getResponse();
        var request = context.getRequest();
        // console.log("context:  \n", context);
        // console.log("exception:  \n", exception);
        response.send({ status: exception.getStatus(), message: exception.getResponse() });
    };
    return HttpExceptionFilter;
}());
exports.HttpExceptionFilter = HttpExceptionFilter;
