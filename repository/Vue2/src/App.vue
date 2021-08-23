<template>
  <ul class="rootApp">
    <!-- 主界面 -->
    <li class="ui-main">
      <router-view></router-view>
    </li>

    <!-- 弹框界面 -->
    <li class="ui-dialog">
      <div
        @click.stop="$store.state.closeDialog()"
        class="view shade"
        v-if="
          $store.state.dialogs.length > 0 &&
          !$store.state.dialogs[$store.state.dialogs.length - 1].shade
        "
      >
        <!-- 统一遮罩 -->
      </div>
      <div
        class="view"
        defType="dialogFrame"
        v-for="(dialog, index) in $store.state.dialogs"
        :key="index"
      >
        <div @click.stop="doIt()">
          <component
            v-bind:is="all_dialog[dialog.id]"
            v-bind:data="dialog.data"
          ></component>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
// 引入弹框页面
import dialogs from "./dialogs/lazy-load.js";

export default {
  data() {
    return {
      // 全部弹框
      all_dialog: dialogs,
    };
  },
  components: dialogs,
  methods: {
    doIt() {
      // todo
    },
  },
};
</script>
<style scoped>
.rootApp > .ui-dialog > .view {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
.rootApp > .ui-dialog > .view:not(.shade) {
  pointer-events: none;
}
.rootApp > .ui-dialog > .view:not(.shade) > * {
  pointer-events: all;
}

.rootApp > .ui-dialog > .view:last-child {
  z-index: 3;
}
.rootApp > .ui-dialog > .view.shade {
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
