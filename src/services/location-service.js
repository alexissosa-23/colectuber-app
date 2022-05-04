import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import ColectuberService from "./colectuber-service";

const TASK_NAME = "BACKGROUND_LOCATION_TASK"

TaskManager.defineTask(TASK_NAME, async ({ data, error }) => {
    if (error) {
        console.error(error);
        return;
    }
    if (data) {
        const { locations } = data;
        const location = locations[locations.length - 1];
        if (location) {
            let datos = {
                posicionColectivo: {
                    latitud: location.coords.latitude,
                    longitud: location.coords.longitude
                },
            }
            console.log(datos);
            ColectuberService.postUbicacion(datos);
        }
    }
});

//solicitar permisos
const requestPermissions = async () => {
    const foregroundPermission = await Location.requestForegroundPermissionsAsync();
    if (!foregroundPermission.granted) return false;
    const backgroundPermission = await Location.requestBackgroundPermissionsAsync();
    if (!backgroundPermission.granted) return false;
    return true;
}

// obtener los permisos
const getPermissions = async () => {
    const foregroundPermission = await Location.getForegroundPermissionsAsync();
    if (!foregroundPermission.granted) return false;
    const backgroundPermission = await Location.getBackgroundPermissionsAsync();
    if (!backgroundPermission.granted) return false;
    return true;
}

//Si ya comenzo el viaje
const isTrackingLocation = async () => {
    let istracking = await Location.hasStartedLocationUpdatesAsync(TASK_NAME);
    return istracking;
}

const startLocationTracking = async () => {
    //Si tiene Permisos
    let permissions = await getPermissions();
    if (!permissions) throw new Error("Permissions not granted.");

    //Si definio el servicio
    if (!TaskManager.isTaskDefined(TASK_NAME)) throw new Error("Task not ready or defined.");

    //Si ya comenzo
    let hasStarted = await isTrackingLocation();
    if (hasStarted) throw new Error("Tracking already started.");

    //Comenzar (notificacion en el telefono)
    await Location.startLocationUpdatesAsync(TASK_NAME, {
        accuracy: Location.Accuracy.BestForNavigation,
        showsBackgroundLocationIndicator: true,
        foregroundService: {
            notificationTitle: "Location",
            notificationBody: "Location tracking in background",
            notificationColor: "#fff",
        }
    });
}

const stopLocationTracking = async () => {
    //Si no comenzo
    let hasStarted = await isTrackingLocation();
    if (!hasStarted) throw new Error("Tracking not started.");
    //Parar
    Location.stopLocationUpdatesAsync(TASK_NAME);
}

const LocationService = {
    requestPermissions,
    getPermissions,
    isTrackingLocation,
    startLocationTracking,
    stopLocationTracking
};

export default LocationService;