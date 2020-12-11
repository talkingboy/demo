/**
 * @Author: 爱因斯坦赤道
 * @Description: 创建action的函数
 * @Date: 2020/12/10 16:33
 */

export type TAction<T> = {
  type: string;
  payload: T;
};

export const createAction = <T>(actionType: string) => (payload: T): TAction<T> => ({
  type: actionType,
  payload,
});
