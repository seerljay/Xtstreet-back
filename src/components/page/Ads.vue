<template>
	<div class="adsPage">
		<el-row>
			<el-col :span="24">
				<div class="grid-content">广告-广告列表</div>
			</el-col>
		</el-row>
		<div class="interval"></div>
		<div class="operation-content">
			<el-cascader :options="options" filterable @active-item-change="handleItemChange"
  :props="props" :show-all-levels="false" placeholder="请选择学校"></el-cascader>
			<div id="record">
				共5条记录
			</div>
		</div>
				<div class="interval"></div>
		<el-row class="adsTable">
			<el-table :data="tableData" :default-sort="{prop: 'date', order: 'descending'}" style="width:1002px;" id="table">
				<el-table-column prop="num" label="编号" sortable width="100" align="center">
				</el-table-column>
				<el-table-column prop="title" label="轮播图描述" width="200" align="center">
				</el-table-column>
				<el-table-column prop="sequence" label="图片序号" sortable width="150" align="center">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="date" label="添加日期" sortable width="251" align="center">
				</el-table-column>
				<el-table-column label="操作" width="300" align="center">
					<template scope="scope">
						<el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">查看</el-button>
						<el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
						<el-button @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
					</template>
				</el-table-column>
		</el-table>
		</el-row>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          label: '四川',
          cities: []
        }, {
          label: '海南',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        tableData: [{
						num: '1',
						title: '将夜',
						sequence: '2',
						date: '2017-04-24 15:30:30'
					},
					{
						num: '2',
						title: '桃花',
						sequence: '1',
						date: '2017-04-24 13:30:30'
					}
				]
      }
    },

    methods: {
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('四川') > -1 && !this.options[0].cities.length) {
            this.options[0].cities = [{
              label: '西南财经大学'
            }];
          } else if (val.indexOf('海南') > -1 && !this.options[1].cities.length) {
            this.options[1].cities = [{
              label: '海南大学'
            }];
          }
        }, 300);
      },
      handleClick(index,row) {
      	const self = this;
		self.$router.push('/AdsEdit');
      },
      handleEdit(index,row) {
      	const self = this;
		self.$router.push('/AdsEdit');
      },
      handleDelete(index,row) {
      	this.$message('已成功删除第' + (index + 1) + '行');
      }
    }
  };
</script>

<style>
	.grid-content {
		height: 60px;
		line-height: 60px;
		font-size: 18px;
		padding: 0 20px;
		border-bottom: 1px solid #97A8BE;
	}
	
	.interval {
		height: 20px;
	}
	
	.operation-content {
		padding: 30px 30px 0 30px;
		height: 35px;
		line-height: 35px;
		font-size: 10px;
	}
	
	.adsTable {
		padding: 10px 30px 0 30px;
		text-align: center;
	}
	
	#record {
		float: right;
		padding: 0 50px;
	}
</style>