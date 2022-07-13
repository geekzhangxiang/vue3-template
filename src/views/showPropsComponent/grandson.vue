<script lang="ts" setup>
import {inject} from "vue";
const userLocation = inject("location", "The Universe");
const userGeolocation = inject("geolocation");
const updateUserLocation = inject("updateLocation");

console.log("孙组件中获得的userLocation", userLocation.value);
console.log("孙组件中获得的userGeolocation", userGeolocation)
console.log("孙组件中获得的userGeolocation", updateUserLocation())
</script>

<style>

</style>