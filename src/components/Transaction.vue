<template>
    <div>
        {{title}}
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Product',
    props: ['title'],
    data() {
        return {
            value: "Hello"
        }
    },
    methods: {
        getData() {
            axios.get('/create/')
            .then((res) => {

            })
        }
    }
}
</script>