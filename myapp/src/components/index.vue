<template>
    <div>
        <div class="block">
            <span class="demonstration">Click 指示器触发</span>
            <el-carousel trigger="click" >
            <el-carousel-item v-for="item in carousel" :key="item">
                <h3 class="small">{{ item.title }}</h3>
                <img src="{{}}" alt="">
            </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      carousel:[
        {
            title:'1',
            img:''
      },{
            title:'2',
            img:''
      },{
            title:'3',
            img:''
      },{
            title:'4',
            img:''
      }]
    }
  },
  
    mounted:function(){
       
    },
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
