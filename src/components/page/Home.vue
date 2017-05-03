<template>
	<div class="homePage">
		<el-row>
			<el-col :span="24">
				<div class="grid-content">管理中心</div>
			</el-col>
		</el-row>
		<el-row gutter="20" class="totalBox">
			<el-col span="6">
				<el-card class="box1">
					<i class="icon">
					<img src="../../assets/1.png" width="60px" height="60px">
	            </i>
					<div class="sth">
						<div class="data">
							<em>¥</em> 0.00
						</div>
						<span>今日销售额</span>
					</div>
				</el-card>
			</el-col>
			<el-col span="6">
				<el-card class="box2">
					<i class="icon">
					<i class="fa fa-shopping-cart" id="cart"></i>
					</i>
					<div class="sth">
						<div class="data">
							0
						</div>
						<span>今日订单数</span>
					</div>
				</el-card>
			</el-col>
			<el-col span="6">
				<el-card class="box3">
					<i class="icon">
					<i class="fa fa-commenting-o" id="comment"></i>
					</i>
					<div class="sth">
						<div class="data">
							0
						</div>
						<span>今日评论数</span>
					</div>
				</el-card>
			</el-col>
			<el-col span="6">
				<el-card class="box4">
					<i class="icon">
					<i class="fa fa-eye" id="browse"></i>
					</i>
					<div class="sth">
						<div class="data">
							0
						</div>
						<span>今日浏览量</span>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<div class="interval"></div>
		<el-row gutter="50" class="statisticsTable">
			<el-col span="12">
				<el-card>
					<div slot="header" class="clearfix">
						<i class="fa fa-user-circle-o" id="user"></i>
						<span style="line-height: 18px;">会员统计</span>
					</div>
					<el-row gutter="10" class="classify">
						<el-col span="6">
							<div class="num">
								0
							</div>
							<span class="word">今日新增</span>
						</el-col>
						<el-col span="6">
							<div class="num">
								0
							</div>
							<span class="word">昨日新增</span>
						</el-col>
						<el-col span="6">
							<div class="num">
								0
							</div>
							<span class="word">本月新增</span>
						</el-col>
						<el-col span="6">
							<div class="num">
								0
							</div>
							<span class="word">会员总数</span>
						</el-col>
					</el-row>
				</el-card>
			</el-col>
			<el-col span="12">
				<el-card>
					<div slot="header" class="clearfix">
						<i class="fa fa-truck" id="goods"></i>
						<span style="line-height: 18px;">商品统计</span>
					</div>
					<el-row gutter="10" class="classify">
						<el-col span="6">
							<div class="num">
								0
							</div>
							<span class="word">今日新增</span>
						</el-col>
						<el-col span="6">
							<div class="num">
								0
							</div>
							<span class="word">昨日新增</span>
						</el-col>
						<el-col span="6">
							<div class="num">
								0
							</div>
							<span class="word">本月新增</span>
						</el-col>
						<el-col span="6">
							<div class="num">
								0
							</div>
							<span class="word">商品总数</span>
						</el-col>
					</el-row>
				</el-card>
			</el-col>
		</el-row>
		<div class="interval"></div>
		<el-row class="Chart">
			<el-card>
				<div slot="header" class="clearfix">
					<i class="fa fa-shopping-cart" id="Chart"></i>
					<span style="line-height: 18px;">订单统计</span>
					<div class="timebutton" id="timebutton1">
						<el-button type=primary v-on:click="cartyeardata();">半年</el-button>
					</div>
					<div class="timebutton" id="timebutton2">
						<el-button type=primary v-on:click="cartmonthdata();">一月</el-button>
					</div>
					<div class="timebutton" id="timebutton3">
						<el-button type=primary v-on:click="cartweekdata();">一周</el-button>
					</div>
					<div class="timebutton" id="togglebutton">
						<el-button type=primary v-on:click="cartbar();">柱状图</el-button>
					</div>
					<div class="timebutton" id="togglebutton">
						<el-button type=primary v-on:click="cartline();">折线图</el-button>
					</div>
				</div>
				<div  id="togglechart">
				<div class="echarts" v-if="type === 'line'">
					<IEcharts :option="line1"></IEcharts>
				</div>
				<div class="echarts" v-else>
					<IEcharts :option="bar1"></IEcharts>
				</div>
				</div>
			</el-card>
		</el-row>
		<div class="interval"></div>
		<el-row class="Chart">
			<el-card>
				<div slot="header" class="clearfix">
					<img src="../../assets/1.png" width="18px" height="18px">
					<span style="line-height: 18px;">销售额统计</span>
					<div class="timebutton" id="timebutton1">
						<el-button type=primary @click="moneyyeardata();">半年</el-button>
					</div>
					<div class="timebutton" id="timebutton2">
						<el-button type=primary @click="moneymonthdata();">一月</el-button>
					</div>
					<div class="timebutton" id="timebutton3">
						<el-button type=primary @click="moneyweekdata();">一周</el-button>
					</div>
					<div class="timebutton" id="togglebutton">
						<el-button type=primary v-on:click="moneybar();">柱状图</el-button>
					</div>
					<div class="timebutton" id="togglebutton">
						<el-button type=primary v-on:click="moneyline();">折线图</el-button>
					</div>
				</div>
				<div  id="togglechart">
				<div class="echarts" v-if="type1 === 'line'">
					<IEcharts :option="line2"></IEcharts>
				</div>
				<div class="echarts" v-else>
					<IEcharts :option="bar2"></IEcharts>
				</div>
				</div>
			</el-card>
		</el-row>
	</div>
