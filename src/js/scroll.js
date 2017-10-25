export default class Scroll{
  constructor(options){
    this.options = options
    this.lock
    this.pageIndex = 0
    this.bind()
  }
  bind(){
    window.addEventListener('mousewheel',(e)=>{
      this.toScroll(e)
    })
  }
  toScroll(e){
    clearInterval(this.lock)
    this.lock = setTimeout(()=>{
      (e.wheelDelta < 0 && this.pageIndex <= 2 && this.pageIndex >= 0) ? (this.pageIndex++) : (this.pageIndex--)
      if(this.pageIndex >= 2){
        this.pageIndex = 2
      }else if(this.pageIndex < 0){
        this.pageIndex = 0
      }
      this.options.style.transform = `translateY(-${this.pageIndex}00%)`
    },300)
  }
}