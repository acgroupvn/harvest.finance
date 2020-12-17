<template>
  <div>
     <div class="harvest__header">
        <span class="harvest__header-content">
          🧑‍🌾 Week 15 reward updates are live! 👩‍🌾
          <a href="">Details</a>
        </span>
     </div>
     <div class="harvest__body">
        <div class="harvest__body-header">
          <div class="harvest__body-header-xeHavest">
            <img src="../assets/xe.gif" alt="">
            "Harvest"
          </div>
          <div class="harvest__body-header-menu">
            <router-link to="/"  class-active="active" exact>Farm</router-link>
            <router-link to="/Stake"  class-active="active" exact>Stake</router-link>
            <router-link to="/FAQ"  class-active="active" exact>FAQ</router-link>
            <a href="">Dashboard</a>
            <a href="">Stats</a>
            <a href="">Wiki</a>
            <a href="">策略</a>
            <a href="">Claim</a>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1, h2 {
  font-weight: normal;
}
.lol{
  color:black!important;
  margin-bottom: -4px;
  border-bottom:4px solid black;
  opacity: 1!important;
}
.router-link-active{
  color:black!important;
  margin-bottom: -4px;
  border-bottom:4px solid black;
  opacity: 1!important;
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
.harvest__header{
    width: auto;
    font-size: 14px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-width: 2px 0px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: black;
    border-bottom-color: black;
    border-image: initial;
    border-right-style: initial;
    border-right-color: initial;
    border-left-style: initial;
    border-left-color: initial;
    background-color: rgb(255, 252, 230);
    padding: 10px 0;
}
.harvest__header-content{
   font-weight: bold;
   margin-right:10px;
}
.harvest__header-content a{
  margin-right:5px;
  margin-left:5px;
  color:black;
  font-weight:bold;
}
.background{
  width: 100%;
  z-index: -1;
  position:absolute;
  height: 1754px;
  background-size: cover;
  background-image: url('../assets/background1.jpg');
}
.background1{
  width: 100%;
  z-index: -1;
  position:absolute;
  height: 1754px;
  background-size: cover;
  background-image: url('../assets/background2.png');
}
.harvest__body-header-xeHavest{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    left: 10px;
    font-weight: bold;
    font-size: 24px;
    top: 3px;
    margin-top: 50px;
}
.harvest__body-header-xeHavest img{
    width:50px;
    margin-right:10px;
    border:1px solid black;
    border-radius:2px;
}
.harvest__body-header{
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-image: url(../assets/navbar-divider.svg);
    background-position: center bottom;
    background-repeat: no-repeat;
    height: 60px;
    overflow: overlay;
}
.harvest__body-header-menu{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    grid-column: 2 / 2;
}
.harvest__body-header-menu a{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: black;
    opacity: 0.5;
    font-weight: bold;
    margin-right: 20px;
    width: 80px;
    height: 52px;
    text-decoration: none;
}
</style>
