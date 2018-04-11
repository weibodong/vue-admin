<template>
  <div class="posLeft">
    <el-col :span="24">
      <el-menu default-active="onRoutes" class="el-menu-vertical-demo" unique-opened theme="dark" router background-color="#2E363F" text-color="#fff" active-text-color="#ffd04b">
        <div v-for="item in items" style="width:230px;">
          <div v-if="item.subs">
            <el-submenu :index="item.index">
              <template slot="title">
                <i :class="item.icon" style="color:#fff;"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group v-for="subs in item.subs">
                <el-menu-item :index="subs.index">{{subs.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>

          <div v-else>
            <el-menu-item :index="item.index">
              <i :class="item.icon" style="color:#fff;"></i>{{item.title}}</el-menu-item>
          </div>
        </div>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    icon: "el-icon-menu",
                    index: "2",
                    title: "表格",
                    subs: [
                        {
                            index: "basetable",
                            title: "基础表格"
                        }
                        // {
                        //   index: 'vuetable',
                        //   title: 'Vue表格组件'
                        // }
                    ]
                },
                {
                    icon: "el-icon-date",
                    index: "3",
                    title: "表单",
                    subs: [
                        {
                            index: "baseform",
                            title: "基本表单"
                        },
                        {
                            index: "vueCheckBox",
                            title: "复选框"
                        },
                        {
                            index: "vueeditor",
                            title: "编辑器"
                        },
                        {
                            index: "markdown",
                            title: "markdown"
                        },
                        {
                            index: "upload",
                            title: "文件上传"
                        }
                    ]
                },
                {
                    icon: "el-icon-star-on",
                    index: "basecharts",
                    title: "图表"
                },
                {
                    icon: "el-icon-upload2",
                    index: "drag",
                    title: "拖拽"
                }
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace("/", "");
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style scoped>
.posLeft {
    position: absolute;
    left: 0;
    top: 60px;
    width: 230px;
    height: 100%;
    background: #2e363f;
    border-top: 1px solid rgba(238, 241, 146, 0.3);
}
</style>
