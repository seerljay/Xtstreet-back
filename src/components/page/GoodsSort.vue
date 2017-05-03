<template>
	<div class="goodsSortPage">
		<el-row>
			<el-col :span="24">
				<div class="grid-content">商品-商品分类-{{level}}级</div>
			</el-col>
		</el-row>
		<div class="interval"></div>
		<div class="operation-content">
			<el-button id="addAffiche" @click="goodsSortAdd">+ 添加新分类</el-button>
		</div>
		<el-row class="gsortTable">
			<el-table :data="getData" :default-sort="{prop: 'date', order: 'descending'}" style="width:1001px;" id="table">
				<el-table-column prop="num" label="编号" sortable width="100" align="center">
				</el-table-column>
				<el-table-column prop="level" label=级别 width="200" align="center">
					<template scope="scope">
						<el-dropdown>
							<el-button type="primary" icon="setting" class="setting">
								设置<i class="el-icon-caret-bottom el-icon--right"></i>
							</el-button>
							<el-dropdown-menu slot="dropdown">
								<template scope="scope">
									<el-dropdown-item class="item">
										<el-button @click="addLevel(scope.$index, scope.row)" type="text" size="small">新增下一级</el-button>
									</el-dropdown-item>
									<el-dropdown-item class="item">
										<el-button @click="nextLevel(scope.$index, scope.row)" type="text" size="small">查看下一级</el-button>
									</el-dropdown-item>
									<el-dropdown-item class="item" @click="moveSort(scope.$index, scope.row)">移动分类</el-dropdown-item>
								</template>
							</el-dropdown-menu>
						</el-dropdown>
					</template>
				</el-table-column>
				<el-table-column prop="title" label="分类名称" width="200" align="center">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="date" label="添加日期" sortable width="250" align="center">
				</el-table-column>
				<el-table-column label="操作" width="250" align="center">
					<template scope="scope">
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
			const self = this;
			return {
				level: '1',
				query: '',
				tableData: [{
						num: '1',
						level: '1',
						title: '家电',
						date: '2017-04-24 15:30:30'
					},
					{
						num: '2',
						level: '1',
						title: '桃花',
						date: '2017-04-24 13:30:30'
					}
				]
			}
		},
		methods: {
			formatter(row, column) {
				return row.address;
			},
			handleEdit(index, row) {
				const self = this;
				self.$router.push('/GsortEdit');
			},
			handleDelete(index, row) {
				this.$message('已成功删除第' + (index + 1) + '行');
			},
			goodsSortAdd() {
				const self = this;
				self.$router.push('/GsortAdd');
			},
			addLevel(index, row) {
				const self = this;
				self.$router.push('/GsortEdit');
			},
			nextLevel(index, row) {
				const self = this;
				self.$router.push('/GoodsSort');
			}
		},
		computed: {
			getData() {
				const self = this;
				return self.tableData.filter(function(d) {
					if(d.title.indexOf(self.query) > -1) {
						return d;
					}
				})
			}
		}
	}
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
	
	.gsortTable {
		padding: 10px 30px 0 30px;
		text-align: center;
	}
	
	#table {
		display: inline-block;
	}
	
	.setting {
		font-size: 1px;
	}
	
	.item {
		font-size: 1px;
	}
</style>