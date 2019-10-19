/// <reference path="capi.d.ts" />

declare namespace turnableApi {
  export type lotteryDraw = {
    drawTimeStr: string;
    memberNick: string;
    memberPhoneUrl: string;
    prizeId: number;
    prizeName: string;
    prizePicUrl: string;
  };

  export type prizeItem = {
    brandType: string;
    prizeId: number;
    prizeName: string;
    prizePicPopupUrl: string;
    prizePicUrl: string;
    prizeRemind: string;
  };

  export interface IDetailType {
    activityId: number;
    activityName: string;
    activityNo: string;
    drawCount: number;
    fixedEndDateStr: string;
    fixedStartDateStr: string;
    limitCount: number;
    lotteryDrawMemberReList: lotteryDraw[];
    lotteryDrawRecordReList: lotteryDraw[];
    lotteryPrizeList: prizeItem[];
    memberNick: string;
    memberPicUrl: string;
    needBuyCount: number;
    partLimitNum: number;
    reachLimit: number;
    ruleId: number;
    shareImgUrl: string;
    shareTitle: string;
    status: number;
    useDrawCount: number;
    validChannel: number
  }


  export namespace request {
    export interface lottery {
      mobile: string;
    }
  }

  export namespace response {
    export type pageRes = capi.IResponse<IDetailType>;
    export type lotteryRes = capi.IResponse<IDetailType>;
  }
}

