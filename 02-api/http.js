"use strict";
/// <reference path="capi.d.ts" />
/// <reference path="turnable.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var http;
(function (http) {
    function createCAPI(url) {
        return function (req, success, error) {
            axios_1.default
                .request({
                method: "get",
                url: url,
                data: req
            })
                .then(function (result) {
                success(result.data);
            })
                .catch(function (err) {
                error && error(err);
            });
        };
    }
    var turnable;
    (function (turnable) {
        turnable.getDetail = createCAPI("/resource/m/lotteryDraw/detail");
        turnable.lottery = createCAPI("/resource/m/lotteryDraw/action");
    })(turnable = http.turnable || (http.turnable = {}));
})(http = exports.http || (exports.http = {}));
