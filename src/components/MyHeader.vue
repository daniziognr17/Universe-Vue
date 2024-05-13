<template>
    <header>
        <h1>Universe Pics</h1>
        <p id="about">About</p>
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
}
</style>