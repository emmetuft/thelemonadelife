<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/" exact-active-class="active-link" class="navbar-brand">The Lemonade Life</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" exact-active-class="active-link" class="nav-link black-txt">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" exact-active-class="active-link" class="nav-link black-txt">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" exact-active-class="active-link" class="nav-link learn-more-btn">Learn More</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
* {
  font-family: 'Montserrat', sans-serif;
}
.navbar{
  padding: 30px 40px 0 40px !important;
  z-index: 1;
}
.navbar-brand {
  color: #FFB546 !important;
  font-weight: 600;
}
.navbar-collapse {
  justify-content: flex-end;
}
.black-txt {
  color: black !important;
  padding-top: 10px !important;
}
.learn-more-btn {
  color: white !important;
  background-color: #FFB546;
  padding: 10px 45px 10px 45px !important;
  border-radius: 30px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-link {
  display: block;
  font-size: 12px;
  font-weight: 600 !important;
  transition: .5s;
}
.nav-item {
  margin-left: 30px;
}
.nav-link:hover {
  color: black !important;
  transition: .5s;
}
.navbar-light {
  background-color: #FFEED7 !important;
  height: 70px;
}
.active-link {
  color: black;
}
</style>
