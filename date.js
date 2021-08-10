
const getDate=()=>{
    let today=new Date();
    let day=today.toISOString().split('T')[0];
    return day;
}
const getDay=()=>{
    let today=new Date();
    let day=today.toISOString().split('T')[0];
    return day;
}
module.exports.getDate=getDate;
module.exports.getDay=getDay;