</template>

<script>
	import IEcharts from 'vue-echarts-v3';
	var data = [];
	var now = new Date();
	var oneday = 24 * 3600 * 1000;
	for(var i = 6; i >= 0; i--) {
		var mydate = new Date(now.getTime() - i * oneday);
		data.push(mydate.getMonth() + 1 + "-" + mydate.getDate());
	}
	var data1 = [];
	var now = new Date();
	var oneday = 24 * 3600 * 1000;
	for(var i = 6; i >= 0; i--) {
		var mydate = new Date(now.getTime() - i * oneday);
		data1.push(mydate.getMonth() + 1 + "-" + mydate.getDate());
	}
	export default {
		components: {
			IEcharts
		},
		data: () => ({
			line1: {
				color: ["#20a0ff", "#13CE66", "#F7BA2A", "#FF4949"],
				title: {
					text: '曲线图'
				},
				tooltip: {
					trigger: 'axis',
					formatter: function(params) {
						params = params[0];
						var date = new Date(params.name);
						return date.getDate() + '/' + (date.getMonth() + 1);
					},
					axisPointer: {
						animation: false
					}
				},
				xAxis: {
					data: data
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					name: "销量",
					type: "line",
					data: [5, 20, 36, 10, 10, 20, 25],
					itemStyle: {
						normal: {
							label: {
								show: true
							}
						}
					}
				}]
			},
			bar1: {
				color: ["#20a0ff", "#13CE66", "#F7BA2A", "#FF4949"],
				title: {
					text: '柱状图'
				},
				tooltip: {
					trigger: 'axis',
					formatter: function(params) {
						params = params[0];
						var date = new Date(params.name);
						return date.getDate() + '/' + (date.getMonth() + 1);
					},
					axisPointer: {
						animation: false
					}
				},
				xAxis: {
					data: data
				},
				yAxis: {},
				series: [{
					name: "销量",
					type: "bar",
					data: [5, 20, 36, 10, 10, 20,25],
					itemStyle: {
						normal: {
							label: {
								show: true
							}
						}
					}
				}]
			},
			line2: {
				color: ["#20a0ff", "#13CE66", "#F7BA2A", "#FF4949"],
				title: {
					text: '曲线图'
				},
				tooltip: {
					trigger: 'axis',
					formatter: function(params) {
						params = params[0];
						var date = new Date(params.name);
						return date.getDate() + '/' + (date.getMonth() + 1);
					},
					axisPointer: {
						animation: false
					}
				},
				xAxis: {
					data: data1
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					name: "销量",
					type: "line",
					data: [5, 20, 36, 10, 10, 20, 25],
					itemStyle: {
						normal: {
							label: {
								show: true
							}
						}
					}
				}]
			},
				bar2: {
				color: ["#20a0ff", "#13CE66", "#F7BA2A", "#FF4949"],
				title: {
					text: '柱状图'
				},
				tooltip: {
					trigger: 'axis',
					formatter: function(params) {
						params = params[0];
						var date = new Date(params.name);
						return date.getDate() + '/' + (date.getMonth() + 1);
					},
					axisPointer: {
						animation: false
					}
				},
				xAxis: {
					data: data1
				},
				yAxis: {},
				series: [{
					name: "销量",
					type: "bar",
					data: [5, 20, 36, 10, 10, 20,25],
					itemStyle: {
						normal: {
							label: {
								show: true
							}
						}
					}
				}]
			},
		type: 'line',
		type1: 'line'
				}),
		methods: {
			cartweekdata() {
				data.splice(0, data.length);
				var now = new Date();
				var oneday = 24 * 3600 * 1000;
				for(var i = 6; i >= 0; i--) {
					var mydate = new Date(now.getTime() - i * oneday);
					data.push(mydate.getMonth() + 1 + "-" + mydate.getDate());
				}
			},
			cartmonthdata() {
				data.splice(0, data.length);
				var now = new Date();
				var oneday = 24 * 3600 * 1000;
				for(var i = 30; i >= 0; i--) {
					var mydate = new Date(now.getTime() - i * oneday);
					data.push(mydate.getMonth() + 1 + "-" + mydate.getDate());
				}
			},
			cartyeardata() {
				data.splice(0, data.length);
				var now = new Date();
				var oneday = 24 * 3600 * 1000;
				for(var i = 180; i >= 0; i--) {
					var mydate = new Date(now.getTime() - i * oneday);
					data.push(mydate.getMonth() + 1 + "-" + mydate.getDate());
				}
			},
			moneyweekdata() {
				data1.splice(0, data1.length);
				var now = new Date();
				var oneday = 24 * 3600 * 1000;
				for(var i = 6; i >= 0; i--) {
					var mydate = new Date(now.getTime() - i * oneday);
					data1.push(mydate.getMonth() + 1 + "-" + mydate.getDate());
				}
			},
			moneymonthdata() {
				data1.splice(0, data1.length);
				var now = new Date();
				var oneday = 24 * 3600 * 1000;
				for(var i = 30; i >= 0; i--) {
					var mydate = new Date(now.getTime() - i * oneday);
					data1.push(mydate.getMonth() + 1 + "-" + mydate.getDate());
				}
			},
			moneyyeardata() {
				data1.splice(0, data1.length);
				var now = new Date();
				var oneday = 24 * 3600 * 1000;
				for(var i = 180; i >= 0; i--) {
					var mydate = new Date(now.getTime() - i * oneday);
					data1.push(mydate.getMonth() + 1 + "-" + mydate.getDate());
				}
			},
			cartline() {
				this.type = 'line'
			},
			cartbar() {
				this.type = 'bar'
			},
			moneyline() {
				this.type1 = 'line'
			},
			moneybar() {
				this.type1 = 'bar'
			}
		}}
