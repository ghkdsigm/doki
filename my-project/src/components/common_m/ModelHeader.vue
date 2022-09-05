<template>  
  <div class="w-full flex items-center modelheader">
      <div class="w-1/4 modellist relative">    
        <div class="text-xs text-center md:text-base selected">
          <a href="#">
            기본분류
          </a>
        </div>
      </div>

      <div class="w-1/4 modellist relative">
        <div class="text-xs text-center md:text-base text-neutral-500">
          <a href="#">
            레이아웃
          </a>
        </div>
      </div>

      <div class="w-1/4 modellist relative">   
        <div class="text-xs text-center md:text-base text-neutral-500">
          <a href="#">
            색상
          </a>
        </div>
      </div>

      <div class="w-1/4 modellist relative">
        <div class="text-xs text-center md:text-base text-neutral-500">
          <a href="#">
            문의하기
          </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.modelheader .selected {font-weight: 400; color:#fff;}
.modellist:after {    
  position: absolute;
  top: 85%;
  left: 100%;
  width: 8px;
  width: 0.5rem;
  height: 26px;
  height: 2.6rem;
  margin-top: -1.3rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAArCAYAAABIKblUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWJJREFUeNqcluFSwjAQhJsIdhQoJf98/yfzBWjFolKBenGuzrEklxszsz8I/bgk3ezhpmmqaDyQdqQ16ZX0O6mNBWlFeiF5ntuQDiUwPnwiOTEXKsOI4BkqPPIqimAce9jXzgp+kwYx/0yqLeBctbLuVYLxkI7i85pPvQhiVadVRfCTNY8m8UwSxKrx+9YKHnm/82jBIFkQqy54ySbwnTRqhvDKq+o0G2rggX2crKqBE1S9saEvePmNdEnZsAReSX3Kht5wZ3v+gRsbWsALL1nacGkBK0iIyAQr2MC+OwsYo3ML1UcL2Iqz+Hu33pBJ8loNnE9FcMtLvfOvBjrw5wfpywI2EFad1eSy2ggJmAU3fAeT1TRQxuI51b1S4Ariv0/1S1+ohtcqCz6xpL2uFjBAdOwtLaCGJBsgrLJgUEI5Cy45T6S9ThYwQH/oLK0ce8OdvXJgDS+4s2SJ++8/qx8BBgDv/093uQvmUAAAAABJRU5ErkJggg==) no-repeat;
  background-size: 100% auto;
  content: "";
}
.modellist:last-child:after{
  display:none;
}
.modellist a:hover {color:#fff;}
</style>