<template>
  <div class="warning">
    <h2 v-dragdrop>
      {{ data[2] }}
      <span @click="$store.state.closeDialog()">X</span>
    </h2>
    <div>
      <div class="content" v-html="data[1]"></div>
      <div class="btlist">
        <input
          type="button"
          class="yes"
          :value="data[3]"
          @click="$store.state.closeDialog('yes')"
        />
        <input
          type="button"
          class="no"
          :value="data[4]"
          @click="$store.state.closeDialog('no')"
          v-if="data[0] == 'confirm'"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style scoped>
.warning {
  width: 4.2rem;
  margin: auto;
  margin-top: 15%;
}

.warning > h2 {
  background-color: #f0f7ff;
  line-height: 0.38rem;
  padding-left: 0.2rem;
  color: #888888;
  border-radius: 0.05rem 0.05rem 0 0;
  font-size: 0.12rem;
  position: relative;
}
.warning > h2 > span {
  position: absolute;
  right: 0.2rem;
  font-size: 0.2rem;
  cursor: pointer;
}

.warning > div {
  background-color: #fff;
  border-radius: 0 0 0.05rem 0.05rem;
  line-height: 0.2rem;
}
.warning > div > div {
  padding: 0.15rem;
}
.warning > div > div.content {
  color: #777;
  font-size: 0.12rem;
  max-height: 2rem;
  overflow: auto;
}
.warning > div > div.btlist {
  padding-top: 0;
  text-align: right;
  margin-top: 0.1rem;
}
.warning > div > div.btlist > input {
  width: 0.9rem;
  height: 0.24rem;
  line-height: 0.24rem;
  text-align: center;
  color: #fff;
  border: 0;
  cursor: pointer;
  margin-left: 0.1rem;
}
.warning > div > div.btlist > input.no {
  background: #42b19d;
}
.warning > div > div.btlist > input.yes {
  background: #15bdf4;
}
</style>
