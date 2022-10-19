let id = parseInt(window.localStorage.getItem('idMax')||'6')
const createId = ():number=>{
    id+=1;
    window.localStorage.setItem('idMax',JSON.stringify(id))
    return id
}
export default createId