<template>
    <header>
        <p @click="this.$router.push('/');" id="home">Home</p>
        <h1>Universe Vue</h1>
        <p @click="this.$router.push('/about');" id="about">About</p>
    </header>
</template>

<script>

export default {
    name: 'MyHeader'
}

</script>

<style scoped>

header {
    width: 100%;
    background-color: #1e1e1e;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    font-size: 24px;
    font-weight: 600;
    color: white;
}

#about {
    color: white;
    margin-right: 10px;
    font-weight: 600;
    cursor: pointer;
}

#home {
    color: white;
    font-weight: 600;
    cursor: pointer;
}
</style>