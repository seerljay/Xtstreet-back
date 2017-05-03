<template>
	<div class="afficheInfPage">
		<el-row>
			<el-col :span="24">
				<div class="grid-content">审核-商品管理</div>
			</el-col>
		</el-row>
		<div class="interval"></div>
		<div class="operation-content">
			<el-button icon="search" id="searchIcon" @click="onSearch(search)"></el-button>
			<el-input v-model="search" placeholder="商品名称" id="searchGoods" @keyup.enter.native="onSearch(search)"></el-input>
			<div id="record">
				共100条记录
			</div>
		</div>
		<div class="interval"></div>
		<el-row class="goodsTable">
			<el-table :data="getData" :default-sort="{prop: 'date', order: 'descending'}" style="width:1001px;" id="goodstable" v-loading>
				<el-table-column prop="num" label="编号" sortable width="100" align="center">
				</el-table-column>
				<el-table-column prop="title" label="商品名称" width="100" align="center">
				</el-table-column>
				<el-table-column prop="pic" label="商品图片" width="100" align="center">
					<template scope="scope">
						<img :src="scope.row.pic" style="width: 30px;height: 30px;" />
					</template>
				</el-table-column>
				<el-table-column prop="name" label="商家名称" width="100" align="center">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="price" label="价格" sortable width="100" align="center">
				</el-table-column>
				<el-table-column prop="mount" label="数量" width="70" align="center">
				</el-table-column>
				<el-table-column prop="state" label="审核状态" width="100" align="center">
				</el-table-column>
				<el-table-column prop="date" label="添加日期" sortable width="180" align="center">
				</el-table-column>
				<el-table-column label="操作" width="150" align="center">
					<template scope="scope">
						<el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">查看</el-button>
						<el-button @click="handleCheck(scope.$index, scope.row)" type="text" size="small">审核</el-button>
					</template>
				</el-table-column>
		</el-table>
			<div class="block">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="100">
				</el-pagination>
			</div>
		</el-row>
			<el-dialog title="商品审核" v-model="dialogVisible" size="tiny">
				<el-form :model="dialog" label-width="80px" :rules="dialogRulers" ref="dialog">
				<el-radio class="radio" v-model="dialog.state" label="未审核">未审核</el-radio>
				<el-radio class="radio" v-model="dialog.state" label="审核通过">审核通过</el-radio>
				<el-radio class="radio" v-model="dialog.state" label="审核未通过">审核未通过</el-radio>
				</el-form>
				<span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="change()">确 定</el-button>
                            </span>
			</el-dialog>
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
				dialogVisible: false,
				radio: '',
				dialog: {
					state: '未审核'
				},
				tableData: [{
						num: '1',
						title: '将夜',
						pic: require("../../assets/1.png"),
						name: '春绿',
						price: '￥100',
						mount: '1',
						state: '未审核',
						date: '2017-04-24 15:30:30'
					},
					{
						num: '2',
						title: '桃花',
						pic: require("../../assets/bg-home1.jpg"),
						name: '卦毗',
						price: '￥200',
						mount: '2',
						state: '未审核',
						date: '2017-04-24 13:30:30'
					}
				]
			}
		},
		methods: {
			formatter(row, column) {
				return row.address;
			},
			handleClick(index, row) {
				const self = this;
				self.$router.push('/AfficheEdit');
			},
			handleCheck(index, row) {
				this.dialogVisible = true;
				this.dialog = Object.assign({}, row);
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
			},
			change() {
				this.dialogVisible = false;
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
	
	.goodsTable {
		padding: 10px 30px 0 30px;
		text-align: center;
	}
	
	#goodstable {
		font-size: 10px;
		display: inline-block;
	}
	
	#record {
		float: left;
		padding: 0 50px;
	}
	
	#searchGoods {
		float: right;
		width: 200px;
	}
	
	#searchIcon {
		float: right;
		border-color: #ccffff;
	}
</style>