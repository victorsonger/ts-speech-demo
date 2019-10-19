import { http } from "./http";

http.turnable.getDetail(null, (res) => {
  const detail = res.content;

  detail.lotteryDrawMemberReList1.map(item => {
    return item.drawTimeStr;
  });

  detail.lotteryDrawRecordReList1.map((item) => {
    return item.memberNick;
  })
})

http.turnable.lottery({mobile: '123l'}, (res) => {
  const detail = res.content;
  const aaa = detail.reachLimit;
})

