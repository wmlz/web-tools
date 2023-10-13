<script setup lang="ts" name="Tools">
import { getListApi, getListApiError } from "@/api/mock";
import { sendS20Broadcast, sendMi6Broadcast } from "@/api/bocft";
import { reactive, ref } from "vue";
import { showFailToast, showSuccessToast } from "vant";
import "vant/es/toast/style";

let res: any = ref("");

const lzTest = async () => {
  res.value = await sendMi6Broadcast({ intent: "on" });
  console.log("xxxxx", res);

  showSuccessToast("请求成功");
};
const llTest = async () => {
  res.value = await sendS20Broadcast({ intent: "111" });
  console.log("2222", res);

  showSuccessToast("请求成功");
};
const lzDaka = async () => {
  res.value = await sendMi6Broadcast({ intent: "dkll" });
  console.log("xxxxx", res);

  showSuccessToast("请求成功");
};
const llDaka = async () => {
  res.value = await sendS20Broadcast({ intent: "daka" });
  console.log("2222", res);

  showSuccessToast("请求成功");
};
const handleErrorReq = () => {
  getListApiError().then(
    () => {
    },
    err => {
      console.log(err);
      showFailToast("请求有误");
    }
  );
};
</script>

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">Mock</h3>
    </div>
    <van-space>
      <van-button type="success" @click="lzTest">甜甜测试</van-button>
      <van-button type="success" @click="llTest">乖乖测试</van-button>
      <van-button type="danger" @click="lzDaka">甜甜打卡</van-button>
      <van-button type="danger" @click="llDaka">乖乖打卡</van-button>
    </van-space>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        {{ res }}
      </p>
    </div>
  </div>
</template>