</script>

<style>
	.grid-content {
		height: 60px;
		line-height: 60px;
		font-size: 18px;
		padding: 0 20px;
		border-bottom: 1px solid #97A8BE;
	}
	
	.totalBox {
		padding: 10px;
	}
	
	.box1 {
		background: #32cc7f;
		height: 120px;
	}
	
	.box3 {
		background: #33cc99;
		height: 120px;
	}
	
	.box2 {
		background: #66cc99;
		height: 120px;
	}
	
	.box4 {
		background: #339999;
		height: 120px;
	}
	
	.icon {
		float: left;
		display: block;
		padding: 10px;
	}
	
	.sth {
		float: right;
		color: #FFFFFF;
		display: inline-block;
		vertical-align: top;
		box-sizing: border-box;
		padding: 10px;
		font-size: 14px;
	}
	
	.data {
		font-size: 30px;
	}
	
	#cart {
		font-size: 60px;
		color: #336666;
		opacity: 0.33;
	}
	
	#comment {
		font-size: 60px;
		color: #996666;
		opacity: 0.3;
	}
	
	#browse {
		font-size: 60px;
		color: #6600cc;
		opacity: 0.3;
	}
	
	#user {
		font-size: 18px;
		color: #339966;
	}
	
	#goods {
		font-size: 18px;
		color: #3399cc;
	}
	
	#Chart {
		font-size: 18px;
		color: #009900;
	}
	
	.timebutton {
		float: right;
		line-height: 18px;
		padding: 0 10px;
	}
	
	.interval {
		height: 20px;
	}
	
	.statisticsTable {
		padding: 10px;
	}
	
	.classify {
		height: 100px;
		padding: 10px;
		text-align: center;
	}
	
	.num {
		font-size: 30px;
	}
	
	.word {
		font-size: 15px;
		color: #666666;
	}
	
	.Chart {
		padding: 10px;
	}
	
	.echarts {
		width: 100%;
		height: 300px;
	}
</style>