<template>
  <div>
    <div class="brand-nav-zone">
      <BrandNavBar></BrandNavBar>
    </div>
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/views/logins/Login";
import BrandNavBar from "@/components-depository/navbar/BrandNavBar";
export default {
  name: "SimpleLogin",
  components: { BrandNavBar, Login }
};
</script>

<style scoped></style>
