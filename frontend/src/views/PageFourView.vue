<script setup>
import { computed, onMounted, ref } from "vue"
import { useRouter } from "vue-router";

const router = useRouter()

const teams = [
    {
        parent:'Chiefs',
        children:[
            {
                role:'Main',
                members:[
                    {
                        name:'Mohammed Jawaad',
                        image:'https://i.ibb.co/Gs2FgFs/Screenshot-2023-12-31-20-26-45-24-92460851df6f172a4592fca41cc2d2e6-Mohammed-Jawaad.jpg',
                    }
                    
                ]
            },
            {
                role:'Associate',
                members:[
                    {
                        name:'Raeesah Aroob Shaik',
                        image:'https://i.ibb.co/mNVS0mT/raeesu3.jpg',
                    },
                    {
                        name:'Rishika Reddy',
                        image:'https://i.ibb.co/qYZYTyf/rishika5.jpg',
                    },
                    {
                        name:'Aman Kondimela',
                        image:'https://i.ibb.co/C0NYX6x/aman.jpg',
                    },
                    {
                        name:'V N Vijayeswari',
                        image:'https://i.ibb.co/PT7Y9vD/viiiiiiiiii9.jpg',
                    },
                    {
                        name:'Dheeraj',
                        image:'https://i.ibb.co/1XqTxWs/dheeraj.jpg',
                    }
                    
                ]
            }
        ]
    },
    {
        parent:"Committee",
        children:[
            {
                role:'',
                members:[
                {
                        name:'S Hari Priya Devi',
                        image:'https://i.ibb.co/dGXgw4x/haripriya.jpg'
                    },
                    {
                        name:'K Muni Sai Charith',
                        image:'https://i.ibb.co/LYbbw3p/chatithh.jpg'
                    },
                    {
                        name:'Shaik Sameera',
                        image:'https://i.ibb.co/WWd6MjD/sameera4.jpg'
                    },
                    {
                        name:'B. Koushik Reddy',
                        image:'https://i.ibb.co/LCqJNtV/koushik6.jpg'
                    },
                    {
                        name:'Aravind Chowdary',
                        image:'https://i.postimg.cc/SmfNMRxN/Whats-App-Image-2024-01-13-at-00-21-30-2.jpg'
                    },
                    {
                        name:'Tippisetty Jayendra Lakshman',
                        image:'https://i.ibb.co/0rJ6BzD/jayendra10.jpg'
                    },
                    {
                        name:'K Vamsi Krishna Siddartha',
                        image:'https://i.ibb.co/VWZsMrW/siddharth.jpg'
                    },
                    {
                        name:'Settipalli Sai Rithwik',
                        image:'https://i.ibb.co/ScRzjY7/rithwik.jpg'
                    }
                ]
            },
        ]
    },
    {
        parent:"Website",
        children:[{
            role: '',
            members:[
                    {
                        name:'Dinesh SriSanth Adari',
                        image:'https://i.postimg.cc/4Xf17FmL/photo-2024-02-11-19-24-06.jpg',
                    },
                    {
                        name:'Harsha Vardhan Polamarsetty',
                        image:'https://i.postimg.cc/bqfCFJGM/Whats-App-Image-2024-02-11-at-19-15-52.jpg',
                    },
                    {
                        name:'Silla Ganesh',
                        image: 'https://i.postimg.cc/rpBCCBKK/my-pic.jpg'
                    }
                ]
            }
        ]
    }
]

const activeParent = ref('Chiefs')
const activeParentIndex = computed(() => {
    return teams.findIndex(team => team.parent === activeParent.value);
});

const activeChild = ref(teams[activeParentIndex.value].children[0].role || '')

const activeChildIndex = computed(() => {
    const activeParentIndexValue = activeParentIndex.value;
    const activeChildValue = activeChild.value;

    if (activeParentIndexValue !== -1) {
        const activeParentChildren = teams[activeParentIndexValue].children;

        // Find the index of the active child role
        const index = activeParentChildren.findIndex(child => child.role === activeChildValue);

        return index;
    }

    return -1;
});

const handleParentNavItemClick = (team) =>{
    activeParent.value = team
    activeChild.value = teams[activeParentIndex.value].children[0].role
}

