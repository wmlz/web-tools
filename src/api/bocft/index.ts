import { http } from "@/utils/http";

type Result = {
  code: number;
  msg: string;
  data: JSON;
};

export function sendMi6Broadcast(params?: object): Promise<Result> {
  return http.request({
    url: "http://cell-mi6:8080/api/broadcast",
    method: "get",
    params
  });
}

export function sendS20Broadcast(params?: object): Promise<Result> {
  return http.request({
    url: "http://cell-s20:8080/api/broadcast",
    method: "get",
    params
  });
}

export function getListApiError(data?: object): Promise<Result> {
  return http.request({
    url: "/list/error",
    method: "post",
    data
  });
}
