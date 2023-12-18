export interface ProductResponse {
  _id: string;
  title: string;
  desc: string;
  image: string;
  price: number;
  quantity: number;
  oldPrice: string;
  saveUp: string;
  intelCorei: string;
  ram: string;
  hard: string;
  graphic: string;
  screen: string;
  suggestion: string;
  new: string;
  images: ImagesTypeResponse[];
  otherModels: OtherModelsTypeResponse[];
}
export interface AccessoriesResponse {
  _id: string;
  title: string;
  desc: string;
  image: string;
  price: number;
  quantity: number;
  oldPrice: string;
  saveUp: string;
  images: ImagesTypeResponse[];
}
export interface OtherModelsTypeResponse {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  oldPrice: string;
  saveUp: string;
  intelCorei: string;
  ram: string;
  hard: string;
  graphic: string;
  screen: string;
}
export interface ImagesTypeResponse {
  _id: string;
  image: string;
}
export interface SelectedHeadphone {
  id: number;
  title: string;
  image: string;
  color: string;
  quantity: number;
  price: number;
}
export interface TypeColorImages {
  color: string;
  image: string;
}
export interface TypeInitialState {
  headphones: undefined | SelectedHeadphone[];
  quantity: number;
  price: number;
  checkOut: boolean;
  quantityCart: number;
}

export interface UserType {
  firstName?: string;
  lastName?: string;
  email?: string;
  birthDay?: string;
  phoneNumber?: number | string;
  address?: string;
  password?: string;
  confirmPassword?: string;
}
export interface ValidateErrorType {
  firstName?: string;
  lastName?: string;
  email?: string;
  birthDay?: string;
  phoneNumber?: string;
  address?: string;
  password?: string;
  confirmPassword?: string;
}
export interface TouchType {
  firstName?: boolean;
  lastName?: boolean;
  email?: boolean;
  birthDay?: boolean;
  phoneNumber?: boolean;
  address?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
}
export interface userDb {
  name: string;
  email: string;
  address: string;
  phoneNumber: number;
  birthDay: string;
  password: string;
}
