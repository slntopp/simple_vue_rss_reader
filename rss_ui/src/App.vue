<template>
  <div id="app">
    <a-page-header
      style="background: #001529"
      :backIcon="false"
    >
      <h1 style="color: white" slot="title"> RSS Feed </h1> 
    </a-page-header>
    <a-row type="flex" justify="center" style="margin: 10px 0px">
      <a-col :span="resource.empty ? 0 : 8">
        <RSSResourceCard :resource="resource" />
      </a-col>
      <a-col :span="8">
        <a-row type="flex" justify="center">
          <a-form-model layout="inline" :model="form" @submit="handleSubmit" @submit.native.prevent>
            <a-form-model-item>
              <a-input v-model="form.url" placeholder="RSS Feed URL" type="url" style="width: 256px">
                <a-icon slot="prefix" type="link" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item>
              <a-button
                type="primary"
                html-type="submit"
                :disabled="form.url === ''"
              >
                Fetch
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </a-row>
      </a-col>
    </a-row>
    <a-row type="flex" justify="center">
      <RSSFeed :feed="feed" />
    </a-row>
  </div>
</template>

<script>
import Vue from 'vue';

import { FormModel, PageHeader, Input, Button, Icon } from 'ant-design-vue';
Vue.use(PageHeader);
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Button);
Vue.use(Icon);

import RSSFeed from "./components/RSSFeed";
import RSSResourceCard from "./components/RSSResourceCard";
import Parser from "rss-parser";

// const CORS_PROXY = "";
// const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const CORS_PROXY = "https://cors-everywhere.mylivn-challenge.slnt-opp.xyz/";

export default {
  name: 'App',
  components: {
    RSSFeed, RSSResourceCard
  },
  data(){
    return {
      form: { url: 'https://codepen.io/picks/feed/' },
      resource: { empty: true },
      feed: [],
      parser: new Parser()
    }
  },
  methods: {
    async handleSubmit(){
      let feed = await this.parser.parseURL(CORS_PROXY + this.form.url);
      this.feed = feed.items;
      this.resource = feed;
    }
  },
}
</script>