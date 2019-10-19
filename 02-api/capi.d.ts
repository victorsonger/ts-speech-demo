declare namespace capi {
  export interface IResponse<T> {
    busiCode: string;
    code: number;
    content: T;
    handler: string;
    msg: string;
    status: string;
    uid: string;
    version: string;
  }

  export interface IRequestWrapQ<T> {
    q: T
  }
}
