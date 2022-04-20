import API from "src/api/api";

const postUbicacion = async (data)=>{
    let responce = await API.post("/api/ubicacion", parseBeanToDtoColectivoUbicacion(data));
    return responce.data;
}

const getViaje = async ()=>{
    let responce = await API.get("/api/viaje_chofer");
    return responce.data;
}

const parseBeanToDtoColectivoUbicacion =(data)=>{
    let dto = {
        posicionColectivo:{
            latitud: data.position.lat,
            longitud: data.position.lng
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