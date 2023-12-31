export interface SignUp{
  name: string,
  surname: string,
  email: string,
  password: string,
  numberCellphone: string,
  payment: string,
  id: number
}

export interface login{
  email: string,
  password: string,
}

export interface product{
  nameCategory: string,
  name: string,
  price: string,
  category: string,
  color: string,
  description: string,
  image: string,
  id: number,
  quantity: undefined | number,
  productId: undefined | number
}


export interface cart{
  name: string,
  price: string,
  category: string,
  color: string,
  description: string,
  image: string,
  id: number | undefined,
  quantity: undefined | number,
  userId: number,
  productId: number
}

export interface priceSummary{
  price: number,
  discount: number,
  tax: number,
  delivery: number,
  total: number
}

export interface order{
  email: string,
  address: string,
  contact: string,
  totalPrice: number,
  userId: string,
  id: number | undefined;
}


//Shipping
export interface shippingAddress {
  address: string;
  district: string;
  province: string;
  paymentMethod: string;
  linkedCard: string;
  id: string;
}
