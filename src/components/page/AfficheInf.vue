<template>
	<div class="afficheInfPage">
		<el-row>
			<el-col :span="24">
				<div class="grid-content">公告-公告列表</div>
			</el-col>
		</el-row>
		<div class="interval"></div>
		<div class="operation-content">
			<el-button icon="search" id="searchIcon" @click="onSearch(search)"></el-button>
			<el-button id="addAffiche" @click="afficheAdd">+ 添加新公告</el-button>
			<el-input v-model="search" placeholder="公告标题" id="searchAffiche" @keyup.enter.native="onSearch(search)"></el-input>
			<div id="record">
				共100条记录
			</div>
		</div>
		<div class="interval"></div>
		<el-row class="afficheTable">
			<el-table :data="getData" :default-sort="{prop: 'date', order: 'descending'}" style="width:901px;" id="table">
				<el-table-column prop="num" label="编号" sortable width="100" align="center">
				</el-table-column>
				<el-table-column prop="title" label="公告标题" width="200" align="center">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="date" label="添加日期" sortable width="300" align="center">
				</el-table-column>
				<el-table-column label="操作" width="300" align="center">
					<template scope="scope">
						<el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">查看</el-button>
						<el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
						<el-button @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="block">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="100">
				</el-pagination>
			</div>
		</el-row>
	</div>
</template>

<script>
	export default {

		data() {
			const self = this;
			return {
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4,
				query: '',
				tableData: [{
						num: '1',
						title: '将夜',
						date: '2017-04-24 15:30:30'
					},
					{
						num: '2',
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
			handleClick(index,row) {
				const self = this;
				self.$router.push('/AfficheEdit');
			},
			handleEdit(index,row) {
				const self = this;
				self.$router.push('/AfficheEdit');
            },
            handleDelete(index, row) {
		        this.$message('已成功删除第' + (index + 1) + '行');
	        },
	        afficheAdd() {
		        const self = this;
		        self.$router.push('/AfficheAdd');
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				console.log(`当前页: ${val}`);
			},
			onSearch(searchQuery) {
				this.query = searchQuery;
				      this.selected = null;
        this.indexSelected = -1;
        this.$emit('onSearch', this.search);
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

<style type="text/css">
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
	
	.afficheTable {
		padding: 10px 30px 0 30px;
		text-align: center;
	}
	
	#addAffiche {
		color: #996666;
		float: left;
	}
	
	#record {
		float: right;
		padding: 0 50px;
	}
	
	#searchAffiche {
		float: right;
		width: 200px;
	}
	
	#searchIcon {
		float: right;
		border-color: #ccffff;
	}
	
	#table {
		display: inline-block;
	}
</style>