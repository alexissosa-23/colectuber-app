import API from "src/api/api";

const postUbicacion = async (data)=>{
    let responce = await API.post("/api/colectuber/ubicacion", parseBeanToDtoColectivoUbicacion(data));
    return responce.data;
}

const getViaje = async ()=>{
    let responce = await API.get("/api/colectuber/viaje_chofer");
    return responce.data;
}

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
    getViaje
};

export default ColectuberService;