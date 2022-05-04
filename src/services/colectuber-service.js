import API from "src/api/api";

//hacer post de la ubicacion
const postUbicacion = async (data)=>{
    let responce = await API.post("/api/colectuber/ubicacion", parseBeanToDtoColectivoUbicacion(data));
    return responce.data;
}
//obtener viajes
const getViaje = async ()=>{
    let responce = await API.get("/api/colectuber/get-viaje");
    return responce.data;
}
//obtener Chofer
const getChofer = async ()=>{
    let responce = await API.get("/api/colectuber/get-chofer");
    return responce.data;
}

// estructura del dato para el post
const parseBeanToDtoColectivoUbicacion =(data)=>{
    let dto = {
        posicionColectivo:{
            latitud: data.posicionColectivo.latitud,
            longitud: data.posicionColectivo.longitud
        },
        chofer_id: data.choferId
    }
    return dto;
}

const ColectuberService = {
    postUbicacion,
    getViaje,
    getChofer,
};

export default ColectuberService;