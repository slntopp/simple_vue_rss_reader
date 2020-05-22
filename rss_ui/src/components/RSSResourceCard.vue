<template>
    <div class="rss-resource-card">
        <a-page-header :backIcon="false" :title="resource.title" :sub-title="resource.description == '' ? 'No description provided' : resource.description">
            <p>Creator: {{ resource.creator }} <a :href="resource.link">Link</a></p>
        </a-page-header>
    </div>
</template>

<script>
import Vue from "vue";
import { PageHeader } from "ant-design-vue";
Vue.use(PageHeader);

export default {
    props: {
        resource: {
            required: true
        }
    }
}
</script>