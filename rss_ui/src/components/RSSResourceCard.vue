<template>
    <div class="rss-resource-card">
        <a-page-header :backIcon="false" :title="resource.title" :sub-title="resource.description == '' ? 'No description provided' : resource.description">
            <p>Creator: {{ resource.creator }} <a :href="resource.link" target="_blank"> Homepage </a></p>
        </a-page-header>
    </div>
</template>

<script>
export default {
    props: {
        resource: {
            required: true
        }
    }
}
</script>