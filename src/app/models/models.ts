export interface Empleados {
    Nombre: string;
    Apellido: string;
    FechaNacimiento: Date;
    Direccion: string;
    Telefono: string;
    CorreoElectronico: string;
    DepartamentoID: number;
}
export interface Login{
    Usuario:string,
    Contraseña:string
}
export interface Departamentos{
    DepartamentoID:string,
    NombreDepartamento:string
}