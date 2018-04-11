<template>
  <div>
    <div class="clearfix">
      <el-form :inline="true" class="demo-form-inline fr">
        <el-form-item label="姓名">
          <el-input v-model="searchName" placeholder="请输入姓名"></el-input>
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

      <div style="margin-bottom: 10px; fl">
        <el-button type="primary" size="medium" @click="toggleSelection([tableData[0],tableData[1]])">选中项</el-button>
        <el-button type="primary" size="medium" @click="toggleSelection()">取消</el-button>
      </div>
    </div>
    <div class="line"></div>
    <el-table :data="datalist" ref="multipleTable" style="width: 100%"
              :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期" width="180" sortable></el-table-column>
      <el-table-column prop="name" label="姓名" width="180" sortable></el-table-column>
      <el-table-column prop="age" label="年龄" width="180" sortable></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button type="info" size="small" @click="lookFn(scope.row)">查看</el-button>
          <el-button type="primary" size="small" @click="editFn(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <div class="block" style="margin-top: 20px;float: right">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="currentPage" :page-sizes="[100, 200, 300]" :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper" :total="300">
      </el-pagination>
    </div>
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
        searchName: '',
        address: '',
        isToSee: false,
        labelPosition: 'left',
        isDisabled: false,//input是否禁用
        sizeForm: '',
        titleName: '',
        addresscum: [
          {value: '1', lable: '凤姐一号街'},
          {value: '2', lable: '凤姐二号街'},
          {value: '3', lable: '凤姐三号街'},
          {value: '4', lable: '凤姐四号街'},
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          age: 18,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '凤姐',
          age: 38,
          address: '凤姐省-凤姐市-凤姐乡-凤姐镇-凤姐村'
        }, {
          date: '2016-05-03',
          name: '加多宝',
          age: 48,
          address: '加多宝有限公司'
        }
        ],
        currentPage: 4
      }
    },
    computed: {
      datalist() { //模糊查询
        var searchName = this.searchName; //搜索的内容
        if (searchName) {
          console.log(searchName)
          return this.tableData.filter(function (d) {
            return Object.keys(d).some(function (key) {
              return String(d[key]).toLowerCase().indexOf(searchName) > -1
            })
          })
        }
        return this.tableData;
      }
    },
    mounted(){
      this.aa()
    },
    methods: {
      aa() {  //数组对象合并且去重
        this.abc = [{ name: 'lala', val: 1 }, { name: 'kaka', val: 2 }]
        let qwe = [{ name: 'lala', val: 1 }, { name: 'gaga', val: 3 }]
  
        this.abc = this.abc.concat(qwe)
        //数组对象去重
        var hash = {};
        this.abc = this.abc.reduce(function(item, next) {
          hash[next.val] ? '' : hash[next.val] = true && item.push(next);
          return item
        }, [])
        console.log(this.abc)
      },
      lookFn(row) { //查看
        this.isToSee = true
        this.isDisabled = true
        this.titleName = '查看'
        this.sizeForm = row
      },
      editFn(row) { //修改
        this.isToSee = true
        this.isDisabled = false
        this.titleName = '修改'
      },
      handleDel(row) { //删除
        console.log(121212)
      },
      closeFn() { //取消
        this.isToSee = false
      },
      Determine() { //确定
        this.isToSee = false
      },
      toggleSelection(rows) { //选中项
        console.log(rows);
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      // formatter(row, column) {
      //   return row.address;
      // }

      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
