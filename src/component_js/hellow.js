import { reactive } from "vue"
function Arr() {
    let newArr = reactive({ arr: ["1", "2", "3", "4"] })
    return { newArr }
}
function setArr() {
    let itemRefs = reactive(["1"]);
    
    return { itemRefs };
}
export { Arr, setArr};