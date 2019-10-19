/// <reference path="capi.d.ts" />
/// <reference path="turnable.d.ts" />

import axios from 'axios';

export namespace http {
  function createCAPI<TReq, TRes>(url: string) {
    return function (req: TReq, success: (res: TRes) => void, error?: (res: any) => void) {
      axios.request({
        method: 'get',
        url,
        data: req
      }).then(result => {
        success(result.data);
      }).catch(err => {
        error && error(err);
      });
    }
  }

  export namespace turnable {
    export const getDetail = createCAPI<null, turnableApi.response.pageRes>('/resource/m/lotteryDraw/detail');
    export const lottery = createCAPI<turnableApi.request.lottery, turnableApi.response.lotteryRes>('/resource/m/lotteryDraw/action');
  }
}