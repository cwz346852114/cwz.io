<template>
  <div id="home">
    <header class="head">
      <div class="img">
        <img src="/guanwang/images/red-logo@2x.png" alt />
      </div>
      <div class="right-img">
        <nav class="nav">
          <div class="tabs" :class="index==1?'active':''" @click="change1">首页</div>
          <div class="tabs" :class="index==2?'active':''" @click="change2">联系我们</div>
        </nav>
      </div>
    </header>
    <div v-show="index==1" class="box">
      <div class="top">
        <img src="/guanwang/images/banner@2x.jpg" alt />
      </div>
      <div class="center">
        <div class="title-icon">
          <img src="/guanwang/images/juxing@2x.png" alt />
        </div>
        <div class="title">
          <div class="title-top">公司简介</div>
          <div class="title-bottom">Company Profile</div>
        </div>
        <div class="info-box">
          <div class="left">
            <div class="left-title">上海伊瓜苏网络科技有限公司</div>
            <div class="left-info">
              上海伊瓜苏网络科技有限公司,以下简称“伊瓜苏”，定位为教育培训行业的科技赋能
              运营领导者，通过互联网、大数据和人工智能技术，为学员推荐最优的机构培训课程，
              帮助教育机构提升招生展业能力。
            </div>
          </div>
          <div class="right">
            <img src="/guanwang/images/picture1@2x.png" alt />
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="info-box">
          <div class="left">
            <div class="title-icon">
              <img src="/guanwang/images/juxing@2x.png" alt />
            </div>
            <div class="title">
              <div class="title-top">产品介绍</div>
              <div class="title-bottom">Product Introduction</div>
            </div>
            <div class="left-title">惠课堂是“伊瓜苏”旗下品牌</div>
            <div class="left-info">
              与国内众多大型连锁教育培训机构紧密合作，面向
              全国有接受教育培训意愿的学员提供选课服务，
              为学员和培训机构做最佳匹配；提供公平、公正、
              透明的第三方撮合交易服务
            </div>
            <div class="qr">
              <img src="/guanwang/images/erweima.png" alt />
            </div>
          </div>
          <div class="right">
            <img src="/guanwang/images/picture2@2x.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div v-show="index==2">
      <div class="box1">
        <div>
          <div class="bg-img">
            <div class="left">
              <div class="title-icon">
                <img src="/guanwang/images/juxing@2x.png" alt />
              </div>
              <div class="title">
                <div class="title-top">联系我们</div>
                <div class="title-bottom">Contact Us</div>
              </div>

              <div class="left-info">地址：上海市徐汇区田林路487号20号楼</div>
              <div class="left-info">联系电话：400-158-2268</div>
              <div class="left-info">邮箱：duncan.deng@zexue.tech</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div style="margin-bottom:10px">Copyright 2020-2021 惠课堂（上海伊瓜苏网络科技有限公司）</div>
      <div>沪ICP备20007095号-1</div>
      <div @click="router">用户隐私策略</div>
    </footer>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>