export interface RespUsuarios{
  total:number;
  usuarios:Usuario[];
}

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  idrol:number;
  estado: boolean;
  createdAt:Date;
  updatedAt:Date;
  Rol:{
    rol:string;
  }
}

export interface CreateUsuario extends Omit<Usuario, 'id' | 'createdAt' | 'updatedAt' | 'estado'>{
  contra: string;
}

export interface UpdateUsuario extends Omit<Usuario, 'id' | 'createdAt' | 'updatedAt' | 'estado'>{
}

export interface UpdateUsuario extends Omit<Usuario, 'id' | 'createdAt' | 'updatedAt' | 'estado'>{
}

export interface ResUsuarioDelete{
  mensaje:string;
}

