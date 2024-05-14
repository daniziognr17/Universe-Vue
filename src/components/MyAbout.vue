<template>
    <div id="MyAbout">
        <div id="AboutProject">
            <p>This project consists of an application to practice knowledge in the vue.js framework. The objective is
                to
                perform searches that will return images from NASA's official API. I believe it is very useful for
                people
                who like this content.</p>
        </div>
        <div id="AboutMe">
            You can find a little about me on my linkedin and my github
        </div>
        <div id="Social">
            <a target="_blank" href="https://www.github.com/daniziognr17"><img src="@/assets/github_icon.png" alt=""></a>
            <a target="_blank" href="https://www.linkedin.com/in/danizio-cavalcante"><img src="@/assets/linkedin_icon.png" alt=""></a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyAbout'
}
</script>

<style scoped>
#MyAbout {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

#AboutProject {
    width: 50%;
    padding: 12px;
    text-align: justify;
}

#AboutMe {
    width: 50%;
    padding: 12px;
    text-align: justify;
}

#Social {
    padding: 12px;
}

#Social img {
    width: 48px;
}
</style>