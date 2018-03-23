<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-select v-model="address" placeholder="请输入地址">
          <!--<el-option label="凤姐一号街" value="shanghai"></el-option>-->
          <!--<el-option label="凤姐二号街" value="beijing"></el-option>-->
          <el-option v-for="item in addresscum" :key="item.value" :label="item.lable" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>

    <div class="line"></div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button type="info" size="small" @click="lookFn(scope.row)">查看</el-button>
          <el-button type="primary" size="small" @click="editFn(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--查看-->
    <el-dialog :title="titleName" :visible.sync="isToSee" width="50%" :before-close="closeFn" center>
      <el-form ref="form" :model="sizeForm" :label-position="labelPosition" label-width="80px" size="mini">
        <el-row>
          <el-col :span="10">
            <el-form-item label="日期:">
              <el-input v-model="sizeForm.date" :disabled="isDisabled"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11" :offset="3">
            <el-form-item label="活动名称:">
              <el-input v-model="sizeForm.name" :disabled="isDisabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="年龄:">
              <el-input v-model="sizeForm.age" :disabled="isDisabled"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="3">
            <el-form-item label="地址:">
              <el-input v-model="sizeForm.address" :disabled="isDisabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeFn">取 消</el-button>
        <el-button type="primary" @click="Determine">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name:'',
        address:'',
        isToSee: false,
        labelPosition:'left',
        isDisabled:false,//input是否禁用
        sizeForm:'',
        titleName:'',
        addresscum:[
          {value:'1',lable:'凤姐一号街'},
          {value:'2',lable:'凤姐二号街'},
          {value:'3',lable:'凤姐三号街'},
          {value:'4',lable:'凤姐四号街'},
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          age: 18,
          address: '上海市普陀区金沙江路 1518 弄'
        },
          {
            date: '2016-05-02',
            name: '凤姐',
            age: 18,
            address: '凤姐省-凤姐市-凤姐乡-凤姐镇-凤姐村'
          }]
      }
    },
    methods: {
      lookFn(row) { //查看
        this.isToSee = true
        this.isDisabled = true
        this.titleName = '查看'
        this.sizeForm = row
      },
      editFn(row){ //修改
        this.isToSee = true
        this.isDisabled = false
        this.titleName = '修改'
      },
      handleDel(row){ //删除
        console.log(121212)
      },
      closeFn(){ //取消
        this.isToSee = false
      },
      Determine(){ //确定
        this.isToSee = false
      }
    }
  }
</script>
<style scoped>
  .line {
    width: 100%;
    height: 1px;
    background: #d8d9da;
    margin-bottom: 10px;
  }
</style>
