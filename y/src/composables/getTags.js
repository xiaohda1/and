import { ref } from 'vue'

const getTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set()

    posts.forEach(item => {
        item.tags.forEach(tag => {
            tagSet.add(tag)
        })
    })

    tags.value = [... tagSet]


    return { tags }
}

export default getTags