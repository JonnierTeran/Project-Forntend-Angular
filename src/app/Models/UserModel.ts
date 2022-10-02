export class UserModel{
    public Nombre:String;
    public Apellido:String;
    public Mensaje:String;
    public Email:String;

    constructor (nombre:string, Apellido:String, Mensaje:String, email:String){
        this.Nombre= nombre;
        this.Apellido = Apellido;
        this.Mensaje= Mensaje;
        this.Email = email;
    }
}