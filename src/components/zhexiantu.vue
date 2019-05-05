<template>
  <div>
    <div class="echarts" id="echarts"></div>
  <div @click="fun">sdklgjkerpg;lke</div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.$nextTick(() => {
      this.echartsInit();
    });
  },
  methods: {
    fun(){
      this.$router.push({name:"b",query:{id:6,g:"krsgkjer"}})
    },
    echartsInit() {
      this.echarts = echarts.init(document.querySelector("#echarts"));
      this.setOptions();
    },
    setOptions() {
      let option = {
        title: {
          text: "折线图堆叠",
          left: "20px"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "10%",
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: "category",
          nameLocation: "center",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        axisLine: {
          show: false,
          symbol: ["none", "arrow"]
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      this.echarts.setOption(option);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.echarts {
  height: 400px;
  width: 800px;
}
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>