<template>
    <div>
      <!-- <ModelHeader/>
      <ModelSide/> -->
      <div class="min-h-full w-full bg-neutral-900">
        <div class="min-h-screen flex flex-col w-full">
          <div class="w-full border-b border-neutral-800 h-16 items-center flex">
            <div class="flex justify-between w-full items-center h-full">
              <div class="text-white flex w-full flex-row h-full">
                <div class="flex items-center basis-1/6 border-r border-neutral-800 w-full">
                  <!--기본형-->
                  <div class="flex justify-center w-full h-full">
                    <div class="w-full">
                      <div class="dropdown relative w-full h-full">
                        <a
                          class="
                            justify-between
                            dropdown-toggle
                            px-6
                            py-2.5                            
                            text-white
                            font-light
                            text-lg
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            transition
                            duration-150
                            ease-in-out
                            flex
                            items-center
                            whitespace-nowrap
                            h-full
                          "
                          href="#"
                          type="button"
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <p ref="selectResult" class="font-light">
                            기본형
                          </p>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            class="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                          </svg>
                        </a>
                        <ul
                          class="
                            w-full
                            dropdown-menu
                            min-w-max
                            absolute
                            hidden
                            bg-neutral-900
                            border-b
                            border-r
                            border-neutral-800
                            text-base
                            z-50
                            float-left
                            list-none
                            text-left
                            shadow-lg
                            bg-clip-padding
                            selectmeunu
                          "
                          aria-labelledby="dropdownMenuButton2"
                        >
                          <li v-for="item in selarray" :key="item.id" @click="selectli(item.id, item.name)" :class="selectedId === item.id ? 'my-selected-item-class':null">
                            <a
                              class="
                                dropdown-item
                                text-lg
                                py-4
                                px-6
                                font-extralight
                                block
                                w-full
                                whitespace-nowrap
                                bg-transparent
                                text-gray-400
                                hover:bg-black
                                hover:text-white
                                hover:font-normal
                              "
                              href="#"
                              >{{item.name}}</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>  
                  <!--//기본형-->              
                </div>
                <div class="flex basis-3/6">
                  <ModelHeader/>
                </div>
                <div class="flex basis-2/6">
                  
                </div>
              </div>
              <div class="pr-4 h-full flex items-center">                
                <back-home></back-home>
              </div>
            </div>
          </div>

          <div class="flex-1 flex flex-col sm:flex-row w-full">
            <div class="w-3/4 p-4 border-r border-neutral-800 text-white flex items-center justify-center bg-neutral-800">
              Content here
            </div>

            <div class="w-1/4 text-white">
              <div class="orderSel p-10">1111</div>
              <div class="orderBt flex items-center border-t border-neutral-800 p-10 justify-between">
                <div class="border border-gray-200 h-full bt flex items-center justify-center hover:bg-white hover:text-black">이전</div>
                <div class="border border-gray-200 h-full bt flex items-center justify-center hover:bg-white hover:text-black">다음</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  import ModelHeader from '../components/common_m/ModelHeader.vue'
  import ModelSide from '../components/common_m/ModelSide.vue';
  import BackHome from '../components/BackHome.vue';
  import { ref, onMounted } from 'vue'

  export default {
    components:{
        ModelHeader,
        ModelSide,
        BackHome
    },
    setup(){
      const selectedId = ref(1)
      const selectedName = ref(null)
      const displayCategory = ref(false)
      const selarray = ref([{id: 1,name: "기본형"},{id: 2,name: "확장형"},{id: 3,name: "프리미엄"},{id: 4,name: "커스텀"}])
      const selectResult = ref('')
      
      const selectli = (itemId, itemName) => {
          selectedId.value = itemId
          selectedName.value = itemName          
          displayCategory.value = !displayCategory.value
          selectResult.value.textContent = selectedName.value
      }


      return{
        selarray,
        selectedId,
        selectedName,
        selectli,
        displayCategory,
        selectResult
      }
    }
  }
  </script>
  
  <style scoped>
    .selectmeunu {left:1px !important;}
    .orderSel {
      height:calc(100% - 130px);
    }
    .orderBt {
      height:130px;
    }
    .orderBt .bt {
      width: calc(50% - 5px);
      text-align:center;
    }
    .orderBt .bt {
      cursor: pointer;
    }
  </style>