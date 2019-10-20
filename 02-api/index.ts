import { http } from "./http";

http.turnable.getDetail(null, (res) => {
  const detail = res.content;

  detail.lotteryDrawMemberReList.map(item => {
    return item.drawTimeStr;
  });

  detail.lotteryDrawRecordReList.map((item) => {
    return item.memberNick;
  })
})

http.turnable.lottery({mobile: '123l'}, (res) => {
  const detail = res.content;
  const aaa = detail.reachLimit;
})

