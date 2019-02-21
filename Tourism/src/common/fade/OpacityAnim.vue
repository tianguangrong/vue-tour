<template>
    <div>
        <transition>
            <slot></slot>
        </transition>
    </div>
</template>

<script>
export default {
    name:'OpacityAnim'
}
</script>

<style lang="stylus" scoped>
    .v-enter,.v-leave-to
        opacity 0;
    .v-leave-active,.v-enter-active
        transition opacity .8s;
</style>


