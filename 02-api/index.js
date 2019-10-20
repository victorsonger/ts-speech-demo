"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
http_1.http.turnable.getDetail(null, function (res) {
    var detail = res.content;
    detail.lotteryDrawMemberReList.map(function (item) {
        return item.drawTimeStr;
    });
    detail.lotteryDrawRecordReList.map(function (item) {
        return item.memberNick;
    });
});
http_1.http.turnable.lottery({ mobile: '123l' }, function (res) {
    var detail = res.content;
    var aaa = detail.reachLimit;
});
