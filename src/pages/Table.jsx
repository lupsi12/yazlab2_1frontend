import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';



function Table() {
    const [veri, setVeri] = useState([]);
    const [referans, setReferans] = useState([]);
    function loadVeri() {
        fetch('/veri/'+localStorage.getItem("id"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setVeri(result);
            })
            .catch(error => {
                console.log("Bir hata oluştu : ", error);
                setVeri([]);
            });
    }
    useEffect(() => {
        loadVeri();
    }, []);


    function loadReferans() {
        fetch('/referans?veriId='+localStorage.getItem("id"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setReferans(result);
            })
            .catch(error => {
                console.log("Bir hata oluştu : ", error);
                setReferans([]);
            });
    }
    useEffect(() => {
        loadReferans();
    }, []);



    return (
        <div>
            <header>

            </header>
        </div>
    );
}
export default Table;