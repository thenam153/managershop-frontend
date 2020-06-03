<template>
    <div>
        {{title}}
    </div>
</template>

<script>
export default {
    name: 'Product',
    props: ['title'],
    data:  function() {
        return {
            value: "Hello"
        }
    }
}
</script>