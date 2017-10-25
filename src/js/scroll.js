export default class Scroll{
  constructor(options){
    this.options = options
    this.lock = false
    this.pageIndex = 0
    this.bind()
  }
  bind(){
    window.addEventListener('mousewheel',(e)=>{
      this.initScroll(e)
    })
  }
  initScroll(e){
    if(this.lock){return}
    (e.wheelDelta < 0 && this.pageIndex <= 2 && this.pageIndex >= 0) ? (this.pageIndex++) : (this.pageIndex--)
    if(this.pageIndex >= 2){
      this.pageIndex = 2
    }else if(this.pageIndex < 0){
      this.pageIndex = 0
    }
    this.toScroll().then(()=>{
      setTimeout(()=>{this.lock = false},800)
    })
  }
  toScroll(){
    this.lock = true
    return new Promise((resolve,reject)=>{
      this.options.style.transform = `translateY(-${this.pageIndex}00%)`
      resolve()
    })
  }
}