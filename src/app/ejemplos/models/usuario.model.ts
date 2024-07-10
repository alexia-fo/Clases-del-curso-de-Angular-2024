export interface RespUsuarios {
  total: number;
  usuarios: Usuario[];
}

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  //FIXME: no vamos a listar la contraseña, falta quitar en el backend
  idrol:number;
  estado: boolean;
  createdAt:Date,
  updatedAt:Date
  //FIXME: falta en el backend retornar el rol
  Rol:{
    rol:string
  }
}

export interface CreateUsuario extends Omit<Usuario, 'id' | 'createdAt' | 'updatedAt' | 'estado'>{
  contra:string
}

export interface UpdateUsuario extends Omit<Usuario, 'id' | 'createdAt' | 'updatedAt' | 'estado'>{
}

export interface ResUsuarioDelete{
  mensaje:string
}



