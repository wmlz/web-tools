import { http } from "@/utils/http";

type ListResult = {
  code: number;
  message: string;
  list: Array<any>;
};

export function sendMi6Broadcast(params?: object): Promise<ListResult> {
  return http.request({
    url: "/tailscale/http:////cell-mi6:8080/api/broadcast",
    method: "get",
    params
  });
}

export function sendS20Broadcast(params?: object): Promise<ListResult> {
  return http.request({
    url: "/tailscale/http:\\/\\/cell-s20:8080/api/broadcast",
    method: "get",
    params
  });
}

export function getListApiError(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "post",
    data
  });
}
