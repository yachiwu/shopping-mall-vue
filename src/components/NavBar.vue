<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Shopping Mall</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto">
            <li class="nav-item">
            <router-link to="/" class="nav-link">Product</router-link>
            </li>
            <li class="nav-item">
            <router-link to="/orders" class="nav-link">Order</router-link>
            </li>
        </ul>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="search" placeholder="Search Product">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
    <router-view></router-view>  
</template>