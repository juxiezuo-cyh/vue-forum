<template>
  <ul class="question-list">
    <li class="question-list-li" v-for="(item,index) in questionList">
      <ul class="clearfix">
        <li class="list-left fl">
          <a href="">
            <div class="list-left-div">
              <div class="count">0</div>
              <div class="name">votes</div>
            </div>
            <div class="list-left-div has">
              <div class="count">1</div>
              <div class="name">answers</div>
            </div>
            <div class="list-left-div">
              <div class="count">0</div>
              <div class="name">views</div>
            </div>
          </a>
        </li>
        <li class="list-right fl">
          <h3>
            <a :href="'../problemDetails/details.html?id='+item.id">{{item.title}}</a>
          </h3>
          <div class="clearfix">
            <div class="fl list-right-div">
              <a href="" v-for="(tag,index) in item.tag">{{tag}}</a>
            </div>
            <!-- <div class="fr">
              <a href="">mysql</a>
              <a href="">group-concat</a>
            </div> -->
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    questionList: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>
.question-list {
  width: 728px;
}

.list-left-div {
  display: inline-block;
  text-align: center;
  padding: 8px 5px;
  margin-right: 3px;
}

.list-left-div.has {
  border: 1px solid #A1D0B0;
  color: #45A163;
}

.list-left-div .count {
  font-size: 17px;
}

.list-left-div .name {
  font-size: 12px;
}

.question-list-li {
  padding: 12px 10px;
  border-bottom: 1px solid #E4E6E8;
}

.list-left {
  width: 22%;
  padding-right: 15px;
}

.list-right {
  width: 75.8%;
  font-size: 12px;
}

.list-right h3 {
  display: block;
  margin-bottom: 5px;
}

.list-right h3 a {
  font-size: 16px;
  line-height: 25px;
  font-weight: normal;
  color: #007DC2;
}

.list-right-div a {
  display: inline-block;
  padding: 6px 6px;
  color: #39739d;
  margin-right: 3px;
  background-color: #E1ECF4;
  border-color: transparent;
}

.list-right div.fr {
  line-height: 29px;
}
</style>
