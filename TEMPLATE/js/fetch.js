import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-qinthar2024-48d72259230b.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}