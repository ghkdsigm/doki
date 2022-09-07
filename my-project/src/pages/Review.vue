<template>
  <div>
    <div class="h-full flex pt-10">
      <!-- sidebar 2 -->
      <!-- <div class="h-full w-96 bg-slate-50 border-r flex flex-col">
        <div class="h-full">
          <div
              class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">             
              <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Yaroslav Zubkp
                  </p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                      avaliable...</p>
              </div>
          </div>
          <div
              class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">              
              <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Alison Alison
                  </p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
              </div>
          </div>

          <div
              class="px-5 py-4   flex items-center bg-white cursor-pointer border-l-4 border-l-blue-500 border-t border-b">              
              <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Mircel Jones</p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Ok, Thanks.</p>
              </div>
          </div>

          <div
              class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">              
              <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Uran Poland</p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">We own hidden
                      lake..</p>
              </div>
          </div>

          <div
              class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">              
              <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Yaroslav Zubkp
                  </p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                      avaliable...</p>
              </div>
          </div>

          <div
              class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">              
              <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Alison Alison
                  </p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
              </div>
          </div>
        </div>
      </div> -->
      <div class="w-full h-full flex flex-col">
          <div class="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
              <div class="flex items-center">                  
                  <p class="font-semibold text-slate-600 text-xl">고객리뷰</p>
              </div>
              <!-- <div class="flex items-center space-x-5">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      class="h-9 bg-slate-50 rounded-full stroke-slate-400 p-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
              </div> -->
          </div>
          <div class="h-full px-10 py-4">
              <!-- message container -->
              <div class="text-center  my-5">
                  <hr class="-mb-3">
                  <span class="text-base text-slate-300 font-light bg-white px-3 -mt-3">Wednesday, Feburary
                      5</span>
              </div>
              <!-- messages -->
              <div class="w-full flex flex-start overflow-y-auto">
                  <div class="w-1/2">
                      <div class="flex items-center">                          
                          <p class="font-semibold ml-3 text-lg text-slate-600"><a href="#" target="_blank" class="mr-2 text-blue-700">하이퍼네스트</a>미스터킴 <span
                                  class="text-slate-400 text-xs font-light">3:21 PM</span></p>
                      </div>

                      <div class="mt-3 w-full bg-slate-100 p-4 rounded-b-xl rounded-tr-xl">
                          <p class=" text-base text-slate-500">
                              감사합니다. 덕분에 프로젝트 일정에 맞춰 잘 마무리지었어요!!
                          </p>
                      </div>
                  </div>
              </div>
              <!-- me -->
              <!-- <div class="w-full flex justify-end mt-3">
                  <div class="w-1/2 ">
                      <div class="flex items-center justify-end">
                          <p class="font-semibold mr-3 text-sm text-slate-600">Me <span
                              class="text-slate-400 text-xs">3:25 PM</span></p>

                          <img class="h-5 w-5 overflow-hidden rounded-full"
                              src="https://source.unsplash.com/random/500x500/?face"
                              alt="">
                        
                      </div>

                      <div class="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                          <p class=" text-sm text-white">
                              Hey, <br>
                              we are own hidden lake forest which is netural lake are generaly found in mountain.
                          </p>
                      </div>
                  </div>
              </div> -->
              <div class="text-center  my-5">
                  <hr class="-mb-3">
                  <span class="text-base text-slate-300 font-light bg-white px-3 -mt-3">Today, 2:15 AM
                      5</span>
              </div>
              <!-- messages -->
              <div class="w-full flex flex-start">
                  <div class="w-1/2">
                      <div class="flex items-center">                        
                          <p class="font-semibold ml-3 text-lg text-slate-600"><a href="#" target="_blank" class="mr-2 text-blue-700">남양시럽</a>자전거탄풍경 <span
                                  class="text-slate-400 text-xs font-light">3:21 PM</span></p>
                      </div>

                      <div class="mt-3 bg-slate-100 p-4 rounded-b-xl rounded-tr-xl">
                          <p class=" text-base text-slate-500">
                              감사해욥!!
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <!-- <div class="w-full px-5 py-3">
              <div
                  class="h-12 flex justify-between px-3 items-center border border-transparent bg-slate-50 focus-within:border-slate-300 rounded-lg">
                  <input type="text" class="w-full px-3 bg-transparent outline-none placeholder:text-slate-400"
                      placeholder="Type your message">
                  <div class="flex items-center space-x-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>

                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>

                  </div>
              </div>
          </div> -->
      </div>
    </div>
    <!--글쓰기-->
    <div class="w-full mt-12 mb-20 flex px-6 py-6 bg-slate-100">
      <div class="mx-2 w-2/12 pr-4 h-12 flex justify-between px-3 items-center border border-transparent bg-white focus-within:border-slate-300 rounded-lg">
        <div class="w-full">
          <input type="text" class="w-full bg-transparent outline-none placeholder:text-slate-400" placeholder="프로젝트명" />
        </div>
      </div>
      <div class="mx-2 w-2/12 pr-4 h-12 flex justify-between px-3 items-center border border-transparent bg-white focus-within:border-slate-300 rounded-lg">
        <div class="w-full">
          <input type="text" class="w-full bg-transparent outline-none placeholder:text-slate-400" placeholder="프로젝트URL" />
        </div>
      </div>
      <div class="mx-2 w-2/12 pr-4 h-12 flex justify-between px-3 items-center border border-transparent bg-white focus-within:border-slate-300 rounded-lg">
        <div class="w-full">
          <input type="text" class="w-full bg-transparent outline-none placeholder:text-slate-400" placeholder="닉네임" />
        </div>
      </div>
      <div class="mx-2 w-5/12 h-12 flex justify-between px-3 items-center border border-transparent bg-white focus-within:border-slate-300 rounded-lg">
        <div class="w-full">
          <input type="text" class="w-full bg-transparent outline-none placeholder:text-slate-400" placeholder="리뷰 남기기" />
        </div>
      </div>
      <div class="mx-2 w-1/12 h-12 flex justify-between items-center border border-transparent bg-white focus-within:border-slate-300 rounded-lg">
        <div class="w-full h-full flex justify-center">
          <button type="button" class="w-full h-full bg-blue-500 hover:bg-blue-700 hover:text-white text-white">등록하기</button>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>