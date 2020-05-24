<template>
    <div>
        <a-empty v-if="feed.length == 0" description="No feed were given or feed is empty."/>
        <template v-else>
            <a-row id="feed">
                <a-col :span="12" v-for="post in feedPage" :key="post.id" style="margin-top: 10px">
                    <a-row type="flex" justify="center">
                        <a-card hoverable style="width: 95%" @click="handleCardClick(post.link)">
                            <a-card-meta :title="post.title">
                                <template slot="description">
                                    <a-row>
                                        <p v-html="post.content" />
                                    </a-row>
                                    <a-row type="flex" align="middle">
                                        <a-col :span="4">
                                            <p><b> Posted </b></p>
                                        </a-col>
                                        <a-col :span="12">
                                            <p v-if="post.creator">by <b> {{ post.creator }} </b></p>
                                            <p>on {{ (new Date(post.isoDate)).getDateOnly() }} </p>
                                        </a-col>
                                    </a-row>
                                </template>
                            </a-card-meta>
                        </a-card>
                    </a-row>
                </a-col>
            </a-row>
            <a-row type="flex" justify="center" style="margin-top: 20px">
                <a-pagination v-model="page" :total="feed.length" show-less-items :page-size="8" :show-total="total => `Total ${total} items`"/>
            </a-row>
        </template>
    </div>
</template>

<script>
Date.prototype.getDateOnly = function(){
    return [
        this.getDate(), this.getMonth() + 1, this.getFullYear()
    ].join('/')
}

export default {
    props: {
        feed: {
            required: true
        }
    },
    computed: {
        feedPage(){
            return this.feed.slice(8 * (this.page - 1), 8 * this.page);
        }
    },
    data(){
        return {
            page: 1
        }
    },
    methods: {
        handleCardClick(url){
            window.open(url, '_blank');
        }
    },
}
</script>

<style>
#feed img {
    max-height: 160px!important;
    width: auto;
}
</style>