const handleChildrenNavItemClick = (role) =>{
    activeChild.value = role.role
}

onMounted(()=>{
    document.title = 'Team -VastraShala'
})

</script>

<template>
    <div class="flex flex-col min-h-[100vh] bg-[#2d1304] justify-center py-8 px-4">
        <button @click="router.back()" class="arrow-icon-prev fixed top-5 left-5 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <span class="text-5xl max-sm:text-4xl font-merriweather tracking-wide font-semibold text-center pb-12">Team VastraShala</span>
        <div class="flex flex-col gap-8 w-full justify-center">
            <nav aria-label="team-parent-nav" class="flex justify-center">
                <div class="border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2">
                    <button :class="activeParent==team.parent ? 'text-gray-50': 'text-gray-400'" class="text-xl hover:text-gray-300 font-semibold transition-all tracking-wider" v-for="team in teams" :key="team.parent" @click="handleParentNavItemClick(team.parent)">{{ team.parent }}</button>
                </div>
            </nav>
            <nav v-if="teams[activeParentIndex].children[0].role.length>0 || false" aria-label="team-children-nav" class="flex justify-center">
                <div class="border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2">
                    <button :class="activeChild==role.role?'text-gray-50':'text-gray-400'" class="text-xl hover:text-gray-300 font-semibold transition-all tracking-wider" v-for="role in teams[activeParentIndex].children" :key="role" @click="handleChildrenNavItemClick(role)">{{ role.role }}</button>
                </div>
            </nav>
        </div>

        <!-- <div class="flex relative min-[100vh] mt-12 justify-center">
            <div class="flex sm:gap-14 gap-10 flex-wrap justify-evenly">
                <div class="group rounded-2xl cursor-pointer bg-[#1d1e2a] max-w-[250px] max-h-[350px] md:max-w-[300px] md:max-h-[400px] overflow-hidden" v-for="member in teams[activeParentIndex].children[activeChildIndex].members" :key="member.name">
                    <img class="group-hover:bg-opacity-20" :src="member.image" :alt="member.name"/>
                    <div class="flex rounded-r-lg overflow-hidden group-hover:bg-[#2d1304] group-hover:translate-x-0 group-hover:transition-all group-hover:duration-700 -translate-x-10 group-hover:backdrop:blur-xl flex-col px-4 py-2 absolute opacity-0 group-hover:opacity-100 bg-transparent bottom-3 text-center">
                        <span class="text-lg text-gray-300 font-semibold font-merriweather">{{ member.name }}</span>
                        <span class="text-md text-gray-400 font-robotoslab">{{ member.designation }}</span>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="flex justify-center max-md:gap-8 max-ssm:md-6 text-center md:gap-12 flex-wrap sm:mt-12">
            <div v-for="member in teams[activeParentIndex].children[activeChildIndex].members" :key="member.name" class="card relative w-[380px] h-[480px] rounded-3xl overflow-hidden shadow-md">
                <div class="poster relative top-0 left-0 w-full h-full overflow-hidden">
                    <img class="group-hover:bg-opacity-20 object-fill" :src="member.image" :alt="member.name"/>
                </div>
                <div class="details flex flex-col relative place-items-center align-middle justify-center gap-4 py-2 pb-2">
                    <span class="text-lg text-gray-300 text-cebter font-semibold font-merriweather">{{ member.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Oswald:wght@400;600&family=Roboto+Slab:wght@300;400;700&display=swap');
.arrow-icon-prev{
    animation: left-right 1000ms infinite;
}

@keyframes left-right {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}
.card{
    position: relative;
}

.poster::before{
    content: '';
    position: absolute;
    bottom: -45%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: .5s;
}

.card:hover .poster::before{
    bottom: 0;
}

.poster img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: .5s;
}

.card:hover .poster img{
    transform: scale(1.1);
}

.details{
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: auto;
    background: #00000067;
    backdrop-filter: blur(16px) saturate(150%);
    transition: .5s;
    color: #fff;
    z-index: 2;
}

.card:hover .details{
    bottom: 0;
}

.view-btn{
    border: 1.5px solid rgba(255 255 255 / 0.4);
}

.arrow-icon-prev{
    animation: left-right 1000ms infinite;
}

@keyframes left-right {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}

</style>