<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">James Armbrust</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/PlayerStatTool" activeClass="active" tag="li"><a>Player Stat Tool</a></router-link>
          <router-link to="/PetPictures" activeClass="active" tag="li"><a>Pet Pictures</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Placeholder Dropdown</a></li>
              <li><a href="#">Will have something</a></li>
              <li><a href="#">Located here...</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Someday</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  export default {
  }
</script>

<style>
</style>
